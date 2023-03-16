import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

export type TemplateNameProps = {
  children?: ReactNode;
};

const TemplateName = ({ children }: TemplateNameProps): JSX.Element => (
  <Wrapper>{children}</Wrapper>
);

export default TemplateName;
