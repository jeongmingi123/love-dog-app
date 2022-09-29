import React from "react";
import { useQuery } from "react-query";
import DogService from "./service/dog_service";
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import Navbar from "./navbar/navbar";

interface IProps {
  dogService: {
    getDogs(): Promise<IDogs>;
  };
}

export interface IDogs {
  message: string[];
  status: string;
}

const Container = tw.div`
  w-full 
  flex
  justify-center
  pb-10
`;

// MainDog
const MainDog = tw.div`
  flex
  items-center
  justify-between
  w-2/3
  h-96
  bg-red-300
  rounded-md
`;

const MainDogImg = tw(motion.img)`
  w-72
  h-64
  rounded-md
  ml-24
`;

const MainText = tw(motion.p)`
  w-1/2
  h-2/3
  mr-32
  text-xl
`;

// Dogs
const Wrapper = tw.div`
  grid
  grid-cols-4
  gap-6
  w-2/3
`;

const DogImg = tw(motion.img)`
  w-72
  h-64
  rounded-md
`;

const myVars = {
  start: { scale: 0.8 },
  end: {
    scale: 1,
    transition: { type: "spring", delay: 0.5 },
  },
};

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
      <Navbar />
      <Container>
        {isLoading ? (
          <div> Loading... </div>
        ) : (
          <MainDog>
            <MainDogImg
              src={data?.message[0]}
              variants={myVars}
              initial="start"
              animate="end"
            />
            <MainText variants={myVars} initial="start" animate="end">
              About the Breed Among the most appealing of the AKC breeds, the
              endearing and instantly recognizable Basset Hound is a perennial
              favorite of dog lovers all over the world. This low-slung and
              low-key hound can be sometimes stubborn, but is always charming.
              The Basset Hound stands no higher than 14 inches at the shoulder
              but, with his remarkably heavy bone, powerful little legs, and
              massive paws, he possesses big-dog strength and stamina.
            </MainText>
          </MainDog>
        )}
      </Container>
      <Container>
        <Wrapper>
          {isLoading ? (
            <div> loading.... </div>
          ) : (
            data?.message.map((dogUrl) => (
              <DogImg
                src={dogUrl}
                key={dogUrl}
                variants={myVars}
                initial="start"
                animate="end"
              />
            ))
          )}
        </Wrapper>
      </Container>
    </>
  );
};
export default App;
