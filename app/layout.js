import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer from '~/components/widgets/Footer';

import { Space_Grotesk as CustomFont } from '@next/font/google';
import '~/assets/styles/base.css';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300">
        <Announcement />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}