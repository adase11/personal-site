import Link from 'next/link';
import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';
import Main from '../layouts/Main';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Austin Dase and dase.dev"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2>
            <Link href="/stats" passHref>
              Stats
            </Link>
          </h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);

export default Stats;
