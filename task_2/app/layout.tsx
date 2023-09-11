import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const dm_sans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MovieBox | Your favorite movie app',
  description: 'Welcome to MovieBox, a movie app that lets you find and save your favorite movies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}
