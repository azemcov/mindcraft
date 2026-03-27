'use client';

import { ThemeContext } from '@providers/theme-provider';
import { useContext } from 'react';

export const useTheme = () => useContext(ThemeContext);
