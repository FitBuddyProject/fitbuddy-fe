import { SVGAttributes } from "react";
import * as icons from "components/common/Icon/index";

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

export interface IconProps extends SVGAttributes<SVGElement> {
  icon: IconType;
  width?: number;
  height?: number;
  fill?: string;
}

export default function Icon({ icon, width, height, fill = "none", ...props }: IconProps) {
  const SVGIcon = icons[icon];
  return <SVGIcon width={width} height={height} fill={fill} {...props} />;
}

Icon.defaultProps = {
  width: 24,
  height: 24,
};
