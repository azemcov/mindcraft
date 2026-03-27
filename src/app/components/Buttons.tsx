'use client';

import Button, { ButtonProps } from '@mui/joy/Button';

export function PrimaryButton(props: ButtonProps) {
  return (
    <Button
      variant='solid'
      color='primary'
      {...props}
    />
  );
}

export function SecondaryButton(props: ButtonProps) {
  return (
    <Button
      variant='solid'
      color='neutral'
      {...props}
    />
  );
}

export function DangerButton(props: ButtonProps) {
  return (
    <Button
      variant='solid'
      color='danger'
      {...props}
    />
  );
}

export function SuccessButton(props: ButtonProps) {
  return (
    <Button
      variant='solid'
      color='success'
      {...props}
    />
  );
}

export function WarningButton(props: ButtonProps) {
  return (
    <Button
      variant='solid'
      color='warning'
      {...props}
    />
  );
}

export function PlainButton(props: ButtonProps) {
  return (
    <Button
      variant='plain'
      color='primary'
      {...props}
    />
  );
}

export function PlainButtonBolt(props: ButtonProps) {
  return (
    <Button
      variant='plain'
      color='neutral'
      {...props}
    />
  );
}
