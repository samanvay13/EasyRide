import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import McLarenCarImg from "../../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../../assets/images/blob.svg";
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";

const TopSectionContainer = styled.div`
    min-height: 700px;
    margin-top: 6em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        lg:pl-12
        lg:pr-12
        pl-3
        pr-3
    `};
`;

const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `};
`;

const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
    `};
`;

const Slogan = styled.h1`
    ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        md:text-5xl
        sm:text-3xl     
        lg:font-black
        md:font-extrabold
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed   
    `};
`;

const Description = styled.p`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-40
        text-gray-800
        pt-6
    `};
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -10em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -10em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -10em;
    transform: rotate(-20deg);
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: 100%;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -10em;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 21em;
    right: -8em;
    top: 0em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: 5em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: 10em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
  `};
`;

export function TopSection() {
    return (
        <TopSectionContainer>
            <LeftContainer>
                <Slogan>Rent with Ease, Drive with Confidence!</Slogan>
                <Description>
                    With a wide selection of vehicles and seamless booking options, your next adventure is just a click away! Experience convenience, reliability, and affordability with every rental.
                </Description>
                <ButtonsContainer>
          <Button text="Book Your Ride" />
          <Button theme="filled" text="Sell Your Car" />
        </ButtonsContainer>
            </LeftContainer>
            <RightContainer>
                <BlobContainer>
                    <img src={BlobImg} alt="blob"/>
                </BlobContainer>
                <StandaloneCar>
                    <img src={McLarenCarImg} alt="mcLaren" />
                </StandaloneCar>
            </RightContainer>
        </TopSectionContainer>
    );
}