import { AuthProvider } from '../context/Auth'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {

  

  return <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
}

export default MyApp
