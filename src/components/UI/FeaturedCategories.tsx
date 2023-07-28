import { IProduct } from "@/types/globalTypes";
import Link from "next/link";
import React from "react";

interface Props {
	products: IProduct[];
}

const FeaturedCategories = ({ products }: Props) => {
	const categories = products.reduce((uniqueCategories, product) => {
		if (!uniqueCategories.includes(product.category)) {
			uniqueCategories.push(product.category);
		}
		return uniqueCategories;
	}, [] as string[]);

	return (
		<div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
			{categories.map((category) => (
				<Link href={`/category/${category}`} key={category}>
					<div className="card w-64 bg-base-100 shadow-xl">
						<div className="card-body">
							<h2 className="card-title justify-center">
								{category}
							</h2>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default FeaturedCategories;
