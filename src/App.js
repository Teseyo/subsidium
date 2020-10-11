import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import apollo from './utils/apollo'
import Home from './pages/home'
import './css/App.css'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`

const App = () => {
    return (
        <div>
            <ApolloProvider client={apollo}>
                <Router>
                    <Container>
                        <Switch>
                            <Route exact path={'/'} component={Home} />
                        </Switch>
                    </Container>
                </Router>
            </ApolloProvider>
        </div>
    )
}

export default App
