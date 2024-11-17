import Head from 'next/head';
import HomeLayout from '@/modules/home/HomeLayout';

function HomePage() {
  return (
    <div>
      <Head>
        <title>ResuMingle</title>
        <meta name="description" content="ResuMingle" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
      </Head>

      <HomeLayout />
    </div>
  );
}

export default HomePage;
