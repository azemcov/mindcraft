import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/src/app/components/header/Header';
import { Header2 } from '@/src/app/components/header2/Header2';
import { MuiProvider } from '@providers/mui-provider';
import { ThemeProvider } from '@providers/theme-provider';

// Font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const metadata: Metadata = {
  title: 'Create App',
  description: 'App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full'>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme') ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', t === 'dark');
              } catch(e) {}
            `,
          }}
        />
      </head>

      <body className='h-screen flex justify-center'>
        <ThemeProvider>
          <MuiProvider>
            <div className='flex flex-1 justify-center p-4 h-full'>
              <div className='flex flex-col w-full h-full bg-background rounded-5xl shadow-md overflow-hidden'>
                <Header />
                <Header2 />

                <main className='flex-1 overflow-auto hide-scrollbar'>
                  {children}
                </main>
              </div>
            </div>
          </MuiProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
