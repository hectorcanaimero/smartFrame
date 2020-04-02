import React, { useContext } from 'react'
import { Router}  from '@reach/router'
import Layout from '../components/Layout'
import { AuthContext } from '../lib/AuthContent'

const CreateScene = () => {
    const auth = useContext(AuthContext)
    return(
        <div>
            <h1>Create Scene</h1>
            <pre>
                { JSON.stringify(auth) }
            </pre>
        </div>
    )
}

const Scenes = () => {
    return <h1>Scenes</h1>
}

const App = () => {
    return(
        <Layout>
            <h1>App</h1>
            <Router basepath='/app' >
                <CreateScene path='/create-scene' />
                <Scenes path='/scenes' />
            </Router>
        </Layout>
    )
}

export default App