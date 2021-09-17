export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: `Exercitation sint labore excepteur deserunt ad tempor in occaecat eiusmod nisi laboris.`,
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: `Lorem excepteur exercitation laborum velit.`,
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: `In nostrud culpa consequat aliquip dolore qui consequat proident cillum eu duis velit.`,
            picture: null
        },
    ]    
})
