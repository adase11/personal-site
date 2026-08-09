import {
  TowsonUniversity,
  type University,
  UniversityOfMaryland
} from '@/data/resume/universities';

export interface IDegree {
  /** Full institutional name, for the Education section and JSON-LD. */
  school: string;
  /** Ordinary use, for one-line summaries like the resume letterhead. */
  shortSchool: string;
  /** The institution itself, for consumers that need a different name length. */
  university: University;
  degree: string;
  link: string;
  year: number;
}

function createDegree(
  university: University,
  degree: string,
  year: number
): IDegree {
  return {
    school: university.detailedName,
    shortSchool: university.name,
    university,
    link: university.school.department.urlString,
    degree: degree,
    year: year
  };
}

const degrees = [
  createDegree(TowsonUniversity, 'M.S. Computer Science', 2019),
  createDegree(UniversityOfMaryland, 'B.S. Information Systems', 2015)
];

export default degrees;
