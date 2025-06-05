import React from 'react'
import { useSelector } from 'react-redux';
import Homesec3 from './Homesec3';
import Homesec4 from './Homesec4';

const CombineHome = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <>
    <Homesec3 products={products}/>
    <Homesec4 products={products}/>


    </>
  )
}

export default CombineHome