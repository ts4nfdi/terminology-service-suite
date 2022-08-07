import React from "react";
import {TabWidget, TabWidgetProps} from './TabWidget'

export default {
    title: '/Widgets/TabWidget',
    component: TabWidget,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        api: {
            description: 'API',
            control: {type:'radio', options: ['https://www.ebi.ac.uk/ols/api/',
                    'https://semanticlookup.zbmed.de/ols/api/',
                    'http://localhost:8080/api/',
                    'http://localhost:5000/api/']}
        }
    }
}

const Template = (args: TabWidgetProps) => <TabWidget {...args}/>

export const TabWidget1 = Template.bind({})

// @ts-ignore
TabWidget1.args = {
    iri: 'http://purl.obolibrary.org/obo/NCIT_C2985',
    api: 'https://semanticlookup.zbmed.de/ols/api/'
}
