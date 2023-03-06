import React from 'react';
import { Sick } from './sick';
import { Vacation } from './vacation';

const IconDefs = {
  vacation: Vacation,
  sick: Sick,
};

type Icons = keyof typeof IconDefs;

type Props = {
  icon: Icons;
  size?: number;
};

export function Icon({ icon, size }: Props) {
  return React.createElement(IconDefs[icon], {
    alt: 'icon',
    width: size,
    height: size,
  });
}
