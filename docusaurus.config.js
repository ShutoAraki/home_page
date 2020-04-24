const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
    title: 'Shuto Araki',
    tagline: 'Shuto\'s Personal Website',
    url: 'https://shutoaraki.com',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'ShutoAraki',
    projectName: 'home_page',
    themeConfig: {
        navbar: {
            title: 'Shuto Araki',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            links: [{
                    to: 'docs/doc1',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
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
            links: [{
                    title: 'Docs',
                    items: [{
                            label: 'Style Guide',
                            to: 'docs/doc1',
                        },
                        {
                            label: 'Second Doc',
                            to: 'docs/doc2',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                    ],
                },
                {
                    title: 'Social',
                    items: [{
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/ShutoAraki',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/ShutoAraki',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Shuto Araki. Built with Docusaurus.`,
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