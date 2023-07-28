import { IProduct } from "@/types/globalTypes";
import Image from "next/image";
import Link from "next/link";

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
					width={100}
					height={100}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{product.productName}</h2>
				<p>price ${product.price}</p>
				<div className="card-actions">
					<div className="badge badge-outline">{product.status}</div>
					<div className="badge badge-outline">
						{product.category}
					</div>
				</div>
				<p>{product.averageRating}</p>
			</div>
		</Link>
	);
};

export default ProductCard;
