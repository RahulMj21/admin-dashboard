import { getColors } from "@/styles/theme";
import { Box, Typography, useTheme } from "@mui/material";

interface Props {
	text: string;
	subText: string;
}

const Heading = ({ text, subText }: Props) => {
	const theme = useTheme();
	const colors = getColors(theme.palette.mode);
	return (
		<Box mb={4}>
			<Typography
				variant="h2"
				color={colors.grey[100]}
				fontWeight="bold"
				mb={0.7}
			>
				{text}
			</Typography>
			<Typography variant="h5" color={colors.greenAccent[400]}>
				{subText}
			</Typography>
		</Box>
	);
};

export default Heading;
