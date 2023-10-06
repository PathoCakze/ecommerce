import React from 'react'
import ProductCard from '../components/utils/ProductCard'
import ProductList from '../components/ProductList'

function Homeview() {
  return (
    <>
        
            <div className='w-2/4 flex justify-center mx-auto mt-10'>
                <div className='px-8'>
                    <ProductList />   
                </div>
                <div className='grid grid-flow-col grid-cols-3 grid-rows-3 gap-4'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
    </>
  )
}

export default Homeview