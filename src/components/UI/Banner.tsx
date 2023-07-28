/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Banner = () => {
	return (
		<div className="flex h-[90vh] justify-center items-center">
			<div className="flex items-center justify-between flex-col lg:flex-row-reverse w-full gap-8">
				<img
					src="https://res.cloudinary.com/mahadiul5267/image/upload/v1690549953/pc-house/wallpaperflare.com_wallpaper_1_1_1_1_ykz8h4.jpg"
					alt="banner"
					className="rounded-lg shadow-2xl"
				/>
				<div>
					<h1 className="text-5xl font-bold">Build Your Dreams!</h1>
					<p className="py-6">
						Buy any products on exclusive discounts and build your
						dream pc today. Buy any products on exclusive discounts
						and build your dream pc today.
					</p>
					<Link href="/products" className="btn btn-primary">
						Explore Products
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
