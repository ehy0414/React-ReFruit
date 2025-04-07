import styled from "styled-components"
import HeaderDesign from "./HeaderDesign"

const Wrapper = styled.div`
    align-items: center;
    background-color: #fff;
    display: absolute;
    min-height: 105px;
    width: 82%;
    margin: 0 auto;
    
    @media (max-width: 991px) {
        max-width: 100%;

    }
`

export function Header() {
    return (
        <Wrapper>
            <HeaderDesign />
        </Wrapper>
    )
}