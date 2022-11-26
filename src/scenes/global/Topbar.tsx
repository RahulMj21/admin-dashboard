import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { useContext } from "react";
import {
	LightModeOutlined,
	DarkModeOutlined,
	NotificationsOutlined,
	SettingsOutlined,
	PersonOutlined,
	Search,
} from "@mui/icons-material";
import { ColorModeContext, getColors } from "@/styles/theme";

const Topbar = () => {
	const theme = useTheme();
	const colors = getColors(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	return (
		<Box
			component="header"
			display="flex"
			justifyContent="space-between"
			py={2}
		>
			<Box
				display="flex"
				borderRadius="3px"
				bgcolor={colors.primary[400]}
			>
				<InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
				<IconButton type="button" sx={{ p: 1 }}>
					<Search />
				</IconButton>
			</Box>
			<Box display="flex">
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === "dark" ? (
						<DarkModeOutlined />
					) : (
						<LightModeOutlined />
					)}
				</IconButton>
				<IconButton>
					<NotificationsOutlined />
				</IconButton>
				<IconButton>
					<SettingsOutlined />
				</IconButton>
				<IconButton>
					<PersonOutlined />
				</IconButton>
			</Box>
		</Box>
	);
};

export default Topbar;
