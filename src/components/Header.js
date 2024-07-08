import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faLinkedin,
	faMedium,
	faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack, Link } from '@chakra-ui/react';

const socials = [
	{
		icon: faEnvelope,
		url: 'mailto: hello@example.com',
	},
	{
		icon: faGithub,
		url: 'https://github.com',
	},
	{
		icon: faLinkedin,
		url: 'https://www.linkedin.com',
	},
	{
		icon: faMedium,
		url: 'https://medium.com',
	},
	{
		icon: faStackOverflow,
		url: 'https://stackoverflow.com',
	},
];

const Header = () => {
	const [showHeader, setShowHeader] = useState(true);
	const prevScrollY = useRef(0);

	const handleScroll = () => {
		const currentScrollY = window.scrollY;
		if (currentScrollY > prevScrollY.current) {
			setShowHeader(false);
		} else {
			setShowHeader(true);
		}
		prevScrollY.current = currentScrollY;
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleClick = (anchor) => () => {
		const id = `${anchor}-section`;
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	};

	return (
		<Box
			position='fixed'
			top={0}
			left={0}
			right={0}
			transform={showHeader ? 'translateY(0)' : 'translateY(-200px)'}
			transitionProperty='transform'
			transitionDuration='.3s'
			transitionTimingFunction='ease-in-out'
			backgroundColor='#18181b'
		>
			<Box
				color='white'
				maxWidth='1280px'
				margin='0 auto'
			>
				<HStack
					px={16}
					py={4}
					justifyContent='space-between'
					alignItems='center'
				>
					<nav>
						{/* Add social media links based on the `socials` data */}
						{socials.map((items) => (
							<Link
								key={items.url}
								href={items.url}
								px={2}
							>
								<FontAwesomeIcon
									icon={items.icon}
									size='2x'
								/>
							</Link>
						))}
					</nav>
					<nav>
						<HStack spacing={8}>
							{/* Add links to Projects and Contact me section */}
							<Link
								onClick={handleClick('contactme')}
								href='/#contactme-section'
							>
								Contact Me
							</Link>
							<Link
								onClick={handleClick('projects')}
								href='/#projects-section'
							>
								Projects
							</Link>
						</HStack>
					</nav>
				</HStack>
			</Box>
		</Box>
	);
};

export default Header;
