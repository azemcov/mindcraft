'use client';

import { PlainButton, PlainButtonBolt } from '@components/Buttons';

export function HeaderMenu() {
  return (
    <div className='flex rounded-xl gap-2'>
      <PlainButtonBolt>Dashboard</PlainButtonBolt>
      <PlainButton>Tasks</PlainButton>
      <PlainButton>Productivity</PlainButton>
      <PlainButton>Analysis</PlainButton>
    </div>
  );
}
