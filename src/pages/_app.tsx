import BaseLayout from "@/scenes/global/BaseLayout";
import "@/styles/style.css";
import { ColorModeContext, useMode } from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	const { theme, colorMode } = useMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BaseLayout>
					<Component {...pageProps} />
				</BaseLayout>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
