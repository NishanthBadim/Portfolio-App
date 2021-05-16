import React from 'react'
import { Navigation, Drawer } from 'react-mdl';
import { Link, Router} from 'react-router-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const DrawerMenu = () => {
    return (
        <Drawer title='My Portfolio'>
            <Navigation>
                <Link to='/'>Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
    )
}

export default DrawerMenu;