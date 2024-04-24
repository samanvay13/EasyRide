import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navitems";

const NavBarContainer = styled.div`
    min-height: 70px;
    ${tw`
        flex
        flex-row
        w-full
        min-w-full
        max-w-screen-2xl
        items-center
        lg:pl-12
        lg:pr-12
        justify-between
    `}
`;

const LogoContainer = styled.div`

`;

export function Navbar() {
    return <NavBarContainer>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <NavItems />
    </NavBarContainer>
}