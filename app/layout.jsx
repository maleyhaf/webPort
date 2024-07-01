import '@styles/globals.css';
import { Analytics } from "@vercel/analytics/react"
import NavBar from '@components/NavBar';
import Image from 'next/image';

export const metadata = {
    title: "Maleyha's Portfolio",
    description: 'Learn more about Maleyha and her projects.'
}

const Layout = ({ children }) => {


    return (
        <html lang='en'>
            <head>
                <link href='https://fonts.googleapis.com/css?family=Goldman' rel='stylesheet' />
            </head>
            <body>
                <div className='main'>
                    <div className='black' />
                </div>

                <main className='app'>

                    <div className='heading'>
                        <div className='main_navigation'>
                            
                            <NavBar />
                        </div>
                        {children}
                    </div>
                </main>
            </body>
        </html>
    )
}

export default Layout