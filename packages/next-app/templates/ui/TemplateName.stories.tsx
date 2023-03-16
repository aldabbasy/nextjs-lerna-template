import TemplateName from './TemplateName';

const Story = (args) => <TemplateName {...args}>{args.children}</TemplateName>;

export default {
  title: 'UI/TemplateName',
  component: TemplateName
};

export const variant = Story.bind({});
variant.args = {
  children: 'TemplateName'
};
