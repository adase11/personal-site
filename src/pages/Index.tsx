import Link from 'next/link';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Austin Dase's personal website. DC based Software Engineer, " +
      'Lead Software Engineer at Fundrise.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link href="/" passHref>
              <a>About this site</a>
            </Link>
          </h2>
          <p>
            A beautiful, responsive, statically-generated, react application
            written with modern Javascript.
          </p>
        </div>
      </header>
      <p>
        Welcome to my website. Please feel free to read more{' '}
        <Link href="/about" passHref>
          <a>about me</a>
        </Link>
        , or you can check out my{' '}
        <Link href="/resume" passHref>
          <a>resume</a>
        </Link>
        ,{' '}
        <Link href="/projects" passHref>
          <a>projects</a>
        </Link>
        , view{' '}
        <Link href="/stats" passHref>
          <a>site statistics</a>
        </Link>
        , or{' '}
        <Link href="/contact" passHref>
          <a>contact</a>
        </Link>{' '}
        me.
      </p>
      <p>
        Source available{' '}
        <a href="https://github.com/adase11/personal-site">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
