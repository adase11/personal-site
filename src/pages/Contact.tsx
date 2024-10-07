import Link from 'next/link';
import ContactIcons from '../components/Contact/ContactIcons';
import EmailLink from '../components/Contact/EmailLink';
import Main from '../layouts/Main';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Austin Dase via email @ hi@dase.dev"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link href="/contact" passHref>
              <a>Contact</a>
            </Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
