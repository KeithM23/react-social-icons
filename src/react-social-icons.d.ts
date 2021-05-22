import { FunctionComponent, CSSProperties } from 'react';
interface SVG {
  icon: string;
  mask: string;
  color: string;
}
interface SocialIconProps {
  className?: string;
  bgColor?: string;
  fgColor?: string;
  label?: string;
  network?: string;
  url?: string;
  defaultSVG?: SVG;
  style?: CSSProperties;
}
declare const SocialIcon: FunctionComponent<SocialIconProps>;
export { SocialIcon, SocialIconProps };