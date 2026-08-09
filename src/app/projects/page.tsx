import type { Metadata } from 'next';
import PageHeader from '@/components/ui/page-header';
import data from '@/data/projects';
import { metadataFor, PROJECTS } from '@/data/routes';
import ProjectCell from './project-cell';

export const metadata: Metadata = metadataFor(PROJECTS);

const Projects = () => (
  <>
    <PageHeader eyebrow={PROJECTS.eyebrow} title={PROJECTS.heading}>
      <p>{PROJECTS.lede}</p>
    </PageHeader>

    <div className="border-t border-rule">
      {data.map((project) => (
        <ProjectCell data={project} key={project.title} id={project.title} />
      ))}
    </div>
  </>
);

export default Projects;
