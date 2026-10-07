import React from 'react'

type ProdDetialPageProps = {
    params: {
        id: string    
    }
}

async function ProdDetialPage({ params }: ProdDetialPageProps) {
    const { id } = await params;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-3xl font-bold mb-4">Product Detail Page</h1>
        <p className="text-2xl font-semibold">Product ID: {id}</p>
        </main>
    )
}

export default ProdDetialPage