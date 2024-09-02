import '../assets/css/app.css';
import Navbar from "../components/navbar";
import { Helmet } from 'react-helmet';

export default function Root() {
  return (
    <div className="app">
      <Helmet>
        <title>WHS Science Club</title>
      </Helmet>

      <Navbar />
      Coming soon!
    </div>
  );
}
