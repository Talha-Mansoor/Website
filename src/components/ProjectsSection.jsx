import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: (
      <>
        Bank of Canada <br /> Governor's Challenge
      </>
    ),
    description: "Presentation analyzing population growth & interest rate, using forecasting models & macroeconomic data.",
    image: "/projects/BOC2.png",
    tags: ["Excel", "Eviews", "Data Analysis"],
    demoUrl: "https://rigorous-schooner-9cf.notion.site/Bank-of-Canada-Governor-s-Challenge-2024-267e78375a6a8033ba2cf845814dfb18?pvs=143",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Library Database Management WebApp",
    description:
      "Co-Developed Library Database Management Webapp using Python, React and SQL",
    image: "/projects/library.png",
    tags: ["SQL", "Python", "React"],
    demoUrl: "https://github.com/hibaDevelops/library-management/tree/UI",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Famous Algorithms",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["Research", "Data Analysis"],
    demoUrl: "#",
    githubUrl: "#",
  },

   {
    id: 4,
    title: "BRICS Presentation",
    description:
      "Group presentation on the how likely is a BRICS dominance in the global order.",
    image: "/projects/brics.png",
    tags: ["Research", "Data Analysis"],
    demoUrl: "https://docs.google.com/presentation/d/1B95MPz51IzLmfek_QeoGVUL8uaj1ckFyfCQDWPhclRs/edit?usp=sharing",
    githubUrl: "#",
  },
   {
    id: 4,
    title: "AI/ML Projects",
    description:
      "University Assignments and Hobby Projects using AI and ML techniques.",
    image: "/projects/brics.png",
    tags: ["Python", "Regression"],
    demoUrl: "https://docs.google.com/presentation/d/1B95MPz51IzLmfek_QeoGVUL8uaj1ckFyfCQDWPhclRs/edit?usp=sharing",
    githubUrl: "#",
  },
   {
    id: 4,
    title: "GUI",
    description:
      "University Assignments and Hobby Projects using AI and ML techniques.",
    image: "/projects/brics.png",
    tags: ["Python", "Regression"],
    demoUrl: "https://docs.google.com/presentation/d/1B95MPz51IzLmfek_QeoGVUL8uaj1ckFyfCQDWPhclRs/edit?usp=sharing",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Talha-Mansoor"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
