import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useAuth } from '../context/Auth'
import { makeStyles } from '@material-ui/core/styles';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/into/">News</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <br />
{/*      
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
       &nbsp;
       <Link href="/about">
          <a>About</a>
        </Link>
       &nbsp;
       <Link href="/into/">
          <a>Main</a>
        </Link>
      </nav> */}
    </>
  );
};

export default Menu;