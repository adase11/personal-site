import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" passHref className="logo">
          <Image
            priority={true}
            src="/images/me.jpeg"
            alt={'austin'}
            width={500}
            height={300}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </Link>
        <header>
          <h2>Austin Dase</h2>
          <p>
            <a href="mailto:hi@dase.dev">hi@dase.dev</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Austin. I&apos;m a Software Engineer at{' '}
          <a href="https://fundrise.com">Fundrise</a>, a graduate of{' '}
          <a href="https://www.rhsmith.umd.edu">The University of Maryland</a>{' '}
          and{' '}
          <a href="https://www.towson.edu/fcsm/departments/computerinfosci/grad/computersci/">
            Towson University
          </a>{' '}
          , and previously I was at{' '}
          <a href="https://www.travelers.com">Travelers</a>.
        </p>
        <ul className="actions">
          <li>
            {currentPath !== '/resume' ? (
              <Link href="/resume" passHref className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" passHref className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Austin&apos;Dase{' '}
          <Link href="/" passHref>
            dase.dev
          </Link>
          .
        </p>
      </section>
    </section>
  );
};

export default SideBar;
