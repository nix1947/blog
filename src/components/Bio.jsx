import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { mediaMax } from '@divyanshu013/media';
import { rhythm } from '../utils/typography';
import { getTheme } from '../utils/theme';
import ThemeContext from './ThemeContext';

const Bio = () => {
	const data = useStaticQuery(graphql`
		query BioQuery {
			avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
				childImageSharp {
					fixed(width: 64, height: 64) {
						...GatsbyImageSharpFixed
					}
				}
			}
			site {
				siteMetadata {
					author
					social {
						twitter
						github
						youtube
						newsletter
					}
				}
			}
		}
	`);

	const { author, social } = data.site.siteMetadata;
	const { theme } = useContext(ThemeContext);
	const { color, secondary } = getTheme(theme);
	return (
		<div
			css={{
				display: `grid`,
				gridTemplateColumns: 'auto auto',
				alignItems: 'start',
				a: {
					borderBottomColor: color,
					'&:hover, &:focus': {
						borderBottomStyle: 'solid',
						borderBottomColor: color,
					},
				},
				[mediaMax.small]: {
					gridTemplateColumns: 'auto',
				},
			}}
		>
			<Image
				fixed={data.avatar.childImageSharp.fixed}
				alt={author}
				css={{
					marginTop: 8,
					marginRight: rhythm(1),
					borderRadius: `100%`,
					opacity: 0.87,
					[mediaMax.small]: {
						marginBottom: 8,
					},
				}}
				imgStyle={{
					borderRadius: `50%`,
				}}
			/>
			<div css={{ fontSize: 16, color: secondary }}>
				<p>
					Personal blog of <a href={social.twitter}>{author}</a>. I’m a{' '}
					<a href={social.github}>Backend Developer</a> who use Python, Django and JavaScript to develop software.
				 		I have created a website that contains free text and video tutorials on computer science subjects <a href={'https://codeschoolnepal.com'}>CodeSchoolNepal</a>
					.
				</p>
				<p>
					You may follow me on <a href={social.twitter}>twitter</a> or join my{' '}
					<a href='linkedin.com/in/manojgautamnepal'>Linkedin</a> for latest updates.
				</p>
			</div>
		</div>
	);
};

export default Bio;
