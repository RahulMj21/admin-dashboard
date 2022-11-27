import { getColors } from "@/styles/theme";
import { SIDEBAR_ITEMS } from "@/utils/constants";
import { MenuOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

interface Props {
	isSmall: boolean;
	setIsSmall: Dispatch<SetStateAction<boolean>>;
}

const SidebarComponent = ({ isSmall, setIsSmall }: Props) => {
	const router = useRouter();
	const theme = useTheme();
	const colors = getColors(theme.palette.mode);

	return (
		<Box
			component="aside"
			bgcolor={colors.primary[400]}
			height="100vh"
			position="fixed"
			top={0}
			left={0}
			width={isSmall ? "4rem" : "15rem"}
			display="flex"
			flexDirection="column"
			p={2}
			boxShadow="0 0 30px rgba(0,0,0,0.17)"
			sx={{ overflowY: "auto", transition: "all 0.5s ease" }}
		>
			<IconButton
				onClick={() => setIsSmall(!isSmall)}
				style={{
					position: "absolute",
					right: isSmall ? 11 : 8,
					top: 8,
				}}
			>
				<MenuOutlined />
			</IconButton>
			<Box
				display="flex"
				alignItems="center"
				flexDirection="column"
				mt={5}
				mb={isSmall ? 1 : 2}
			>
				<Box
					position="relative"
					height={isSmall ? "2.8rem" : "6rem"}
					width={isSmall ? "2.8rem" : "6rem"}
					borderRadius={50}
					overflow="hidden"
					mb={isSmall ? 1 : 2}
					sx={{ transition: "all 0.5s ease" }}
				>
					<Image
						src="/images/user.jpeg"
						alt="User"
						layout="fill"
						objectFit="contain"
					/>
				</Box>
				<Typography
					variant="h3"
					fontWeight={600}
					fontSize={isSmall ? 14 : "1.7rem"}
				>
					Rahul
				</Typography>
				<Typography
					fontSize={isSmall ? 12 : "inherit"}
					color={colors.greenAccent[500]}
				>
					Admin
				</Typography>
			</Box>
			{Object.keys(SIDEBAR_ITEMS).map((key, index) => {
				return (
					<Box display="flex" flexDirection="column">
						{index !== 0 && !isSmall && (
							<Typography
								fontSize={13}
								textTransform="capitalize"
								px={1}
								py={0.5}
								color={colors.grey[300]}
							>
								{key}
							</Typography>
						)}
						{SIDEBAR_ITEMS[key].map((item) => (
							<NextLink
								passHref
								href={item.route}
								key={item.route}
							>
								<Typography
									display="flex"
									alignItems="center"
									fontSize={14}
									gap={1.5}
									px={isSmall ? 1 : 2}
									py={isSmall ? 1.5 : 1}
									color={
										router.pathname === item.route
											? colors.blueAccent[400]
											: colors.grey[100]
									}
									sx={{
										transition: "all 0.3s ease",
										"&:hover": {
											color: colors.blueAccent[400],
										},
									}}
								>
									{item.icon}
									{!isSmall && item.text}
								</Typography>
							</NextLink>
						))}
					</Box>
				);
			})}
		</Box>
	);
};

export default SidebarComponent;
