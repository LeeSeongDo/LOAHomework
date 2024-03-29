import Header from '.././src/Commons/Header'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header></Header>
      <Component {...pageProps} />  
    </div>
    
  );
}
