import React from "react";
import FirstBanner from "./HomeComponents/FirstBanner";
import StatTable from "./HomeComponents/StatTable";
import PreviewTasks from "./HomeComponents/PreviewTasks";
import "./style.css";

const Home = () => {
  return (
    <div>
      {/* Container */}
      <div className="home-container">
        {/* Layout */}
        <span>
          <h4>Trang Chủ</h4>
        </span>
        <section>
          <div className="section-1">
            <FirstBanner />
          </div>
          <div className="section-2">
            <StatTable className="section-2.1" />
            <PreviewTasks className="section-2.2" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
