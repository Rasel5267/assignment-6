import { IProduct } from "@/types/globalTypes";
import Image from "next/image";
import Link from "next/link";
import Star from "./Star";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/redux/hook";
import { addToBuilder } from "@/redux/features/products/productSlice";

interface ProductCardProps {
	product: IProduct;
}

const PCBuilderCard = ({ product }: ProductCardProps) => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleAddProduct = (product: IProduct) => {
		dispatch(addToBuilder(product));
		router.push("/pc-builder");
	};
	return (
		<div className="card bg-base-100 shadow-xl">
			<figure>
				<Image
					src={product.image}
					alt={product.productName}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: "100%", height: "auto" }}
					className="p-4"
				/>
			</figure>
			<div className="card-body">
				<Link
					href={`/product/${product._id}`}
					className="card-title text-blue-900"
				>
					{product.productName}
				</Link>
				<Star
					rating={product.averageRating}
					reviews={product.reviews.length}
				/>
				<p className="pb-2 font-semibold">price: ${product.price}</p>
				<div className="card-actions items-center justify-between">
					<div className="badge badge-neutral py-3 px-4">
						{product.category}
					</div>
					<div className="badge badge-outline">{product.status}</div>
				</div>
				<div className="mt-6">
					<button
						className="btn btn-outline"
						onClick={() => handleAddProduct(product)}
					>
						Add To Builder
					</button>
				</div>
			</div>
		</div>
	);
};

export default PCBuilderCard;
