import Link from 'next/link'
import React from 'react'
import links from "@/data/data"

const Navbar = () => {

  return (
    <div className=' flex justify-between h-20 bg-white text text-black'>
     <Link href="/" className='flex items-center p-4 text-4xl font-bold font-[AutourOne] hover:text-[#AA825D]'>
     Groove
     </Link>
     <div className='flex items-center justify-end gap-10 ml-32 text-base font-medium'>
    {links.map(({id,url,title}) => 
    <Link key={id} className='hover:text-[#9B804E]' href={url}>{title}</Link>
    )}
     </div>
    <Link href='/booknow' className='flex items-center p-4'>
    <button className="h-10 w-40 text-black hover:text-red-500">JOIN US</button>
    <button className="h-10 w-40 text-black hover:text-orange">ADD JOURNEY</button>
    </Link>


    </div>
  )
}

export default Navbar

