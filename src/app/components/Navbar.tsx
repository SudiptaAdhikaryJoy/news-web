import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className=' w-full relative flex items-center justify-center max-w-2xl mx-auto px-5 py-4  '>
            <Link href={'/'} className=' font-bold text-4xl text-black '>
Sudipta<span className=' text-blue-400 '>Blog</span>
            </Link>
        </div>
    );
};

export default Navbar;