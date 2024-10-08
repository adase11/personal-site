import Link from 'next/link'; // Use Next.js' Link
import { useState } from 'react';
import { slide as ReactBurgerMenu } from 'react-burger-menu'; // Adjust this import for your burger menu style
import routes from '../../data/routes';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hamburger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                &#10005;
              </div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                &#9776;
              </div>
            </li>
          )}
        </ul>
      </nav>

      <ReactBurgerMenu right isOpen={open}>
        <ul className="hamburger-ul">
          {routes.map((l) => (
            <li key={l.label}>
              <Link href={l.path} passHref onClick={() => setOpen(!open)}>

                <h3 className={l.index ? 'index-li' : undefined}>
                  {l.label}
                </h3>

              </Link>
            </li>
          ))}
        </ul>
      </ReactBurgerMenu>
    </div>
  );
};

export default Hamburger;
