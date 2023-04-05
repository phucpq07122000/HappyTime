import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../Components/common/image/logo.png";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      fullName: "",
      companyName: "",
      position: "",
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <div id="registerForm">
        <div className="container">
          <div className="card card-container">
            <img id="logo" src={logo} alt="logo" />
            <h3>Đăng ký tài khoản</h3>
            <form className="form-register">
              <div className="form-control">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa-solid fa-phone"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    id="phoneNumber"
                    className="form-control"
                    placeholder="Nhập số điện thoại*"
                    required
                    autoFocus
                  />
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa-solid fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    className="form-control"
                    placeholder="Nhập họ và tên*"
                    required
                  />
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa-solid fa-building"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    id="companyName"
                    className="form-control"
                    placeholder="Nhập tên công ty*"
                    required
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa-solid fa-briefcase"></i>
                    </span>
                  </div>
                  <select id="position" className="form-control">
                    <option value="" disabled selected>
                      Chức vụ*
                    </option>
                    <option value="CEO">CEO/Founder/Chủ tịch</option>
                    <option value="Director">Giám đốc</option>
                    <option value="Manage">Quản lý</option>
                    <option value="Employee">Nhân viên</option>
                    <option value="Other">Vị trí khác</option>
                  </select>
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Nhập email*"
                    required
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa-solid fa-lock d-inline"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Nhập mật khẩu*"
                    required
                  />
                </div>
              </div>

              <div id="register-check">
                <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  value="agreement"
                  required
                />
                <label htmlFor="agreement" style={{ fontSize: "14px" }}>
                 Đồng ý với Điều khoản và Chính sách của công ty
                </label>
              </div>
              <button
                className="btn btn-lg btn-primary btn-block btn-register"
                type="submit"
              >
                Register
              </button>
            </form>

            <p id="loginText">
              Đã có tài khoản?{" "}
              <NavLink to="/" className="loginLink">
                Đăng nhập ngay!
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
