import React from 'react'
import ProductCard from '../Components/ProductCard'
import SideBar from '../Components/SideBar'
import { useParams } from 'react-router-dom';

const Products = () => {
  let { pid } = useParams();
  console.log(pid);
  

  return (


    <main>

      <h1 className='page-title'>Products</h1>
      <div className="container grid grid-cols-5 gap-5">
        <div className="container col-span-4">

          <ProductCard


            productid={pid}
            productName={"CNC Cutting Machine"}
          />
          <ProductCard productid='p2' />
          <ProductCard />
        </div>
        <div className="container">
          <SideBar />
        </div>
      </div>

      {/* card with widht 100% 2 sections image and content */}


    </main>
  )
}

export default Products