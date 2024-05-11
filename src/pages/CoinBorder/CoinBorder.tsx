import React from "react";
import CoinBorderStyle from "./CoinBorder.style";
import DataTable from "../../components/DataTable";

interface CoinBorderProps {}

const CoinBorder: React.FC<CoinBorderProps> = ({}) => {
  const columns = [
    {
      props: "favorite",
      label: "",
      width: "50px",
    },
    {
      props: "account",
      label: "자산",
    },
    {
      props: "price",
      label: "Price",
    },
    {
      props: "hour",
      label: "1H",
    },
    {
      props: "days",
      label: "24H",
    },
    {
      props: "week",
      label: "7D",
    },
    {
      props: "volume",
      label: "24H Volume",
    },
  ];

  

  return (
    <CoinBorderStyle>
      <DataTable columns={columns} />
    </CoinBorderStyle>
  );
};

export default React.memo(CoinBorder);
