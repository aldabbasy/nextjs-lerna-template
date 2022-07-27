import { ThemeContext } from '@/contexts/themeContext';
import { shimmer } from '@/styles/mixins';
import { CSSProperties, ReactNode, useContext } from 'react';
import rtlCSSJS from 'rtl-css-js';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  ${({ style }) => shimmer(style)};
  text-align: ${({ theme }) => theme.leading};
  ${(props) => props.mixins.join('')};
`;

export type FlexProps = CSSProperties & {
  isShimmering?: boolean;
  children?: ReactNode;
  testId?: string;
  mixins?: string[];
  onClick?: () => void;
};

const Flex = ({
  isShimmering,
  children,
  mixins = [],
  testId,
  onClick,
  ...props
}: FlexProps): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const directionalProps = theme?.isRtl ? rtlCSSJS(props) : props;

  return (
    <Wrapper
      style={directionalProps}
      mixins={mixins}
      data-testid={testId}
      onClick={!isShimmering ? onClick : undefined}
      isShimmering={isShimmering}
    >
      {children}
    </Wrapper>
  );
};

export default Flex;
