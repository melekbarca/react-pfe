import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DEFAULTTABLAPROPS } from '../../DefaultProps/Oragnism';
import { Table } from '../../DesignSystem';
import { DEFAULTPAGINATIONPROPS } from '../../DefaultProps/Atoms';
import '@piximind/ds-p-23/lib/main.css'

export default {
    title: 'Design System',
    component: Table,

} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args: any) =>
    <Table {...args} withCheckox />
    ;
export const table = Template.bind({});

table.args = {
    ...DEFAULTTABLAPROPS,
    ...DEFAULTPAGINATIONPROPS
}
