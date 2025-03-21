import {Route, Routes} from "react-router";
import {CharacterList} from "./presentation/views/characterList";
import {CharacterDetail} from "./presentation/views/characterDetail";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
    </Routes>
)

export default AppRoutes;