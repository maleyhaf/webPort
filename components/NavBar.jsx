"use client";
import '@styles/navstyles.css';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    return (    
            <nav>
        
                <div className='sm:flex hidden'>
                    <Link href="/contact" className='bar_text'>
                        <p>CONTACT ME</p>
                    </Link>
                </div>

            </nav>
    )
}

export default NavBar