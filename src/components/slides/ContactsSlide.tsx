import { Mail, Phone, MessageSquare, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contacts = [
  {
    name: 'Александр Петров',
    role: 'CEO & Founder',
    phone: '+7 (999) 123-45-67',
    email: 'a.petrov@ai-agents.ru',
    telegram: '@alexandr_ai',
  },
  {
    name: 'Екатерина Иванова',
    role: 'Head of Sales',
    phone: '+7 (999) 765-43-21',
    email: 'e.ivanova@ai-agents.ru',
    telegram: '@ekaterina_sales',
  },
];

export default function ContactsSlide() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-thin gradient-text mb-6">
          Контакты
        </h2>
        <p className="text-xl text-muted-foreground font-light">
          Свяжитесь с нами для обсуждения вашего проекта
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="glass-card p-8 text-center animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary/10 border-2 border-primary/20 flex items-center justify-center mb-4">
                <span className="text-3xl font-light gradient-text">
                  {contact.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-2xl font-light mb-2">{contact.name}</h3>
              <p className="text-primary font-light">{contact.role}</p>
            </div>

            <div className="space-y-3 text-left">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-card-glass-hover transition-smooth group"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-light text-muted-foreground group-hover:text-foreground">
                  {contact.phone}
                </span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-card-glass-hover transition-smooth group"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-light text-muted-foreground group-hover:text-foreground">
                  {contact.email}
                </span>
              </a>

              <a
                href={`https://t.me/${contact.telegram.slice(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-card-glass-hover transition-smooth group"
              >
                <MessageSquare className="w-5 h-5 text-primary" />
                <span className="font-light text-muted-foreground group-hover:text-foreground">
                  {contact.telegram}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card p-12 text-center">
        <h3 className="text-3xl font-light mb-6">Готовы начать?</h3>
        <p className="text-xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
          Получите бесплатную консультацию и узнайте, как AI-агенты могут трансформировать ваш бизнес
        </p>
        <Button
          size="lg"
          className="bg-gradient-primary hover:opacity-90 transition-smooth text-lg px-12 py-6 h-auto"
        >
          Записаться на демо
        </Button>
      </div>
    </div>
  );
}
