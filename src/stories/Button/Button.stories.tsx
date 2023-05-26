import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '../../DesignSystem';
import { DEFAULTBUTTONPROPS, DEFAULTIMPORTATOMICONPROPS, DEFAULTMOLECULEBUTTONPROPS } from '../../DefaultProps/Atoms';
import '@piximind/ds-p-23/lib/main.css'

export default {
    title: 'Design System',
    component: Button,

} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: any) => <Button  {...args} />;
export const btn = Template.bind({});
btn.args = {
    ...DEFAULTBUTTONPROPS,
    ...DEFAULTMOLECULEBUTTONPROPS,
    ...DEFAULTIMPORTATOMICONPROPS,
}
