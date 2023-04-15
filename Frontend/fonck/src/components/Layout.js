import {Outlet} from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Layout.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/Home">Itinero</Link></li>
                    <li><Link to="/BuildItinerary">Create an Itinerary!</Link></li>
                    <li><Link to="/Profile"><AccountCircleIcon/></Link></li>
                </ul>
            </nav>

            <main><Outlet/></main>

            <footer></footer>
        </div>
    );
};

export default Layout;