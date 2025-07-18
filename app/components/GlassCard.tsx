type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function GlassCard({ children, className = '', ...props }: GlassCardProps) {
  return (
    <div
      className={`p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
