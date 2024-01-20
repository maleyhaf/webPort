import Link from 'next/link';

const Contact = () => (
    <section>
        <h1 className='head_text'>
            Contact Me:
            <br className='max-md:hidden' />
        </h1>
        <p className='description'>
            Email: maleyhafatima@gmail.com
        </p>
        <p className='description'>
            GitHub: 
            <Link href="https://github.com/maleyhaf" className='bar_btn text-color: black;'>
                 https://github.com/maleyhaf
            </Link>
        </p>
    </section>
);

export default Contact;