import { AppLayout } from '@/components/layout/app-layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  // In a real app, this would involve checking a session or token
  const isAuthenticated = true; 

  if (!isAuthenticated) {
    // This is a failsafe, but the login page should handle routing.
    // In a real app you'd redirect to /login
    return null;
  }

  return <AppLayout>{children}</AppLayout>;
}
