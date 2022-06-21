export const NAV_MENU = [
    /// is not folder
    {
        to: '/',
        icon: 'mdi-home-circle-outline',
        text: 'home',
    },
    {
        to: '/test',
        icon: 'mdi-account-question',
        text: 'test',
    },
    // is folder
    {
        icon: 'mdi-folder',
        text: 'folder',
        items:[
            {
                to: '/',
                icon: 'mdi-home-circle-outline',
                text: 'home',
            },
            {
                to: '/test',
                icon: 'mdi-account-question',
                text: 'test',
            },
        ]
    }
]
