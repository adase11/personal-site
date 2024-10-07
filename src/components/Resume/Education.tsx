import { IDegree } from '../../data/resume/degrees';
import Degree from './Education/Degree';

export interface IEducation {
  data: IDegree[];
}

const Education = (data: IEducation) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Education</h3>
    </div>
    {data.data.map((d) => (
      <Degree data={d} key={d.school} />
    ))}
  </div>
);

export default Education;
