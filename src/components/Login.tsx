import React from 'react';
import { Link } from 'react-router-dom';

import Button from './button/Button';
import Input from './input/Input';

function Login() {
  return (
    <section className="flex flex-col flex-grow justify-center">
      <img
        className="hidden lg:block absolute top-0 left-0 mt-32 w-1/5"
        src="src/backgrounds/primary-circle-fade.svg"
        alt=""
      />
      <img
        className="hidden lg:block absolute bottom-0 right-0 mb-20 w-1/6"
        src="src/backgrounds/secondary-circle-fade.svg"
        alt=""
      />
      <div className="container px-4 mx-auto">
        <div className="max-w-md mx-auto py-6 lg:py-8 px-4 lg:px-8 dark:bg-white dark:border rounded-xl text-center">
          <span className="inline-block mb-8 text-xs text-primary font-semibold">
            Sign In
          </span>
          <h3 className="mb-12 text-3xl font-semibold font-heading text-tetriary-light">
            Log in to your account
          </h3>
          <form action="#">
            <div className="relative flex flex-wrap mb-6">
              <Input
                className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                type="email"
                placeholder="e.g hello@remindle.io"
              />
              <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                Email address
              </span>
            </div>
            <div className="relative flex flex-wrap mb-6">
              <Input
                className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                type="password"
                placeholder="********"
              />
              <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                Password
              </span>
            </div>
            <Button className="mb-8">Sign up</Button>
          </form>
          <p className="text-sm text-gray-500">
            <span>Don't have an account? </span>
            <Link
              className="text-primary font-semibold hover:underline"
              to="/register"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
