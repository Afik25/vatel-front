import React from "react";
import Chart from "react-apexcharts";
import { BiUser,FiUsers, BsCloudUploadFill, BsCloudDownloadFill } from "../../middlewares/icons";

const Dashboard = () => {
  const data = [
    {
      label: "Male",
      value: 33.5,
    },
    {
      label: "Female",
      value: 66.5,
    },
  ];
  return (
    <div className="dashboard">
      <div className="container">
        <div className="box box1">
          <div className="item">
            <div className="left">
              <p className="title t-3">Total registration</p>
              <h2 className="title t-2">25</h2>
            </div>
            <div className="right">
              <div className="bloc">
                <h2 className="title t-2">25</h2>
                <p>
                  <span className="male">
                    <BiUser className="icon" />
                  </span>
                  <span>Male</span>
                </p>
              </div>
              <div className="bloc">
                <h2 className="title t-2">25</h2>
                <p>
                  <span className="female">
                    <BiUser className="icon" />
                  </span>
                  <span>Female</span>
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <p className="title t-3">Last registrations</p>
            <h2 className="title t-2">
              Amisi Fikirini <span>Mon 18 sep at 18:13</span>
            </h2>
            <h2 className="title t-2">
              Amisi Fikirini <span>Mon 18 sep at 18:13</span>
            </h2>
            <h2 className="title t-2">
              Amisi Fikirini <span>Mon 18 sep at 18:13</span>
            </h2>
            <p className="title t-3">Last uploaded documents</p>
            <h2 className="title t-2">
              Contracts-title.pdf <span>Mon 18 sep at 18:13</span>
            </h2>
            <h2 className="title t-2">
              Contracts-title.pdf <span>Mon 18 sep at 18:13</span>
            </h2>
            <h2 className="title t-2">
              Contracts-title.pdf<span>Mon 18 sep at 18:13</span>
            </h2>
          </div>
        </div>
        <div className="box box2">
          <Chart
            type="pie"
            width={700}
            height={400}
            series={data.map((item) => item.value)}
            options={{
              title: { text: "Student registration by Percent" },
              noData: { text: "No information." },
              labels: data.map((item) => item.label),
            }}
          />
        </div>
        <div className="box box3">
          <div className="item">
            <h2 className="title t-2">25</h2>
            <p>
              <span className="icon-wrapper">
                <FiUsers className="icon" />
              </span>
              <span>Total employees</span>
            </p>
          </div>
          <div className="item">
            <h2 className="title t-2">25</h2>
            <p>
              <span className="icon-wrapper">
                <BsCloudUploadFill className="icon" />
              </span>
              <span>Total uploaded documents by students</span>
            </p>
          </div>
          <div className="item">
            <h2 className="title t-2">25</h2>
            <p>
              <span className="icon-wrapper">
                <BsCloudUploadFill className="icon" />
              </span>
              <span>Total uploaded documents by enterprise</span>
            </p>
          </div>
          <div className="item">
            <h2 className="title t-2">25</h2>
            <p>
              <span className="icon-wrapper" style={{ backgroundColor: "red" }}>
                <BsCloudDownloadFill className="icon" style={{ color: "white" }} />
              </span>
              <span>Total canceled documents</span>
            </p>
          </div>
        </div>
        <div className="box box4">
          <Chart
            type="bar"
            height={350}
            series={[
              {
                name: "Enterprise",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
              },
              {
                name: "Student",
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
              },
            ]}
            options={{
              title: { text: "Uploaded documents" },
              noData: { text: "No information." },
              // labels: data.map((item) => item.label),
              chart: {
                type: "bar",
                height: 350,
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: "55%",
                  endingShape: "rounded",
                },
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                show: true,
                width: 2,
                colors: ["transparent"],
              },
              xaxis: {
                categories: [
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                ],
              },
              yaxis: {
                title: {
                  text: "number of uploaded documents",
                },
              },
              fill: {
                opacity: 1,
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return val + " documents";
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
