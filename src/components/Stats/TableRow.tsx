import { ITableData } from './Table';

const TableRow = ({ label, link, value, format }: ITableData) => (
  <tr>
    <td width="70%">{label}</td>
    <td>
      {link && format && value ? <a href={link}>{format(value)}</a> : value}
    </td>
  </tr>
);

export default TableRow;
