import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";

const login = () => {
	return (
		<div className="flex items-center justify-center flex-col gap-8 h-screen">
			<div
				className="flex items-center shadow-md px-6 py-4 rounded space-x-4 cursor-pointer"
				onClick={() =>
					signIn("google", {
						callbackUrl: "http://localhost:3000",
					})
				}
			>
				<span>Login with</span>
				<AiOutlineGoogle size={25} />
			</div>
			<div
				className="flex items-center shadow-md px-6 py-4 rounded space-x-4 cursor-pointer"
				onClick={() =>
					signIn("github", {
						callbackUrl: "http://localhost:3000/",
					})
				}
			>
				<span>Login with</span>
				<AiOutlineGithub size={25} />
			</div>
		</div>
	);
};

export default login;
