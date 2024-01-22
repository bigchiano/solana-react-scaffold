import React from 'react'

interface Props {
    text: string,
    onClickHandler: (e: any) => void,
    disabled: boolean
}
export default function Button({ text, onClickHandler, disabled }: Props) {
    const classNames = `focus:outline-none text-white 
    bg-mainPurple 
    font-medium rounded-lg 
    text-sm px-5 py-2.5 mb-2
    
    hover:ring-4
    focus:ring-4
    
    focus:ring-gray-400 
      hover:ring-gray-600
      dark:hover:ring-gray-600
      `
    const classNameDisabled = "bg-gray-400"
    
    return (
        <button
            onClick={!disabled ? onClickHandler : () => {}}
            type="button"
            className={`${classNames} ${disabled && classNameDisabled}`}>
            {text}
        </button>

    )
}
