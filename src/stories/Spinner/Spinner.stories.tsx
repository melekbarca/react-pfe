import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Spinner } from '../../DesignSystem';
import { DEFAULTSPINNERPROPS } from '../../DefaultProps/Atoms';
import '@piximind/ds-p-23/lib/main.css'

export default {
    title: 'Design System',
    component: Spinner,

} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args: any) => <Spinner  {...args} />;
export const spinner = Template.bind({});
spinner.args = {
    ...DEFAULTSPINNERPROPS
}
