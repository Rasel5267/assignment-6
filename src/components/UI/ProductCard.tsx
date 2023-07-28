import { IProduct } from "@/types/globalTypes";
import Image from "next/image";
import Link from "next/link";
import Star from "./Star";

interface ProductCardProps {
	product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<Link
			href={`/product/${product._id}`}
			className="card bg-base-100 shadow-xl"
		>
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
				<h2 className="card-title">{product.productName}</h2>
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
			</div>
		</Link>
	);
};

export default ProductCard;
