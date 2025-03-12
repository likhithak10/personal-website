"use client";
import ExperienceCard from "./experience-card";

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Definity - Economical Insurance",
      role: "Data/Cloud Engineer",
      dateRange: "Jan 2025 - Apr 2025",
      points: [],
      skills: ["Apache Airflow", "Google Cloud Platform", "Python", "SQL", "Atlassian Technologies", "CI/CD", "Oracle"], // example
    },
    {
      company: "building-U",
      role: "Curriculum Developer",
      dateRange: "Dec 2022 - Jan 2024",
      points: [],
      skills: ["Python", "HTML/CSS", "Git", "Java", "Javascript"], 
    },
  ];

  return (
    <section className="experienceFont min-h-screen px-80 pt-24 text-white">
      <h1 className="text-2xl italic font-bold mb-2">experience</h1>
      <p className="mb-6 max-w-xl">
      </p>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <ExperienceCard
            key={i}
            company={exp.company}
            role={exp.role}
            dateRange={exp.dateRange}
            points={exp.points}
            skills={exp.skills}
          />
        ))}
      </div>
    </section>
  );
}
