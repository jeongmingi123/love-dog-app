import tw from "tailwind-styled-components";

import React from "react";

const Nav = tw.nav`
  flex
  w-full
  h-16
  bg-violet-400	
  text-white
  items-center
  mb-10
`;

const Title = tw.span`
  text-2xl
  ml-3
`;

const Icon = tw.i<{ icon: string }>`
  text-2xl
  ${(props) => props.icon}
  ml-4
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <Icon icon="fa-solid fa-dog" />
        <Title>개녀석들</Title>
      </Nav>
    </>
  );
};

export default Navbar;
