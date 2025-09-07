import { BottomNav } from '@/components/layout/bottom-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  // In a real app, this would involve checking a session or token
  const isAuthenticated = true; 

  if (!isAuthenticated) {
    // This is a failsafe, but the login page should handle routing.
    // In a real app you'd redirect to /login
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 md:p-6 mb-16">{children}</main>
      <BottomNav />
    </div>
  );
}
