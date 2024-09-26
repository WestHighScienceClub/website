import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../css/events.css";

const events = [
    {
        title: "Club Rush",
        date: "September 13",
        description: "hello world"
    }
];

export default function Events() {
    return (
        <div className="app">
            <Helmet>
                <title>WHS Science Club - Events</title>
            </Helmet>

            <div className="page">
                <Navbar />

                <h1>Upcoming Events</h1>

                <div className="events">
                    <Carousel autoPlay={true} infiniteLoop={true} interval={5000} showStatus={false} emulateTouch={true}>
                        <div className="event">
                            <h3>Club Rush</h3>
                            <p>September 13</p>
                        </div>
                        <div className="event">
                            <h3>First Meeting</h3>
                            <p>TBD</p>
                        </div>
                    </Carousel>
                </div>
            </div>
            <Footer />
        </div>
    );
}