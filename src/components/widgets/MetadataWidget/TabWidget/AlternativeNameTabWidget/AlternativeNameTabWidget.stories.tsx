import React from "react";
import {AlternativeNameTabWidget, AlternativeNameTabWidgetProps} from './AlternativeNameTabWidget'

export default {
    title: '/Widgets/AlternativeNameTabWidget',
    component: AlternativeNameTabWidget,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        api: {
            description: 'API die genutzt werden soll',
            control: {type:'radio', options: ['https://www.ebi.ac.uk/ols/api/',
                    'https://semanticlookup.zbmed.de/ols/api/',
                    'http://localhost:8080/api/',
                    'http://localhost:5000/api/']}
        }
    }
}

const Template = (args: AlternativeNameTabWidgetProps) => <AlternativeNameTabWidget {...args}/>

export const AlternativeNameTabWidget1 = Template.bind({})
// @ts-ignore
AlternativeNameTabWidget1.args = {
    iri: 'http://purl.obolibrary.org/obo/NCIT_C2985',
    api: 'https://semanticlookup.zbmed.de/ols/api/'
}
