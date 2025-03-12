"use client";
import ProjectCard from "./projects-card";

export default function ProjectsPage() {
  const projects = [
    {
      title: "RocketFocus",
      image: "/projects/RocketFocus.jpg",
      description:
        "Chrome Extension that keeps you on-task by detecting distracting websites, blocking them and offering a Pomodoro timer",
      tags: ["Next.js", "React", "Productivity"],
      specialZoom: true, 
      href: "https://github.com/KrishnaM0310/mission-complete",
    },
    {
      title: "Research Paper - Methodology for Pollutant Prediction",
      image: "/projects/ResearchPaper.jpg",
      description:
        "Developed an ML model which is able to predict the long term concentrations of pollutants of states in the USA",
      tags: ["Keras", "TensorFlow", "Python", "LSTM", "Recurrent Neural Networks"],
      href: "https://www.linkedin.com/in/likhitha-koppula/overlay/1717205409441/single-media-viewer/?profileId=ACoAAEIwndwBSnjwFYDL6epo4JhnY25zvowaxf8",
    },
    
  ];

  return (
    <section className="experienceFont min-h-screen px-90 pt-24 pb-36 text-white">
      <h1 className="text-2xl italic font-bold mb-6">projects</h1>

      <div className="space-y-8">
        {projects.map((proj, i) => (
          <ProjectCard
            key={i}
            title={proj.title}
            image={proj.image}
            description={proj.description}
            tags={proj.tags}
            specialZoom={proj.specialZoom}
            href={proj.href} 
          />
        ))}
      </div>
    </section>
  );
}
