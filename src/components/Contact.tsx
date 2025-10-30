import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentTime = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          time: currentTime,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast({
            title: "Mensagem enviada! 🚀",
            description: "Obrigado por entrar em contato. Retornarei em breve.",
            variant: "default",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Erro ao enviar mensagem:", error);
          toast({
            title: "Erro ao enviar",
            description: "Ocorreu um problema ao enviar sua mensagem. Tente novamente.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <section id="contato" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Contato
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* FORMULÁRIO DE CONTATO */}
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Envie uma mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-background border-border"
              />

              <Input
                type="email"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-background border-border"
              />

              <Textarea
                placeholder="Sua mensagem"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="bg-background border-border resize-none"
              />

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-medium transition-all duration-300"
                size="lg"
              >
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          {/* INFORMAÇÕES DE CONTATO */}
          <div className="space-y-6">
            {/* EMAIL */}
            <Card className="p-6 bg-card border-border hover-lift">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">E-mail</p>
                  <a
                    href="mailto:eliamfuentes123@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    eliamfuentes123@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            {/* TELEFONE */}
            <Card className="p-6 bg-card border-border hover-lift">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Telefone</p>
                  <a
                    href="tel:+5551999440365"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 (51) 99944-0365
                  </a>
                </div>
              </div>
            </Card>

            {/* LOCALIZAÇÃO */}
            <Card className="p-6 bg-card border-border hover-lift">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Localização</p>
                  <p className="text-muted-foreground">Porto Alegre, Brasil</p>
                </div>
              </div>
            </Card>

            {/* BOTÕES DE REDES SOCIAIS */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <a
                  href="https://github.com/EliamFuentes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/eliamfuentes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;