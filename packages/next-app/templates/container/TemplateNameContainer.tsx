import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

export type TemplateNameContainerProps = {
  children?: ReactNode;
};

const TemplateNameContainer = ({
  children
}: TemplateNameContainerProps): JSX.Element => <Wrapper>{children}</Wrapper>;

export default TemplateNameContainer;
