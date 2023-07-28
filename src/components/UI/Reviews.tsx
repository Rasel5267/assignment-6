import { Review } from "@/types/globalTypes";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";

interface Props {
	review: Review;
}

const Reviews = ({ review }: Props) => {
	const ratingStar = Array.from({ length: 5 }, (_elem, index) => {
		let numbers = index + 0.5;

		return (
			<span key={index}>
				{review.rating >= index + 1 ? (
					<FaStar />
				) : review.rating >= numbers ? (
					<FaStarHalfAlt />
				) : (
					<AiOutlineStar />
				)}
			</span>
		);
	});
	return (
		<div className="flex items-center gap-4 shadow-sm my-4 p-4">
			<div className="border rounded-full p-2">
				<AiOutlineUser size={25} />
			</div>
			<div>
				<h4 className="pb-2">{review.review}</h4>
				<span className="flex text-yellow-500">{ratingStar}</span>
			</div>
		</div>
	);
};

export default Reviews;
