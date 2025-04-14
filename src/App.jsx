import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./tailwind/App.css";
import BusinessHomePage from "./pages/BusinessHomePage";
import PersonalHomePage from "./pages/personalHomePage";

function App() {
    return (
        <>
            <div className="[scrollbar-width:thin] [scrollbar-color:blue]">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/business" />} />
                        <Route
                            path="/business"
                            element={<BusinessHomePage />}
                        />
                        <Route
                            path="/personal"
                            element={<PersonalHomePage />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
