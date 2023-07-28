import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId:
				process.env.GITHUB_ID !== undefined
					? process.env.GITHUB_ID
					: "",
			clientSecret:
				process.env.GITHUB_SECRET !== undefined
					? process.env.GITHUB_SECRET
					: "",
		}),
		GoogleProvider({
			clientId:
				process.env.GOOGLE_ID !== undefined
					? process.env.GOOGLE_ID
					: "",
			clientSecret:
				process.env.GOOGLE_SECRET !== undefined
					? process.env.GOOGLE_SECRET
					: "",
		}),
	],

	pages: {
		signIn: "/login",
	},
};

export default NextAuth(authOptions);
