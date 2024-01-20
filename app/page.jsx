import Image from 'next/image';
import Link from 'next/link';

const Home = () => (
  <section>
    <div className='home_page'>
      <div>
        <h1 className='head_text'>
          Hi!
          <br className='max-md:hidden' />
          <span>I'm Maleyha Fatima</span>
        </h1>
        <p className='description'>
          A second year software engineering student
          at the University of Guelph!
        </p>
        <p className="description">
          Currently in my fourth semester, a growing student with a drive to tackle complex challenges and
          add more to her portfolio.
        </p>
      </div>

      <div>
        
      </div>
    </div>

  </section>
);

export default Home;