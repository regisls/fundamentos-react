/*
    <If test={exp}>
        <span>...</span>
        <span>...</span>
        <span>...</span>
    </If>
*/

export default props => {
    
    // Para retornar algum elemento filho específico
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0];

    if (props.test) {
        return props.children;
    } else {
        return false;
    }
}