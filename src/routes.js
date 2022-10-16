import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/header';

import Home from './pages/home';
import Movies from './pages/movies';

import NotFound from './pages/error';

function AppRoutes() {
    return (
        <BrowserRouter>

            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies/:id" element={<Movies />} />

                <Route path="*" element={<NotFound />} />
            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;