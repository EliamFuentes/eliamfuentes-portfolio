const About = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-background flex items-center justify-center min-h-[80vh]" >
      <div className="max-w-3xl text-center space-y-4 text-muted-foreground leading-relaxed">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Sobre mim
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg md:text-l">
          <p>
            Olá! Sou Eliam Fuentes, desenvolvedor full-stack apaixonado por tecnologia
            e inovação. Com formação sólida em desenvolvimento full-stack, busco criar
            experiências digitais que fazem a diferença.
          </p>
          <p>
            Minha jornada na tecnologia começou com curiosidade e se transformou em
            uma dedicação constante ao aprendizado. Trabalho com as principais
            tecnologias do mercado, sempre focado em qualidade, performance e
            experiência do usuário.
          </p>
          <p>
            Atualmente trabalho principalmente com <strong>React</strong>, <strong>Node.js</strong> e <strong>TypeScript</strong>, além de utilizar <strong>Tailwind CSS</strong> para o front-end e <strong>PostgreSQL</strong> e <strong>MySQL</strong> como bancos de dados. Também tenho experiência com <strong>APIs REST</strong> e boas práticas de integração entre front-end e back-end.
          </p>
        </div>

      </div>
    </section >
  );
};

export default About;