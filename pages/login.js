import Navigations from "../components/Navigations"
import Footer from "../components/Footer"
import PageBanner from "../components/PageBanner"
import LoginForm from "../components/LoginForm"

function Login() {
    return (
        <div className="min-h-screen overflow-hidden">
            <Navigations />

            <main className="mb-10">
                <PageBanner BannerTitle="Admin Login Panel" />
                <div className="">
                    <h2 className="my-10 text-center text-2xl font-semibold underline">Admin Login</h2>
                </div>
                <LoginForm />
            </main>

            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default Login
