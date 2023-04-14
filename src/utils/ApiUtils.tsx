export function switchEntityType(entityType: string) {
    switch (entityType) {
        case 'class':
            return 'terms';
        case 'property':
            return 'properties';
        case 'individual':
            return 'individuals';
        default:
            return 'terms'
    }
}
