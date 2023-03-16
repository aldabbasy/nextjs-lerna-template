import { Trans } from 'react-i18next';
import Box from './Box';

const Translation = ({ children }) => <Trans>{children}</Trans>;

const Story = (args) => (
  <Box {...args}>
    <Translation>{args.children}</Translation>
  </Box>
);

export default {
  title: 'UI/Box',
  component: Box
};

export const twoByTwo = Story.bind({});
twoByTwo.args = {
  children: 'toggle_theme',
  backgroundColor: 'red',
  height: 200,
  width: 200
};
export const oneByOne = Story.bind({});
oneByOne.args = {
  children: 'toggle_theme',
  backgroundColor: 'red',
  height: 100,
  width: 100
};
export const threeByThree = Story.bind({});
threeByThree.args = {
  children: 'toggle_theme',
  backgroundColor: 'red',
  height: 300,
  width: 300
};
