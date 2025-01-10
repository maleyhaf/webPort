import Image from 'next/image';
import Link from 'next/link';

const Home = () => (
  <section className="py-16 px-6 sm:px-12">
    <div className="home_page max-w-7xl mx-auto">
      {/* Intro Section */}
      <div id="intro" >
        <h1 className="head_text">MALEYHA</h1>
        <h1 className="head_text">FATIMA</h1>
        <p className="description text-xl sm:text-2xl">University of Guelph</p>

        {/* Social Links */}
        <div className="flex gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/maleyha-fatima-4821bb279/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:scale-110 transition-all"
          >
            <Image
              src="/assets/linkedin_icon.png"
              alt="LinkedIn Icon"
              width="85"
              height="85"
              className="transform transition duration-300 ease-in-out hover:rotate-12"
            />
          </a>
          <a
            href="https://github.com/maleyhaf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 pt-8 hover:scale-110 transition-all"
          >
            <Image
              src="/assets/github_icon.png"
              alt="GitHub Icon"
              width="85"
              height="85"
              className="transform transition duration-300 ease-in-out hover:rotate-12"
            />
          </a>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* About Me Section */}
      <div id="aboutme" className="flex flex-col sm:flex-row items-center justify-between mb-16">
        {/* About Me Image */}
        <div className="sm:w-1/2 mb-8 sm:mb-0">
          <div className="relative w-full h-96 sm:h-[500px]">
            <Image
              src="/assets/aboutme_pic.png"
              alt="About Me Picture"
              layout="fill"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* About Me Text */}
        <div className="sm:w-1/2 pl-8 sm:mt-10">
          <h2 className="head_sec text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg">
            As a growing student heading to my third year in Software Engineering at the University of Guelph, I am
            excited to seek opportunities for individuals who share a drive to take on new challenges, take initiative,
            and thrive wherever their curiosity peaks most.
          </p>
          <p className="mt-4 text-lg">
            My skills and expertise have developed and widened throughout my studies, and now I cannot wait to apply
            these to the real world with roles that will help further sharpen them. I am striving to make an impact!
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Work Experience Section */}
      <div id="workexperiences" className="text-center mb-16">
        <p className="head_sec text-3xl font-semibold mb-8">Work Experiences</p>

        <div className='card-container pt-6'>
          <div className="card">
            <Image src="/assets/Cognitive_logo.jpg" alt="Card 1" className="card-image" width={250} height={600} />
            <div className="card-body">
              <h3 className="card-title">Work Term 1</h3>
              <p className="card-description">With Cognitive Systems Corp., as an embedded systems research developer.</p>
              <a href="work_term_1" className="cta-button">View More</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default Home;
