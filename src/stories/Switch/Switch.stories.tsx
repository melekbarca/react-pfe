import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Checkbox } from '../../DesignSystem';
import '@piximind/ds-p-23/lib/main.css'
import { DEFAULTCHECKBOXPROPS } from '../../DefaultProps/Atoms';

export default {
    title: 'Design System',
    component: Checkbox,

} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args: any) => <Checkbox {...args} />;
export const ckeckbox = Template.bind({});

ckeckbox.args = {
    ...DEFAULTCHECKBOXPROPS
}
