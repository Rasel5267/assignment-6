import React, { ReactElement } from "react";
import Layout from "@/components/layout/Layout";

const Home = () => {
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
