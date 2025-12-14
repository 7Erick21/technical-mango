import { Range } from '@/src/components';

import { getRange } from '@/src/services/rangeServices';

export default async function Exercise1() {
  const { min, max } = await getRange();

  return (
    <div className='min-h-screen bg-background text-foreground px-6 py-12'>
      <header className='max-w-3xl mx-auto space-y-2'>
        <h2 className='text-3xl font-bold text-blue-400'>Exercise 1: Normal Range</h2>
        <p className='text-gray-300'>
          Edita los valores mínimo y máximo desde los inputs, o arrastra los manejadores. Los
          valores no pueden cruzarse.
        </p>
      </header>

      <section className='max-w-3xl mx-auto mt-8'>
        <Range min={min} max={max} />
      </section>

      <section className='max-w-3xl mx-auto mt-10 space-y-4'>
        <h3 className='text-xl font-semibold'>Caso real: Filtro de precios dinámico</h3>
        <p className='text-gray-300'>
          Imagina un catálogo donde el usuario ajusta el precio mínimo y máximo para ver productos
          disponibles.
        </p>
        <div className='grid md:grid-cols-3 gap-4'>
          <div className='rounded bg-gray-900 border border-gray-800 p-4'>
            <p className='font-semibold'>Sudadera</p>
            <p className='text-sm text-gray-400'>20 €</p>
          </div>
          <div className='rounded bg-gray-900 border border-gray-800 p-4'>
            <p className='font-semibold'>Vaqueros</p>
            <p className='text-sm text-gray-400'>45 €</p>
          </div>
          <div className='rounded bg-gray-900 border border-gray-800 p-4'>
            <p className='font-semibold'>Chaqueta</p>
            <p className='text-sm text-gray-400'>75 €</p>
          </div>
        </div>
      </section>
    </div>
  );
}
