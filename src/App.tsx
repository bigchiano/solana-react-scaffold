import React from "react";
import logo from "./logo.svg";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import MyWallet from "./components/my-wallet";
import CreateEscrow from "./pages/TransferForm";
import {
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";

function App() {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint
  const endpoint = React.useMemo(() => clusterApiUrl(network), [network]);
  // const endpoint = "http://127.0.0.1:8899"
  const wallets = React.useMemo(
    () => [
      getLedgerWallet(),
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [network]
  );


  return (
    <>
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <div className="App">

          <header className="App-header">
            <img src={logo} className="App-logo mx-auto" alt="logo" />
            <h3 className="text-white text-center">
              Transfer Sol
            </h3>
            <div className="justify-center flex mt-5">
              <MyWallet /> <br />
            </div>
            <div className="h-10"></div>
            <CreateEscrow />
          </header>
        </div>
      </WalletProvider>
    </ConnectionProvider>
    </>
  );
}

export default App;
