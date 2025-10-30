import { Briefcase } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    type: "study",
    city: "Porto Alegre - RS",
    period: "2022/02 - 2026/2",
    role: "UNISINOS - Sistemas de Informação",
    description: "Graduação em Sistemas de Informação",
  },
  {
    type: "study",
    city: "Porto Alegre - RS",
    period: "maio/2025 - novembro/2025",
    role: "Dev. Full-Stack Jr. +pra TI & Codifica",
    description: "Formação intensiva com foco em desenvolvimento Full-Stack, combinando fundamentos de computação, desenvolvimento web (HTML, CSS, JavaScript, React), BackEnd com Java e Spring, bancos de dados relacionais (MySQL/PostgreSQL), práticas de DevOps e introdução à Inteligência Artificial. Durante a formação, são desenvolvidas habilidades técnicas e comportamentais essenciais para o mercado de TI, incluindo: Programação orientada a objetos e criação de APIs RESTful; Versionamento de código com Git/GitHub e deploy de aplicações em Vercel; Trabalho colaborativo em times e desenvolvimento de projetos práticos (SPA, API e aplicação fullstack com IA); Comunicação técnica, resolução de problemas, criatividade e apresentações de projetos.",
  },
  {
    type: "work",
    city: "Porto Alegre - RS",
    period: "2022 - 2024",
    role: "UFCSPA - Estagiário em Desenvolvimento",
    description:
      "Desenvolvedor estagiário com carga horária de 30h semanais, responsável por acompanhar o desenvolvimento de banco de dados, desenvolvimento e manutenção de sistemas PHP.",
  },
];

const Experience = () => {
  return (
    <section id="experiencias" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Experiências
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover-lift bg-card border-border">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Ícone dinâmico */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                  {exp.type === "study" ? (
                    <GraduationCap className="h-6 w-6 text-primary" />
                  ) : (
                    <Briefcase className="h-6 w-6 text-primary" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-muted-foreground font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-2">{exp.city}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;