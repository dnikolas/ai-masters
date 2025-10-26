import { AlertCircle, Clock, TrendingDown, Users } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Потеря времени',
    description: 'Сотрудники тратят 40% времени на рутинные операции вместо стратегических задач',
  },
  {
    icon: TrendingDown,
    title: 'Низкая эффективность',
    description: 'Ручная обработка данных приводит к ошибкам и замедляет бизнес-процессы',
  },
  {
    icon: Users,
    title: 'Кадровый дефицит',
    description: 'Сложно найти и удержать квалифицированных специалистов для рутинных задач',
  },
  {
    icon: AlertCircle,
    title: 'Упущенные возможности',
    description: 'Без автоматизации бизнес теряет конкурентные преимущества на рынке',
  },
];

export default function ProblemSlide() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <h2 className="text-5xl md:text-6xl font-thin gradient-text mb-16 text-center">
        Проблема
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="glass-card p-8 group animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-smooth">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-light mb-3">{problem.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
