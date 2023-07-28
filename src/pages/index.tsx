import React, { ReactElement } from "react";
import Layout from "@/components/layout/Layout";
import { IProduct } from "@/types/globalTypes";
import ProductCard from "@/components/UI/ProductCard";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import Banner from "@/components/UI/Banner";

interface HomeProps {
	products: IProduct[];
	allProducts: IProduct[];
}

const Home = ({ products, allProducts }: HomeProps) => {
	return (
		<div className="px-5 mx-auto mb-8">
			<Banner />
			<h2 className="py-12 text-2xl font-semibold text-center">
				Featured Products
			</h2>
			<div className="grid grid-auto-fit-lg gap-4">
				{products.map((product: IProduct) => (
					<ProductCard product={product} key={product._id} />
				))}
			</div>
			<h2 className="py-12 text-2xl font-semibold text-center">
				Featured Categories
			</h2>
			<div>
				<FeaturedCategories products={allProducts} />
			</div>
		</div>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;

export const getStaticProps = async () => {
	const res = await fetch("https://pc-house.vercel.app/products");
	const data = await res.json();

	const featuredProducts: IProduct[] = [];
	while (featuredProducts.length < 8) {
		const randomIndex = Math.floor(Math.random() * data.data.length);
		const randomProduct = data.data[randomIndex];
		if (!featuredProducts.includes(randomProduct)) {
			featuredProducts.push(randomProduct);
		}
	}

	return {
		props: {
			products: featuredProducts,
			allProducts: data.data,
		},
		revalidate: 10,
	};
};
