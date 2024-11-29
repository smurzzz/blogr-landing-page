import Company from "./components/Company/Company"
import Footer from "./components/footer/Footer"
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"

const App = () => {
  return(
    <>
      <div className="container relative">
        <Hero/>
        <Products/>
        <Company/>
        <Footer/>
      </div>
    </>
  )
}

export default App