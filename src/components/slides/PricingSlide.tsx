import { Check, Zap, Rocket, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    icon: Zap,
    name: 'Старт',
    price: 'от 50 000₽',
    period: 'в месяц',
    features: [
      'До 3 AI-агентов',
      '10 000 запросов/месяц',
      'Базовая интеграция',
      'Email поддержка',
    ],
    popular: false,
  },
  {
    icon: Rocket,
    name: 'Бизнес',
    price: 'от 150 000₽',
    period: 'в месяц',
    features: [
      'До 10 AI-агентов',
      '50 000 запросов/месяц',
      'Расширенная интеграция',
      'Приоритетная поддержка 24/7',
      'Аналитика и отчёты',
    ],
    popular: true,
  },
  {
    icon: Crown,
    name: 'Энтерпрайз',
    price: 'Индивидуально',
    period: '',
    features: [
      'Неограниченное количество агентов',
      'Безлимитные запросы',
      'Кастомизация под задачи',
      'Персональный менеджер',
      'SLA гарантии',
      'On-premise решения',
    ],
    popular: false,
  },
];

export default function PricingSlide() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-thin gradient-text mb-6">
          Тарифы
        </h2>
        <p className="text-xl text-muted-foreground font-light">
          Выберите оптимальное решение для вашего бизнеса
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative glass-card p-8 animate-fade-in ${
              plan.popular ? 'border-primary/50 shadow-hover' : ''
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-sm font-light">
                Популярный
              </div>
            )}

            <div className="mb-6">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-primary/10 border border-primary/20 mb-4">
                <plan.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-light mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-light gradient-text">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground font-light">{plan.period}</span>
                )}
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-light text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className={`w-full ${
                plan.popular
                  ? 'bg-gradient-primary hover:opacity-90'
                  : 'bg-card-glass hover:bg-card-glass-hover border-border'
              } transition-smooth`}
              size="lg"
            >
              Выбрать план
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
