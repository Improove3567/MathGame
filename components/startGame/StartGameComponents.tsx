import styled from '@emotion/styled'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: url('./images/start_game/background_start.png');
    display: flex;
align-items: center;
justify-content: center;
background-repeat: no-repeat;
background-size: cover;
     `

export const Wrapper = styled.div`
width: 25%;
height: 60vh;
background: linear-gradient(#7F75F0,#101F32);
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
@media (max-width: 1200px){
    width: 30%;
}
@media (max-width: 1024px){
    width: 40%;
}
@media (max-width: 768px){
    width: 50%;
}
@media (max-width: 600px){
    width: 70%;
}
@media (max-width: 425px){
    width: 90%;
}
@media (max-width: 375px){
    width: 100%;
}
`
export const ContentWrapper = styled.div`
background-color:white;
width: 92%;
height: 92%;
margin: 0 auto;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;

`
export const RangeContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
export const RangeText = styled.h3`
color:#423F45;
margin: 0;

`
export const RangeInputFirst = styled.input`
width: 60%;
-webkit-appearance: none;
height: 10px;
border-radius: 20px;
background: #FFD748;
cursor: ew-resize;
transition: background .3s ease-in-out;

`
export const RangeInputSecond = styled.input`
width: 80%;
-webkit-appearance: none;
height: 10px;
border-radius: 20px;
background: #FFD748;
cursor: ew-resize;
transition: background .3s ease-in-out;

`
export const ButtonsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const PlusButton = styled.button`
color:#423F45;
font-weight: bold;
background: #FFD748;
border: none;
height: 4vh;
border-radius: 20px;
font-size: 15px;
cursor: pointer;
`
export const MinusButton = styled.button`
color:#423F45;
font-weight: bold;
background: #FFD748;
border: none;
height: 4vh;
border-radius: 20px;
font-size: 15px;
margin-left: 10px;
cursor: pointer;
`
export const PlayButton = styled.button`
width: 50%;
background: #38DF7A;
border: none;
height: 5vh;
border-radius: 10px;
font-size: 15px;
color:white;
cursor: pointer;
`

export const PlayButtonContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
export const RangeNumber = styled.p`
color:#423F45;
margin: 0;
font-size: 12px;
font-weight: bold;
`
export const FirstNumberContainer = styled.div`
width: 59%;
margin-top: 10px;
display: flex;
justify-content: space-between;
`
export const SecondNumberContainer = styled.div`
width: 79%;
margin-top: 10px;
display: flex;
justify-content: space-between;
`