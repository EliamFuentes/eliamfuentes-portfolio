const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Eliam Fuentes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;