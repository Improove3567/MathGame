import React from 'react'
import styled from '@emotion/styled'
import cells from './images/game/cookie_cells.png'

const Container = styled.div`
width:100%;
height: 100vh;
background-color: #DEC6AA;
`

const Cells = styled.img`
    src: url(${props => props.src});
    width: 40%;
`

const CellsContainer = styled.div`
width:100%;
height: 100vh;
display:flex;
    justify-content:end;
    align-items:center;
    flex-direction: column;
`
const ItemContainer = styled.div`
width:100%;
`

const Item = styled.img`
src: url(${props => props.src});
width: 15%;
`

const Game = () => {
    return (
        <Container>
            <CellsContainer>
                <Cells src='./images/game/cookie_cells.png'></Cells>
            </CellsContainer>
            <ItemContainer>
                <Item src='./images/game/Group3item.png' />
            </ItemContainer>
        </Container>
    )
}

export default Game;