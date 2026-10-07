"use client"

function errorPage({error, reset} : {error: Error, reset: () => void}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-lg font-medium text-red-500 text-bold">An error occurred.</p>
        {error.message}, Try Again
      <button 
        onClick={reset}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >ลองใหม่
      </button>
    </main>
  )
}

export default errorPage