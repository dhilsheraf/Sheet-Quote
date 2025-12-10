import React from 'react'
import { useNavigate } from 'react-router-dom'
import ActionButton from '../components/ActionButton'


const Dashboard = () => {

    const navigate = useNavigate()

  return (
    <div className='text-center mt-12'>
      <h1 className='text-3xl font-bold mb-6'>Dashboard</h1>
      <ActionButton label='Inquiry' onClick={()=> navigate('/inquiry')}/>
      <ActionButton label='Quotation' onClick={()=> navigate('/quotation')}/>
      <ActionButton label='Invoice' onClick={()=> navigate('/invoice')}/>
    </div>
  )
}

export default Dashboard
