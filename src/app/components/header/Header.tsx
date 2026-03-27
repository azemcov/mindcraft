'use client';

import { PrimaryButton, SecondaryButton } from '@components/Buttons';
import { HeaderMenu } from '@components/header/HeaderMenu';

export function Header() {
  return (
    <div className='flex items-center justify-between h-12 m-4 p-2 bg-card rounded-3xl '>
      <PrimaryButton
        className='w-9'
        onClick={() => {
          console.log('222');
        }}
      >
        <span className='dark:hidden'>🤍</span>
        <span className='hidden dark:inline'>🖤</span>
      </PrimaryButton>
      <HeaderMenu />
      <div className='flex items-center gap-2'>
        <div className='bg-muted rounded-3xl'>
          <SecondaryButton
            onClick={() => {
              console.log('111');
            }}
          >
            Private
          </SecondaryButton>
          <PrimaryButton
            onClick={() => {
              console.log('222');
            }}
          >
            Team
          </PrimaryButton>
        </div>
        <PrimaryButton
          className='w-9'
          onClick={() => {
            console.log('222');
          }}
        >
          <span className='dark:hidden'>🤍</span>
          <span className='hidden dark:inline'>🖤</span>
        </PrimaryButton>
      </div>
    </div>
  );
}
