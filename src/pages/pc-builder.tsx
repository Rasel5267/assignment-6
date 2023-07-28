import Layout from "@/components/layout/Layout";
import React, { ReactElement } from "react";

const PcBuilder = () => {
	return <div>PC Builder</div>;
};

PcBuilder.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default PcBuilder;
