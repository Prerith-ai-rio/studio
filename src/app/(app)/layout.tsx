
import { AppLayout } from '@/components/layout/app-layout';
import { redirect } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  // This is a placeholder for auth logic
  const isAuthenticated = true; 

  if (!isAuthenticated) {
    redirect('/login');
  }

  return <AppLayout>{children}</AppLayout>;
}
