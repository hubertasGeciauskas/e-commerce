import { Products } from "../components/Products"
import { Product } from "../components/Product"
export function ProductPage () {
  return (
    <>  
      
      <Product  />
      <Products title="You may also like this" amount={-4} />
    </>
  )
}