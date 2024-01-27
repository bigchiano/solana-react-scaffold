import React from 'react';
// import {
//     // useConnection,
//     useWallet,
// } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

const MyWallet: React.FC = () => {
    // const { connection } = useConnection();
    // let walletAddress = "";

    // const wallet = useWallet();
    // if (wallet.connected && wallet.publicKey) {
    //     walletAddress = wallet.publicKey.toString()
    // }

    return (
        <div className="">
            <span className="">
                <WalletModalProvider>
                    <WalletMultiButton />
                </WalletModalProvider>
            </span>
        </div>
    );
};

export default MyWallet;
