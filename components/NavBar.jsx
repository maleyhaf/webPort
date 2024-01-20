"use client";
import '@styles/navstyles.css';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    return (    
            <nav className='bar_style'>

                <Link href="/">
                    <Image className='bar_logo' src="/assets/icon.jpg" alt='Maleyha Icon'
                        width="67" height="67"></Image>
                </Link>

                <div className='sm:flex hidden gap-3 md:gap-5'>
                    <Link href="/aboutme">
                        <p className='bar_text'>About Me</p>
                    </Link>
                    <Link href="/projects">
                        <p className='bar_text'>Projects</p>
                    </Link>
                    <Link href="/education">
                        <p className='bar_text'>Education</p>
                    </Link>
                    <Link href="/contact" className='bar_btn'>
                        <p>CONTACT ME</p>
                    </Link>
                </div>

            </nav>
    )
}

export default NavBar