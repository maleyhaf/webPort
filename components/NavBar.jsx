"use client";
import '@styles/navstyles.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NavBar = () => {
    // to handle the icon click
    const router = useRouter();
    const currPath = router.pathname;

    const iconClick = () => {

        if (currPath == "/") {
            console.log("entered")
            router.push('/#intro');
            console.log("pushed")
        } else {
            router.push('/')
        }
    }

    return (
        <>
            <header className="navbar">
                {/* Left: Website Icon */}
                <button onClick={() => iconClick()} className="bar_logo">
                    <Image src="/assets/website_icon.png" alt="Website Logo" width={50} height={50} style={{ objectFit: 'contain' }} />
                </button>

                {/* Right: Navigation Buttons */}
                <nav className="nav_links">
                    <Link href="/contact" className="bar_btn">CONTACT ME</Link>
                    
                </nav>
            </header>
        </>
    )
}

export default NavBar