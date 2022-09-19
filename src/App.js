import React from 'react';
import { Route, Routes, BrowserRouter} from "react-router-dom";
import {createMemoryHistory } from "history";
import Header from "./view/layouts/header";
import Footer from "./view/layouts/footer";
import Users from "./view/pages/users";
import Posts from "./view/pages/posts";
import HomePage from "./view/pages/homePage";
import "./assets/scss/main.scss"

function App() {
  const history = createMemoryHistory();
  return (
      <BrowserRouter location={history.location} navigator={history}>
        <Header />
        <main className="main-layout">
          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/users" element={<Users />}/>
              <Route path="/posts" element={<Posts/>}>
                  <Route path=":id" element={<Posts />} />
              </Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
