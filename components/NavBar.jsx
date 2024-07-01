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
            <div>
                <button onClick={() => iconClick()} className='bar_logo'>
                    <Image src="/assets/website_icon.png" alt='Website Logo' width="97" height="97" />
                </button>
            </div>
            <nav>

                <div>
                    <Link href="/contact" className='bar_text'>
                        CONTACT ME
                    </Link>
                </div>

            </nav>
        </>
    )
}

export default NavBar