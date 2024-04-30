import Image from 'next/image';
import Link from 'next/link';

const Home = () => (
  <section>
    <div className='home_page'>
      <div>
        <h1 className='head_text'>
          Maleyha Speaking here!
        </h1>
        <p className='description'>
          A second year software engineering student
          at the University of Guelph!
        </p>
        <p className="description">
          Having just completed my fourth semester, I'm in the midst of my academic journey,
          eagerly absorbing knowledge and honing my skills.
        </p>
        <p className='description'>
          I'm attracted by the boundless possibilities that lay ahead,
          driven by a strong interest in the ever-changing world of technology.
          From coding challenges to new projects, I am keen to leave my imprint on tomorrow's digital world.
        </p>
        <p className='description'>
          Hopeful that my site here helps you learn more about me!
        </p>

        <div className='pl-5 flex'>
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