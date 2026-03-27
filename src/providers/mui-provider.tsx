'use client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';

const theme = extendTheme({
  fontFamily: {
    body: 'Roboto, sans-serif',
    display: 'Roboto, sans-serif',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'solid' && ownerState.color === 'primary' && {
            backgroundColor: 'var(--accent-dark)',
            color: 'var(--invert-foreground)',
            borderRadius: '2rem',
            fontWeight: 700,
            '&:hover': { backgroundColor: 'var(--accent-dark)', opacity: 0.85 },
            '&:active': { backgroundColor: 'var(--accent-dark)', opacity: 0.7 },
          }),
          ...(ownerState.variant === 'solid' && ownerState.color === 'neutral' && {
            backgroundColor: 'var(--muted)',
            color: 'var(--foreground)',
            borderRadius: '2rem',
            fontWeight: 400,
            '&:hover': { backgroundColor: 'var(--muted-hover)', opacity: 0.85 },
            '&:active': { backgroundColor: 'var(--muted-hover)', opacity: 0.7 },
          }),
          ...(ownerState.variant === 'solid' && ownerState.color === 'danger' && {
            backgroundColor: 'var(--danger)',
            color: 'var(--invert-foreground)',
            borderRadius: '2rem',
            fontWeight: 700,
            '&:hover': { backgroundColor: 'var(--danger)', opacity: 0.85 },
            '&:active': { backgroundColor: 'var(--danger)', opacity: 0.7 },
          }),
          ...(ownerState.variant === 'solid' && ownerState.color === 'success' && {
            backgroundColor: 'var(--success)',
            color: 'var(--invert-foreground)',
            borderRadius: '2rem',
            fontWeight: 700,
            '&:hover': { backgroundColor: 'var(--success)', opacity: 0.85 },
            '&:active': { backgroundColor: 'var(--success)', opacity: 0.7 },
          }),
          ...(ownerState.variant === 'solid' && ownerState.color === 'warning' && {
            backgroundColor: 'var(--warning)',
            color: 'var(--invert-foreground)',
            borderRadius: '2rem',
            fontWeight: 700,
            '&:hover': { backgroundColor: 'var(--warning)', opacity: 0.85 },
            '&:active': { backgroundColor: 'var(--warning)', opacity: 0.7 },
          }),
          ...(ownerState.variant === 'plain' && ownerState.color === 'primary' && {
            backgroundColor: 'var(--card)',
            color: 'var(--foreground)',
            borderRadius: '2rem',
            fontWeight: 400,
            '&:hover': { backgroundColor: 'var(--muted-hover)', opacity: 0.85 },
            '&:active': { backgroundColor: 'var(--muted-hover)', opacity: 0.7 },
          }),
          ...(ownerState.variant === 'plain' && ownerState.color === 'neutral' && {
            backgroundColor: 'var(--card)',
            color: 'var(--foreground)',
            borderRadius: '2rem',
            fontWeight: 700,
            '&:hover': { backgroundColor: 'var(--muted-hover)', opacity: 0.85 },
            '&:active': { backgroundColor: 'var(--muted-hover)', opacity: 0.7 },
          }),
        }),
      },
    },
  },
});

export function MuiProvider({ children }: { children: React.ReactNode }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: 'css' });
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (!names.length) return null;
    const styles = names
      .map(name => typeof cache.inserted[name] === 'string' ? cache.inserted[name] : '')
      .join('');
    return (
      <style
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <CssVarsProvider theme={theme}>
        {children}
      </CssVarsProvider>
    </CacheProvider>
  );
}
