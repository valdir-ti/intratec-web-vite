import styled from "styled-components";

type Props = {
  open?: boolean;
};

export const Page = styled.div<Props>`
  display: grid;
  height: 100vh;
  grid-template-rows: 4rem 1fr;
  grid-template-columns: 5rem 1fr;
  grid-template-areas: "sidebar navbar";

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 16rem 1fr 1fr;
    grid-template-rows: 4rem 1fr 3rem;
    grid-template-areas:
      "sidebar navbar navbar"
      "sidebar dashboard dashboard"
      "sidebar footer footer";
  }

  @media only screen and (max-width: 880px) {
    grid-template-columns: 12rem 1fr 1fr;
    grid-template-rows: 4rem 3fr 3rem;
    grid-template-areas:
      "sidebar navbar navbar"
      "sidebar dashboard dashboard"
      "sidebar footer footer";
  }

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4rem 1fr 3rem;
    grid-template-areas:
      "sidebar navbar"
      "sidebar dashboard"
      "sidebar footer";
  }
`;

export const Nav = styled.div`
  grid-area: navbar;
  background-color: antiquewhite;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Side = styled.div<Props>`
  grid-area: sidebar;
  z-index: 1;

  @media only screen and (max-width: 550px) {
    position: fixed;
    left: ${(props) => (props.open ? "-200px" : "0")};
    background-color: ${(props) => props.theme.colors.background};
    height: 100%;
  }
`;
