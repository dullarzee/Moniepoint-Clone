import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./tailwind/App.css";
import BusinessHomePage from "./pages/BusinessHomePage";
import PersonalHomePage from "./pages/personalHomePage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import Dashboard from "./pages/dashboard";

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
                        <Route path="/login" element={<LoginPage />}></Route>
                        <Route
                            path="/register"
                            element={<RegisterPage />}
                        ></Route>
                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        ></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
