import Link from 'next/link'
import React from 'react'

import {
    ButtonsContainer,
    Container,
    ContentWrapper,
    FirstNumberContainer,
    MinusButton,
    PlayButton,
    PlayButtonContainer,
    PlusButton,
    RangeContainer,
    RangeInputFirst,
    RangeInputSecond,
    RangeNumber,
    RangeText,
    SecondNumberContainer,
    Wrapper
} from './StartGameComponents'

export const StartGame: React.FC = () => {

    return (
        <Container>
            <Wrapper>
                <ContentWrapper>
                    <RangeContainer>
                        <RangeText>Кол-во предметов</RangeText>
                        <FirstNumberContainer>
                            <RangeNumber>2</RangeNumber>
                            <RangeNumber>3</RangeNumber>
                            <RangeNumber>4</RangeNumber>
                            <RangeNumber>5</RangeNumber>
                        </FirstNumberContainer>
                        <RangeInputFirst type="range" />
                    </RangeContainer>
                    <RangeContainer>
                        <RangeText>Значения</RangeText>
                        <SecondNumberContainer>
                            <RangeNumber>A</RangeNumber>
                            <RangeNumber>9</RangeNumber>
                            <RangeNumber>19</RangeNumber>
                            <RangeNumber>50</RangeNumber>
                            <RangeNumber>99</RangeNumber>
                            <RangeNumber>999</RangeNumber>
                        </SecondNumberContainer>
                        <RangeInputSecond type="range" />
                    </RangeContainer>
                    <ButtonsContainer>
                        <PlusButton>По возрастанию</PlusButton>
                        <MinusButton>По убыванию</MinusButton>
                    </ButtonsContainer>
                    <PlayButtonContainer>
                        <PlayButton>
                            <Link href="/play">Играть</Link>
                        </PlayButton>
                    </PlayButtonContainer>
                </ContentWrapper>
            </Wrapper>
        </Container>
    )
}
