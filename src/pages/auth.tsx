import { Button } from '@mui/material';
import { AnimationGeneratorType, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { NavBarActions } from '../modules/builder/nav-bar/atoms';
import { useRouter } from 'next/router';
import { toast } from 'sonner';
import Head from 'next/head';

const auth = () => {
  const router = useRouter();

  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transitionEffects = {
    type: 'spring' as AnimationGeneratorType,
    stiffness: 400,
    damping: 17,
  };

  const [newUser, setNewUser] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('premium', 'false');

    setTimeout(() => {
      router.push('/builder');
      toast.success('Welcome to ResuMingle!');
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>ResuMingle</title>
        <meta name="description" content="ResuMingle" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
      </Head>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} className="scroll-smooth">
        <nav className="sticky top-0 z-20 h-14 w-full bg-resume-800 flex py-2.5 px-4 xl:px-60 items-center shadow-level-8dp">
          <Link href="/">
            <Image src={'/icons/resume-icon.png'} alt="logo" height="36" width="36" />
          </Link>
          <div className="flex-auto flex justify-between items-center ml-5">
            <NavBarActions>
              <div>
                <h1 className="text-white font-semibold tracking-wide">ResuMingle</h1>
              </div>
            </NavBarActions>
            <NavBarActions>
              <a
                href={'https://github.com/rbhagat32/ResuMingle'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className="h-6 w-6" fill="white" />
              </a>
            </NavBarActions>
          </div>
        </nav>
        <div
          style={{
            background: 'linear-gradient(180deg, #E7EEFA 50%, #FFFFFF 100%)',
            fontFamily: "'Roboto Slab', serif",
          }}
        >
          <div className="mx-6 md:mx-40 xl:mx-60 mb-6">
            {newUser ? (
              // SignUp Form
              <motion.div
                className="flex flex-col justify-center items-center pt-12 md:pt-24"
                initial={{ opacity: 0 }}
                animate={animationEffectsFirstLoad}
                transition={transitionEffects}
              >
                <h1 className="text-5xl mb-20 text-resume-800">SignUp</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-14">
                  <div className="flex gap-14 justify-between">
                    <h1 className="text-xl text-resume-800">Username:</h1>
                    <input
                      required
                      placeholder="newUser123"
                      type="text"
                      className="px-2 py-0.5 border-2 rounded-md border-resume-500"
                    />
                  </div>

                  <div className="flex gap-14 justify-between">
                    <h1 className="text-xl text-resume-800">Email:</h1>
                    <input
                      required
                      placeholder="example@gmail.com"
                      type="email"
                      className="px-2 py-0.5 border-2 rounded-md border-resume-500"
                    />
                  </div>

                  <div className="flex gap-16 justify-between">
                    <h1 className="text-xl text-resume-800">Password:</h1>
                    <input
                      required
                      placeholder="********"
                      type="password"
                      className="px-2 py-0.5 border-2 rounded-md border-resume-500"
                    />
                  </div>

                  <div className="flex gap-16 justify-between">
                    <h1 className="text-xl text-resume-800">Confirm Password:</h1>
                    <input
                      required
                      placeholder="********"
                      type="password"
                      className="px-2 py-0.5 border-2 rounded-md border-resume-500"
                    />
                  </div>

                  <Button type="submit" variant="contained" className="bg-resume-800 mb-2">
                    {loading ? 'Loading...' : 'SignUp'}
                  </Button>
                </form>

                <p className="text-resume-600 mt-4">
                  Already have an account?{' '}
                  <span
                    onClick={() => setNewUser(false)}
                    className="text-resume-800 underline cursor-pointer"
                  >
                    Login!
                  </span>
                </p>
              </motion.div>
            ) : (
              // Login Form
              <motion.div
                className="flex flex-col justify-center items-center pt-12 md:pt-24"
                initial={{ opacity: 0 }}
                animate={animationEffectsFirstLoad}
                transition={transitionEffects}
              >
                <h1 className="text-5xl mb-20 text-resume-800">Login</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-14">
                  <div className="flex gap-14 justify-between">
                    <h1 className="text-xl text-resume-800">Username/Email:</h1>
                    <input
                      required
                      placeholder="example@gmail.com"
                      type="text"
                      className="px-2 py-0.5 border-2 rounded-md border-resume-500"
                    />
                  </div>

                  <div className="flex gap-16 justify-between">
                    <h1 className="text-xl text-resume-800">Password:</h1>
                    <input
                      required
                      placeholder="*********"
                      type="password"
                      className="px-2 py-0.5 border-2 rounded-md border-resume-500"
                    />
                  </div>

                  <Button type="submit" variant="contained" className="bg-resume-800 mb-2">
                    {loading ? 'Loading...' : 'Login'}
                  </Button>
                </form>

                <p className="text-resume-600 mt-4">
                  New to ResuMingle?{' '}
                  <span
                    onClick={() => setNewUser(true)}
                    className="text-resume-800 underline cursor-pointer"
                  >
                    SignUp!
                  </span>
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default auth;
