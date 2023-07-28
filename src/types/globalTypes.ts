export interface IProduct {
	image: string;
	productName: string;
	category: string;
	status: string;
	price: number;
	description: string;
	keyFeatures: {
		brand?: string;
		model?: string;
		specification?: string;
		port?: string;
		type?: string;
	};
	individualRating: number;
	averageRating: number;
	reviews: Review[];
	_id: string;
}

interface Review {
	rating: number;
	review: string;
}
