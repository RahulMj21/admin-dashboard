import useWindow from "@/hooks/useWindow";
import Sidebar from "@/scenes/global/Sidebar";
import Topbar from "@/scenes/global/Topbar";
import { Box } from "@mui/material";
import { ReactNode, useState } from "react";

interface Props {
	children: ReactNode;
}

const BaseLayout = ({ children }: Props) => {
	const { isWindow } = useWindow();
	const [isSmall, setIsSmall] = useState(false);

	return !isWindow ? null : (
		<Box>
			<Sidebar isSmall={isSmall} setIsSmall={setIsSmall} />
			<Box
				minHeight="100vh"
				position="absolute"
				width={isSmall ? "calc(100% - 4rem)" : "calc(100% - 15rem)"}
				px={2}
				top={0}
				left={isSmall ? "4rem" : "15rem"}
				sx={{ transition: "all 0.5s ease" }}
			>
				<Topbar />
				{children}
			</Box>
		</Box>
	);
};

export default BaseLayout;
