import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DashbordCampagin.css";
import { FaPlus } from "react-icons/fa";
import data from "./common/data.json";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState<Date | null | any>(
    new Date()
  );
  const data1 = [
    { name: "pending", students: 400, fill: "#f8bf34" },
    { name: "signed", students: 700, fill: "#304e75" },
    { name: "paid", students: 200, fill: "#74ce73" },
    { name: "complete", students: 1000, fill: "#00ada3" },
  ];
  const handlePreviousWeekClick = () => {
    if (selectedDate) {
      const previousWeekStartDate = new Date(
        selectedDate.getTime() - 7 * 24 * 60 * 60 * 1000
      );
      setSelectedDate(previousWeekStartDate);
    }
  };
  const handleCurrentdateClick = () => {
    if (selectedDate) {
      setSelectedDate(new Date());
    }
  };

  return (
    <>
      <div className="Dashboard-campagin">
        <div className="dashboard-header">
          <div className="right">
            <h2 className="title">Campaigns Dashboard</h2>
            <p>Welcome to Campaigns Dashboard</p>
          </div>
          <div className="left">
            <ul>
              <li>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date | null) => setSelectedDate(date)}
                  showTimeInput
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </li>
              <li onClick={handleCurrentdateClick}>
                <span>Monthly</span>
              </li>
              <li onClick={handlePreviousWeekClick}>
                <span>Weekly</span>
              </li>
              <li onClick={handleCurrentdateClick}>
                <span>Daily</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="dashboardrow">
          <div className="recentcampagin">
            <div className="ibox">
              <div className="recentcampagin-header">
                <h5 className="title">Campaigns</h5>
                <span className="d-btn">
                  <FaPlus className="plus" />
                  Add New Campaign
                </span>
              </div>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th colSpan={1} rowSpan={1}>
                        Title
                      </th>
                      <th colSpan={1} rowSpan={1}>
                        Start DateTime
                      </th>
                      <th colSpan={1} rowSpan={1}>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((data: any, index: number) => (
                      <tr className="odd">
                        <td>{data.title}</td>
                        <td>{data.starttime}</td>
                        <td>
                          <span className="label label-danger">Stopped</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <span className="text-center View-more">View More</span>
            </div>
          </div>
          <div className="CampaignsOverview">
            <div className="ibox">
              <h5 className="title">Campaigns Overview</h5>
              <div className="chart">
                <ResponsiveContainer
                  className="ResponsiveContainer"
                  width="100%"
                  height={400}
                >
                  <PieChart>
                    <Pie
                      data={data1}
                      dataKey="students"
                      outerRadius={150}
                      innerRadius={100}
                      fill="green"
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="PieChartData">
                  <ul>
                    <li>
                      <div className="pending"></div>Pending
                    </li>
                    <li>
                      <div className="signed"></div>Signed
                    </li>
                    <li>
                      <div className="conpleted"></div>
                      Paid
                    </li>
                    <li>
                      <div className="paid"></div>Completed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
