import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Label } from '../../DesignSystem';
import '@piximind/ds-p-23/lib/main.css'
import { DEFAULTLABELPROPS } from '../../DefaultProps/Atoms';
export default {
    title: 'Design System',
    component: Label,

} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args: any) => <Label  {...args} />;
export const label = Template.bind({});

label.args = {
    ...DEFAULTLABELPROPS
}
