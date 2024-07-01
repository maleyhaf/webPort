import Image from 'next/image';
import Link from 'next/link';

const Home = () => (
  <section>
    <div className='home_page'>
      <div id='intro'>
        <h1 className='head_text'>
          MALEYHA
        </h1>
        <h1 className='head_text'>
          FATIMA
        </h1>
        <p className='description pl-2 pt-7'>
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

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div id='aboutme' align='left' className='flex justify-center pl-4'>

        <div>
          <Image src="/assets/aboutme_pic.png" alt='About me Pic'
            width="3800" height="3800" />
        </div>

        <div className='ml-20 mt-10'>
          <p className='head_sec'>
            About
          </p>
          <p className='head_sec'>
            Me
          </p>

          <p className='pt-4'>
          As a growing student heading to my third year in Software Engineering at the University of Guelph, 
          I am excited to seek opportunities for individuals who share a drive to take on new challenges, 
          take initiative, and thrive wherever their curiosity peeks most. My skills and expertise have 
          developed and widened throughout my studies, and now I cannot wait to apply these to the real 
          world with roles that will help further sharpen them. I am striving to make an impact!
          </p>
        </div>

      </div>

      <br />
      <br />



    </div>

  </section>
);

export default Home;