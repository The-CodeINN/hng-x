import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import Footer from '@/components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

const work_sans = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Image Gallery || TheCodeINN',
  description:
    'Image gallery with Next.js and Tailwind CSS with search functionality and drag and drop rearranging of images.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={`${work_sans.className} min-h-screen bg-black-100 text-white`}
        >
          <Navbar />
          <main className='flex-cente paddings mx-auto w-full max-w-screen-2x mt-24'>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
