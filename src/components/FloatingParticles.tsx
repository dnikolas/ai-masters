import { useEffect, useRef } from 'react';

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const container = canvasRef.current;
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full pointer-events-none';
      
      const size = Math.random() * 4 + 2;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = Math.random() * 4 + 8;
      
      const colors = [
        'rgba(0, 212, 255, 0.6)',
        'rgba(0, 122, 255, 0.6)',
        'rgba(175, 82, 222, 0.5)',
      ];
      
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        background: radial-gradient(circle, ${colors[i % 3]}, transparent);
        animation: float ${duration}s ease-in-out infinite;
        animation-delay: -${delay}s;
        opacity: 0.6;
      `;
      
      container.appendChild(particle);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-5 overflow-hidden"
      aria-hidden="true"
    />
  );
}
