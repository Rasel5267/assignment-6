import React, { ReactElement } from "react";
import Layout from "@/components/layout/Layout";
import { IProduct } from "@/types/globalTypes";
import ProductCard from "@/components/UI/ProductCard";

interface HomeProps {
	products: IProduct[];
}

const Home = ({ products }: HomeProps) => {
	return (
		<div className="px-5 mx-auto mb-8">
			<h2>Home</h2>
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
		</div>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;

export const getServerSideProps = async () => {
	const res = await fetch("https://pc-house.vercel.app/products");
	const data = await res.json();

	const featuredProducts: IProduct[] = [];
	while (featuredProducts.length < 6) {
		const randomIndex = Math.floor(Math.random() * data.data.length);
		const randomProduct = data.data[randomIndex];
		if (!featuredProducts.includes(randomProduct)) {
			featuredProducts.push(randomProduct);
		}
	}

	return {
		props: {
			products: featuredProducts,
		},
	};
};
