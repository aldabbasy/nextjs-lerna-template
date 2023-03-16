import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

export type TemplateNameScreenProps = {
  children?: ReactNode;
};

const TemplateNameScreen = ({
  children
}: TemplateNameScreenProps): JSX.Element => <Wrapper>{children}</Wrapper>;

export default TemplateNameScreen;
