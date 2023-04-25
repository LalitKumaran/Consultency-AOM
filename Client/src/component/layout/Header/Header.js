import React from 'react'
import header_styles from './header.module.css'
import {NavBar} from '../Navbar/Navbar'
import {Container} from 'react-bootstrap'
export function Header(){
    return (
        <Container className={header_styles}>
            <NavBar/>
        </Container>
    )
}
