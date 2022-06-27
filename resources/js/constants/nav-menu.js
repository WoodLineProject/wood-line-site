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
    },
    {
        icon: 'mdi-folder',
        text: 'singIn',
        items:[
            {
                to: '/login',
                icon: 'mdi-home-circle-outline',
                text: 'login',
            },
            {
                to: '/registry',
                icon: 'mdi-account-question',
                text: 'reg',
            },
        ]
    }
]
