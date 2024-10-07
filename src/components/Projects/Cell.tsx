import dayjs from 'dayjs';
import Image from 'next/image';
import React, { Suspense, lazy } from 'react';
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
      {data.image ? (
        <a href={data.link} className="image">
          <Image
            src={`/${data.image}`}
            alt={data.title}
            width={500}
            height={300}
            layout="responsive"
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
