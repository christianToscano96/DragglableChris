import React, { useState } from "react";
import { Rnd } from 'react-rnd'
import styled from 'styled-components';
import Img from './images.png'

const Header = styled.div`
    display: flex;
    background: linear-gradient(90deg,#271048 0%,#3d5afe 100%);
    height: 25px;
    justify-content: space-between;
    padding:10px;
    align-item: center;
    color: #fff;
    margin-bottom: 20px;
`;

const Content = styled.div`
    display: flex;
    width: auto;
    padding: 10px;
    justify-content: space-around;
`;
const Image = styled.div`
    img {
        width:170px;
        border-radius: 10px;
    };
`;

const Profile = styled.div`
    display: column;
    justify-content: flex-start;
    text-align: start;
`;

const ContentWhrapper = ({ setIsDrogg }) => {
    return (
        <>
            <Header>
                <div>View conversation</div>
                <div>
                    <button onClick={() => setIsDrogg(true)}>E</button>
                    <button onClick={() => setIsDrogg(false)}>X</button>
                </div>
            </Header>
            <Content>
                <Image>
                    <img src={Img} />
                </Image>
                <Profile>
                    <p>Christian</p>
                    <p>christoscano@gmail.com</p>
                    <p>Ledesma - Jujuy</p>
                </Profile>
            </Content>
        </>
    );
}

const Draggable = () => {
    const [state, setState] = useState({
        width: 700,
        height: 500,
        x: 300,
        y: 100
    })

    const [isDragg, setIsDragg] = useState(false)

    return (
        <div>
            {isDragg ? <Rnd
                className="droggable"
                size={{ width: state.width, height: state.height }}
                position={{ x: state.x, y: state.y }}
                onDragStop={(e, d) => { setState({ x: d.x, y: d.y }) }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    setState({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position,
                    });
                }}
            >
                <ContentWhrapper setIsDrogg={setIsDragg} />
            </Rnd> :
                <div>
                    <ContentWhrapper setIsDrogg={setIsDragg} />
                </div>
            }
        </div>
    );
}

export default Draggable;