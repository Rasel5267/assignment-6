import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import React, { ReactNode } from "react";

interface Props {
	children?: ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<>
			<Navbar />
			<main className="min-h-screen">{children}</main>
			<Footer />
		</>
	);
}
