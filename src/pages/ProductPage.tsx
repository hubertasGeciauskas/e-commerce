import { Products } from "../components/Products"
import { Product } from "../components/Product"
import { ShopNav } from "../components/ShopNav"
export function ProductPage () {
  return (
    <>  
      <ShopNav/>
      <Product  />
      <Products title="You may also like this" amount={-4} />
    </>
  )
}