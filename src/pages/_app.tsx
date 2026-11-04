import type { AppProps } from 'next/app'
import  CartProvider  from '../context/CartContext'
import Nav from '../components/nav'
import CategoryNavbar from '../components/CategoryNavbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CartProvider>
            <Nav />
            <CategoryNavbar />

            <Component {...pageProps} />

            <Footer />
        </CartProvider>
    )
}