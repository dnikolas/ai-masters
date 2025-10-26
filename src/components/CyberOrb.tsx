export default function CyberOrb() {
  return (
    <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[300px] md:h-[300px] pointer-events-none animate-glow-pulse opacity-60">
      {/* Main orb */}
      <div className="absolute inset-0 rounded-full bg-gradient-radial from-primary/15 via-primary-glow/8 to-transparent blur-sm" />
      
      {/* Rotating outer ring */}
      <div 
        className="absolute inset-[10px] border border-primary-glow/50 rounded-full"
        style={{
          animation: 'spin 20s linear infinite',
        }}
      />
      
      {/* Rotating inner ring */}
      <div 
        className="absolute inset-[20px] border border-accent/40 rounded-full"
        style={{
          animation: 'spin 15s linear infinite reverse',
        }}
      />
      
      {/* Center glow */}
      <div className="absolute inset-[60px] rounded-full bg-primary/30 blur-2xl" />
    </div>
  );
}
