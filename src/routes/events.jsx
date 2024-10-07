import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../css/events.css";

const events = [
    {
        title: <>Pre-Lab Meeting</>,
        date: "Date TBD",
        location: "Room TBD",
        description: <></>,
    },
    {
        title: <>Hydroponics Meeting</>,
        date: "Date TBD",
        location: "Room TBD",
        description: <>Our first lab!</>
    }
];

const eventsElems = events.map((event) => {
    return (
        <div className="event">
            <p className="date">{event.date}</p>
            <h3>{event.title}</h3>
            <p className="room">{event.location}</p>
            <p>{event.description}</p>
        </div>
    );
});

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
                    <Carousel autoPlay={true} infiniteLoop={true} interval={15000} showStatus={false} emulateTouch={true}>
                        {eventsElems}
                    </Carousel>
                </div>
            </div>
            <Footer />
        </div>
    );
}