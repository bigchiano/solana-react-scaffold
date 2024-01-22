import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useCallback } from "react";

export const TransferHook = (receiverPubkey: string, amountString: string) => {
    const { connection } = useConnection();
    const { publicKey: senderPubKey, sendTransaction } = useWallet();

    const onClick = useCallback(async () => {
        try {
            if (!senderPubKey) throw new WalletNotConnectedError();
            const amount = Number(amountString);
            // const lamports = await connection.getMinimumBalanceForRentExemption(0);

            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: senderPubKey,
                    toPubkey: new PublicKey(receiverPubkey),
                    lamports: amount * 10e8,
                })
            );

            const signature = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature);
        } catch (error) {
            console.log(error);
        }
    }, [sendTransaction, connection, senderPubKey, receiverPubkey, amountString]);

    return onClick
}