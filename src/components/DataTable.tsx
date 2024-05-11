import React from "react";
import styled from "styled-components";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";
import { Table } from "@radix-ui/themes";
interface DataTableProps {
  columns: Column[];
  rows?: any;
}

interface Column {
  props: string;
  label: string;
}

const DataTableStyle = styled.div``;

const DataTable: React.FC<DataTableProps> = ({ columns, rows }) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map((column: any) => (
            <Table.ColumnHeaderCell>{column.label}</Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
          <Table.Cell>danilo@example.com</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
          <Table.Cell>zahra@example.com</Table.Cell>
          <Table.Cell>Admin</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
          <Table.Cell>jasper@example.com</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

export default DataTable;
