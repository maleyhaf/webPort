export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 py-12 md:px-20 lg:px-40">
      <section className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-10">
          About Me
        </h1>

        {/* Personal Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">A Little About Me</h2>
          <p className="mb-4">
            Outside of tech, I find joy in creative hobbies like crocheting, arts and crafts, journaling, 
            and exploring new recipes in the kitchen. I especially love crocheting plushies in my free time, 
            which usually end up as gifts for my loved ones. Cooking has recently become a passion, 
            particularly trying traditional recipes from my home country, Pakistan. I’ve come to see cooking 
            and sharing meals with friends and family as a new love language of mine. 
          </p>
          <p className="mb-4">
            I also enjoy unwinding with TV shows and movies, especially those related to Greek mythology, 
            though I’m always open to almost any genre. Plants and animals hold a special place in my heart 
            (I have a cat who keeps me company), and I love learning more about myself through journaling 
            and new experiences. Psychology is another big interest of mine, as I enjoy understanding 
            how the human brain works in different situations.
          </p>
        </div>

        {/* Professional / Tech Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Journey in Tech</h2>
          <p className="mb-4">
            As a third-year Software Engineering student, I am especially passionate about backend development 
            and working with complex code systems. I love the challenge of breaking down complicated problems 
            and building efficient solutions. I’m always open to learning new programming languages and 
            expanding my technical expertise, knowing that the tech world evolves quickly and there’s always 
            something new to discover. Rather than seeing this as overwhelming, I find it exciting — each 
            new skill is another step toward becoming a stronger and more versatile developer. 
          </p>
          <p>
            My experiences so far have strengthened my adaptability, curiosity, and determination to keep 
            building myself up in this fast-paced field. For me, technology is not just about code, 
            but also about growth, creativity, and collaboration. 
          </p>
        </div>
      </section>
    </main>
  );
}
