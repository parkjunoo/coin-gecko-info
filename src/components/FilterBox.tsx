import React from 'react';
import { Select } from '@radix-ui/themes';
import styled from 'styled-components';
import { Constant } from '../core/constant';

interface FilterBoxProps {
  refetch: () => void;
  searchParams: {
    vs_currency: string;
    order: string;
    per_page: number;
  };
  setSearchParams: React.Dispatch<
    React.SetStateAction<{
      page?: number;
      vs_currency: string;
      order: string;
      per_page: number;
    }>
  >;
}

const FilterBoxStyle = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 5px;
  width: 100%;

  gap: 10px;
`;

const FilterBox: React.FC<FilterBoxProps> = ({
  searchParams,
  setSearchParams,
  refetch,
}) => {
  return (
    <FilterBoxStyle>
      <Select.Root
        defaultValue={searchParams.order}
        onValueChange={(value) => {
          setSearchParams({ ...searchParams, order: value });
        }}
      >
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            {Constant.ORDER_OPTIONS.map((option, idx) => {
              return (
                <Select.Item
                  key={`${idx}-${option.value}`}
                  value={option.value}
                >
                  {option.label}
                </Select.Item>
              );
            })}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Select.Root
        defaultValue={searchParams.vs_currency}
        onValueChange={(value) => {
          setSearchParams({ ...searchParams, vs_currency: value });
        }}
      >
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            {Constant.CURRENCY_OPTIONS.map((option, idx) => {
              return (
                <Select.Item
                  key={`${idx}-${option.value}`}
                  value={option.value}
                >
                  {option.label}
                </Select.Item>
              );
            })}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Select.Root
        defaultValue={searchParams.per_page.toString()}
        onValueChange={(value) => {
          setSearchParams({
            ...searchParams,
            per_page: Number(value),
            page: 1,
          });
        }}
      >
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            {Constant.PAGE_COUNT_OPTIONS.map((option, idx) => {
              return (
                <Select.Item
                  key={`${idx}-${option.value}`}
                  value={option.value}
                >
                  {option.label}
                </Select.Item>
              );
            })}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </FilterBoxStyle>
  );
};

export default FilterBox;
