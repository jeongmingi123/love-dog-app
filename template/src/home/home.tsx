import Navbar from "../navbar/navbar";
import tw from "tailwind-styled-components";
import { IDogs } from "../app";
import { useQuery } from "react-query";
import { motion } from "framer-motion";
import { Dog } from "../service/dog_service";
import DogItem from "../dog_item/dog_item";
import { Link, useMatch, useParams } from "react-router-dom";

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

const Loading = tw(motion.div)`
  w-full 
  flex
  justify-center
  items-center
  pb-10
  text-4xl
`;

// MainDog
const MainDog = tw.div`
  grid
  xl:grid-cols-2
  xl:h-96
  lg:grid-cols-1
  lg:place-items-center
  lg:place
  lg:h-auto
  md:place-items-center
  md:w-2/3
  md:h-auto
  sm:h-auto
  h-auto
  tab
  items-center
  bg-red-300
  rounded-md
`;

const MainDogImg = tw(motion.img)`
  w-72
  h-64
  rounded-md
  xl:mr-20
  xl:ml-20
  lg:m-0
  lg:mt-10
  md:mt-10
`;

const MainText = tw(motion.p)`
  w-full
  xl:pr-20
  lg:p-0
  lg:pt-5
  lg:pl-8
  lg:pr-8
  lg:mb-10
  md:pt-5
  md:pl-8
  md:pr-8
  md:mb-10
  sm:pt-5
  text-xl
`;

// Tap
const TapBar = tw.div`
  grid
  2xl:grid-cols-7
  lg:grid-cols-4
  lg:h-40
  sm:grid-cols-3
  sm:h-48
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

const Tap = tw.div<{ isActive: boolean }>`
  ${(props) => (props.isActive ? "text-red-500" : "text-gray-500")}
`;

// Dogs
const Wrapper = tw.div`
  grid
  xl:grid-cols-4
  lg:grid-cols-3
  md:grid-cols-2
  sm:grid-cols-1
  gap-6
  w-2/3
`;

const loadingVars = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
  },
};

const myVars = {
  start: { scale: 0.8 },
  end: {
    scale: 1,
    transition: { type: "spring" },
  },
};

const Home = ({ dogService }: IProps) => {
  const params = useParams<{ dogName: Dog }>();
  const afghanMatch = useMatch("/afghan");
  const bassetMatch = useMatch("/basset");
  const bloodMatch = useMatch("/blood");
  const englishMatch = useMatch("/english");
  const ibizanMatch = useMatch("/ibizan");
  const plottMatch = useMatch("/plott");
  const walkerMatch = useMatch("/walker");

  const { data, isLoading } = useQuery<IDogs>(["Dogs", params.dogName], () => {
    if (params.dogName === undefined || params.dogName === null) {
      return dogService.findDogsByDogTypeAndCount("afghan", 28);
    }
    return dogService.findDogsByDogTypeAndCount(params?.dogName, 28);
  });

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loading variants={loadingVars} initial="start" animate="end">
          loading...{" "}
        </Loading>
      ) : (
        <>
          <Container>
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
          </Container>
          <Container>
            <TapBar>
              <Tap isActive={afghanMatch !== null}>
                <Link to={`/afghan`}>Afghan</Link>
              </Tap>
              <Tap isActive={bassetMatch !== null}>
                <Link to={`/basset`}>Basset</Link>
              </Tap>
              <Tap isActive={bloodMatch !== null}>
                <Link to={`/blood`}>Blood</Link>
              </Tap>
              <Tap isActive={englishMatch !== null}>
                <Link to={`/english`}>English</Link>
              </Tap>
              <Tap isActive={ibizanMatch !== null}>
                <Link to={`/ibizan`}>Ibizan</Link>
              </Tap>
              <Tap isActive={plottMatch !== null}>
                <Link to={`/plott`}>Plott</Link>
              </Tap>
              <Tap isActive={walkerMatch !== null}>
                <Link to={`/walker`}>Walker</Link>
              </Tap>
            </TapBar>
          </Container>
          <Container>
            <Wrapper>
              {data?.message.map((dogUrl) => (
                <DogItem dogUrl={dogUrl} key={dogUrl} />
              ))}
            </Wrapper>
          </Container>
        </>
      )}
    </>
  );
};

export default Home;
