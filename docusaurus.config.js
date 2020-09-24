const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
    title: 'Shuto Araki',
    tagline: 'Shuto\'s Personal Website',
    url: 'https://shutoaraki.github.io/',
    baseUrl: '/home_page/',
    favicon: 'img/favicon.ico',
    organizationName: 'ShutoAraki',
    projectName: 'home_page',
    themeConfig: {
        navbar: {
            title: 'Shuto Araki',
            logo: {
                alt: 'My Site Logo',
                src: 'img/newLogo.png',
            },
            links: [
                { to: 'blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/ShutoAraki/home_page',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Professional',
                    items: [{
                            label: 'GitHub',
                            href: 'https://github.com/ShutoAraki',
                        },
                        {
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/in/shuto-araki/'
                        }
                    ]
                },
                {
                    title: 'Social',
                    items: [{
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/ShutoAraki',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Shuto Araki. All rights reserved.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/ShutoAraki/home_page/edit/master/',
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                },
                blog: {
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    stylesheets: [
        'https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css',
    ],
};