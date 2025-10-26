import { ArrowRight } from 'lucide-react';

const solutions = [
  'Автоматизация email-рассылок и обработки входящих сообщений',
  'Интеллектуальный анализ данных и создание отчётов',
  'Автоматизация документооборота и контрактов',
  'Персонализированное взаимодействие с клиентами 24/7',
  'Мониторинг и анализ рынка в реальном времени',
  'Автоматизация процессов найма и онбординга',
];

export default function SolutionsSlide() {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <h2 className="text-5xl md:text-6xl font-thin gradient-text mb-16 text-center">
        Решение
      </h2>

      <div className="glass-card p-10 md:p-12">
        <p className="text-2xl md:text-3xl font-light mb-12 leading-relaxed">
          AI-агенты автоматизируют рутинные процессы, освобождая время для стратегических задач
        </p>

        <ul className="space-y-4">
          {solutions.map((solution, index) => (
            <li
              key={index}
              className="group flex items-start gap-4 p-6 rounded-2xl bg-card-glass hover:bg-card-glass-hover border border-border hover:border-primary/50 transition-smooth hover:translate-x-3 animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <ArrowRight className="w-6 h-6 text-primary mt-1 flex-shrink-0 group-hover:translate-x-1 transition-smooth" />
              <span className="text-lg md:text-xl font-light">{solution}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
