module.exports = {
    title: 'Watcher',
    description: 'Watcher is a highly advanced discord bot that allows you to monitor the uptime/downtime of other bots/websites of your choice! Also configurable via the dashboard: https://watcherbot.xyz',
    host: 'localhost',
    themeConfig: {
        displayAllHeaders: true,
        logo: 'https://watcherbot.xyz/image/cbot-1.png',
        nav: [
            { text: 'Invite Watcher', link: 'https://watcherbot.xyz/invite' },
            { text: 'Get Support', link: 'https://discord.gg/cScDu3qqYN' }
        ],
        repo: 'DaKing01/embedd',
        docsRepo: 'DaKing01/documentation',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        repoLabel: 'Contribute',
        sidebar: {
            '/guides/': [
                {
                    title: 'Helpful Guides',
                    path: '',
                    collapsable: false,
                    children: [
                        'automod',
                        'custom-colors'
                    ]
                },
            ],
            '/': [
                {
                    title: 'Watcher',
                    path: '/'
                },
                {
                    title: 'Tutorial',
                    collapsable: false,
                    children: [
                        {
                            title: 'Intotroduction',
                            path: '/tutorial/tutorial/',
                            collapsable: false,
                            children: [
                                {title: 'Intro', path: '/tutorial/tutorial/'},
                            ]
                        },
                        {
                            title: 'API',
                            path: '/tutorial/api/',
                            collapsable: false,
                            children: [
                                {title: 'API', path: 'embed/html-embed/api'}
                            ]
                        },
                    ]
                },
            ]
        },
        searchPlaceholder: 'Search',
        nextLinks: true,
        prevLinks: true,
        smoothScroll: true
    },
    plugins: [
        'vuepress-plugin-nprogress',
        ['vuepress-plugin-clean-urls', {
            normalSuffix: '/'
        }]
    ],
    markdown: {
        lineNumbers: true
    },
    configureWebpack: {
        serve: {
            hot: {
                port: 9091,
            }
        }
    },
    evergreen: true
};
