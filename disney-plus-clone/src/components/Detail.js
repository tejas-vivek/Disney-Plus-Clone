import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"></img>
        </Background>
        <ImageTitle>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"></img>
        </ImageTitle>
        <Controls>
        <PlayButton>
            <img src="/images/play-icon-black.png" />
            <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
            <img src="/images/play-icon-white.png" />
            <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
            <span>+</span>
        </AddButton>
        <GroupPlayButton>
            <img src="/images/group-icon.png" />
        </GroupPlayButton>
        </Controls>
        <SubTitle>
            2018 | 7m | Family, Fantasy, Kids, Animation
        </SubTitle>
        <Description>
            A Chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs back to life. But she finds that nothing stays cute and small forever.
        </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    z-index: -1;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 40px;

    img{
        width:100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
`
const PlayButton = styled.button`
    border-radius: 5px;
    font-size: 15px;
    padding: 0px 24px;
    height: 56px;
    display: flex;
    align-items:center;
    margin-right: 24px;
    background: rgba(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;

    &:hover {
        background: rgb(128, 128, 128);
    }
`
const AddButton = styled.button`
    margin-right: 24px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    border: 2px solid white;
    cursor: pointer;

    span{
        color: white;
        font-size: 30px;
    }

    &:hover{
        background: rgb(198, 198, 198);
    }
`
const GroupPlayButton = styled(AddButton)`

`

const SubTitle = styled.div`
    margin-top: 26px;
    font-size: 16px;
    min-height: 20px;
    color: rgb(249, 249, 249);
`

const Description = styled.div`
    margin-top: 26px;
    line-height: 1.4;
    font-size: 20px;
    color: rgb(249, 249, 249);
`