import data from '../../data/stats/personal';
import Table from './Table';

const PersonalStats = () => (
  <>
    <h3>Some stats about me</h3>
    <Table data={data} />
  </>
);

export default PersonalStats;
