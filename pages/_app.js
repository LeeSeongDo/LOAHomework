import Header from '.././src/Commons/Header'
import '../styles/app.css'
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header></Header>
      <Component {...pageProps} />  
    </div>
    
  );
}
