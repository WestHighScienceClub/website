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

            <div className="page home">
                <Navbar />
                <h1>West High Science Club</h1>
                <p>Science Club (formerly Scientific Journalism) is a club that focuses on the <strong>fun</strong> parts of science. Come to our meetings to participate in science labs, games, and activities designed specifically for your requests! Plus, it could be a great club to put on your college applications, as you'll still learn a lot about STEM-related subjects!</p>
            </div>

            <Footer />
        </div>
    );
}
