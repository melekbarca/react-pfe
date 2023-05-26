import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Radio } from '../../DesignSystem';
import { DEFAULTRADIOPROPS } from '../../DefaultProps/Atoms';
import '@piximind/ds-p-23/lib/main.css'

export default {
    title: 'Design System',
    component: Radio,

} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args: any) => <Radio  {...args} />;
export const radio = Template.bind({});
radio.args = {
    ...DEFAULTRADIOPROPS
}
