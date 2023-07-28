/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";

const Error = () => {
	const router = useRouter();

	setTimeout(() => {
		router.push("/");
	}, 3000);

	return (
		<div className="flex flex-col items-center">
			<img
				src="https://res.cloudinary.com/mahadiul5267/image/upload/v1690580320/pc-house/404-error-404-not-5120x2880-9410_1_1_ufjqcc.jpg"
				alt="error"
			/>
			<Link href="/" className="btn btn-outline">
				Back To Home
			</Link>
		</div>
	);
};

export default Error;
