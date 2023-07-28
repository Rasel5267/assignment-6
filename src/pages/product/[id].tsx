import Layout from "@/components/layout/Layout";
import { IProduct } from "@/types/globalTypes";
import React, { ReactElement } from "react";
import Image from "next/image";
import Star from "@/components/UI/Star";
import Reviews from "@/components/UI/Reviews";

interface Props {
	product: IProduct;
}

const ProductDetails = ({ product }: Props) => {
	return (
		<div className="px-5 mx-auto mt-16 mb-12">
			<div className="flex flex-col md:flex-row justify-center items-center gap-12">
				<Image
					src={product.image}
					alt={product.productName}
					width="400"
					height="350"
					className="rounded-md shadow-md p-8"
				/>
				<div className="">
					<span className="badge badge-neutral px-4 py-3">
						{product.category}
					</span>
					<h4 className="text-3xl font-bold mt-4">
						{product.productName}
					</h4>
					<Star
						rating={product.averageRating}
						reviews={product.reviews.length}
					/>
					<span className="badge badge-outline my-3">
						{product.status}
					</span>
					<p>
						<strong>Price:</strong> ${product.price}
					</p>
					<p className="mt-3">{product.description}</p>
					<h4 className="text-lg font-bold my-4">Key Features:</h4>
					<ul>
						{Object.entries(product.keyFeatures).map(
							([key, value]) => (
								<li key={key}>
									<strong>{key}:</strong> {value as string}
								</li>
							)
						)}
					</ul>
				</div>
			</div>
			<div className="my-12">
				<h4 className="text-2xl font-bold ml-4">Reviews</h4>
				{product.reviews.map((review, index) => (
					<Reviews key={index} review={review} />
				))}
			</div>
		</div>
	);
};

ProductDetails.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default ProductDetails;

export const getStaticPaths = async () => {
	const res = await fetch("https://pc-house.vercel.app/products");
	const data = await res.json();

	const paths = data.data.map((product: IProduct) => ({
		params: { id: product._id },
	}));

	return { paths, fallback: true };
};

export const getStaticProps = async (context: any) => {
	const { params } = context;
	const res = await fetch(`https://pc-house.vercel.app/product/${params.id}`);
	const data = await res.json();

	return {
		props: {
			product: data,
		},
	};
};
