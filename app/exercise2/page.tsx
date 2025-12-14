import { Range } from '@/src/components';

import { getFixedRange } from '@/src/services/fixedRangeServices';

export default async function Exercise2() {
  const { rangeValues } = await getFixedRange();

  return (
    <div className='min-h-screen bg-background text-foreground px-6 py-12'>
      <header className='max-w-3xl mx-auto space-y-2'>
        <h2 className='text-3xl font-bold text-emerald-400'>Exercise 2: Fixed Values Range</h2>
        <p className='text-gray-300'>
          Selecciona únicamente valores dentro de la lista fija. Las etiquetas no son editables. Los
          manejadores no pueden cruzarse.
        </p>
      </header>

      <section className='max-w-3xl mx-auto mt-8 space-y-6'>
        <Range values={rangeValues} fixed />

        <div>
          <h3 className='text-lg font-semibold mb-2'>Valores permitidos</h3>
          <div className='flex flex-wrap gap-2'>
            {rangeValues.map(v => (
              <span
                key={v}
                className='px-3 py-1 rounded bg-gray-900 border border-gray-800 text-gray-200'
              >
                {v} €
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className='max-w-3xl mx-auto mt-10 space-y-4'>
        <h3 className='text-xl font-semibold'>Caso real: Tramos de precio predefinidos</h3>
        <p className='text-gray-300'>
          En muchos e-commerce los rangos son cerrados (p.ej. envío, descuentos o precios
          agrupados). El usuario elige un tramo y se filtran resultados.
        </p>
        <div className='grid md:grid-cols-3 gap-4'>
          <div className='rounded bg-gray-900 border border-gray-800 p-4'>
            <p className='font-semibold'>Camiseta</p>
            <p className='text-sm text-gray-400'>5.99 €</p>
          </div>
          <div className='rounded bg-gray-900 border border-gray-800 p-4'>
            <p className='font-semibold'>Bolso</p>
            <p className='text-sm text-gray-400'>30.99 €</p>
          </div>
          <div className='rounded bg-gray-900 border border-gray-800 p-4'>
            <p className='font-semibold'>Abrigo</p>
            <p className='text-sm text-gray-400'>70.99 €</p>
          </div>
        </div>
      </section>
    </div>
  );
}
