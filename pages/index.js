import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useAuth } from '../context/Auth'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

const Index = () => {
  const { user, signed, signIn } = useAuth()
  console.log('logado: ', signed)

  const classes = useStyles();

  return (
    <Layout>

      <h1>Home</h1>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eaque explicabo inventore cum totam? Eligendi iure a odit, fugit reiciendis natus voluptate dolorum aliquid vel veniam quos, cupiditate, aperiam dignissimos?</p>

      <Button variant="contained" onClick={signIn}>Sair</Button>
      <Button variant="contained" onClick={signIn}> <Link href="/about"><a>About</a></Link></Button>



    </Layout>
  );
};

export default Index