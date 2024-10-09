import dayjs from 'dayjs';
import React, { Suspense, lazy } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { IProject } from '../../data/projects';

const PdfViewer = lazy(() => import('./PdfViewer'));

export interface ICell {
  data: IProject;
}

const Cell: React.FC<ICell> = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link}>{data.title}</a>
        </h3>
        {data.date ? (
          <time className="published">
            {dayjs(data.date).format('MMMM, YYYY')}
          </time>
        ) : (
          <div></div>
        )}
      </header>
      {data.youtube ? (
        <a href={data.link} className="image">
          <LiteYouTubeEmbed
            id={data.youtube}
            title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
          />
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
    </article>
  </div>
);

export default Cell;
