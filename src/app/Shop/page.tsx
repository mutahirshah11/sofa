import React from 'react'
import Navbar1 from '../components/navbar1'
import Banner from '../components/banner'
import Filter from '../components/Filter'
import Shopitems from '../components/shopItems'
 

const Shop = () => {
  return (
    <div className=''>
        <Navbar1/>
        <Banner title='Shop'  subtitle="Home"  breadcrumb='Shop'/>
        <Filter/>
        <Shopitems/>
        

    </div>
  )
}

export default Shop