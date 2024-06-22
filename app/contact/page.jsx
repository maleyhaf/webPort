import Link from 'next/link';
import Image from 'next/image';

const Contact = () => (
    <section>
        <div className='home_page'>
            <h1 className='head_text'>
                Contact Me:
                <br className='max-md:hidden' />
            </h1>
            <p className='description'>
                Email: maleyhafatima@gmail.com
            </p>
            <a href="https://www.linkedin.com/in/maleyha-fatima-4821bb279/" target="_blank" rel="noopener noreferrer" className='pt-2'>
                <Image src="/assets/linkedin_icon.png" alt='GitHub Icon'
                    width="85" height="85" />
            </a>
        </div>

    </section>
);

export default Contact;