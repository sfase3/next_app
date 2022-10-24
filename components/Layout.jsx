import Footer from "./Footer";
import Header from "./Header";
import ly from '../styles/Layout.module.scss'

const Layout = ({children}) => (
      <div className="wrapper">
      <Header/>
      <main className={ly.main_item}>{children}</main>
      <Footer/>
      </div>
) 

export default Layout