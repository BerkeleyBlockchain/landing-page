import { Routes, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import About from "./screens/About";
import Grants from "./screens/Grants";
import React, { useEffect } from 'react';
import useDarkMode from 'use-dark-mode';
import Business from "./screens/Business";
import Research from "./screens/Research";
import Apply from "./screens/Apply";
import Hackathon from "./screens/Hackathon";
import Contact from "./screens/Contact";

function App() {
    const darkMode = useDarkMode(true); 
    useEffect(() => {
        darkMode.enable(); // This will forcibly enable dark mode
      }, [darkMode]);
    return (
        <Routes>
            <Route path="/">
                <Route
                    index
                    element={
                        <Page>
                            <Home />
                        </Page>
                    }
                />
                <Route
                    path="about"
                    element={
                        <Page>
                            <About />
                        </Page>
                    }
                />
                <Route
                    path="hackathon"
                    element={
                        <Page>
                            <Hackathon />
                        </Page>
                    }
                />
                <Route
                    path="grants"
                    element={
                        <Page>
                            <Grants />
                        </Page>
                    }
                />
                <Route
                    path="business"
                    element={
                        <Page>
                            <Business />
                        </Page>
                    }
                />
                <Route
                    path="research"
                    element={
                        <Page>
                            <Research />
                        </Page>
                    }
                />
                 <Route
                    path="apply"
                    element={
                        <Page>
                            <Apply />
                        </Page>
                    }
                />
                 <Route
                    path="contact"
                    element={
                        <Page>
                            <Contact />
                        </Page>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
