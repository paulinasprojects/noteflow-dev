import { Features } from "./components/features"
import { Hero } from "./components/hero"
import { HeroReviews } from "./components/hero-reviews"
import { MainSection } from "./components/main-section"
import { Navbar } from "./components/navbar"
import { Organizations } from "./components/organizations"
import Homepage from "./pages/home-page"

function App() {
 return (
  <Homepage>
    <Navbar>
      <Hero/>
      <HeroReviews/>
    </Navbar>
    <MainSection>
      <Organizations/>
      <Features/>
    </MainSection>
  </Homepage>
 )
}

export default App
