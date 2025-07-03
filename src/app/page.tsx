"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { LoginForm } from '@/components/login-form';
import { SignupForm } from '@/components/signup-form';
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const cardInfo = {
  login: {
    title: 'Login',
    description: 'Enter your credentials to access your account.',
    form: <LoginForm />,
  },
  signup: {
    title: 'Sign Up',
    description: 'Create a new account to get started.',
    form: <SignupForm />,
  },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const triggerClasses =
    'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const activeCard = cardInfo[activeTab];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-headline font-bold mb-2 text-primary animate-fade-in-down text-center">
          Login Portal
        </h1>
        <p className="text-muted-foreground mb-8 text-center">
          Welcome! Please log in or sign up to continue.
        </p>

        <div className="grid w-full grid-cols-2 h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
          <button
            onClick={() => setActiveTab('login')}
            className={cn(
              triggerClasses,
              activeTab === 'login' && 'bg-background text-foreground shadow-sm'
            )}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('signup')}
            className={cn(
              triggerClasses,
              activeTab === 'signup' && 'bg-background text-foreground shadow-sm'
            )}
          >
            Sign Up
          </button>
        </div>

        <Card
          className={cn(
            'shadow-lg mt-2 transition-colors duration-500 ease-in-out',
            activeTab === 'login' ? 'bg-card' : 'bg-accent/20'
          )}
        >
          <CardHeader>
            <CardTitle>{activeCard.title}</CardTitle>
            <CardDescription>{activeCard.description}</CardDescription>
          </CardHeader>
          <CardContent>{activeCard.form}</CardContent>
        </Card>

        <footer className="mt-8 text-sm text-muted-foreground">
          <div className="flex justify-center items-center gap-x-4 gap-y-2 flex-wrap">
            <p>© {year} Infinity-tools</p>
            <Link href="#" className="hover:text-primary transition-colors">
              Help
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
