import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'đ ćčżĺĺŽ˘',
    description: 'Just playing around.',
    base: '/vitepress-starter/',
    // head: [
    //     [
    //         'script',
    //         {
    //             src: 'https://giscus.app/client.js',
    //             'data-repo': 'acmu/vitepress-starter',
    //             'data-repo-id': 'R_kgDOJBVHNQ',
    //             'data-category': 'Announcements',
    //             'data-category-id': 'DIC_kwDOJBVHNc4CUcwU',
    //             'data-mapping': 'pathname',
    //             'data-strict': '0',
    //             'data-reactions-enabled': '1',
    //             'data-emit-metadata': '0',
    //             'data-input-position': 'bottom',
    //             'data-theme': 'preferred_color_scheme',
    //             'data-lang': 'zh-CN',
    //             crossorigin: 'anonymous',
    //             async: '',
    //         },
    //     ],
    // ],

    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7
    // 8
    // 9
    themeConfig: {
        sidebar: [
            {
                text: 'ĺ¨ĺ',
                items: [
                    { text: '01ć', link: '/weekly/01' },
                    { text: '02ć', link: '/weekly/02' },
                    { text: '03ć', link: '/weekly/03' },
                    { text: '04ć', link: '/weekly/04' },
                    { text: '05ć', link: '/weekly/05' },
                    { text: '06ć', link: '/weekly/06' },
                    { text: '07ć', link: '/weekly/07' },
                    { text: '08ć', link: '/weekly/08' },
                    { text: '09ć', link: '/weekly/09' },
                    { text: '10ć', link: '/weekly/10' },
                ],
            },
            {
                text: 'çĽčŻ',
                items: [
                    { text: 'ćľŽçšć°ä¸äşčżĺś', link: '/knowledge/01' },
                    {
                        text: 'ESLint ĺ Prettier č§čäťŁç ',
                        link: '/knowledge/02',
                    },
                    { text: 'ĺćŁ 504 ä¸čżĺśč˝Źć˘', link: '/knowledge/03' },
                    { text: 'NPM ĺĺ¸ TS ĺ', link: '/knowledge/04' },
                    { text: 'ĺ°éš¤ĺćźć¨č', link: '/knowledge/05' },
                    {
                        text: 'ĺ¨ Mac ä¸­ĺ Windows ä¸ć ˇĺć˘ĺşç¨',
                        link: '/knowledge/06',
                    },
                    { text: 'Chrome 96 ć´ć°', link: '/knowledge/07' },
                    { text: 'ćľč§ĺ¨ćäťśĺĽé¨ĺŽčˇľ', link: '/knowledge/08' },
                ],
            },
            {
                text: 'JavaScript',
                items: [
                    {
                        text: 'defineProperty čŻŚçťč§ŁčŻť',
                        link: '/JavaScript/101',
                    },
                    { text: 'JavaScript ĺŻščąĄč§ŁčŻť', link: '/JavaScript/102' },
                    {
                        text: 'JavaScript çĺŻščąĄä¸çť§ćż',
                        link: '/JavaScript/103',
                    },
                    {
                        text: 'JavaScript ĺźć­Ľä¸ Promise',
                        link: '/JavaScript/104',
                    },
                    { text: 'JavaScript ć­Łĺçč§Ł', link: '/JavaScript/105' },
                    {
                        text: 'ĺ¨ä¸č˝˝éčś1äşżçĺşćŻĺŚä˝ĺ¤ć­JSçąťĺçďź',
                        link: '/JavaScript/106',
                    },
                    { text: 'JavaScript Symbol č§ŁčŻť', link: '/JavaScript/107' },
                    { text: 'ä˝żç¨ npm link č°čŻĺ', link: '/JavaScript/108' },
                    { text: 'ĺŻééžčżçŽçŹŚ', link: '/JavaScript/109' },
                ],
            },
        ],
    },
});
