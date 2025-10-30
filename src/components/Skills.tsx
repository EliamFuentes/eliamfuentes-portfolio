import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  GitBranch,
  Globe,
  Layout,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

const skills = [
  { name: "HTML/CSS", icon: Layout, color: "text-orange-500" },
  { name: "JavaScript", icon: Code2, color: "text-yellow-500" },
  { name: "React", icon: Globe, color: "text-blue-500" },
  { name: "TypeScript", icon: Terminal, color: "text-blue-600" },
  { name: "Node.js", icon: Server, color: "text-green-600" },
  { name: "PHP", icon: Code2, color: "text-purple-500" },
  { name: "Java", icon: Code2, color: "text-red-500" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-700" },
  { name: "Git", icon: GitBranch, color: "text-orange-600" },
  { name: "Responsive Design", icon: Smartphone, color: "text-pink-500" },
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Habilidades
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="p-6 flex flex-col items-center justify-center gap-3 hover-lift bg-card border-border group cursor-pointer"
              >
                <Icon
                  className={`h-10 w-10 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                />
                <span className="text-sm font-medium text-center text-foreground">
                  {skill.name}
                </span>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;