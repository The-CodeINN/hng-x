import './globals.css';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';

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
    <html lang='en'>
      <body className={`${work_sans.className} `}>{children}</body>
    </html>
  );
}
