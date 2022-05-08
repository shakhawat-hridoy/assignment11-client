import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Header.css"


const Header = () => 
{
    const [user] = useAuthState(auth);

    const handleSignout =() =>
    {
        signOut(auth);
    }

    const addItemLink = <Nav.Link as={Link} to='/home'>Add Item</Nav.Link>
    const myItemsLink = <Nav.Link as={Link} to='/myitems'>My Items</Nav.Link>
    const manageItemsLink = <Nav.Link as={Link} to='/home'>Manage Items</Nav.Link>

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='p-3' fixed='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='d-flex align-items-center brand'>
                        <img height={40} src="https://cdn.pixabay.com/photo/2012/04/18/12/54/strawberry-36949__340.png" className='me-2' alt="" />
                        Fruity
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            {
                                user ? manageItemsLink: null
                            }

                            {
                                user ? addItemLink : null
                            }

                            {
                                user? myItemsLink : null
                            }

                            

                            {
                                user ? <button className='btn btn-link text-decoration-none text-white' onClick={handleSignout}>Logout</button> : <Nav.Link as={Link} to='/login'>Log In</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;