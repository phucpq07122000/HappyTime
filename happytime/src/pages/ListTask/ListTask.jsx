import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./style.css";

const ListTask = () => {
  const [searchEmployees, setSearchEmployees] = useState();
  const [searchEmployers, setSearchEmployers] = useState();
  return (
    <div className="list-container">
      <div className="btn-list">
        <NavLink
          to="/listTask"
          key="1"
          className="btn-list-item"
          style={{ borderLeft: "3px solid rgb(255, 159, 10)", color: "orange" }}
        >
          <div className="btn-list-icon">
            <i className="fa-solid fa-table-list"></i>
          </div>
          <div className="btn-list-name">Danh sách công việc</div>
        </NavLink>
        <NavLink
          to="/listTask/task-assignments"
          key="2"
          className="btn-list-item"
        >
          <div className="btn-list-icon">
            <i className="fa-solid fa-calendar-day"></i>
          </div>
          <div className="btn-list-name">Phân công</div>
        </NavLink>
      </div>
      <div className="list-content">
        {/* Main Content */}
        <div className="list-wrap">
          {/* Select Items */}
          <span>
            <h6>DANH SÁCH CÔNG VIỆC</h6>
          </span>
          <div className="list-wrap-container-task">
            <div>
              <Form.Select className="list-select-items">
                <option>Trạng thái hoạt động</option>
                <option value="1">Tất cả</option>
                <option value="2">Đang hoạt động</option>
                <option value="3">Chưa hoạt động</option>
              </Form.Select>
            </div>
            <div>
              <Form.Select className="list-select-items">
                <option>Loại công việc</option>
                <option value="1">abc</option>
                <option value="2">def</option>
              </Form.Select>
            </div>

            <form>
              <input
                type="text"
                className="list-input"
                value={searchEmployees}
                placeholder="Nhập tên nhân viên, mã nhân viên"
                onChange={(e) => setSearchEmployees(e.target.value)}
              />
              <button className="list-input-suffix">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <form>
              <input
                type="text"
                className="list-input"
                value={searchEmployers}
                placeholder="Nhập tên khách hàng"
                onChange={(e) => setSearchEmployers(e.target.value)}
              />
              <button className="list-input-suffix">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <button className="list-add-btn">
              <i className="fa-solid fa-plus"></i> THÊM MỚI
            </button>
          </div>
        </div>
        <div>{/* Table */}</div>
      </div>
    </div>
  );
};

export default ListTask;
