import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
	const { data: session } = useSession();
	return (
		<div className="navbar bg-gray-100 justify-between sticky top-0 z-50">
			<div className="w-[20%] justify-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost md:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-md dropdown-content mt-3 z-[1] p-8 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/products">Products</Link>
						</li>
						<li>
							<a>Categories</a>
							<ul className="p-2">
								<li>
									<Link href="/category/CPU">CPU</Link>
								</li>
								<li>
									<Link href="/category/Motherboard">
										Motherboard
									</Link>
								</li>
								<li>
									<Link href="/category/RAM">RAM</Link>
								</li>
								<li>
									<Link href="/category/Power Supply Unit">
										Power Supply Unit
									</Link>
								</li>
								<li>
									<Link href="/category/Storage Device">
										Storage Device
									</Link>
								</li>
								<li>
									<Link href="/category/Monitor">
										Monitor
									</Link>
								</li>
								<li>
									<Link href="/category/Others">Others</Link>
								</li>
							</ul>
						</li>
						{session?.user ? (
							<li>
								<span onClick={() => signOut()}>Logout</span>
							</li>
						) : (
							<li>
								<Link href="/login">Login</Link>
							</li>
						)}
					</ul>
				</div>
				<Link href="/" className="btn btn-ghost normal-case text-xl">
					PC HOUSE
				</Link>
			</div>
			<div className="navbar-center hidden md:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/products">Products</Link>
					</li>
					<li tabIndex={0}>
						<details>
							<summary>Categories</summary>
							<ul className="p-2">
								<li>
									<Link href="/category/CPU">CPU</Link>
								</li>
								<li>
									<Link href="/category/Motherboard">
										Motherboard
									</Link>
								</li>
								<li>
									<Link href="/category/RAM">RAM</Link>
								</li>
								<li>
									<Link href="/category/Power Supply Unit">
										Power Supply Unit
									</Link>
								</li>
								<li>
									<Link href="/category/Storage Device">
										Storage Device
									</Link>
								</li>
								<li>
									<Link href="/category/Monitor">
										Monitor
									</Link>
								</li>
								<li>
									<Link href="/category/Others">Others</Link>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
			<div className="navbar-end space-x-4">
				<div className="space-x-4 hidden md:block">
					{session?.user ? (
						<span className="btn" onClick={() => signOut()}>
							Logout
						</span>
					) : (
						<Link href="/login" className="btn">
							Login
						</Link>
					)}
				</div>
				{session?.user && (
					<Link href="/pc-builder" className="btn btn-neutral">
						PC Builder
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
