import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve!",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Contato
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Envie uma mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-medium"
                size="lg"
              >
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-border hover-lift">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">E-mail</p>
                  <a
                    href="mailto:eliam@exemplo.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    eliam@exemplo.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover-lift">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Telefone</p>
                  <a
                    href="tel:+5511999999999"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 (11) 99999-9999
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover-lift">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Localização</p>
                  <p className="text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </div>
            </Card>

            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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