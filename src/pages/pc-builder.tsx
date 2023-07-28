import Layout from "@/components/layout/Layout";
import React, { ReactElement } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { AiOutlineDelete } from "react-icons/ai";
import { removeFromBuilder } from "@/redux/features/products/productSlice";

const categories = [
	{ category: "CPU" },
	{ category: "Motherboard" },
	{ category: "Power Supply Unit" },
	{ category: "RAM" },
	{ category: "Storage Device" },
	{ category: "Monitor" },
	{ category: "Others" },
];

const PcBuilder = () => {
	const { products } = useAppSelector((state: RootState) => state.product);
	const dispatch = useAppDispatch();

	const isCompleteBuildEnabled = products.length >= 5;

	const getCategoryProducts = (category: string) => {
		return products.filter((product) => product.category === category);
	};

	const handleSubmit = () => {
		alert("Successfully build your pc");
	};

	return (
		<div className="px-5 mx-auto my-8">
			<div className="grid w-full gap-8">
				{categories.map((item, index) => (
					<div className="shadow-md p-4 " key={index}>
						<div className="flex justify-between items-center">
							<div className="text-lg font-semibold">
								{item.category}
							</div>
							<div className="mt-4">
								<Link
									href={`pc-builder/${item.category}`}
									className="btn btn-outline"
								>
									Choose
								</Link>
							</div>
						</div>
						<div className="mt-4">
							{getCategoryProducts(item.category).map(
								(product) => (
									<div
										key={product._id}
										className="bg-gray-100 p-4 rounded-md flex items-center justify-between gap-4"
									>
										<div>
											<p className="text-lg font-semibold">
												{product.productName}
											</p>
											<p>
												<strong>Price:</strong> $
												{product.price}
											</p>
										</div>
										<button
											className="btn bg-red-700 hover:bg-red-500"
											onClick={() =>
												dispatch(
													removeFromBuilder(product)
												)
											}
										>
											<AiOutlineDelete
												fill="white"
												size={20}
											/>
										</button>
									</div>
								)
							)}
						</div>
					</div>
				))}
			</div>
			<div className="my-8 flex items-center justify-end space-x-4">
				<span>
					<strong>Total:</strong> $
					{products.reduce(
						(total, component) => total + component.price,
						0
					)}
				</span>
				<button
					className="btn btn-outline"
					disabled={!isCompleteBuildEnabled}
					onClick={handleSubmit}
				>
					Complete Build
				</button>
			</div>
		</div>
	);
};

PcBuilder.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default PcBuilder;
