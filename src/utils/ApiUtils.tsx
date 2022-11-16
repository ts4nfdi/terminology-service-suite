export function switchEntityType(objType: string) {
    switch (objType) {
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
