import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "Python", level: 95, category: "Programming" },
  { name: "R", level: 95, category: "Programming" },
  { name: "SQL", level: 80, category: "Programming" },
  { name: "Tableau", level: 75, category: "tools" },
  { name: "Stata", level: 70, category: "tools" },
  { name: "Eviews", level: 65, category: "tools" },
  { name: "MS Office", level: 90, category: "tools" },
  { name: "Adobe Creative Cloud", level: 90, category: "tools" },
  { name: "HTML/CSS", level: 95, category: "Programming" },
  { name: "JavaScript", level: 90, category: "Programming" },
  { name: "React", level: 90, category: "Programming" },
  { name: "Java", level: 95, category: "Programming" },


  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "tools", "Programming"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Compact Skill Pills */}
        <div className="flex flex-wrap gap-3 justify-center">
          {filteredSkills.map((skill, key) => (
            <span
              key={key}
              className="bg-secondary text-foreground px-3 py-1 text-sm rounded-full border border-border shadow-sm"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
