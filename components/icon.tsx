import Image from 'next/image';

type Icons = 'vacation' | 'sick';

type Props = {
  icon: Icons;
  size?: number;
};

export function Icon({ icon, size }: Props) {
  return <Image src={require(`public/${icon}.svg`)} alt="icon" width={size} />;
}
