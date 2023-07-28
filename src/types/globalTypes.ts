export interface IProduct {
	image: string;
	productName: string;
	category: string;
	status: string;
	price: number;
	description: string;
	keyFeatures: {};
	individualRating: number;
	averageRating: number;
	reviews: Review[];
	_id: string;
}

export interface Review {
	rating: number;
	review: string;
}
