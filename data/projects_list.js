// data/projects.js
const projects = [
  {
    title: "Cognitive Systems Work Term",
    date: {
      start: "2024-09",
      end: "2024-12",
    },
    shortDescription: "Embedded Systems Research Developer - AUTUMN Testing Tool",
    overview: "I began my co-op term at Cognitive Systems Corp. on September 9th, 2024. The company, based in Waterloo, Ontario, is a leader in Wi-Fi sensing technology. As an embedded systems research developer, my primary responsibility was developing AUTUMN, a testing tool designed to evaluate a key component of their Wi-Fi motion-sensing algorithm. I worked with large-scale systems and databases, analyzing proprietary algorithms and optimizing data pipelines. The balance between independent work and collaboration allowed me to strengthen communication skills, project ownership, and technical expertise in Python, software architecture, and system navigation.",
    details: [
      "Designed and developed AUTUMN testing framework in Python",
      "Analyzed and optimized large-scale data pipelines",
      "Evaluated proprietary Wi-Fi motion-sensing algorithms",
      "Produced clear, maintainable technical documentation",
      "Applied agile development practices and milestone tracking",
    ],
    skills: [
      { name: "Python", description: "Built AUTUMN testing framework" },
      { name: "Software Architecture", description: "Managed project lifecycle" },
      { name: "Data Pipelines", description: "Optimized large-scale dataset processing" },
      { name: "Algorithm Analysis", description: "Evaluated Wi-Fi sensing algorithms" },
      { name: "Technical Communication", description: "Collaborated with cross-functional teams" },
      { name: "Documentation", description: "Produced technical documentation" },
      { name: "Agile Development", description: "Iterative development and tracking" },
    ],
    image: "/assets/Cognitive_logo.jpg",
    linkTitle: "Visit Cognitive Systems",
    link: "https://www.cognitivesystems.com/",
  },

  {
    title: "MathAId Intelligent Tutoring System",
    date: {
      start: "2025-09",
      end: "2025-12",
    },
    shortDescription: "Adaptive algebra tutoring platform with ML-driven personalization",
    overview:
      "MathAId is an intelligent tutoring system designed to support Ontario high-school students in Grades 9–12 learning algebra. Built as a group project for CIS*3750, the platform delivers personalised practice through adaptive questioning, real-time feedback, instructional hints, and progress dashboards. The system uses a Python Flask backend with a REST API and a dynamic HTML/CSS/JavaScript frontend. Student performance is tracked at the skill level, enabling mastery-based recommendations and adaptive difficulty selection. A machine learning–enhanced adaptive engine combines rule-based logic with a logistic regression model to predict the probability of a student answering correctly.",
    details: [
      "Built a Flask-based REST API supporting authentication, quizzes, and analytics",
      "Implemented ML-enhanced adaptive difficulty using logistic regression",
      "Tracked per-skill mastery, response time, and learning streaks",
      "Designed dashboards, leaderboards, and discussion forums",
    ],
    skills: [
      { name: "Flask", description: "REST API backend" },
      { name: "Machine Learning", description: "Logistic regression for adaptation" },
      { name: "JavaScript", description: "Dynamic frontend logic" },
      { name: "Data Modelling", description: "Structured user and question data in JSON" },
      { name: "Authentication", description: "Implemented secure login and sessions" },
      { name: "Frontend Development", description: "Developed interactive UI components" },
      { name: "Learning Analytics", description: "Tracked student performance and mastery" },
    ],
    image: "/assets/mathaid_project.png",
    link: "https://github.com/maleyhaf/mathAId",
    linkTitle: "View on GitHub",
  },

  {
    title: "Billiards Game",
    date: {
      start: "2024-01",
      end: "2024-04",
    },
    shortDescription: "Physics-based full-stack billiards game",
    overview:
      "This project is a full-stack billiards game developed as part of my coursework. It features a physics-based simulation that models realistic billiards mechanics and player interactions. The backend is implemented in C for performance-critical simulation logic, while the frontend uses Python and JavaScript for interactivity and presentation. Game state and player data are stored in a SQLite database, allowing persistent sessions and statistics.",
    details: [
      "Implemented high-performance physics simulation in C",
      "Developed backend and game logic in Python",
      "Created interactive frontend controls with JavaScript",
      "Stored persistent game states and statistics in SQLite",
      "Modeled realistic collisions, momentum, and gameplay mechanics",
    ],
    skills: [
      { name: "C Programming", description: "Physics engine and simulation logic" },
      { name: "Python", description: "Game logic and server-side components" },
      { name: "JavaScript", description: "Interactive frontend gameplay" },
      { name: "SQLite", description: "Persistent storage for sessions and stats" },
      { name: "Physics Simulation", description: "Collision and momentum modeling" },
      { name: "Full-Stack Development", description: "Integrated backend and frontend" },
    ],
    image: "/assets/billiards_project.jpg",
  },

  {
    title: "Tic Tac Toe",
    date: {
      start: "",
      end: "2024-01",
    },
    shortDescription: "Classic Tic Tac Toe game in Java",
    overview:
      "A simple Tic Tac Toe game developed in Java featuring turn-based gameplay, win condition detection, and player feedback. This project demonstrates core programming fundamentals and object-oriented design.",
    details: [
      "Implemented game logic, turn management, and win detection",
      "Applied object-oriented design with classes and encapsulation",
      "Handled player input and game state updates via events",
    ],
    skills: [
      { name: "Java", description: "Core programming and control flow" },
      { name: "Object-Oriented Programming", description: "Class-based design and encapsulation" },
      { name: "Event Handling", description: "Managed input and state updates" },
    ],
    image: "/assets/tictactoe_project.jpg",
    link: "https://github.com/maleyhaf/tictactoe_mf",
    linkTitle: "View on GitHub",
  },

  {
    title: "xish — IPC Shell",
    date: {
      start: "",
      end: "2025-09",
    },
    shortDescription: "Unix-style shell in C focused on IPC, piping, and signal handling",
    overview:
      "xish is a Unix-style command-line shell implemented in C as part of CIS*3050 (Systems Programming). The project focuses on low-level operating system concepts such as process creation, interprocess communication, job control, and signal handling, while closely mirroring the behaviour of modern Unix shells. The shell supports foreground and background execution, robust signal management, variable substitution, globbing, and arbitrary-length pipelines, with strong emphasis on correctness, resource management, and defensive systems programming.",
    details: [
      "Implemented foreground and background command execution using fork, exec, and wait",
      "Built pipe-based command chaining supporting arbitrary-length pipelines with dup2",
      "Designed variable assignment and substitution system with dynamic token replacement",
      "Integrated POSIX globbing using glob(3) for filename expansion",
      "Implemented job tracking and clean termination with SIGINT handling",
      "Ensured memory safety and proper resource cleanup, validated with Valgrind",
      "Developed automated test scripts for piping, background execution, and substitution",
    ],
    skills: [
      { name: "C Programming", description: "Implemented shell core and system-level logic" },
      { name: "Unix System Calls", description: "Used fork, execvp, waitpid, dup2, and kill" },
      { name: "Interprocess Communication", description: "Built pipe-based process chaining" },
      { name: "Signal Handling", description: "Managed SIGINT and zombie process cleanup" },
      { name: "Shell Internals", description: "Implemented job control, variables, and built-ins" },
      { name: "POSIX APIs", description: "Used globbing and process management interfaces" },
      { name: "Memory Management", description: "Ensured robustness with careful allocation and cleanup" },
      { name: "Testing & Debugging", description: "Validated correctness using scripted tests and Valgrind" },
    ],
    image: "/assets/xish_project.png",
    linkTitle: "View on GitHub",
    link: "https://github.com/maleyhaf/xish_shell",
  },

  {
    title: "Record-Based Database Manager",
    date: {
      start: "",
      end: "2025-11",
    },
    shortDescription: "C-based record manager with dynamic locking strategies via shared libraries",
    overview:
      "This project implements a portable record-based database manager written in C for CIS*3050 (Systems Programming). It explores dynamic libraries, platform portability, and file locking strategies by supporting both whole-file locking and region-based record locking, selectable at runtime through dynamically loaded shared libraries. By isolating locking behavior into interchangeable modules, the system allows multiple processes to safely access the same database while directly comparing locking granularity and behaviour across Linux and macOS.",
    details: [
      "Designed a portable record manager supporting safe concurrent access across processes",
      "Implemented dynamic loading of locking strategies using dlopen and dlsym",
      "Developed interchangeable whole-file and region-based locking modules with a shared API",
      "Implemented POSIX record locking using fcntl for fine-grained region locks",
      "Implemented whole-file exclusive locking using flock for simpler synchronization",
      "Built an OS-aware module loader to resolve platform-specific shared library extensions",
      "Ensured robust error handling, resource cleanup, and graceful shutdown",
    ],
    skills: [
      { name: "C Programming", description: "Implemented portable system-level database manager" },
      { name: "Dynamic Libraries", description: "Runtime loading with dlopen and dlsym" },
      { name: "File Locking", description: "Implemented fcntl record locks and flock file locks" },
      { name: "POSIX APIs", description: "Used open, close, fcntl, flock, and errno handling" },
      { name: "Concurrency Control", description: "Ensured safe multi-process database access" },
      { name: "Cross-Platform Development", description: "Designed for Linux and macOS portability" },
      { name: "Systems Design", description: "Clean modular API with interchangeable implementations" },
      { name: "Error Handling", description: "Defensive programming with descriptive diagnostics" },
    ],
    image: "/assets/record_manager_project.jpg",
    linkTitle: "View on GitHub",
    link: "https://github.com/maleyhaf/record_management_modules",
  },

  {
    title: "Multi-Way Chat System",
    date: {
      start: "",
      end: "2025-11",
    },
    shortDescription: "Asynchronous multi-client chat system using Bash and UNIX IPC",
    overview:
      "A multi-way chat system built using Bash shell scripting and UNIX inter-process communication primitives. The system allows multiple clients running in separate terminal windows on the same machine to communicate asynchronously through a centralized server using named pipes (FIFOs). A dedicated server manages client registration, message routing, broadcasting, and coordinated shutdown, demonstrating practical systems-level scripting and IPC design.",
    details: [
      "Implemented centralized server-client architecture using named pipes (FIFOs)",
      "Supported direct messaging, broadcast messaging, and asynchronous communication",
      "Designed per-client FIFOs to ensure reliable message delivery without race conditions",
      "Integrated signal handling for name collisions, shutdown, and interrupt events",
      "Implemented graceful system-wide shutdown with full resource cleanup",
      "Handled invalid input, unexpected disconnects, and background process termination",
    ],
    skills: [
      { name: "Bash Scripting", description: "Built server and client logic using shell scripts" },
      { name: "UNIX IPC", description: "Implemented communication using named pipes (FIFOs)" },
      { name: "Process Management", description: "Managed background processes and client lifecycles" },
      { name: "Signal Handling", description: "Used signals for shutdown coordination and error handling" },
      { name: "Asynchronous I/O", description: "Enabled concurrent send/receive behavior for clients" },
      { name: "Systems Programming", description: "Designed robust cleanup and resource management" },
    ],

    image: "/assets/multi_chat_system_project.jpg",
    linkTitle: "View on GitHub",
    link: "https://github.com/maleyhaf/multi_way_chat",
  },

  {
  title: "Interactive Terminal Portfolio",
  date: {
    start: "",
    end: "2026-01",
  },
  shortDescription: "(In progress) Command-line–style portfolio built with Next.js and React",
  overview:
    "I designed and developed an interactive terminal-style portfolio to present my skills and projects in a memorable, developer-centric way. Inspired by Windows command-line interfaces, the project simulates real terminal behavior, including typed commands, animated cursors, command history, and structured outputs. The application is built as a client-side Next.js component using React hooks, with a strong focus on UI polish, accessibility, and smooth user experience. This project allowed me to combine frontend engineering with thoughtful interaction design, emphasizing state management, animation timing, and component reusability.",
  details: [
    "Implemented a terminal-style UI with command history and live input handling",
    "Built a reusable typing animation component with cursor control and callbacks",
    "Designed structured command outputs, including text responses and skill icon displays",
    "Managed terminal state using React hooks and controlled rendering flows",
    "Integrated Devicon icons for visual skill representation",
    "Ensured smooth auto-scrolling and responsive layout behavior",
  ],
  skills: [
    {
      name: "Next.js",
      description: "Client-side rendering and component-based architecture",
    },
    {
      name: "React",
      description: "State management with hooks and reusable UI components",
    },
    {
      name: "TypeScript",
      description: "Strong typing for component props, state, and command data",
    },
    {
      name: "UI/UX Design",
      description: "Terminal-inspired interaction design and animation timing",
    },
    {
      name: "Frontend Animation",
      description: "Typing effects, cursor control, and staged rendering",
    },
    {
      name: "Accessibility",
      description: "Keyboard-driven interaction and semantic HTML usage",
    },
    {
      name: "CSS & Styling",
      description: "Custom terminal styling with responsive layout considerations",
    },
  ],
  image: "/assets/terminal_portfolio_preview.png",
  linkTitle: "View Terminal Portfolio",
  link: "https://maleyhas-portfolio.vercel.app/",
},

];

export default projects;
