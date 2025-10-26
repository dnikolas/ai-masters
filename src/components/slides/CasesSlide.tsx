import { Building2, ShoppingBag, Heart, GraduationCap, TrendingUp, Percent } from 'lucide-react';

const cases = [
  {
    icon: Building2,
    title: 'Недвижимость',
    description: 'Автоматизация обработки заявок и консультаций',
    result: '+150% конверсия лидов',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'AI-ассистент для персонализированных рекомендаций',
    result: '+85% повторных покупок',
  },
  {
    icon: Heart,
    title: 'Медицина',
    description: 'Автоматизация записи пациентов и консультаций',
    result: '-60% нагрузка на персонал',
  },
  {
    icon: GraduationCap,
    title: 'Образование',
    description: 'Персонализированное обучение и поддержка студентов',
    result: '+40% вовлечённость',
  },
];

export default function CasesSlide() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <h2 className="text-5xl md:text-6xl font-thin gradient-text mb-16 text-center">
        Кейсы внедрения
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((item, index) => (
          <div
            key={index}
            className="relative glass-card p-8 overflow-hidden group animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Gradient line on hover */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-smooth" />

            <div className="mb-6">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-primary/10 border border-primary/20 group-hover:scale-110 transition-smooth">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-light mb-4">{item.title}</h3>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="flex items-center gap-2 pt-4 border-t border-border/50">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-lg font-light gradient-text">{item.result}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
