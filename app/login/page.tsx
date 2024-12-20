'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';

const Page = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Logged out</h1>
      <a href="/api/auth/login">Login back in</a>
    </div>
  );
};

export default Page;
