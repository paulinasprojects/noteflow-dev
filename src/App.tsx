import { Faqs } from "./components/faq/faqs"
import { Features } from "./components/features"
import { Footer } from "./components/footer"
import { Hero } from "./components/hero"
import { HeroReviews } from "./components/hero-reviews"
import { MainSection } from "./components/main-section"
import { Navbar } from "./components/navbar"
import { Organizations } from "./components/organizations"
import { Testimonials } from "./components/testimonials/testimonials"
import { MobileMenuContextProvider } from "./context/mobile-menu-context"
import { ModalContextProvider } from "./context/modal-context"
import Homepage from "./pages/home-page"

function App() {
 return (
  <MobileMenuContextProvider>
    <ModalContextProvider>
      <Homepage>
        <Navbar>
          <Hero/>
          <HeroReviews/>
        </Navbar>
        <MainSection>
          <Organizations/>
          <Features/>
          <Faqs/>
          <Testimonials/>
        </MainSection>
        <Footer/>
      </Homepage>
    </ModalContextProvider>
  </MobileMenuContextProvider>
 )
}

export default App
