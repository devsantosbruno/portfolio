import { cn } from '@/lib/utils';

type TitleProps = {
  children: React.ReactElement;
  className?: string;
};

export function Title({ children, className }: TitleProps) {
  return (
    <h2
      className={cn(
        'text-[3.75rem] md:text-[6rem] font-black tracking-tighter leading-[0.8] text-white mb-16 md:mb-24',
        className
      )}
    >
      {children}
    </h2>
  );
}
