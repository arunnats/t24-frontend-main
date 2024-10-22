"use client";

import { useGlobalContext } from '@/lib/global-context';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Menu from '@/components/common/Menu';

import styles from './navbar.module.css';

export default function Navbar() {
	const { user, signIn } = useGlobalContext();

	const [progress, setProgress] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			const scrollPercent = (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
			setProgress(scrollPercent);
		};
	}, []);

	return (
		<div className={styles['navbar-wrapper']}>
			<nav className={styles['navbar']}>
				<div className={styles['left']}>
					<motion.img
						className={styles['menu-icon']}
						src='/svgs/nav-menu-icon.svg'
						onClick={() => setShowMenu(true)}
						whileHover={{ scale: 1.1 }}
					/>
					<Link href='/'>
						<img className={styles['logo']} src='/svgs/logo-white.svg' alt="Logo" />
					</Link>
				</div>

				<div className={styles['dash-line']}></div>

				<div className={styles['right']}>
					<ul className={styles['nav-list']}>
						<li>
							<Link href='/competitions'>
								Competitions
							</Link>
						</li>
						<div className={styles['nav-list-separator']}></div>
						<li>
							<Link href='/workshops'>
								Workshops
							</Link>
						</li>
						<div className={styles['nav-list-separator']}></div>
						<li>
							<Link href='/lectures'>
								Lectures
							</Link>
						</li>
						<div className={styles['nav-list-separator']}></div>
						<li>
							<Link href='/events'>
								Events
							</Link>
						</li>
						<div className={styles['nav-list-separator']}></div>
						<li>
							<Link href='/arcade'>
								Arcade
							</Link>
						</li>
						<div className={styles['nav-list-separator']}></div>
						<li>
							<Link href='/certificates'>
								Certificates
							</Link>
						</li>
						<div className={styles['nav-list-separator']}></div>
						<li>
							<Link href='/contact'>
								Contact
							</Link>
						</li>
						<div className={styles['nav-list-separator']}></div>
					</ul>
					{user ? (
						<div
							className={styles['signed-in-avatar']}
							style={{ backgroundImage: `url('${user?.imageUrl}')` }}
							onClick={signIn}
						></div>
					) : (
						<button className={styles['sign-in-button']} onClick={signIn}>
							Sign In
						</button>
					)}
				</div>
				<Menu show={showMenu} onClose={() => setShowMenu(false)} />
				<div className={styles['progress']} style={{ width: `${progress}%` }}></div>
			</nav>
		</div>
	);
}
