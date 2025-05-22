import { Hero } from "./components/hero"
import { Navbar } from "./components/navbar"
import Homepage from "./pages/home-page"

function App() {
 return (
  <Homepage>
    <Navbar>
      <Hero/>
    </Navbar>
  </Homepage>
 )
}

export default App
