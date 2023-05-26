import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from '../../DesignSystem';
import { DEFAULTTEXTPROPS } from '../../DefaultProps/Atoms';
import '@piximind/ds-p-23/lib/main.css'

export default {
    title: 'Design System',
    component: Text,

} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args: any) => <Text  {...args} />;
export const text = Template.bind({});
text.args = {
    ...DEFAULTTEXTPROPS
}
