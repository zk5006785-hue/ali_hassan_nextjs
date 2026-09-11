import image from "next/image"
import stylus from "./page.module.css";
import product from '@/data/product.json'
export default function home(){
    return(
        <main>
            <div>
                {product.map((p)=>(
                    <div key = {p.id}>
                    <h1>{p.title}</h1>
                </div>
                ))}
                
            </div>
        </main>
    );
}  
