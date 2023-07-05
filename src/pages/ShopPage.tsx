import { Subscription } from "../components/Subscription"
import { Products } from "../components/Products"
import { ShopNav } from "../components/ShopNav"


export function ShopPage () {
    return (
    <>
        <ShopNav/>
        <Products  />
        <Subscription/>
    </>
)}