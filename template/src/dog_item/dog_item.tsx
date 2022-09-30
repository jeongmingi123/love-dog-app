import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

interface IProps {
  dogUrl: string;
}

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

const DogItem = ({ dogUrl }: IProps) => {
  return (
    <>
      <DogImg
        src={dogUrl}
        key={dogUrl}
        variants={myVars}
        initial="start"
        animate="end"
      />
    </>
  );
};

export default DogItem;
