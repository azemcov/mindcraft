'use client';

import { PlainButton, PrimaryButton, SecondaryButton } from '@components/Buttons';

export function Header2() {
  return (
    <div className='border-card-dark border-b-1 m-4 p-2'>
      <div className='relative flex items-center h-12 bg-background'>
        <div className='flex items-center absolute left-0 text-4xl gap-4'>
          <PlainButton className='w-9'>😊</PlainButton>
          Hi, Marco!
        </div>

        <p className='mx-auto font-bold'>
          Today's tasks
        </p>

        <div className='absolute right-0 flex items-center gap-4'>
          Teams:
          <PlainButton className='w-9'>😊</PlainButton>
        </div>
      </div>
    </div>
  );
}
