import dayjs from 'dayjs';
import React, { Suspense, lazy, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { Tooltip } from 'react-tooltip'; // Correct import
import { IProject } from '../../data/projects';
import useCellStore from '../../store/cell-store';

const PdfViewer = lazy(() => import('./PdfViewer'));

export interface ICell {
  data: IProject;
  id: string;
}

const Cell: React.FC<ICell> = ({ data, id }) => {
  const { cells, setIsOpen } = useCellStore();

  // Initialize the cell state in Zustand if it doesn't exist yet
  useEffect(() => {
    if (!cells[id]) {
      setIsOpen(id, false); // Initialize as collapsed
    }
  }, [id, cells, setIsOpen]);

  const isOpen = cells[id]?.isOpen || false; // Safely access isOpen

  function handleToggle() {
    console.log(`Setting isOpen = ${!isOpen}`);
    setIsOpen(id, !isOpen); // Toggle open/close state
  }

  return (
    <div className="cell-container">
      <article className="mini-post">
        <Collapsible
          open={isOpen}
          transitionTime={1}
          trigger={
            <header onClick={handleToggle} style={{ cursor: 'pointer' }}>
              <div>
                <h3
                  data-tooltip-id="custom-tooltip"
                  data-tooltip-content={isOpen ? 'collapse' : 'expand'}
                >
                  <a href={data.link}>{data.title}</a>
                </h3>
                <Tooltip
                  id="custom-tooltip"
                  className="custom-tooltip"
                  place="top-start"
                />
              </div>
              {data.date ? (
                <time className="published">
                  {dayjs(data.date).format('MMMM, YYYY')}
                </time>
              ) : (
                <div></div>
              )}
            </header>
          }
        >
          {data.youtube ? (
            <a href={data.link} className="image">
              <LiteYouTubeEmbed id={data.youtube} title={data.title} />
            </a>
          ) : (
            <div></div>
          )}
          {data.pdf ? (
            <Suspense fallback={<div>Loading PDF...</div>}>
              {<PdfViewer data={{ path: data.pdf }} />}
            </Suspense>
          ) : (
            <div></div>
          )}
          <div className="description">
            <p>{data.desc}</p>
          </div>
        </Collapsible>
      </article>
    </div>
  );
};

export default Cell;
