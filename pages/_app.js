import Layout from "@/components/Layout/Layout";
import { CartState } from "@/context/cart/CartState";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<CartState>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</CartState>
	);
}
