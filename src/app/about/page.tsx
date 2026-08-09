import type { Metadata } from 'next';
import ProfileCard from '@/components/layout/profile-card';
import PageHeader from '@/components/ui/page-header';
import { narrative } from '@/data/bio';
import { ABOUT, metadataFor } from '@/data/routes';
import { wordCount } from '@/lib/text';

export const metadata: Metadata = metadataFor(ABOUT);

// The long form of the same narrative the homepage opens with — see the note
// in data/bio. Counted at module scope because it is static: the copy is in
// the build output, so there is no empty flash on load and crawlers see it.
const words = narrative.reduce(
  (total, paragraph) => total + wordCount(paragraph.body),
  0
);

const About = () => (
  <>
    <PageHeader eyebrow={ABOUT.eyebrow} title={ABOUT.heading}>
      <p className="label text-faint">in about {words} words</p>
    </PageHeader>

    <div className="prose max-w-none border-t border-rule">
      {narrative.map((paragraph) => (
        <p key={paragraph.id}>{paragraph.body}</p>
      ))}
    </div>

    <div className="mt-14">
      <ProfileCard />
    </div>
  </>
);

export default About;
