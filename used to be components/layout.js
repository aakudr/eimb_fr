import Nav from "./layout/nav"
import Toolbar from "./layout/toolbar"
import Footer from "./layout/footer"

const Layout = ({ children, categories, seo, menuItems }) => (
  <>
    <header>
      <Toolbar />
      <Nav />
    </header>
    {children}
    <Footer />
  </>
)

export default Layout
