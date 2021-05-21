// import App from 'next/app'
import { reset, globals } from 'styles';
import { Router } from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done()); 

function MyApp({ Component, pageProps }) {

  return (
    <>
      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {globals}
      </style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
