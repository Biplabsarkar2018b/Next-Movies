import SwitchTabs from '@/pages/components/switchTabs/SwitchTabs'
import React from 'react'

const Trending = () => {
  const onTabChange = (tab)=>{

  }
  return (
    <div>
      <div className='flex'>
      <h1>Trending</h1>
      <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
      </div>
    </div>
  )
}

export default Trending