import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/ArtfulSpaces' : '/'}>
        <App/>
    </BrowserRouter>
);

