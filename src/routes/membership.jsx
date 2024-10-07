import '../css/app.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
        <div className="app">
            <Helmet>
                <title>WHS Science Club - Membership Form</title>
            </Helmet>

            <div className="page">
                <Navbar />
                <h1>Membership Form</h1>
                
            </div>

            <Footer />
        </div>
    );
}
