import Link from 'next/link';
import React from 'react';
import { ModeToggle } from './ModeToggle';

const Navbar = () => {
    return (
        <nav className=' w-full relative flex items-center justify-between max-w-2xl mx-auto px-5 py-4  '>
            <Link href={'/'} className=' font-bold text-4xl text-black '>
Sudipta<span className=' text-blue-400 '>Blog</span>
            </Link>
            <ModeToggle/>
        </nav>
    );
};

export default Navbar;