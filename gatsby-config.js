module.exports = {
	siteMetadata: {
		bio: 'Coding, Reading, and STOCK in between..',
		title: `Manoj Gautam`,
		author: `Manoj Gautam`,
		description: `Personal Blog of Manoj Gautam`,
		siteUrl: `https://manojgautam.com.np`,
		social: {
			twitter: `https://twitter.com/nix1947`,
			github: 'https://github.com/nix1947',
			youtube: 'https://youtube.com/openpy',
			soundcloud: 'https://soundcloud.com/#',
			instagram: 'https://instagram.com/manojgautami',
			email: 'mailto:manojit.gautam@gmail.com',
			stackoverflow: 'https://stackoverflow.com/users/shining/',
			newsletter: 'https://tinyletter.com/#',
		},
	},
	plugins: [
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
					`gatsby-remark-external-links`,
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Div's Blog`,
				short_name: `Div`,
				start_url: `/`,
				background_color: `#121212`,
				theme_color: `#1d1d1d`,
				display: `minimal-ui`,
				icon: `static/favicon.png`,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `salmon`,
			},
		},
		{
			resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
			options: {
				devMode: false,
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-92360219-3',
				head: false,
				anonymize: true,
				respectDNT: true,
			},
		},
		'gatsby-plugin-catch-links',
	],
};
