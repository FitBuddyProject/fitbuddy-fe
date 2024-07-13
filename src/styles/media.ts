import { css, CSSProp } from "styled-components";

interface MediaQueryProps {
  mobile: number;
  laptop: number;
}

const sizes: MediaQueryProps = {
  mobile: 600,
  laptop: 992,
};

type BackQuoteArgs = string[];

const media = {
  mobile: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp => css`
    @media only screen and (max-width: ${sizes.mobile}px) {
      ${css(literals, ...args)}
    }
  `,
  laptop: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp => css`
    @media only screen and (max-width: ${sizes.laptop}px) {
      ${css(literals, ...args)}
    }
  `,
} as Record<keyof typeof sizes, (literals: TemplateStringsArray, ...args: BackQuoteArgs) => CSSProp>;

export default media;
