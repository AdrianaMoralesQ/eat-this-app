import { ThemeProvider, Container } from "theme-ui";
import theme from "../theme";
import Nav from "../src/components/nav";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Nav />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
