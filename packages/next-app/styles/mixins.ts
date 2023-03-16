import { CSSProperties } from 'react';
import { css, keyframes } from 'styled-components';

export const margins = css`
  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `};
  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `};
  ${(props) =>
    props.ml &&
    css`
        margin-${({ theme }) => theme.leading}: ${props.ml};
      `};
  ${(props) =>
    props.mr &&
    css`
        margin-${({ theme }) => theme.trailing}: ${props.mr};
      `};
`;

export const ellipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const textGradient = (gradient: string) => css`
  background: ${gradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

/**
 * @description Apply shimmering animation
 * @param {Object} styles
 * @example
 * shimmer(css`
 *  width: 10px,
 *  height: 15px,
 *  margin-right: 10px
 * `)
 * @example
 * styled: shimmer({ width: '10px', height: '15px' })
 * jsx: <ExampleComp isShimmering={true} />
 */
// @ts-ignore
export const shimmer =
  (styles: CSSProperties) =>
  ({
    isShimmering,
    showText
  }: {
    isShimmering: boolean;
    showText?: boolean;
  }): string =>
    isShimmering
      ? css`
          display: flex;
          width: 100%;
          height: 30px;
          position: relative;
          border-radius: 2px;
          opacity: 0.7;
          overflow: hidden;
          background-color: ${({ theme }) =>
            theme.colors.surfaceMediumEmphasis};
          ${styles};
          // to remove the gut of the component
          ${showText
            ? css``
            : css`
                font-size: 0;
                & > * {
                  transform: scale(0);
                }
              `}

          &:after {
            content: '';
            display: block;
            width: 50%;
            height: 100%;
            position: absolute;
            background: rgba(255, 255, 255, 0.2);
            left: 0;
            top: 0;
            transform: translateX(-300%) skew(10deg);
            animation: ${shimmering} linear 1s infinite forwards;
          }
        `
      : css``;

export const shimmering = keyframes`
  from { transform: translateX(-300%) skew(10deg); }
  to { transform: translateX(300%) skew(10deg); }
`;
