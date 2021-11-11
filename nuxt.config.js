export default {
	target: 'static',
	ssr: true,
	components: [{ path: '~/components', extensions: ['vue'], level: 0, pathPrefix: false }],
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Sean Grindal | Developer',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'author', content: 'Sean Grindal' },
			{
				hid: 'description',
				name: 'description',
				content:
					"My name's Sean Grindal. I am a full-stack web developer working from Toronto, Ontario. I work with startups, digital agencies, and aspiring individuals to build their unique digital products. "
			},
			{
				name: 'keywords',
				content:
					'Sean Grindal, Web developer, Web Application Developer, Freelancer, Calgary, Alberta, Canada, Toronto, Ontario'
			}
		],
		link: [
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap'
			},
			{ rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicons/favicon-32x32.png'
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicons/favicon-16x16.png'
			},
			{
				rel: 'apple-touch-icon',
				type: 'image/png',
				sizes: '180x180',
				href: '/favicons/apple-touch-icon.png'
			},
			{ rel: 'manifest', href: '/favicons/site.webmanifest' }
		]
	},
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: ['~plugins/vuex-router-sync.js'],
	generate: {
		routes: [
			'/work/creatives-landing',
			'/work/ricochet-landing',
			'/work/zenfully-landing',
			'/work/zenfully-app'
		]
	},
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: ['@nuxtjs/google-analytics'],
	googleAnalytics: {
		id: 'UA-145065375-1'
	},
	/*
	 ** Nuxt.js modules
	 */
	modules: ['@nuxtjs/style-resources'],
	styleResources: {
		scss: ['~/assets/styles/main.scss']
	},
	generate: {
		fallback: true
	}
}
