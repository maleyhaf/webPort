"use client";

import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className='bar_style container mx-auto px-4 h-full'>

            <Link href="/">
                <Image src="/assets/icon.jpg" alt='Maleyha Icon' width="53" height="53"></Image>
            </Link>

            <div className='sm:flex hidden gap-3 md:gap-5'>
                <p className='bar_text'>About Me</p>
                <p className='bar_text'>Projects</p>
                <p className='bar_text'>Education</p>
                <Link href="/" className='bar_btn'>
                    <p>CONTACT ME</p>
                </Link>
            </div>

        </nav>
    )
}

export default NavBar