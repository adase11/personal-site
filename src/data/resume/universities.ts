export interface WebLink {
  urlString: string;
}

/**
 * Three name granularities, because three places need different ones and the
 * compact ones are not derivable from the formal one. `shortName` is what you
 * would say out loud; the homepage meta row is a single line and only fits at
 * that length.
 */
export interface University extends WebLink {
  /** Conversational. "Towson", "Maryland". */
  shortName: string;
  /** Ordinary use. "Towson University", "University of Maryland". */
  name: string;
  /** Formal, for records. "University of Maryland, College Park". */
  detailedName: string;
  school: School;
}

export interface School extends WebLink {
  name: string;
  department: Department;
}

export interface Department extends WebLink {
  name: string;
}

const smithSchool = 'https://www.rhsmith.umd.edu';
const umd = 'https://umd.edu';
const smithInfoSystems =
  'https://www.rhsmith.umd.edu/programs/undergraduate/academics/academic-majors#information-systems';

export const UniversityOfMaryland: University = {
  shortName: 'Maryland',
  name: 'University of Maryland',
  detailedName: 'University of Maryland, College Park',
  urlString: umd,
  school: {
    name: 'Robert H. Smith School of Business',
    urlString: smithSchool,
    department: {
      name: 'Information Systems',
      urlString: smithInfoSystems
    }
  }
};

const towson = 'https://www.towson.edu';
const fisherSchool = 'https://www.towson.edu/fcsm/';
const towsonCompSci =
  'https://www.towson.edu/fcsm/departments/computerinfosci/';

export const TowsonUniversity: University = {
  shortName: 'Towson',
  name: 'Towson University',
  detailedName: 'Towson University',
  urlString: towson,
  school: {
    name: 'Jess & Mildred Fisher College of Science & Mathematics',
    urlString: fisherSchool,
    department: {
      name: '',
      urlString: towsonCompSci
    }
  }
};
