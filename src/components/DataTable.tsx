import React from 'react';
import { Table } from '@radix-ui/themes';
import { StarIcon, StarFilledIcon } from '@radix-ui/react-icons';

interface DataTableProps {
  columns: Column[];
  rows: any;
}

interface Column {
  props: string;
  label: string;
  isCustom?: boolean;
  width?: string;
}

const DataTable: React.FC<DataTableProps> = ({ columns, rows }) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map((column: any, idx) => {
            return (
              <Table.ColumnHeaderCell key={`${column.props}-${idx}`}>
                {column.label}
              </Table.ColumnHeaderCell>
            );
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {rows.map((row: any, idx: number) => (
          <Table.Row key={idx}>
            {columns.map((column: any, idx) => {
              if (column.props === 'favorite') {
                return (
                  <Table.Cell
                    key={`${column.props}-${idx}`}
                    style={column?.styles ? column.styles : {}}
                  >
                    <StarIcon fill="#000" />
                    <StarFilledIcon fill="#000" />
                  </Table.Cell>
                );
              }
              if (
                column.props === 'price_change_percentage_1h_in_currency' ||
                column.props === 'price_change_percentage_24h_in_currency' ||
                column.props === 'price_change_percentage_7d_in_currency'
              ) {
                return (
                  <Table.Cell
                    key={`${column.props}-${idx}`}
                    className={[
                      parseFloat(row[column.props]) >= 0
                        ? 'text-red-600'
                        : 'text-blue-600',
                      'font-bold',
                    ].join(' ')}
                  >
                    {row[column.props]}
                  </Table.Cell>
                );
              }

              return (
                <Table.Cell
                  key={`${column.props}-${idx}`}
                  style={column?.styles ? { ...column['styles'] } : {}}
                >
                  {row[column.props]}
                </Table.Cell>
              );
            })}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default DataTable;
