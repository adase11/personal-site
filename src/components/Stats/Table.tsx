import React from 'react';
import TableRow from './TableRow';

export interface ITableData {
  label: string;
  key?: string;
  link?: string;
  value?: string | React.ReactNode;
  format?: (date: string | React.ReactNode) => string;
}

export interface ITable {
  data: ITableData[];
}

const Table = (data: ITable) => (
  <table>
    <tbody>
      {data.data.map((pair: ITableData) => (
        <TableRow key={pair.key} {...pair} />
      ))}
    </tbody>
  </table>
);

export default Table;
