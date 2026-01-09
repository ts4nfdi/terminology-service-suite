import React from 'react';
import { EuiCard, EuiIcon } from '@elastic/eui';

export interface EntityCardWidgetProps{
    title: string;
    description: string;
    iconType?: any;
    onClick?: ()=> void;
}

export function EntityCardWidget ({ title, description, iconType = 'database', onClick}: EntityCardWidgetProps) {
    return (
        <EuiCard
            data-testid="entity-card"
            icon={<EuiIcon size="l" type={iconType} />}
            title={title}
            description={description || 'No description provided.'}
            onClick={onClick}
            paddingSize="m"
        />
    );
};
