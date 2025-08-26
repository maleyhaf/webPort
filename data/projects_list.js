// data/projects.js
const projects = [
  {
    title: "Cognitive Systems Work Term",
    shortDescription: "Embedded Systems Research Developer - AUTUMN Testing Tool",
    longDescription: `I began my co-op term at Cognitive Systems Corp. on September 9th, 2024. The company, based in Waterloo, Ontario, is a leader in Wi-Fi sensing technology. As an embedded systems research developer, my primary responsibility was developing AUTUMN, a testing tool designed to evaluate a key component of their Wi-Fi motion-sensing algorithm.

I worked with large-scale systems and databases, analyzing proprietary algorithms and optimizing data pipelines. The balance between independent work and collaboration allowed me to strengthen communication skills, project ownership, and technical expertise in Python, software architecture, and system navigation.`,
    image: "/assets/Cognitive_logo.jpg",
    linkTitle: "Visit Cognitive Systems",
    link: "https://www.cognitivesystems.com/",
    skills: [
      { name: "Python Development", description: "Designed and developed AUTUMN, a testing framework for Wi-Fi motion-sensing algorithms." },
      { name: "Software Architecture", description: "Managed the AUTUMN project lifecycle from design to deployment." },
      { name: "Data Manipulation", description: "Built and optimized data pipelines for large-scale company databases." },
      { name: "Algorithm Analysis", description: "Analyzed proprietary Wi-Fi motion-sensing algorithms for performance insights." },
      { name: "System Navigation", description: "Worked with complex, large-scale systems to enhance understanding and efficiency." },
      { name: "Effective Communication", description: "Strengthened collaboration through clear and concise communication." },
      { name: "Code Documentation", description: "Developed thorough and maintainable code documentation." },
      { name: "Agile Development", description: "Applied agile methodologies for efficient project management and delivery." },
      { name: "Project Ownership", description: "Independently led the AUTUMN project, managing timelines and deliverables." },
    ],
  },
  {
    title: "Billiards Game",
    shortDescription: "A fullstack billiards game built with C, Python, and JavaScript",
    longDescription: `This project is a fullstack billiards game that I developed as part of my coursework. It features a physics-based simulation of billiards, allowing players to interact with the game using realistic controls. The backend is built in C for performance, while the frontend uses Python and JavaScript for a smooth user experience.

The game data is stored in a SQLite database, allowing for persistent game states and player statistics. The project showcases my skills in game development, physics simulation, and fullstack programming.`,
    image: "/assets/billiards_project.jpg",
    skills: [
      { name: "C Programming", description: "Developed the backend game engine for performance and efficiency." },
      { name: "Python Development", description: "Implemented game logic and user interface components." },
      { name: "JavaScript", description: "Created interactive frontend elements for a smooth user experience." },
      { name: "SQLite Database", description: "Managed game data storage and retrieval for persistent states." },
      { name: "HTML/CSS", description: "Designed the game interface for an engaging user experience." },
      { name: "Python & JS Web Server", description: "Built a web server to host the game and manage player interactions." },
      { name: "Physics Simulation", description: "Designed realistic billiards physics for accurate gameplay." },
      { name: "Game Development", description: "Applied principles of game design and development throughout the project." },
      { name: "Fullstack Development", description: "Integrated frontend and backend components seamlessly." },
    ],
  },
  {
    title: "Tic Tac Toe",
    shortDescription: "A simple Tic Tac Toe game built with Java",
    longDescription: `This project is a simple Tic Tac Toe game developed in Java. It features a console-based interface where players can take turns placing their marks on a 3x3 grid. The game checks for win conditions and provides feedback to the players.
The project demonstrates my understanding of basic game logic, user input handling, and Java programming concepts.`,
    image: "/assets/tictactoe_project.jpg",
    link: "https://github.com/maleyhaf/tictactoe_mf",
    linkTitle: "View on GitHub",
    skills: [
      { name: "Java Programming", description: "Implemented game logic and user interface in Java." },
      { name: "Java Swing", description: "Utilized Java Swing for a graphical user interface (optional, if applicable)." },
      { name: "Console Interface", description: "Created a simple text-based interface for player interaction." },
      { name: "Event Driven Programming", description: "Handled user input and game state updates." },
      { name: "Object-Oriented Programming", description: "Applied OOP principles to structure the game code." },
    ],
  }
  // Add more projects here
];

export default projects;
