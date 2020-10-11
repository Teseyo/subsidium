import React from 'react'
import styled from 'styled-components'
const Img = styled.img`
    width: 270px;
    height: 250px;
    margin-top: 10px;
    object-fit: cover;
    cursor: pointer;
`
const InstImg = (props) => {
    return <Img src={props.ur.node.display_url} />
}

export default InstImg
