const About = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Sobre mim
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Olá! Sou Eliam Fuentes, desenvolvedor full-stack apaixonado por tecnologia
              e inovação. Com formação sólida em desenvolvimento web, busco criar
              experiências digitais que fazem a diferença.
            </p>
            <p>
              Minha jornada na tecnologia começou com curiosidade e se transformou em
              uma dedicação constante ao aprendizado. Trabalho com as principais
              tecnologias do mercado, sempre focado em qualidade, performance e
              experiência do usuário.
            </p>
            <p>
              Além de código, me interesso por arquitetura de software, boas práticas
              de desenvolvimento e metodologias ágeis. Estou sempre em busca de novos
              desafios que me permitam crescer profissionalmente.
            </p>
          </div>
          
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl hover-lift">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="text-5xl font-bold text-primary">3+</div>
                <p className="text-lg text-foreground">Anos de experiência</p>
                <div className="text-5xl font-bold text-primary">20+</div>
                <p className="text-lg text-foreground">Projetos concluídos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;