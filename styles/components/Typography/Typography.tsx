import { CSSProperties, ElementType, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { ColorName } from '@/constants/types';
import { ellipsis, margins, textGradient } from '@/styles/mixins';

const FONT_WEIGHTS = {
  REGULAR: 400,
  MEDIUM: 500,
  BOLD: 700
};

export const typographyVariants: Record<TypographyVariantType, string> = {
  display: css`
    font-size: 32px;
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.BOLD};
    line-height: 40px;
  `,
  heading1: css`
    font-size: 26px;
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.MEDIUM};
    line-height: 40px;
  `,
  heading2: css`
    font-size: 22px;
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.MEDIUM};
    line-height: 32px;
  `,
  heading3: css`
    font-size: 18px;
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.MEDIUM};
    line-height: 24px;
  `,
  heading4: css`
    font-size: 14px;
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.BOLD};
    line-height: 24px;
  `,
  body1: css`
    font-size: 16px;
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.REGULAR};
    line-height: 21px;
  `,
  body2: css`
    font-size: 14px;
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.REGULAR};
    line-height: 21px;
  `,
  caption1: css`
    font-size: 13px;
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.MEDIUM};
    line-height: 16px;
  `,
  caption2: css`
    font-size: 12px;
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.REGULAR};
    line-height: 16px;
  `,
  caption_uppercase: css`
    font-size: 12px;
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.MEDIUM};
    line-height: 16px;
    text-transform: uppercase;
  `,
  navbar: css`
    font-size: 12px;
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.REGULAR};
    line-height: 16px;
  `,
  navbar_seletced: css`
    font-size: 12px;
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.BOLD};
    line-height: 16px;
  `
};

const Wrapper = styled.div`
  color: ${({ theme, color }) => theme.colors?.[color]};
  ${margins};
  text-align: ${({ theme, align }) => theme?.[align]};
  ${(props) => typographyVariants[props.variant]};
  ${(props) => props.ellipsis && ellipsis};
  ${(props) =>
    props.textGradient &&
    textGradient(props.theme.colors?.[props.textGradient])};
`;

export type TypographyVariantType =
  | 'display'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'body1'
  | 'body2'
  | 'caption1'
  | 'caption2'
  | 'caption_uppercase'
  | 'navbar'
  | 'navbar_seletced';

export type TypographyProps = {
  children: ReactNode;
  as?: ElementType;
  color?: ColorName;
  align?: 'leading' | 'trailing' | 'center';
  testId?: string;
  ellipsis?: boolean;
  textGradient?: string;
  width?: CSSProperties['width'];
  variant: TypographyVariantType;
};

const Typography = ({
  variant,
  color = 'onSurfaceHighEmphasis',
  children,
  align = 'leading',
  as = 'div',
  ellipsis,
  textGradient,
  width,
  testId
}: TypographyProps): JSX.Element => (
  <Wrapper
    as={as}
    variant={variant}
    color={color}
    align={align}
    data-testid={testId}
    ellipsis={ellipsis}
    textGradient={textGradient}
    style={{ width }}
  >
    {children}
  </Wrapper>
);

export default Typography;
