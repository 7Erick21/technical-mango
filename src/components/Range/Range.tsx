'use client';

import { useMemo, useState } from 'react';

interface RangeProps {
  min?: number;
  max?: number;
  values?: number[];
  fixed?: boolean;
}

export function Range({ min, max, values, fixed = false }: RangeProps) {
  const [minValue, setMinValue] = useState<number>(min ?? values?.[0] ?? 0);
  const [maxValue, setMaxValue] = useState<number>(max ?? values?.[values!.length - 1] ?? 100);
  const [minInput, setMinInput] = useState<string>(String(minValue));
  const [maxInput, setMaxInput] = useState<string>(String(maxValue));

  const start = useMemo(() => (fixed && values ? values[0] : min ?? 0), [fixed, values, min]);
  const end = useMemo(
    () => (fixed && values ? values[values.length - 1] : max ?? 100),
    [fixed, values, max]
  );

  const clamp = (val: number, lo: number, hi: number) => Math.min(Math.max(val, lo), hi);

  const getPosition = (val: number) => {
    const range = end - start;
    if (range <= 0) return 0;
    const pct = ((val - start) / range) * 100;
    return clamp(pct, 0, 100);
  };

  const handleMouseDown = (type: 'min' | 'max') => (e: React.MouseEvent) => {
    const track = (e.target as HTMLElement).parentElement!;
    const rect = track.getBoundingClientRect();

    const onMove = (moveEvent: MouseEvent) => {
      const percent = (moveEvent.clientX - rect.left) / rect.width;
      let newValue = start + percent * (end - start);

      if (fixed && values) {
        newValue = values.reduce((prev, curr) =>
          Math.abs(curr - newValue) < Math.abs(prev - newValue) ? curr : prev
        );
      } else {
        newValue = Math.round(newValue);
      }

      if (type === 'min') {
        const nextMin = clamp(newValue, start, maxValue - (fixed ? 0.0001 : 1));
        setMinValue(nextMin);
        setMinInput(String(nextMin));
      } else {
        const nextMax = clamp(newValue, minValue + (fixed ? 0.0001 : 1), end);
        setMaxValue(nextMax);
        setMaxInput(String(nextMax));
      }
    };

    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  const onMinInputChange = (v: string) => {
    setMinInput(v);
  };

  const onMaxInputChange = (v: string) => {
    setMaxInput(v);
  };

  const onMinInputBlur = () => {
    if (minInput.trim() === '') {
      const fallback = Math.floor(start);
      const next = clamp(fallback, start, maxValue - 1);
      setMinValue(next);
      setMinInput(String(next));
      return;
    }
    let num = Number(minInput);
    if (Number.isNaN(num)) num = Math.floor(start);
    num = Math.round(num);
    const next = clamp(num, Math.floor(start), Math.floor(maxValue) - 1);
    setMinValue(next);
    setMinInput(String(next));
  };

  const onMaxInputBlur = () => {
    if (maxInput.trim() === '') {
      const fallback = Math.ceil(end);
      const next = clamp(fallback, minValue + 1, end);
      setMaxValue(next);
      setMaxInput(String(next));
      return;
    }
    let num = Number(maxInput);
    if (Number.isNaN(num)) num = Math.ceil(end);
    num = Math.round(num);
    const next = clamp(num, Math.ceil(minValue) + 1, Math.ceil(end));
    setMaxValue(next);
    setMaxInput(String(next));
  };

  return (
    <div className='w-full max-w-2xl mx-auto space-y-6'>
      <div className='relative h-2 rounded bg-gray-700'>
        <div
          className='absolute h-2 rounded bg-blue-600'
          style={{
            left: `${getPosition(minValue)}%`,
            right: `${100 - getPosition(maxValue)}%`
          }}
        />
        <button
          aria-label='handle-min'
          onMouseDown={handleMouseDown('min')}
          className='absolute -top-2 h-5 w-5 rounded-full bg-blue-400 ring-2 ring-white hover:scale-110 cursor-grab active:cursor-grabbing transition'
          style={{ left: `${getPosition(minValue)}%`, transform: 'translateX(-50%)' }}
        />
        <button
          aria-label='handle-max'
          onMouseDown={handleMouseDown('max')}
          className='absolute -top-2 h-5 w-5 rounded-full bg-emerald-400 ring-2 ring-white hover:scale-110 cursor-grab active:cursor-grabbing transition'
          style={{ left: `${getPosition(maxValue)}%`, transform: 'translateX(-50%)' }}
        />
      </div>

      {!fixed ? (
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label htmlFor='min-input' className='block text-sm text-gray-400 mb-1'>
              Mínimo
            </label>
            <input
              id='min-input'
              type='text'
              inputMode='numeric'
              value={minInput}
              onChange={e => onMinInputChange(e.target.value)}
              onBlur={onMinInputBlur}
              className='w-full rounded bg-gray-900 border border-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Ej: 1'
            />
            <p className='mt-1 text-xs text-gray-500'>Debe ser menor que el máximo.</p>
          </div>
          <div>
            <label htmlFor='max-input' className='block text-sm text-gray-400 mb-1'>
              Máximo
            </label>
            <input
              id='max-input'
              type='text'
              inputMode='numeric'
              value={maxInput}
              onChange={e => onMaxInputChange(e.target.value)}
              onBlur={onMaxInputBlur}
              className='w-full rounded bg-gray-900 border border-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500'
              placeholder='Ej: 100'
            />
            <p className='mt-1 text-xs text-gray-500'>Debe ser mayor que el mínimo.</p>
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-between'>
          <div className='text-sm'>
            <span className='text-gray-400'>Mínimo</span>
            <div className='font-semibold'>{minValue} €</div>
          </div>
          <div className='text-sm text-right'>
            <span className='text-gray-400'>Máximo</span>
            <div className='font-semibold'>{maxValue} €</div>
          </div>
        </div>
      )}
    </div>
  );
}
