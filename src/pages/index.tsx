import React, { ReactElement } from "react";
import Layout from "@/components/layout/Layout";

const Home = () => {
	return (
		<div className="px-5 mx-auto mb-8">
			<h2>Home</h2>
		</div>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
