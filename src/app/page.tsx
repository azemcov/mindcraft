'use client';

import { ThemeToggle } from '@components/ThemeToggle';
import {
  DangerButton,
  PlainButton,
  PlainButtonBolt,
  SecondaryButton,
  SuccessButton,
  WarningButton,
} from './components/Buttons';

export default function Home() {
  return (
    <>
      <div className='flex-1 flex items-center justify-center gap-8 p-8'>
        <main className='w-full max-w-3xl flex flex-col items-center gap-4 py-16 px-12 bg-card rounded-3xl shadow-lg'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl font-bold text-foreground text-center'>
              Карточка
            </h1>
            <p className='text-xl text-muted-foreground text-center'>
              Светлая / Тёмная тема работает
            </p>
          </div>

          <div className='flex gap-4'>
            <ThemeToggle />
            <SecondaryButton>222</SecondaryButton>
            <SuccessButton>333</SuccessButton>
          </div>
          <div className='flex gap-4'>
            <PlainButtonBolt>777</PlainButtonBolt>
            <PlainButton>444</PlainButton>
            <WarningButton>555</WarningButton>
            <DangerButton>666</DangerButton>
          </div>
        </main>

        <main className='w-full max-w-3xl flex flex-col items-center gap-4 py-16 px-12 bg-card-dark rounded-3xl shadow-lg'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl font-bold text-foreground text-center'>
              Карточка
            </h1>
            <p className='text-xl text-muted-foreground text-center'>
              Светлая / Тёмная тема работает
            </p>
          </div>

          <div className='flex gap-4'>
            <ThemeToggle />
          </div>
        </main>

        <main className='w-full max-w-3xl flex flex-col items-center gap-4 py-16 px-12 bg-card rounded-3xl shadow-lg'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl font-bold text-foreground text-center'>
              Карточка
            </h1>
            <p className='text-xl text-muted-foreground text-center'>
              Светлая / Тёмная тема работает
            </p>
          </div>

          <div className='flex gap-4'>
            <ThemeToggle />
          </div>
        </main>
      </div>
      <div className='flex-1 flex items-center justify-center gap-8 p-8'>
        <main className='w-full max-w-3xl flex flex-col items-center gap-4 py-16 px-12 bg-card rounded-3xl shadow-lg'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl font-bold text-foreground text-center'>
              Карточка
            </h1>
            <p className='text-xl text-muted-foreground text-center'>
              Светлая / Тёмная тема работает
            </p>
          </div>

          <div className='flex gap-4'>
            <ThemeToggle />
            <SecondaryButton>222</SecondaryButton>
            <SuccessButton>333</SuccessButton>
          </div>
          <div className='flex gap-4'>
            <PlainButton>444</PlainButton>
            <WarningButton>555</WarningButton>
            <DangerButton>666</DangerButton>
          </div>
        </main>

        <main className='w-full max-w-3xl flex flex-col items-center gap-4 py-16 px-12 bg-card-dark rounded-3xl shadow-lg'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl font-bold text-foreground text-center'>
              Карточка
            </h1>
            <p className='text-xl text-muted-foreground text-center'>
              Светлая / Тёмная тема работает
            </p>
          </div>

          <div className='flex gap-4'>
            <ThemeToggle />
          </div>
        </main>

        <main className='w-full max-w-3xl flex flex-col items-center gap-4 py-16 px-12 bg-card rounded-3xl shadow-lg'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl font-bold text-foreground text-center'>
              Карточка
            </h1>
            <p className='text-xl text-muted-foreground text-center'>
              Светлая / Тёмная тема работает
            </p>
          </div>

          <div className='flex gap-4'>
            <ThemeToggle />
          </div>
        </main>
      </div>
      <div className='flex-1 flex items-center justify-center gap-8 p-8'>
        <main className='w-full max-w-3xl flex flex-col items-center gap-4 py-16 px-12 bg-card rounded-3xl shadow-lg'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl font-bold text-foreground text-center'>
              Карточка
            </h1>
            <p className='text-xl text-muted-foreground text-center'>
              Светлая / Тёмная тема работает
            </p>
          </div>

          <div className='flex gap-4'>
            <ThemeToggle />
            <SecondaryButton>222</SecondaryButton>
            <SuccessButton>333</SuccessButton>
          </div>
          <div className='flex gap-4'>
            <PlainButton>444</PlainButton>
            <WarningButton>555</WarningButton>
            <DangerButton>666</DangerButton>
          </div>
        </main>

        <main className='w-full max-w-3xl flex flex-col items-center gap-4 py-16 px-12 bg-card-dark rounded-3xl shadow-lg'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl font-bold text-foreground text-center'>
              Карточка
            </h1>
            <p className='text-xl text-muted-foreground text-center'>
              Светлая / Тёмная тема работает
            </p>
          </div>

          <div className='flex gap-4'>
            <ThemeToggle />
          </div>
        </main>

        <main className='w-full max-w-3xl flex flex-col items-center gap-4 py-16 px-12 bg-card rounded-3xl shadow-lg'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl font-bold text-foreground text-center'>
              Карточка
            </h1>
            <p className='text-xl text-muted-foreground text-center'>
              Светлая / Тёмная тема работает
            </p>
          </div>

          <div className='flex gap-4'>
            <ThemeToggle />
          </div>
        </main>
      </div>
    </>
  );
}
