import Link from 'next/link';
import Image from 'next/image';

const Contact = () => (
  <section>
    <div className="home_page">
      {/* Heading */}
      <h1 className="head_text text-4xl sm:text-5xl font-bold text-center mb-8">
        Contact Me:
        <br className="max-md:hidden" />
      </h1>

      {/* Contact Info Card */}
      <div className="rounded-lg p-8 mb-8">
        <p className="text-xl text-center mb-4">
          <strong>Email:</strong> maleyhafatima@gmail.com
        </p>

        {/* LinkedIn Icon with Hover Effect */}
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/maleyha-fatima-4821bb279/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <Image
              src="/assets/linkedin_icon.png"
              alt="LinkedIn Icon"
              width="85"
              height="85"
              className="transition-transform duration-300 ease-in-out"
            />
          </a>
        </div>
      </div>

      {/* Optional Section for Extra Info */}
      <div className="text-center">
        <p className="text-lg">
          Feel free to reach out to me anytime via email or through my LinkedIn.
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
