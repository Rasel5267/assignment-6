import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

interface Props {
	rating: number;
	reviews: number;
}

const Star = ({ rating, reviews }: Props) => {
	const ratingStar = Array.from({ length: 5 }, (_elem, index) => {
		let numbers = index + 0.5;

		return (
			<span key={index}>
				{rating >= index + 1 ? (
					<FaStar />
				) : rating >= numbers ? (
					<FaStarHalfAlt />
				) : (
					<AiOutlineStar />
				)}
			</span>
		);
	});

	return (
		<>
			<div className="flex items-center gap-4">
				<span className="flex text-yellow-500">{ratingStar}</span>
				<p>({reviews} customer reviews)</p>
			</div>
		</>
	);
};

export default Star;
