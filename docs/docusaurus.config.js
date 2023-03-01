// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'signia',
	tagline: 'Scaleable reactive signals',
	favicon: 'img/favicon.png',

	// Set the production url of your site here
	url: 'https://signia.tldraw.dev',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'tldraw', // Usually your GitHub org/user name.
	projectName: 'signia', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	plugins: [require.resolve('docusaurus-lunr-search')],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/signia-social-card__light.jpg',
			navbar: {
				title: 'signia',
				logo: {
					alt: 'signia logo',
					src: 'img/icon-small.svg',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Docs',
					},
					{
						type: 'doc',
						docId: 'API/signia/signia',
						position: 'left',
						label: 'API',
					},
					{
						href: 'https://github.com/tldraw/signia',
						label: 'GitHub',
						position: 'right',
					},
					{
						href: 'https://discord.gg/3GJTuqay',
						label: 'Discord',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Developers',
						items: [
							{
								label: 'Docs',
								to: '/docs/intro',
							},
							{
								label: 'API',
								to: '/docs/API/signia',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Discord',
								href: 'https://discord.com/invite/SBBEVCA4PG',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/tldraw',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/tldraw/signia',
							},
						],
					},
					{
						title: 'Links',
						items: [
							{
								label: 'tldraw',
								href: 'https://beta.tldraw.com',
							},
							{
								label: 'tldraw for devs',
								href: 'https://tldraw.dev',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} tldraw GB Ltd.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
}

module.exports = config
