import type { NextPage } from 'next';
import Head from 'next/head';
import BuilderLayout from '@/modules/builder/BuilderLayout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'sonner';

const BuilderPage: NextPage = () => {
  let isLoggedIn;
  const router = useRouter();

  useEffect(() => {
    isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    if (isLoggedIn !== true) {
      toast.error('Please Login / SignUp to continue!');
      router.push('/auth');
    }
  }, []);

  return (
    <div>
      <Head>
        <title>ResuMingle</title>
        <meta name="description" content="ResuMingle" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
      </Head>

      <BuilderLayout />
    </div>
  );
};

export default BuilderPage;
