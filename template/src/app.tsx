import React from "react";
import { useQuery } from "react-query";
import DogService from "./service/dog_service";

interface IProps {
  dogService: {
    getDogs(): Promise<IDogs>;
  };
}

export interface IDogs {
  message: string[];
  status: string;
}

const App = ({ dogService }: IProps) => {
  const { data, isLoading } = useQuery<IDogs>(
    "Dogs",
    () => dogService.getDogs(),
    {
      refetchInterval: 100000,
    }
  );

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {isLoading ? (
        <div> loading.... </div>
      ) : (
        data?.message
          .slice(0, 25)
          .map((dogUrl) => (
            <img src={dogUrl} width="300px" height="300px"></img>
          ))
      )}
    </>
  );
};
export default App;
