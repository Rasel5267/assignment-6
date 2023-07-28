import PCBuilderCard from "@/components/UI/PCBuilderCard";
import Layout from "@/components/layout/Layout";
import { IProduct } from "@/types/globalTypes";
import React, { ReactElement } from "react";

interface Props {
	products: IProduct[];
}

const PcBuildCategory = ({ products }: Props) => {
	return (
		<div className="my-12 px-5 mx-auto">
			<div className="grid grid-auto-fit-lg gap-4">
				{products.map((product: IProduct) => (
					<PCBuilderCard product={product} key={product._id} />
				))}
			</div>
		</div>
	);
};

PcBuildCategory.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default PcBuildCategory;

export const getServerSideProps = async (context: any) => {
	const { params } = context;
	const res = await fetch(
		`https://pc-house.vercel.app/products/category/${params.category}`
	);

	const data = await res.json();

	return {
		props: {
			products: data,
		},
	};
};
