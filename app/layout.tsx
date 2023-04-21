import Link from 'next/link';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<link rel="stylesheet" href="" />
			<head />
			<body>
				<>
					<header>
						<div
							style={{
								['backgroundColor' as any]: '#ffc107',
								['padding' as any]: '10px',
								['marginBottom' as any]: '30px',
							}}
						>
							<ul>
								<li>
									<Link href={'/'}>Home</Link>
								</li>
								<li>
									<Link href={'/profile'}>Profile</Link>
								</li>
								<li>
									<Link href={'/about'}>About</Link>
								</li>
								<li>
									<Link href={'/calculator'}>Calculator</Link>
								</li>
								<li>
									<Link href={'/search'}>Search</Link>
								</li>
							</ul>
						</div>
					</header>
					<div
						style={{
							['backgroundColor' as any]: '#ffc107',
							['padding' as any]: '10px',
						}}
					>
						{children}
					</div>
					<footer>
						<div
							style={{
								['backgroundColor' as any]: '#ffc107',
								['padding' as any]: '10px',
								['marginTop' as any]: '30px',
							}}
						>
							Made in Indonesia
						</div>
					</footer>
				</>
			</body>
		</html>
	);
}
