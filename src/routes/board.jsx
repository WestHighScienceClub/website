import "../assets/css/app.css";
import "../assets/css/board.css"
import Navbar from "../components/navbar";
import { Helmet } from "react-helmet";

const boardPresidents = [
    {
        name: "Mona Sugawara",
        position: "Co-President",
        id: "mona_sugawara",
        science: "Medicine",
        grade: "2026",
    },
    {
        name: "Qinghan Jia",
        position: "Co-President",
        id: "qinghan_jia",
        science: "Life Sciences",
        grade: "2025",
    },
];

const boardMembers = [
    {
        name: "Isaac Goldberg",
        position: "Treasurer",
        id: "isaac_goldberg",
        science: "Computer Science",
        grade: "2025",
    },
    {
        name: "Shoudao Zhang",
        position: "Lab Lead",
        id: "shoudao_zhang",
        science: "Engineering",
        grade: "2026",
    },
    {
        name: "Yuma Maeda",
        position: "Secretary",
        id: "yuma_maeda",
        science: "Veterinary Sciences",
        grade: "2027",
    },
    {
        name: "Keene Lei",
        position: "Assistant Publicist",
        id: "keene_lei",
        science: "Not Chemistry",
        grade: "2026",
    }
];

const gradeColors = {
    "2025": "#00b330",
    "2026": "#0099ff",
    "2027": "#9d3bff",
};

function makeCard(person) {
    return (
        <div className="card" key={person.id}>
            <p className="grade" style={{"background-color": gradeColors[person.grade]}}>C.O. {person.grade}</p>
            <img src={`/static/board/${person.id}.jpg`}></img>
            {/* <img src="https://static.thenounproject.com/png/3244607-200.png"></img> */}
            <p className="name">{person.name}</p>
            {/* <p className="name">Placeholder name</p> */}
            <p className="position">{person.position}</p>
            <p className="science">Favorite Science: {person.science}</p>
        </div>
    );
}

const boardPresidentsElems = boardPresidents.map(makeCard);
const boardMembersElems = boardMembers.map(makeCard);

export default function Board() {
    return (
        <div className="app">
            <Helmet>
                <title>WHS Science Club - Board</title>
            </Helmet>

            <Navbar />
            <h1>Board</h1>
            <div className="board presidents">{boardPresidentsElems}</div>
            <div className="board members">{boardMembersElems}</div>
        </div>
    );
}
