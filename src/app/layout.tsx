// app/layout.tsx

import '../../public/styles/globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeadingSection from './components/HeadingSection/HeadingSection';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Page Title',
  description: 'Your Page Description',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <HeadingSection />
        <main className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
