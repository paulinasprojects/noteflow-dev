import { Hero } from "./components/hero"
import { HeroReviews } from "./components/hero-reviews"
import { Navbar } from "./components/navbar"
import Homepage from "./pages/home-page"

function App() {
 return (
  <Homepage>
    <Navbar>
      <Hero/>
      <HeroReviews/>
    </Navbar>
  </Homepage>
 )
}

export default App
