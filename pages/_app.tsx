import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { Web3sdkioProvider } from "@web3sdkio/react/solana";
import type { AppProps } from "next/app";
import Web3sdkioGuideFooter from "../components/guide/Web3sdkioGuideFooter";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdkioProvider network={"devnet"}>
      <WalletModalProvider>
        <Header />
        <Component {...pageProps} />
        <Web3sdkioGuideFooter />
      </WalletModalProvider>
    </Web3sdkioProvider>
  );
}

export default MyApp;
