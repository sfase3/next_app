import Link from 'next/link';
import hd from '../styles/Header.module.scss'
import { useRouter } from "next/router";

const navigation = [
      { id: 1, title: 'Home', path: '/' },
      { id: 2, title: 'About', path: '/about' },
      { id: 3, title: 'Users', path: '/users' },
    ];

const Header = () => {
      const { pathname } = useRouter();

      return(
            <header className={hd.page_header}>
                  <div className={hd.header_item}>
                  {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={pathname === path ? hd.a_active : ''}>{title}</a>
          </Link>
        ))}
                  </div>
            </header>
      )
}

export default Header