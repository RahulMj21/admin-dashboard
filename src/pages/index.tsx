import Heading from "@/components/Heading";
import { Box } from "@mui/material";
import { NextSeo } from "next-seo";

export default function Home() {
	return (
		<Box component="section" title="Dashboard" py={2}>
			<NextSeo
				title="ADMIN | Dashboard"
				description="Dashboard page for admin"
			/>
			<Heading text="DASHBOARD" subText="Welcome to your dashboard" />
		</Box>
	);
}
