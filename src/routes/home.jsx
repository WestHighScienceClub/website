import '../css/app.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
        <div className="app">
            <Helmet>
                <title>WHS Science Club</title>
            </Helmet>

            <div className="page">
                <Navbar />
                <h1>West High Science Club</h1>
                <p>More info coming soon! For now, <a href="/board">check out the club board!</a></p>
            </div>

            <Footer />
        </div>
    );
}
