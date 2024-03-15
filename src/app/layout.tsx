import type { Metadata } from 'next';
import './globals.css';

import { spaceGroteskFont, lexend, inter } from '@/lib/fonts';

import HeaderComponent from '@/components/common/header-component';
import FooterComponent from '@/components/common/footer-component';

export const metadata: Metadata = {
  title: 'CronCraft',
  description: 'Mange Cron Jobs with ease',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${spaceGroteskFont.variable} ${lexend.variable} ${inter.variable} flex flex-col justify-start items-center w-full`}>
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
