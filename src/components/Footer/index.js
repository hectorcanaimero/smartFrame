import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    return(
        <p className="text-center p-4 text-gray-600 mt-10">
            Created by
            <Link className="border-b text-blue-500" to="https://twitter.com/mithicher" target="_blank">@mithicher</Link>
                <span>. Inspired by </span>
            <Link to="https://dribbble.com/shots/8807920-Quickpay-Hero-section/attachments/1015863" target="_blank" className="border-b text-blue-500">
                 dribbble</Link>
        </p>
    )
}

export default Footer