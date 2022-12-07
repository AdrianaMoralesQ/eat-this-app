/** @jsx jsx */
import { jsx } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Nav from "../src/components/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-next-table/dist/SmartTable.css";

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Nav />
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	);
}
