import React from 'react';
import {
    // useConnection,
    useWallet,
} from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

const MyWallet: React.FC = () => {
    // const { connection } = useConnection();
    // let walletAddress = "";

    const wallet = useWallet();
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
            {wallet.connected && wallet.publicKey && (
                <div className='text-[20px] mt-[20px]'>
                    <p> Sol Balance: 200 </p>
                    <p> Usdt Balance: 200 </p>
                </div>
            )}
        </div>
    );
};

export default MyWallet;
