import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DEFAULTINPUTATOMPROPS } from '../../DefaultProps/Atoms';
import { DEFAULTINPUTMESSAGEPROPS, DEFAULTINPUTMOLPROPS } from '../../DefaultProps/Molecules';
import { Input } from '../../DesignSystem';
import '@piximind/ds-p-23/lib/main.css'

export default {
    title: 'Design System',
    component: Input,

} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args: any) =>
    <Input  {...args} />
    ;
export const input = Template.bind({});

input.args = {
    ...DEFAULTINPUTATOMPROPS,
    ...DEFAULTINPUTMOLPROPS,
    ...DEFAULTINPUTMESSAGEPROPS
}
