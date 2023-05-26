import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DEFAULTINPUTMESSAGEPROPS } from '../../DefaultProps/Molecules';
import { DEFAULTTEXTAREAPROPS } from '../../DefaultProps/Atoms';
import { TextArea } from '../../DesignSystem';
import '@piximind/ds-p-23/lib/main.css'

export default {
    title: 'Design System',
    component: TextArea,

} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args: any) => <TextArea  {...args} />;
export const textarea = Template.bind({});
textarea.args = {
    ...DEFAULTTEXTAREAPROPS,
    ...DEFAULTINPUTMESSAGEPROPS
}
