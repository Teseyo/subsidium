import './../css/App.css'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import axios from 'axios'
import { Layout, Menu, Breadcrumb } from 'antd'
import Card from './card.js'
import { Helmet } from 'react-helmet'
import Backg from './../img/FlatMountains2.svg'
import Card1 from './../img/inf/1.svg'
import Card2 from './../img/inf/2.svg'
import Card3 from './../img/inf/3.svg'
import Org from './../img/org/org.svg'
import Nanogram from 'nanogram.js'
import Backa from './../img/inf/backa.svg'

import InstImg from './instImg'
const instagramParser = new Nanogram()

const { Header, Content, Footer } = Layout

const SiderStyle = styled.div`
    background-color: gray;
`
const Headers = styled.div`
    background-color: gray;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    background-color: #222222;
    height: 15vh;
    width: 20.5vh;
`

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 850px;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
`

const Lider = () => {
    const [inst, setInst] = useState([])

    useEffect(() => {
        instagramParser.getMediaByUsername('subsidium_ppossvfu').then((media) => {
            console.log(media.profile.edge_owner_to_timeline_media.edges)
            setInst(media.profile.edge_owner_to_timeline_media.edges)
            console.log('rernder', inst)
        })
    }, [])
    return (
        <Layout className="layout">
            <Header className="Header">
                <div className="logo">
                    <img
                        src="https://www.dropbox.com/s/emx841pels72nar/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%202.png?dl=1"
                        alt="logo"
                        style={{ height: '70px', marginLeft: '5vw', marginTop: '2px' }}
                    />
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['0']}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        backgroundColor: '#8A8989'
                    }}
                >
                    <Menu.Item
                        key="1"
                        style={{ fontFamily: 'Montserrat', backgroundColor: '#8A8989' }}
                    >
                        О ПРОЕКТЕ
                    </Menu.Item>
                    <Menu.Item
                        key="2"
                        style={{ fontFamily: 'Montserrat', backgroundColor: '#8A8989' }}
                    >
                        ОРГАНИЗАТОРЫ
                    </Menu.Item>
                    <Menu.Item
                        key="3"
                        style={{ fontFamily: 'Montserrat', backgroundColor: '#8A8989' }}
                    >
                        КОНТАКТЫ
                    </Menu.Item>

                    <Menu.Item
                        key="4"
                        onClick="   https://www.instagram.com/ppossvfu/"
                        style={{ fontFamily: 'Montserrat', backgroundColor: '#6D6D6D' }}
                    >
                        <img
                            src="https://www.dropbox.com/s/sbdye83tfqleqhv/icons8-instagram%201.png?dl=1"
                            alt="logo"
                            style={{ height: '24px', marginRight: '10px' }}
                        />{' '}
                        PPOSSVFU
                    </Menu.Item>
                    <Menu.Item
                        key="5"
                        onClick="   https://www.instagram.com/ppossvfu/"
                        style={{ fontFamily: 'Montserrat', backgroundColor: '#7BAC54' }}
                    >
                        <img
                            src="https://www.dropbox.com/s/sbdye83tfqleqhv/icons8-instagram%201.png?dl=1"
                            alt="logo"
                            style={{ height: '24px', marginRight: '10px' }}
                        />{' '}
                        SUBSIDIUM
                    </Menu.Item>
                </Menu>
            </Header>
            <Content>
                <Breadcrumb style={{ margin: '16px 0' }} />
                <Helmet>
                    <script
                        async="true"
                        src="//megatimer.ru/get/0bd3cfc91d865320df30e230554232b1.js"
                    ></script>
                </Helmet>
                <div
                    className="site-layout-content"
                    style={{
                        display: 'flex',
                        backgroundImage: `url(${Backg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100%',
                        padding: '0 50px',
                        height: '600px',
                        backgroundPosition: 'bottom',
                        marginBottom: '20px',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '800',
                        fontSize: '30px',
                        lineHeight: '140px',
                        textAlign: 'center',
                        color: '#575757',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    ДО ОТКРЫТИЯ “SUBSIDIUM-2020”
                    <br />
                    осталось:
                    <button className="Buttone">ОНЛАЙН РЕГИСТРАЦИЯ</button>
                </div>
                <div
                    style={{
                        backgroundColor: '#565656',
                        width: '100%',
                        marginTop: '40px',
                        zIndex: '-10'
                    }}
                >
                    {/* <img src={Backa} alt="logo" className='CardBack'/> */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            width: '100%',
                            marginTop: '100px',
                            marginBottom: '100px',
                            zIndex: '5'
                        }}
                    >
                        <div>
                            <img src={Card1} alt="logo" className="CardN" />
                        </div>
                        <div>
                            <img src={Card2} alt="logo" className="CardN" />
                        </div>
                        <div>
                            <img src={Card3} alt="logo" className="CardN" />
                        </div>
                    </div>
                </div>
                <div className="BOrg">
                    <img src={Org} alt="org" className="Org" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CardContainer>
                        {inst ? inst.map((item) => <InstImg ur={item} />) : null}
                    </CardContainer>
                </div>
                {/* <img src={Backa} alt="logo" style={{height: '500px'}} /> */}
                <Card />
            </Content>
            {/* <Footer style={{ textAlign: 'center' }} style={{ backgroundColor: '#8A8989' }}>
                asd
            </Footer> */}
        </Layout>
    )
}

export default Lider
