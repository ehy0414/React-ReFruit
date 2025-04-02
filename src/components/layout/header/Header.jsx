import styled from "styled-components"
import HeaderDesign from "./HeaderDesign"

const Wrapper = styled.div`
    width:100%;
    position: absolute;
`

export function Header() {
    return (
        <Wrapper>
            <HeaderDesign />
        </Wrapper>
    )
}