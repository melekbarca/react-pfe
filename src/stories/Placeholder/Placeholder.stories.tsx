import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PlaceHolder } from '../../DesignSystem';
import { DEFAULTPLCAHOLDERPROPS } from '../../DefaultProps/Atoms';
import '@piximind/ds-p-23/lib/main.css'

export default {
    title: 'Design System',
    component: PlaceHolder,

} as ComponentMeta<typeof PlaceHolder>

const Template: ComponentStory<typeof PlaceHolder> = (args: any) => <PlaceHolder  {...args} />;
export const placeholder = Template.bind({});
placeholder.args = {
    ...DEFAULTPLCAHOLDERPROPS
}
