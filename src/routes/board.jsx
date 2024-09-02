import "../assets/css/app.css";
import Navbar from "../components/navbar";
import { Helmet } from "react-helmet";

export default function Board() {
    return (
        <div className="app">
            <Helmet>
                <title>WHS Science Club - Board</title>
            </Helmet>

            <Navbar />
            <h1>Board</h1>
            <p>Coming soon!</p>
        </div>
    );
}
