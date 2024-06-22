import Image from 'next/image';
import Link from 'next/link';

const Home = () => (
  <section>
    <div className='home_page'>
      <div>
        <h1 className='head_text'>
          MALEYHA
        </h1>
        <h1 className='head_text'>
          FATIMA
        </h1>
        <p className='description'>
          University of Guelph
        </p>

        <div className='pl-4 flex'>
          <a href="https://www.linkedin.com/in/maleyha-fatima-4821bb279/" target="_blank" rel="noopener noreferrer" className='pt-2'>
            <Image src="/assets/linkedin_icon.png" alt='GitHub Icon'
              width="85" height="85" />
          </a>
          <a href="https://github.com/maleyhaf" target="_blank" rel="noopener noreferrer" className="pt-8 mr-4">
            <Image src="/assets/github_icon.png" alt='GitHub Icon'
              width="85" height="85" />
          </a>

        </div>
      </div>



    </div>

  </section>
);

export default Home;