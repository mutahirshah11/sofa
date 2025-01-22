import React from 'react'
import Navbar1 from '../components/navbar1'
import Banner from '../components/banner'
import Filter from '../components/Filter'
import ShopitemsCard from '../components/shopitemsCard'
import OneTwoThree from '../components/oneTwoThree'

const Shop = () => {
  return (
    <div className=''>
        <Navbar1/>
        <Banner title='Shop'  subtitle="Home"  breadcrumb='Shop'/>
        <Filter/>
        <ShopitemsCard/>
        <OneTwoThree/>
        

    </div>
  )
}

export default Shop