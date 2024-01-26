import { createTransferInstruction } from "@solana/spl-token";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction } from "@solana/web3.js";
import { useCallback } from "react";
import { getOrCreateAssociatedTokenAccount } from "../utils/tokenLibs/getOrCreateAssociatedTokenAccount";

export const TransferHook = (
  mintPubkeyString: string,
  receiverPubkeyString: string,
  amountString: string
) => {
  const { connection } = useConnection();
  const {
    publicKey: senderPubKey,
    signTransaction,
    sendTransaction,
  } = useWallet();

  const onClick = useCallback(async () => {
    try {
      if (!senderPubKey || !signTransaction)
        throw new WalletNotConnectedError();
      const amount = Number(amountString);
      const mintPubkey = new PublicKey(mintPubkeyString);
      const receiverPubkey = new PublicKey(receiverPubkeyString);

      // const lamports = await connection.getMinimumBalanceForRentExemption(0);
      const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        senderPubKey,
        mintPubkey,
        senderPubKey,
        signTransaction
      );

      console.log(fromTokenAccount.address.toString());

      const toTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        senderPubKey,
        mintPubkey,
        receiverPubkey,
        signTransaction
      );

      const transferUsdcToAccIX = createTransferInstruction(
        fromTokenAccount.address,
        toTokenAccount.address,
        senderPubKey,
        amount
      );

      const transaction = new Transaction().add(transferUsdcToAccIX);

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature);
    } catch (error) {
      console.log(error);
    }
  }, [
    sendTransaction,
    connection,
    senderPubKey,
    amountString,
    mintPubkeyString,
    receiverPubkeyString,
    signTransaction,
  ]);

  return onClick;
};
