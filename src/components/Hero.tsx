import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, ChevronDown } from "lucide-react";
import profileImage from "@/assets/imagem_perfil.png";
import CV from "@/assets/Curriculo_Eliam_Fuentes.pdf"

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative bg-gradient-to-b from-background to-secondary/30">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="relative inline-block">
          <img
            src={profileImage}
            alt="Eliam Fuentes"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-transparent animate-pulse"></div>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Eliam Fuentes
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold">
            Desenvolvedor Full-Stack
          </p>
        </div>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Desenvolvo aplicações modernas e escaláveis, unindo front-end criativo
          com back-end robusto. Meu foco é React e Node.js.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href={CV} download>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-8 shadow-lg hover:shadow-xl transition-all"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </a>

          <div className="flex gap-3">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              asChild
            >
              <a href="https://github.com/EliamFuentes" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              asChild
            >
              <a href="https://www.linkedin.com/in/eliamfuentes/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <p className="text-sm text-muted-foreground">Deslize para ver mais</p>
        <ChevronDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;