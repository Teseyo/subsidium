import React from 'react'
import styled from 'styled-components'
import { Title, Lable } from './../components/textStyled'
import Card from './../components/card'
import { StarOutlined, StarFilled } from '@ant-design/icons'
import { Layout, Menu, Breadcrumb } from 'antd';
import Sider from './../components/sider';

const { Header, Content, Footer } = Layout;

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`
const CustomTitle = styled(Title)``

const CardRow = styled.div`
    display: flex;
    flex-direction: row;
`
const GrayBack = styled.div`
    background-color: #f0f2f5;
    width: 100%;
    height: 30vh;
`

const Home = () => {
    return (
        <Container>
            <Sider />
        </Container>
    )
}
export default Home
