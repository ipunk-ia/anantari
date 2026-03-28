import type {Metadata} from 'next';
import { Cormorant_Garamond, DM_Sans, Libre_Baskerville } from 'next/font/google';
import './globals.css'; // Global styles

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600'], 
  variable: '--font-cormorant' 
});

const dmSans = DM_Sans({ 
  subsets: ['latin'], 
  weight: ['400', '500'], 
  variable: '--font-dmsans' 
});

const libre = Libre_Baskerville({ 
  subsets: ['latin'], 
  weight: ['400'], 
  style: ['italic'], 
  variable: '--font-libre' 
});

export const metadata: Metadata = {
  title: 'Anantari Coffee',
  description: 'Semua Rasa, Satu Tempat',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${libre.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
