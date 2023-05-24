import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import BangCong from "./pages/BangCong/BangCong";
import QuanLyNhanSu from "./pages/HRM/QuanLyNhanSu";
import ListTask from "./pages/ListTask/ListTask";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Components/layouts/layout";
import LoginForm from "./pages/Login/LoginForm";
import "./App.css";
import TaskAssigned from "./pages/ListTask/AssignTask";

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
              <Route path="/" element={<LoginForm />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Layout />}>
                <Route path="/home" index element={<Home />} />
                <Route path="/bangCong" element={<BangCong />} />
                <Route path="/ListTask" element={<ListTask />} />
                <Route path="/quanLyNhanSu" element={<QuanLyNhanSu />} />
                <Route
                  path="/ListTask/task-assignments"
                  element={<TaskAssigned />}
                />
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
