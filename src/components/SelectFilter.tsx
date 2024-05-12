import React from 'react';
import { Select } from '@radix-ui/themes';

interface SelectFilterProps {}

const SelectFilter: React.FC<SelectFilterProps> = (props) => {
  return (
    <Select.Root defaultValue="apple">
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          <Select.Item value="orange">Orange</Select.Item>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="grape" disabled>
            Grape
          </Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default SelectFilter;
