function capitalize(string) {
    if (string !== undefined) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }    
}

export default capitalize;