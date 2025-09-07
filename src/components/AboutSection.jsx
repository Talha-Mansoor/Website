import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate about Data and Story-Telling
            </h3>

            <p className="text-muted-foreground">
             I’m a fourth-year Economics and Computer Science student at the University of Saskatchewan, currently working as an LMS Consultant at the Saskatchewan Indian Institute of Technologies. 
             </p>
            <p className="text-muted-foreground">
              I support technical development and LMS integration on training programs delivered in partnership with local firms and multinational corporations across sectors such as aviation, mining, agrifood processing, and carpentry. Whether it’s technology, data, or problem-solving, I focus on growing my skills while delivering results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Economics (4th year)</h4>
                  <p className="text-muted-foreground">
                    Studying microeconomics, macroeconomics, econometrics, and economic forecasting. Developed models to analyze labor markets, inflation trends, and GDP projections using tools like EViews and Excel.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Computer Science (3rd year)</h4>
                  <p className="text-muted-foreground">
                    Studying algorithms, OOP, GUI, AI/ML and software development.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Google Data Analytics Certificate</h4>
                  <p className="text-muted-foreground">
                    Learnt data cleaning, analysis, and visualization using SQL, R, and Tableau. Real-world case studies and business decision-making through data storytelling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
