import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Icon } from '../../DesignSystem';
import { DEFAULTATOMICONPROPS } from '../../DefaultProps/Atoms';
import '@piximind/ds-p-23/lib/main.css'

export default {
    title: 'Design System',
    component: Icon,

} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args: any) => <Icon  {...args} />;
export const icon = Template.bind({});
icon.args = {
    ...DEFAULTATOMICONPROPS
}
