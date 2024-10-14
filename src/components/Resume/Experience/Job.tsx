import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import React from 'react';
import { IWorkExperience } from '../../../data/resume/work';

export interface IJob {
  data: IWorkExperience;
}

const Job: React.FC<IJob> = ({
  data: { name, position, url, startDate, endDate, summary, highlights }
}) => (
  <article className="jobs-container">
    <header>
      <h4>
        <a href={url}>{name}</a> - {position}
      </h4>
      <p className="daterange">
        {' '}
        {dayjs(startDate).format('MMMM YYYY')} -{' '}
        {endDate ? dayjs(endDate).format('MMMM YYYY') : 'PRESENT'}
      </p>
    </header>
    {summary ? (
      <Markdown
        options={{
          overrides: {
            p: {
              props: {
                className: 'summary'
              }
            }
          }
        }}
      >
        {summary}
      </Markdown>
    ) : null}
    {highlights ? (
      <ul className="points">
        {highlights.map((highlight) => (
          <li key={highlight}>
            <Markdown>{highlight}</Markdown>
          </li>
        ))}
      </ul>
    ) : null}
  </article>
);

export default Job;
