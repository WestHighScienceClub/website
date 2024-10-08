import "../css/app.css";
import "../css/board.css"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

const boardPresidents = [
    {
        name: "Mona Sugawara",
        position: "Co-President",
        id: "mona_sugawara",
        science: "Medicine",
        grade: "Junior",
    },
    {
        name: "Qinghan Jia",
        position: "Co-President",
        id: "qinghan_jia",
        science: "Life Sciences",
        grade: "Senior",
    },
];

const boardMembers = [
    {
        name: "Yuma Maeda",
        position: "Secretary",
        id: "yuma_maeda",
        science: "Veterinary Sciences",
        grade: "Sophomore",
    },

    {
        name: "Shoudao Zhang",
        position: "Lab Lead",
        id: "shoudao_zhang",
        science: "Engineering",
        grade: "Junior",
    },
    {
        name: "Keene Lei",
        position: "Assistant Publicist",
        id: "keene_lei",
        science: "Can't Decide",
        grade: "Junior",
    },
    {
        name: "Isaac Goldberg",
        position: "Treasurer",
        id: "isaac_goldberg",
        science: "Computer Science",
        grade: "Senior",
        otherPosition: "Website Dev",
    },
];

const gradeColors = {
    "Senior": "#00b330",
    "Junior": "#0099ff",
    "Sophomore": "#9d3bff",
};

function positionColor(pos) {
    switch (pos) {
        case "Co-President":
            return ["#e8b200", "#ffd859"];
        default:
            return ["#e64100", "#ff6e33"];
    }
}

function makeCard(person) {
    let [primary, border] = positionColor(person.position);
    return (
        <div className="board-member" key={person.id}>
            <p className="grade" style={{"backgroundColor": gradeColors[person.grade]}}>{person.grade}</p>
            <div className="image-container">
                <img src={`/static/board/${person.id}.jpg`}></img>
            </div>
            <p className="name">{person.name}</p>
            <p className="position" style={{"backgroundColor": primary, "borderColor": border}}>{person.position}</p>
            {person.otherPosition && <p className="otherPosition" style={{"backgroundColor": primary, "borderColor": border}}>{person.otherPosition}</p>}
            <p className="science">Fav Science: {person.science}</p>
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

            <div className="page">
                <Navbar />
                <h1>Club Board</h1>
                <div className="board presidents">{boardPresidentsElems}</div>
                <div className="board members">{boardMembersElems}</div>   
            </div>

            <Footer />
        </div>
    );
}
