import Link from 'next/link';
import routes from '../../data/routes';
import Hamburger from './Hamburger';

// Website's Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      {routes
        .filter((l) => l.index)
        .map((l) => (
          <Link key={l.label} href={l.path} passHref>
            <a>{l.label}</a>
          </Link>
        ))}
    </h1>
    <nav className="links">
      <ul>
        {routes
          .filter((l) => !l.index)
          .map((l) => (
            <li key={l.label}>
              <Link href={l.path} passHref>
                <a>{l.label}</a>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;
