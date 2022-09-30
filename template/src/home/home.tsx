import Navbar from "../navbar/navbar";
import tw from "tailwind-styled-components";
import { IDogs } from "../app";
import { useQuery } from "react-query";
import { motion } from "framer-motion";
import { Dog } from "../service/dog_service";
import DogItem from "../dog_item/dog_item";
import { Link, useParams } from "react-router-dom";

interface IProps {
  dogService: {
    findDogsByDogTypeAndCount(dogType: Dog, count: number): Promise<IDogs>;
  };
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

// Tap

const TapBar = tw.div`
  flex
  items-center
  justify-between
  rounded-md
  bg-green-200
  w-2/3
  h-32
  pl-16
  pr-16
  text-3xl
  text-gray-500
`;

const Tap = tw.div`
  
`;

// Dogs
const Wrapper = tw.div`
  grid
  grid-cols-4
  gap-6
  w-2/3
`;

const myVars = {
  start: { scale: 0.8 },
  end: {
    scale: 1,
    transition: { type: "spring", delay: 0.5 },
  },
};

const Home = ({ dogService }: IProps) => {
  const params = useParams<{ dogName: Dog }>();

  const { data, isLoading } = useQuery<IDogs>(["Dogs", params.dogName], () => {
    if (params.dogName === undefined || params.dogName === null) {
      return dogService.findDogsByDogTypeAndCount("afghan", 28);
    }
    return dogService.findDogsByDogTypeAndCount(params?.dogName, 28);
  });

  console.log(params);

  return (
    <>
      <Navbar />
      <Container>
        {isLoading ? (
          <div> Loading... </div>
        ) : (
          <MainDog>
            <MainDogImg
              src={`${data?.message[0]}`}
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
        <TapBar>
          <Tap>
            <Link to={`/afghan`}>afghan</Link>
          </Tap>
          <Tap>
            <Link to={`/basset`}>basset</Link>
          </Tap>
          <Tap>
            <Link to={`/blood`}>blood</Link>
          </Tap>
          <Tap>
            <Link to={`/english`}>english</Link>
          </Tap>
          <Tap>
            <Link to={`/ibizan`}>ibizan</Link>
          </Tap>
          <Tap>
            <Link to={`/plott`}>plott</Link>
          </Tap>
          <Tap>
            <Link to={`/walker`}>walker</Link>
          </Tap>
        </TapBar>
      </Container>
      <Container>
        <Wrapper>
          {isLoading ? (
            <div> loading.... </div>
          ) : (
            data?.message.map((dogUrl) => (
              <DogItem dogUrl={dogUrl} key={dogUrl} />
            ))
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
