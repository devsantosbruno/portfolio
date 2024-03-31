import { PageTransition } from '@/components/PageTransition';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PageTransition />
      {children}
    </div>
  );
}
