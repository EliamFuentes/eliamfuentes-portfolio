import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    company: "Tech Solutions Ltda",
    period: "2022 - Presente",
    role: "Desenvolvedor Full-Stack",
    description:
      "Desenvolvimento e manutenção de aplicações web utilizando React, Node.js e PostgreSQL. Implementação de novas funcionalidades e otimização de performance.",
  },
  {
    company: "Digital Innovation",
    period: "2021 - 2022",
    role: "Desenvolvedor Front-End",
    description:
      "Criação de interfaces responsivas e acessíveis com React e Tailwind CSS. Colaboração com equipe de design para implementação de layouts modernos.",
  },
  {
    company: "StartUp Dev",
    period: "2020 - 2021",
    role: "Desenvolvedor Júnior",
    description:
      "Desenvolvimento de componentes reutilizáveis e integração com APIs REST. Participação ativa em code reviews e melhoria contínua do código.",
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
            <Card
              key={index}
              className="p-6 hover-lift bg-card border-border"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
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
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
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