import type { Metadata } from 'next';
import PageHeader from '@/components/ui/page-header';
import data from '@/data/projects';
import { pageMetadata } from '@/lib/metadata';
import ProjectCell from './project-cell';

export const metadata: Metadata = pageMetadata({
  title: 'Projects',
  description:
    'Open-source contributions by Austin Dase, including merged work on ' +
    "Spring AI's Anthropic integration, plus talks and graduate research.",
  path: '/projects'
});

const Projects = () => (
  <>
    <PageHeader eyebrow="Projects" title="Projects">
      <p>
        Open-source contributions, talks, and research. Expand any entry for
        detail.
      </p>
    </PageHeader>

    <div className="border-t border-rule">
      {data.map((project) => (
        <ProjectCell data={project} key={project.title} id={project.title} />
      ))}
    </div>
  </>
);

export default Projects;
