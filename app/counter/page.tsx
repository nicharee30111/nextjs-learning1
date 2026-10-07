import React from 'react'
import Counter from '../components/Counter'

function CounterPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold mb-4">Counter Simple</h1>
      <div className="mt-6">
        <Counter />
      </div>
    </main>
  )
}

export default CounterPage