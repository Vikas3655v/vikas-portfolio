const projects = [
  {
    title: "AI-Powered Smart Surveillance & Personalized Store Recommendations",
    type: "AI / Computer Vision",
    description: "A modular AI project combining surveillance-event analysis with personalized store recommendation logic.",
    stack: "Python • Computer Vision • AI/ML",
    href: "https://github.com/Vikas3655v/Vikas/tree/main/projects/smart-retail-surveillance",
  },
  {
    title: "Library Management System",
    type: "Java Application",
    description: "A Java application demonstrating object-oriented design, book management, validation, collections and testing.",
    stack: "Java • Maven • JUnit 5 • OOP",
    href: "https://github.com/Vikas3655v/Vikas/tree/main/projects/library-management-system",
  },
  {
    title: "Advance Counter Drone System for Localized Networks",
    type: "Defensive Monitoring",
    description: "A defensive telemetry-analysis prototype focused on identifying suspicious patterns in localized network activity.",
    stack: "Python • Telemetry • Networking",
    href: "https://github.com/Vikas3655v/Vikas/tree/main/projects/counter-drone-local-network",
  },
  {
    title: "Plant Disease Recognition using Deep Learning",
    type: "Deep Learning",
    description: "An image-classification workflow designed for reproducible training, evaluation and inference.",
    stack: "Python • TensorFlow • Deep Learning",
    href: "https://github.com/Vikas3655v/Vikas/tree/main/projects/plant-disease-recognition",
  },
  {
    title: "Real-Time Object Detection & Activity Recognition",
    type: "Computer Vision",
    description: "A real-time video inference workflow using object detection and computer-vision processing.",
    stack: "Python • YOLO • OpenCV",
    href: "https://github.com/Vikas3655v/Vikas/tree/main/projects/object-detection-activity-recognition",
  },
];

const skills = [
  ["C++", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"],
  ["Java", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"],
  ["Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"],
  ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
  ["SQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"],
  ["React", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"],
  ["Node.js", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"],
  ["HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"],
  ["CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"],
  ["Flutter", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"],
  ["TensorFlow", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"],
  ["PyTorch", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"],
  ["OpenCV", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"],
  ["Pandas", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"],
  ["NumPy", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"],
  ["MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"],
  ["AWS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"],
  ["Azure", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"],
  ["Git", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"],
  ["GitHub", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"],
];

const heroSkills = skills.slice(0, 6);

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#home"><span>V</span> Vikas Handage</a>
        <div className="navlinks">
          <a href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s Connect ↗</a>
      </nav>

      <section id="home" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Hi, I&apos;m <span>👋</span></p>
          <h1>Vikas <span>Handage</span></h1>
          <h2>Software Developer <b>•</b> AI/ML Enthusiast</h2>
          <p className="lead">I build practical software solutions that combine clean engineering, data, and intelligent systems with a focus on learning by doing.</p>
          <div className="hero-actions"><a className="primary" href="#projects">View Projects ↗</a><a className="secondary" href="https://github.com/Vikas3655v">GitHub ↗</a></div>
          <div className="hero-tech">
            {heroSkills.map(([name, icon]) => <div className="tech" key={name}><div className="tech-icon"><img src={icon} alt={name} /></div><span>{name}</span></div>)}
          </div>
          <div className="stats"><div><strong>5+</strong><span>Projects</span></div><div><strong>2026</strong><span>Graduate</span></div><div><strong>20+</strong><span>Technologies</span></div><div><strong>100%</strong><span>Learning</span></div></div>
        </div>
        <div className="hero-visual">
          <div className="portrait-wrap">
            <div className="portrait-glow" />
            <img className="portrait" src="https://avatars.githubusercontent.com/u/182326026?v=4" alt="Vikas Handage" />
            <div className="portrait-caption">Software • AI/ML • Data</div>
          </div>
          <div className="floating-card card-one">&lt;/&gt; Building solutions<br/><b>that solve real problems.</b></div>
          <div className="floating-card card-two">✦ Focused on<br/><b>continuous improvement</b></div>
        </div>
      </section>

      <section id="about" className="section shell">
        <p className="section-label">ABOUT ME</p><h2>Building with purpose, <span>learning by doing.</span></h2>
        <p className="section-text">I&apos;m an Information Technology graduate from Alliance University, Bengaluru. I enjoy taking ideas from requirements to implementation through programming, testing, documentation and iterative improvement.</p>
        <div className="about-grid"><div><h3>What I work with</h3><p>Python, Java, JavaScript, SQL, React, Node.js, TensorFlow, OpenCV, Pandas, NumPy, MongoDB and cloud technologies.</p></div><div><h3>What I&apos;m looking for</h3><p>Entry-level Software Development, AI/ML and Data Analytics opportunities where I can contribute to real products and grow as an engineer.</p></div></div>
      </section>

      <section id="skills" className="section dark-section"><div className="shell"><p className="section-label">TECH STACK</p><h2>Tools I use to <span>build.</span></h2><div className="skill-grid">{skills.map(([name, icon]) => <div className="skill-card" key={name}><img src={icon} alt={name} /><strong>{name}</strong></div>)}</div></div></section>

      <section id="projects" className="section shell"><p className="section-label">SELECTED WORK</p><h2>Projects that <span>show the work.</span></h2><div className="project-grid">{projects.map((project, i) => <article className="project-card" key={project.title}><div className="project-number">0{i + 1}</div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="stack">{project.stack}</div><a href={project.href}>View on GitHub ↗</a></article>)}</div></section>

      <section id="experience" className="section dark-section"><div className="shell"><p className="section-label">EXPERIENCE & EDUCATION</p><h2>My <span>foundation.</span></h2><div className="timeline"><div><span>2024</span><h3>AI & ML Development Intern</h3><p>Developed and tested AI/ML models for data-analysis and prediction tasks using Python and relevant AI frameworks.</p></div><div><span>2026</span><h3>Information Technology Graduate</h3><p>Alliance University, Bengaluru • CGPA 8.4</p></div></div></div></section>

      <section id="contact" className="contact shell"><p className="section-label">CONTACT</p><h2>Let&apos;s build something <span>useful.</span></h2><p>Open to entry-level opportunities in software development, AI/ML and data analytics.</p><div className="contact-links"><a href="mailto:vikashandage06@gmail.com">vikashandage06@gmail.com</a><a href="https://www.linkedin.com/in/vikas-handage">LinkedIn ↗</a><a href="https://github.com/Vikas3655v">GitHub ↗</a></div></section>

      <footer className="footer shell"><span>© {new Date().getFullYear()} Vikas Handage</span><span>Built with Next.js • Ready for Vercel</span></footer>
    </main>
  );
}
