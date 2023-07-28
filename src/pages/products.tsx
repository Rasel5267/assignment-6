import React, { ReactElement } from "react";
import Layout from "@/components/layout/Layout";
import { IProduct } from "@/types/globalTypes";
import ProductCard from "@/components/UI/ProductCard";

interface Props {
	products: IProduct[];
}

const Products = ({ products }: Props) => {
	return (
		<div className="px-5 mx-auto my-8">
			<div className="grid grid-auto-fit-lg gap-4">
				{products.map((product: IProduct) => (
					<ProductCard product={product} key={product._id} />
				))}
			</div>
		</div>
	);
};

Products.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Products;

export const getServerSideProps = async () => {
	const res = await fetch("https://pc-house.vercel.app/products");
	const data = await res.json();

	return {
		props: {
			products: data.data,
		},
	};
};
