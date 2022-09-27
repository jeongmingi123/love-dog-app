import React from "react";
import { useQuery } from "react-query";
import DogList from "./dog_list/dog_list";
import Navbar from "./navbar/navbar";
import DogService from "./service/dog_service";

interface IProps {
  dogService: DogService;
}

const App = ({ dogService }: IProps) => {
  const { isLoading, data } = useQuery<>("Dogs");

  return (
    <>
      <Navbar />
      <DogList />
    </>
  );
};
export default App;
