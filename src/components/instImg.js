import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
const Img = styled.img`
    width: 270px;
    height: 250px;
    margin-top: 10px;
    object-fit: cover;
    cursor: pointer;
`
const InstImg = (props) => {
    return <Link to='/instasub'><Img src={props.ur.node.display_url} /></Link>
}

export default InstImg
