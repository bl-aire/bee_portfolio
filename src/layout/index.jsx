import Header from "../components/base/header"
import Footer from "../components/base/footer"

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}