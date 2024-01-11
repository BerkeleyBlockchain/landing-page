import { Routes, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import About from "./screens/About";
import React, { useEffect } from 'react';
import useDarkMode from 'use-dark-mode';
import Consulting from "./screens/Consulting";
import Research from "./screens/Research";
import Apply from "./screens/Apply";
import Contact from "./screens/Contact";
import Education from "./screens/Education";
import Design from "./screens/Design";

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
                    path="education"
                    element={
                        <Page>
                            <Education />
                        </Page>
                    }
                />
                <Route
                    path="design"
                    element={
                        <Page>
                            <Design />
                        </Page>
                    }
                />
                <Route
                    path="consulting"
                    element={
                        <Page>
                            <Consulting />
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
