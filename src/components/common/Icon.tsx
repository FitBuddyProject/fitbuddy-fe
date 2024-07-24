import { SVGAttributes } from "react";
import * as icons from "assets/icons/index";
import { theme } from "styles/theme";

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

export interface IconProps extends SVGAttributes<SVGElement> {
  icon: IconType;
  width?: number;
  height?: number;
  fill?: string;
}

export default function Icon({ icon, width, height, fill, ...props }: IconProps) {
  const SVGIcon = icons[icon];
  return <SVGIcon width={width} height={height} fill={fill} {...props} />;
}

Icon.defaultProps = {
  width: 24,
  height: 24,
  fill: theme.color.blueGrey09,
};
