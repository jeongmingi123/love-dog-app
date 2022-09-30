import DogService, { Dog } from "./service/dog_service";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/home";

interface IProps {
  dogService: {
    findDogsByDogTypeAndCount(dogType: Dog, count: number): Promise<IDogs>;
  };
}

export interface IDogs {
  message: string[];
  status: string;
}
const App = ({ dogService }: IProps) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home dogService={dogService} />} />
          <Route path="/:dogName" element={<Home dogService={dogService} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
