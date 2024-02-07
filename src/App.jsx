import MiPrimerComponente from "./components/MiPrimerComponente/MiPrimerComponente"

const App = () => {
  return (
    <div className="w-full h-screen bg-slate-900 gap-4
    flex justify-center items-center">
        <MiPrimerComponente saludo={"Buenas, soy"} nombre={"Yisus"}/>
        <MiPrimerComponente saludo={"Buen día, soy"} nombre={"Guty"}/>
    </div> 
  )
}

export default App