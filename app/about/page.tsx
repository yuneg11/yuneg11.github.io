'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page immediately
    router.replace('/');
  }, [router]);

  // Optional: Show a loading message while redirecting
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to home page...</p>
    </div>
  );
}
