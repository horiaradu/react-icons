import Sick from '@/public/sick.svg';
import Vacation from '@/public/vacation.svg';
import React from 'react';

const IconDefs = {
  vacation: Vacation,
  sick: Sick,
};

type Icons = 'vacation' | 'sick';

type Props = {
  icon: Icons;
  size?: number;
};

export function Icon({ icon, size }: Props) {
  return React.createElement(IconDefs[icon], {
    alt: 'icon',
    ...(size && { width: size, height: size }),
  });
}
