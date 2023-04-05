import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/login";
import Register from "./pages/Register/register";
import Home from "./pages/Home/Home";
import BangCong from "./pages/BangCong/BangCong";
import QuanLyNhanSu from "./pages/HRM/QuanLyNhanSu";
import ListTask from "./pages/ListTask/ListTask";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Components/layouts/layout";

import "./App.css";

const MenuCtx = React.createContext({
  isNavOpen: true,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: true,
      openNav: (isOpen) => {
        this.setState({
          ...this.state,
          isNavOpen: isOpen,
        });
      },
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <MenuCtx.Provider value={this.state}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" index element={<Home />} />
                <Route path="/bangCong" element={<BangCong />} />
                <Route path="/ListTask" element={<ListTask />} />
                <Route path="/quanLyNhanSu" element={<QuanLyNhanSu />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </MenuCtx.Provider>
        </div>
      </BrowserRouter>
    );
  }
}
App.MenuCtx = MenuCtx;

export default App;
