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
    <div className='flex items-center p-4'>
    <span className="h-10 w-40 text-black hover:text-orange-300">JOIN US</span>
    <span className="h-10 w-40 text-black hover:text-orange-300">ADD JOURNEY</span>
    </div>


    </div>
  )
}

export default Navbar

