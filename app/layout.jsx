import '@styles/globals.css';
import NavBar from '@app/components/NavBar';

export const metadata = {
    title: "Maleyha's Portfolio",
    description: 'Learn more about Maleyha and her projects.'
}

const Layout = ( {children} ) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='black' />
            </div>

            

            <main className='app'>
                <NavBar className='drop-shadow-xl' />
                { children }
            </main>
        </body>
    </html>
  )
}

export default Layout