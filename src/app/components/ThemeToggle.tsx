'use client';

import { PrimaryButton } from '@components/Buttons';
import { useTheme } from '@hooks/useTheme';

export function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <>
      <PrimaryButton
        onClick={toggle}
      >
        <span className='dark:hidden'>Светлая</span>
        <span className='hidden dark:inline'>Тёмная</span>
      </PrimaryButton>
    </>
  );
}
