import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <Link href="/" className="text-xl font-bold">
          Home
        </Link>
        <div className="ml-auto">
          <Link href="/about" className="mx-2 hover:underline">
            About
          </Link>
          <Link href="/contact" className="mx-2 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar