import { cn } from '@/lib/utils';

type TitleProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Title({ children, className, id }: TitleProps) {
  return (
    <h2
      className={cn(
        'text-[3.75rem] md:text-[6rem] font-black tracking-tighter leading-[0.8] text-white mb-16 md:mb-24',
        className
      )}
      id={id}
    >
      {children}
    </h2>
  );
}
