import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => (
      <div className="wrapper">
      <Header/>
      <main>{children}</main>
      <Footer/>
      </div>
) 

export default Layout