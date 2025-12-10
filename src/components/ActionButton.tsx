import React from 'react'

interface ActionButtonProps {
    label : string;
    onClick : React.MouseEventHandler<HTMLButtonElement>    
}

const ActionButton = ({label , onClick} : ActionButtonProps) => {
  return (
    <button onClick={onClick} 
    className='py-2.5 px-5 text-lg m-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600'>
        {label}</button>
  )
}

export default ActionButton
