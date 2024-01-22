import React, { useState } from 'react'
import Input from '../components/templates/input'
import Button from '../components/templates/button'
import { TransferHook } from '../web3hooks/TransferHook'
import { useWallet } from '@solana/wallet-adapter-react'

function TransferForm() {
    const [receiverPublickey, setReceiverPublickey] = useState('')
    const [amount, setAmount] = useState('1')
    const submitHandler = TransferHook(receiverPublickey, amount)
    const { publicKey } = useWallet();

    return (
        <form className="max-w-sm mx-auto">
            <div className="mb-5">
                <Input
                    onChangeHandler={setReceiverPublickey}
                    value={receiverPublickey}
                    title='Receiver public key'
                />
            </div>
            <div className="mb-5">
                <Input
                    onChangeHandler={setAmount}
                    value={amount}
                    title='Amount to send'
                />
            </div>
            <Button text='Send transaction' disabled={!publicKey} onClickHandler={submitHandler} />
        </form>

    )
}

export default TransferForm