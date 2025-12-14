'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-background text-foreground px-6 py-12'>
      <section className='max-w-3xl mx-auto text-center space-y-6'>
        <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight'>Prueba Técnica Mango</h1>
        <p className='text-lg text-gray-300'>
          Implementación de un componente <code className='text-blue-400'>&lt;Range /&gt;</code> en
          Next.js + TypeScript. Dos modos:{' '}
          <span className='font-semibold text-blue-400'>Normal Range</span> y
          <span className='font-semibold text-emerald-400'> Fixed Values Range</span>.
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
          <Link href='/exercise1'>
            <button className='px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition'>
              🚀 Exercise 1
            </button>
          </Link>
          <Link href='/exercise2'>
            <button className='px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow transition'>
              🎯 Exercise 2
            </button>
          </Link>
        </div>
        <div className='mt-8 grid md:grid-cols-2 gap-6 text-left'>
          <div className='p-4 rounded-lg bg-gray-900 border border-gray-800'>
            <h3 className='font-semibold mb-2 text-blue-300'>Normal Range</h3>
            <p className='text-sm text-gray-400'>
              Rango editable con inputs y arrastre. Ideal para filtros con límites dinámicos (ej.
              precios 1-100).
            </p>
          </div>
          <div className='p-4 rounded-lg bg-gray-900 border border-gray-800'>
            <h3 className='font-semibold mb-2 text-emerald-300'>Fixed Values Range</h3>
            <p className='text-sm text-gray-400'>
              Rango con valores fijos no editables, con selección por arrastre (ej. precios
              predefinidos).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
