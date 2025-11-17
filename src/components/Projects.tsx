import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

import toughtsImage from "@/assets/toughts.png";
import contratejaImage from "@/assets/contrateja.png";
import movieAppImage from "@/assets/movieApp.png";

const projects = [
  {
    title: "Mercadinho VIP",
    description: "Projeto de conclusão da formação Dev. Full-Stack Jr. Sistema Web responsivo voltado para comércios que desejam controlar clientes, pontuação de fidelidade, fluxo financeiro e envio de promoções automatizadas. A aplicação possui acesso via desktop e celular, com funcionalidades pensadas para simplificar o dia a dia do pequeno varejista.",
    technologies: ["React", "Node.js", "Express.js", "CSS Modules", "Supabase", "Swagger", "Docker"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop",
    github: "https://github.com/EliamFuentes/pdvlopers-projeto-final",
    demo: null,
  },
  {
    title: "Marketplace ContrateJá",
    description: "ContrateJá é um marketplace de serviços locais com objetivo de conectar clientes a prestadores de serviços. Desenvolvido para praticar habilidades em front-end e back-end, o projeto inclui funcionalidades como cadastro de usuários, listagem de serviços, sistema de avaliações, visualização detalhes do serviço e contato direto com o prestador.",
    technologies: ["React.js + Vite", "Node.js", "Express.js", "Tailwind CSS", "MySQL", "JWT", "REST", "Multer"],
    image: contratejaImage,
    github: "https://github.com/EliamFuentes/marketplace-contrateja",
    demo: null,
  },
  {
    title: "MovieAPP",
    description: "O MovieAPP é uma aplicação em React + Vite que consome a API do TMDB, permitindo que usuários busquem filmes, vejam detalhes e montem uma lista de favoritos. Funcionalidades: busca de filmes, resultados de busca, paginação, página de detalhes, lista de favoritos e feedback de estado.",
    technologies: ["React", "Vite", "CSS Modules", "TMDB API"],
    image: movieAppImage,
    github: "https://github.com/EliamFuentes/atividade_05_API",
    demo: "https://movieapp-eight-xi.vercel.app/",
  },
  {
    title: "Toughts",
    description: "Toughts é uma aplicação web desenvolvida com Node.js e Express.js que permite aos usuários compartilhar seus pensamentos e interagir em um ambiente simples e intuitivo. O projeto foi criado com objetivo de praticar habilidades em back-end, incluindo gerenciamento de rotas, manipulação de dados e integração com banco de dados.",
    technologies: ["Node.js", "Express.js", "Sequelize", "Handlebars", "bcryptjs", "MySQL"],
    image: toughtsImage,
    github: "https://github.com/EliamFuentes/toughts-project",
    demo: null,
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift bg-card border-border group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>

                  {project.demo ? (
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary-dark text-primary-foreground"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="text-muted-foreground bg-muted cursor-not-allowed"
                      disabled
                    >
                      🚧 Em desenvolvimento
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;