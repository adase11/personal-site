'use client';

import dayjs from 'dayjs';
import { ChevronRight, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import type { IProject } from '@/data/projects';
import useCellStore from '@/store/cell-store';

export interface ProjectCellProps {
  data: IProject;
  id: string;
}

const ProjectCell = ({ data, id }: ProjectCellProps) => {
  const cells = useCellStore((s) => s.cells);
  const setIsOpen = useCellStore((s) => s.setIsOpen);
  const [mounted, setMounted] = useState(false);

  // The store is persisted with skipHydration, so only trust it after mount.
  useEffect(() => setMounted(true), []);

  const isOpen = mounted && (cells[id]?.isOpen ?? false);
  const kind = data.kind ?? (data.youtube ? 'talk' : 'project');
  const href = (path: string) => (path.startsWith('/') ? path : `/${path}`);

  return (
    <article className="border-t border-rule first:border-t-0">
      <details
        open={isOpen}
        onToggle={(e) => setIsOpen(id, e.currentTarget.open)}
      >
        <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
          <div className="min-w-0">
            <p className="label text-accent">{kind}</p>
            <h2 className="mt-2 font-serif text-[1.2rem]">{data.title}</h2>
            {data.subtitle && (
              <p className="mt-1.5 text-[0.92rem] text-muted">
                {data.subtitle}
              </p>
            )}
            {data.date && (
              <time className="mt-2.5 block font-mono text-[0.76rem] text-faint">
                {dayjs(data.date).format('MMMM YYYY')}
              </time>
            )}
          </div>
          <ChevronRight
            aria-hidden="true"
            strokeWidth={1.75}
            className={`mt-1 size-[1.05rem] shrink-0 text-faint transition-transform ${
              isOpen ? 'rotate-90' : ''
            }`}
          />
        </summary>

        <div className="pb-8">
          {data.desc && (
            <p className="mb-5 max-w-2xl text-[0.92rem] leading-[1.65] text-muted">
              {data.desc}
            </p>
          )}

          {/* Heavy embeds are only mounted once the card is actually opened. */}
          {isOpen && data.youtube && (
            <LiteYouTubeEmbed id={data.youtube} title={data.title} />
          )}

          {/* PDFs are linked rather than embedded: the old inline <object>
              viewer was unusable at mobile widths, and a reader who wants the
              paper wants it in their own viewer anyway. */}
          {data.documents && (
            <ul className="flex flex-col gap-2.5">
              {data.documents.map((doc) => (
                <li key={doc.pdf}>
                  <a
                    href={href(doc.pdf)}
                    className="group inline-flex items-baseline gap-2.5 text-[0.92rem] text-muted hover:text-accent"
                  >
                    <FileText
                      aria-hidden="true"
                      strokeWidth={1.75}
                      className="size-3.5 shrink-0 translate-y-[2px] text-faint group-hover:text-accent"
                    />
                    <span className="underline-offset-2 group-hover:underline">
                      {doc.title}
                    </span>
                    <span className="font-mono text-[0.7rem] text-faint">
                      PDF
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          {data.link && (
            <a
              href={data.link}
              className="mt-5 inline-block font-mono text-[0.8rem] text-accent hover:underline"
            >
              {data.linkLabel ?? 'Visit project'} →
            </a>
          )}
        </div>
      </details>
    </article>
  );
};

export default ProjectCell;
