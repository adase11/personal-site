import { Download } from 'lucide-react';
import type { Metadata } from 'next';
import PageHeader from '@/components/ui/page-header';
import { email, title as jobTitle, location, name, degree } from '@/data/bio';
import { pageMetadata } from '@/lib/metadata';
import { RESUME_PDF_PATH, SITE_URL } from '@/lib/site';
import Education from './education';
import Experience from './experience';
import SelectedWork from './selected-work';
import Skills from './skills';

export const metadata: Metadata = pageMetadata({
  title: 'Resume',
  description:
    'Resume of Austin Dase — Director of Engineering at Fundrise. Applied ' +
    'AI and LLM product engineering, payments and settlement infrastructure, ' +
    'Java and Spring Boot, TypeScript, React and Next.js.',
  path: '/resume'
});

const SECTIONS = [
  { label: 'Selected work', href: '#selected-work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' }
];

const Resume = () => (
  <>
    {/* Print-only letterhead. On screen the site chrome already says whose
        resume this is; in a PDF, "Resume" alone at the top of page one does
        not. */}
    {/* A <p>, not an <h1>: the page already has one in the header below, and
        a second — visible only to print — would still be read aloud. */}
    <div className="hidden print:block">
      <p className="text-[1.9rem] leading-tight font-serif text-fg">{name}</p>
      <p className="mt-1.5 font-mono text-[0.78rem] text-muted">{jobTitle}</p>
      <p className="mt-1.5 font-mono text-[0.78rem] text-muted">{degree}</p>
      <p className="mt-1 font-mono text-[0.78rem] text-faint">
        {location} · {email} · {SITE_URL.replace('https://', '')}
      </p>
      <hr className="mt-4 border-rule" />
    </div>

    <div data-print-hide>
      <PageHeader eyebrow="Resume" title="Resume">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <nav aria-label="Resume sections" className="flex flex-wrap gap-2">
            {SECTIONS.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="nav-link border border-rule px-3 py-1.5 text-muted hover:border-accent hover:text-fg"
              >
                {section.label}
              </a>
            ))}
          </nav>

          {/* Regenerated from this page by scripts/build-resume-pdf.mjs, so
            the download and the page cannot drift apart. */}
          <a
            href={RESUME_PDF_PATH}
            download
            className="btn btn-primary inline-flex items-center gap-2 print:hidden"
          >
            <Download
              aria-hidden="true"
              strokeWidth={1.75}
              className="size-3.5"
            />
            Download PDF
          </a>
        </div>
      </PageHeader>
    </div>

    <SelectedWork />
    <Experience />
    <Education />
    <Skills />
  </>
);

export default Resume;
