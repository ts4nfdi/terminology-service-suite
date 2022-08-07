import React from "react";
import {CrossRefTabWidget, CrossRefWidgetProps} from './CrossRefTabWidget'

export default {
    title: '/Widgets/CrossRefTabWidget',
    component: CrossRefTabWidget,
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

const Template = (args: CrossRefWidgetProps) => <CrossRefTabWidget {...args}/>

export const CrossRefTabWidget1 = Template.bind({})

// @ts-ignore
CrossRefTabWidget1.args = {
    iri: 'http://purl.obolibrary.org/obo/NCIT_C2987',
    api: 'https://www.ebi.ac.uk/ols/api/'
}
