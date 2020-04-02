import React from 'react'
import { AuthProvider } from '../../lib/AuthContent'

import './styles.css'
import Header from '../Header'
import Footer from '../Footer'

const Layout = (props) => {
    const { children } = props
    return (
        <AuthProvider>
            <div className="font-sans bg-white flex flex-col min-h-screen w-full">
                <div>
                    <Header />
                    { children }
                    <Footer />
                </div>
            </div>
        </AuthProvider>
    )
}

export default Layout