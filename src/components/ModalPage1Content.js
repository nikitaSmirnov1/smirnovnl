import React from 'react'
import {
    Group,
    Div,
    Text,
    Title,
    Cell,
    Button,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import styled from "styled-components";


const HeaderImage = styled.img.attrs({
    src: "https://picsum.photos/600/300/?random",
})`
width: 100%;
border-radius: .60rem .60rem 0 0;
`;



const ModalPage1Content = ({onNextClick}) => {
    return (
        <>
            <HeaderImage/>
            <Div>
                <Group className="page-title">
                    <Text weight="regular">Lorem ipsum</Text>
                    <Title level={'2'} weight={'1'}>Tabula contentorum</Title>
                </Group>
                <Group>
                    <Cell>Elige altera optio </Cell>
                    <Cell>Vel vide mirabilem hanc delectu.</Cell>
                    <Cell>Denique, occasionem nanciscere electionis tertiae </Cell>
                </Group>

                <Div>
                    <Button onClick={onNextClick} size='l' mode='primary' stretched='true'>
                        Далее
                    </Button>
                </Div>
            </Div>
        </>
    )
}

export default ModalPage1Content
