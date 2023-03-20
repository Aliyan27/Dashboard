import React from "react";
import "./App.css";
import { FaPlus } from "react-icons/fa";
import data from "./common/data.json";

function ViewScreen() {
  return (
    <>
      <div className="Container">
        <div className="title-btn">
          <h2 className="title">Campaigns</h2>
          <span className="d-btn">
            <FaPlus className="plus" />
            Add Campaign
          </span>
        </div>
        <div className="search">
          <label>
            Search:
            <input type="text" name="name" />
          </label>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th colSpan={1} rowSpan={1}>
                  Title
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  Status
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  Start DateTime
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  SMS Text
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  Subscribers
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  SMS Sent
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  Unsub Count
                </th>
                <th colSpan={1} rowSpan={1} className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th colSpan={1} rowSpan={1} className="th2">
                  <input className="form-control" type="text" />
                </th>
                <th colSpan={1} rowSpan={1} className="th2">
                  <select className="custom-select">
                    <option>All</option>
                    <option>Not Started</option>
                    <option>In Progress</option>
                    <option>Stopped</option>
                    <option>Completed</option>
                  </select>
                </th>
                <th colSpan={1} rowSpan={1} className="th2">
                  <input className="form-control" type="text" />
                </th>
                <th colSpan={1} rowSpan={1} />
                <th colSpan={1} rowSpan={1} />
                <th colSpan={1} rowSpan={1} />
                <th colSpan={1} rowSpan={1} />
                <th colSpan={1} rowSpan={1} />
              </tr>
            </thead>
            <tbody>
              {data?.map((data: any, index: number) => (
                <tr className="odd">
                  <td>{data.title}</td>
                  <td>
                    <span className="label label-danger">Stopped</span>
                  </td>
                  <td className="text-center">{data.starttime}</td>
                  <td>{data.SMStext}</td>
                  <td className="text-center">{data.subscribers}</td>
                  <td className="text-center">{data.smssend}</td>
                  <td className="text-center">{data.unsubcount}</td>
                  <td className="text-center">{data.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-bottom">
          <div className="dataTables_info">Showing 1 to 6 of 6 entries</div>
          <div className="bottom-navbar">
            <span>Previous</span>
            <span className="current">1</span>
            <span>Next</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewScreen;
