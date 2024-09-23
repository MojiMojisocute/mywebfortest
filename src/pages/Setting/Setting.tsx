import React from 'react'
import SearchBar from '../../components/SearchBar'
import Header from '../../components/Header'
import SidebarSetting from './layout/Sidebar'
import ProductCard from './layout/ProductCard'
import './Setting.css'

function Setting() {
  return (
    <>
        <Header/>
        <SearchBar/>
        <SidebarSetting/>
        <ProductCard/>
    </>
  )
}

export default Setting