import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from '../../DesignSystem';
import { DEFAULTAVATARPROPS } from '../../DefaultProps/Atoms';
import '@piximind/ds-p-23/lib/main.css'

export default {
    title: 'Design System',
    component: Avatar,

} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args: any) => <Avatar  {...args} />;
export const avatar = Template.bind({});
avatar.args = {
    ...DEFAULTAVATARPROPS
}
