import { useState } from "react";
import { api } from "../core/service";
import dayjs from "dayjs";

export interface getFertilityTrendPayload {
  location: number;
  year: number;
}
export interface TxData {
  amount: string;
  name: string;
  timestamp: string;
  type: string;
}

const getAllTxData = () => {
  return api.service
    .get("/delightlabs-fe-hometest-mockdata.json")
    .then((response) => {
      return response && response.data;
    });
};

export const useFetchTxData = () => {
  const [incomeList, setIncomeList] = useState<TxData[]>([]);
  const [expenseList, setExpenseList] = useState<TxData[]>([]);

  const sortTxCurrentData = (tx: TxData[]) => {
    return tx.map((e) => ({
      ...e,
      txType: e.type,
      type: Number(e.amount) > 0 ? "income" : "expense",
      timestamp: dayjs(e.timestamp).format("YYYY-MM-DD HH:mm:ss"),
    }));
  };

  const getTrendData = async () => {
    const data: any = await getAllTxData();
    const sortedData = sortTxCurrentData(data);
    setIncomeList(sortedData.filter((e) => e.type === "income"));
    setExpenseList(sortedData.filter((e) => e.type === "expense"));
  };

  return {
    incomeList,
    expenseList,
    getTrendData,
    getAllTxData,
  };
};
