import React, { useState } from "react";
import logo from "./logo.svg";
import MyWallet from "./components/my-wallet";
import TransferSol from "./pages/TransferForm";
import TransferToken from "./pages/TransferTokenForm";
import { useWallet } from "@solana/wallet-adapter-react";
import { TokenInfoHook } from "./web3hooks/TokenInfoHook";

function App() {
  const wallet = useWallet();
  const [mintPublickey, setMintPublickey] = useState('DK6BeYfBvcb7epFnDiEXvqZKVbiPjiV692h7oWoB5P5L')
  const { balance, tokenBalance } = TokenInfoHook(mintPublickey)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo mx-auto" alt="logo" />
        <h3 className="text-white text-center">
          Transfer Tokens or Sol

          {wallet.connected && wallet.publicKey && (
            <div className='text-[20px] mt-[20px]'>
              <p> Sol Balance: {balance.toFixed(2)} </p>
              <p> Token Balance: {tokenBalance.toFixed(2)} </p>
            </div>
          )}
        </h3>
        <div className="justify-center flex mt-5">
          <MyWallet /> <br />
        </div>
        <div className="h-10"></div>

        <div className="flex w-[80%] mx-auto">
          <div className="border border-gray-300 p-4 w-[50%]">
            <TransferSol />
          </div>
          <div className="border border-gray-300 p-4 w-[50%]">
            <TransferToken setMintPublickey={setMintPublickey} mintPublickey={mintPublickey} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
