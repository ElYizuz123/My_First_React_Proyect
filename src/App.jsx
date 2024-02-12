import { useEffect, useState } from "react"
import MiPrimerComponente from "./components/MiPrimerComponente/MiPrimerComponente"
import Producto from "./components/Producto/Producto"


const App = () => {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    
    fetch("https://dummyjson.com/products?limit=20")
      .then((response)=>response.json())
      .then((data)=>setProducts(data.products))

  }, [])
  
  return (
    <div className="w-full h-full p-4 bg-slate-900 gap-4
    flex flex-wrap justify-center items-center text-white">
      {
        products && 
        products.map((product)=> <Producto key={product.id} description={product.description}
        image={product.images[0]} price={product.price} title={product.title} />)
      }
        {/* <MiPrimerComponente saludo={"Buenas, soy"} nombre={"Yisus"}/>
        <MiPrimerComponente saludo={"Buen día, soy"} nombre={"Guty"}/> */}
    </div> 
  )
}

export default App