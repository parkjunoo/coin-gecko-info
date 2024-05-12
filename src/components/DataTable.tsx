import React from 'react';
import styled from 'styled-components';
import { Table } from '@radix-ui/themes';
interface DataTableProps {
  columns: Column[];
  rows: any;
  children: any;
}

interface Column {
  props: string;
  label: string;
  isCustom?: boolean;
  width?: string;
}

const DataTable: React.FC<DataTableProps> = ({ columns, rows, children }) => {
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
              if (column.isCustom) {
                const comp = Object.keys(children).length
                  ? children
                  : children.find((child: any) => child.props === column.props);
                return (
                  <Table.Cell key={`${comp.id}-${idx}`}>
                    {comp.props && comp.props.children}
                  </Table.Cell>
                );
              }
              return (
                <Table.Cell key={`${column.props}-${idx}`}>
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
