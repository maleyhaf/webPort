import Image from 'next/image';
import Link from 'next/link';

const Work_Term_1 = () => (
    <section className="start_with_pic">
        <div className="container mx-auto max-w-4xl text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>

            <div className="mb-8">
                <Image
                    src="/assets/Cognitive_logo.jpg"
                    alt="Header Image"
                    width={1200}
                    height={400}
                    className="w-auto h-auto object-cover rounded-lg shadow-lg"
                />
            </div>

            <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-white">
                Learn more about my first work experience at Cognitive Systems...
            </h1>

            <div className="text-lg leading-relaxed mb-8">
                <p>
                    I began my co-op term at Cognitive Systems Corp. on September 9th, 2024. The company, based in Waterloo, Ontario, is a leader in Wi-Fi sensing technology. As an embedded systems research developer, my primary responsibility was developing AUTUMN, a testing tool designed to evaluate a key component of their Wi-Fi motion-sensing algorithm.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-8">
                <div className="sm:w-1/2">
                    <p className="mb-4">
                        Cognitive Systems Corp. is revolutionizing the use of Wi-Fi technology. Their flagship technology, Wi-Fi Motion, allows for dynamic motion sensing via Wi-Fi signals. This innovation has been integrated into products like Aura Home and Plume pods running Sense, bringing Wi-Fi-based motion detection to households across the globe.
                    </p>
                    <p className="mb-4">
                        During my first week, I began the onboarding process in person, allowing me to acclimate to the company culture and understand the scope of my role. I quickly set personal goals for my term while familiarizing myself with the work environment. My supervisor, Emilie Cloutier, was instrumental in this transition. Emilie guided my technical development and mentored me throughout my time at Cognitive Systems, helping me navigate the challenges and opportunities within my role.
                    </p>
                </div>
                <div className="sm:w-1/2">
                    <Image
                        src="/assets/company-building.png"
                        alt="Cognitive Systems Corp Building"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>

            <div className="text-lg leading-relaxed mb-8">
                <p>
                    My work primarily focused on a critical aspect of the Wifi Motion program: an algorithm to determine optimal device selection for motion sensing. The selection process involves multiple factors, such as connection strength, coverage area, and client preference. AUTUMN, my testing tool, was developed to test the effect of changing how these factors are evaluated. The balance between independent work and collaboration stood out in my role. I was given full ownership of the AUTUMN testing tool, yet I regularly collaborated with the team, which encouraged me to refine my communication skills. This independence fostered my growth in oral communication, problem-solving, and the depth and breadth of technical understanding. These skills became my primary learning goals, and I focused on enhancing them throughout the term. Strengthening my ability to articulate progress, overcome technical challenges, and write more efficient code will undoubtedly serve me well in future professional endeavors.
                </p>
                <p className="mb-4">
                    One of the most valuable aspects of this position was gaining experience with large, complex systems and databases. As this was my first co-op term, I had not previously interacted with a company-wide, pre-existing system. The intricacies of the codebase and data system were initially overwhelming, but Emilie provided me with tasks in the early weeks that guided me in understanding the overall system architecture. These tasks required me to analyze various components of the system, giving me insight into how different modules interacted. My role also involved working with extensive datasets—thousands of data sets that I had to process, manipulate, and generate outputs from. This experience significantly enhanced my technical abilities, especially in handling large datasets and understanding system interactions.
                </p>
                <p>
                    In conclusion, my co-op term at Cognitive Systems was a success. It provided me with hands-on experience in developing and testing complex algorithms, working with large-scale systems, and refining my communication skills in a professional environment. The technical and soft skills I developed during this term have greatly expanded my capabilities and will be invaluable as I continue to progress in my career.
                </p>
            </div>

            <div className="text-center mb-12">
                <Link
                    href="https://www.cognitivesystems.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-3 px-6 bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                >
                    Learn more about Cognitive Systems
                </Link>
            </div>
        </div>
    </section>
);

export default Work_Term_1;
