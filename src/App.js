import Routes from './routes';
import './styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
    return (
        <div className="app">
            <Routes />
            <ToastContainer autoClose={3000} /> 
        </div>
    );
}


