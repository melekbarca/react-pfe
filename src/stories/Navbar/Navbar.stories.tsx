import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Navbar } from '../../DesignSystem';
import { DEFAULTTOPBARPROPS } from '../../DefaultProps/Molecules';
import { withRouter } from 'storybook-addon-react-router-v6';
import '@piximind/ds-p-23/lib/main.css'

export default {
    title: 'Design System',
    component: Navbar,
    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: '/design-system-molecules--navbar',
        }
    }
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args: any) => <Navbar {...args} />
export const navbar = Template.bind({});

navbar.args = {
    ...DEFAULTTOPBARPROPS
}
