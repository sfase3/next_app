import Link from 'next/link';
import ft from '../styles/Footer.module.scss'


const Footer = () => {

      return(
            <footer className={ft.page_footer}>
                  Created by <a href='https://www.linkedin.com/in/ivan-kovalov-5a900b24b/'>@sfase6.3</a>
            </footer>
      )
}

export default Footer