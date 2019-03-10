
export default Object.freeze({
    name: 'Fábio Pichler',
    version: '0.0.1',

    updateTitle(title: string|null = null) {
        document.title = title ? `${title} | ${this.name}` : this.name;
    },

    helpers: {
        
    }
});
