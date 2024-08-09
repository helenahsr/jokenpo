import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'

function PaginaBase() {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default PaginaBase