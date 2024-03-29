import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Logout } from "./components/Logout/Logout";
import { AddExercise } from "./components/AddExercise/AddExercise";
import { Details } from "./components/Details/Details";
import { Exercises } from "./components/Exercises/Exercises";
import { Edit } from "./components/Edit/Edit";
import { MyExercises } from "./components/MyExercises/MyExercises";
import { ErrorPage } from "./components/404Page/404Page";

import { AuthProvider } from "./contexts/authContext";
import { ExerciseProvider } from "./contexts/exerciseContext";
import { AuthGuard } from "./components/Guards/AuthGuards";



function App() {
    return (
        <AuthProvider>
            <ExerciseProvider>
                <>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/exercises" element={<Exercises />} />
                        <Route path="/exercises/:exerciseId/details" element={<Details />} />
                        <Route path="/*" element={<ErrorPage />} />

                        <Route element={<AuthGuard />}>
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/add-exercise" element={<AddExercise />} />
                            <Route path="/exercises/:exerciseId/edit" element={<Edit />} />
                            <Route path="/my-exercises" element={<MyExercises />} />
                        </Route>
                    </Routes>
                </>
            </ExerciseProvider>
        </AuthProvider>
    );
};

export default App
