import { AdSection } from "../components/AdSection";
import { Products } from "../components/Products";
import { Hero } from "../components/Hero";
import { Subscription } from "../components/Subscription";



export function HomePage () {
    return (
        
            < >
                <Hero/>
                <Products title="All-time favorite items" amount={-4} />
                <AdSection/>
                <Subscription/>
            </>
        
    )
        
   
}