// TODO: not really useful anymore, name does not express conversion to plural, class and term have to be used for different api versions respectively
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

