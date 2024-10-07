import { IDegree } from '../../../data/resume/degrees';

export interface IDegreeComponent {
  data: IDegree;
}

const Degree = (data: IDegreeComponent) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.data.degree}</h4>
      <p className="school">
        <a href={data.data.link}>{data.data.school}</a>, {data.data.year}
      </p>
    </header>
  </article>
);

export default Degree;
