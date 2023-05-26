import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6';
import { DEFAULTTABPROPS } from '../../DefaultProps/Molecules';
import { Tab } from '../../DesignSystem';
import '@piximind/ds-p-23/lib/main.css'

export default {
    title: 'Design System',
    component: Tab,
    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: '/design-system-molecules--tab',
        }
    }

} as ComponentMeta<typeof Tab>

const Template: ComponentStory<typeof Tab> = (args: any) => <Tab  {...args} />;
export const tab = Template.bind({});
tab.args = {
    ...DEFAULTTABPROPS
}
