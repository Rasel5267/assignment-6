import Layout from "@/components/layout/Layout";
import { IProduct } from "@/types/globalTypes";
import React, { ReactElement } from "react";

interface Props {
	product: IProduct;
}

const ProductDetails = ({ product }: Props) => {
	return (
		<div>
			<h4>{product.productName}</h4>
		</div>
	);
};

ProductDetails.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default ProductDetails;

export const getServerSideProps = async (context: { params: any }) => {
	const { params } = context;
	const res = await fetch(`https://pc-house.vercel.app/product/${params.id}`);
	const data = await res.json();

	return {
		props: {
			product: data,
		},
	};
};
