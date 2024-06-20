import React from "react";
import "./HomeRightBar.css";
import Navbar from "../Navbar";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const HomeRightBar = () => {

  const data7 = [
    { name: "Group A", value:400},
    { name: "Group B", value:300},
    { name: "Group C", value:300},
    { name: "Group D", value:200},
  ];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "FF8042"];
  const data = [
    {
      name: "Page A",
      uv: 1000,
      fill: "#bab4b4",
    },
    {
      name: "Page B",
      uv: 2800,
      fill: "#bab4b4",
    },
    {
      name: "Page C",
      uv: 1600,
      fill: "#bab4b4",
    },
    {
      name: "Page D",
      uv: 3780,
      fill: "palevioletred",
    },
    {
      name: "Page E",
      uv: 2890,
      fill: "#bab4b4",
    },
    {
      name: "Page F",
      uv: 1390,
      fill: "#bab4b4",
    },
    {
      name: "Page G",
      uv: 1090,
      fill: "#bab4b4",
    },
  ];

  const data1 = [
    {
      name: "Page A",
      uv: 1000,
      fill: "#bab4b4",
    },
    {
      name: "Page B",
      uv: 2800,
      fill: "#bab4b4",
    },
    {
      name: "Page C",
      uv: 1600,
      fill: "#bab4b4",
    },
    {
      name: "Page D",
      uv: 3780,
      fill: "cornflowerblue",
    },
    {
      name: "Page E",
      uv: 2890,
      fill: "#bab4b4",
    },
    {
      name: "Page F",
      uv: 1390,
      fill: "#bab4b4",
    },
    {
      name: "Page G",
      uv: 1090,
      fill: "#bab4b4",
    },
  ];

  const data2 = [
    {
      name: "Page A",
      uv: 2000,
      fill: "#bab4b4",
    },
    {
      name: "Page B",
      uv: 2800,
      fill: "#bab4b4",
    },
    {
      name: "Page C",
      uv: 1600,
      fill: "#bab4b4",
    },
    {
      name: "Page D",
      uv: 3780,
      fill: "plum",
    },
    {
      name: "Page E",
      uv: 900,
      fill: "#bab4b4",
    },
    {
      name: "Page F",
      uv: 1390,
      fill: "#bab4b4",
    },
    {
      name: "Page G",
      uv: 1090,
      fill: "#bab4b4",
    },
  ];

  const data4 = [
    {
      name: "Page A",
      task_created: 2500,
      task_completed: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      task_created: 1000,
      task_completed: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      task_created: 2000,
      task_completed: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      task_created: 3780,
      task_completed: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      task_created: 4000,
      task_completed: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      task_created: 1390,
      task_completed: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      task_created: 3990,
      task_completed: 4300,
      amt: 2100,
    },
  ];

  const data5 = [
    {
      name: "Page A",
      task_created: 2500,
      task_completed: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      task_created: 1000,
      task_completed: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      task_created: 2000,
      task_completed: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      task_created: 3780,
      task_completed: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      task_created: 2000,
      task_completed: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      task_created: 3390,
      task_completed: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      task_created: 4000,
      task_completed: 4300,
      amt: 2100,
    },
  ];

  const data6 = [
    {
      name: "Jan",
      uv: 4000,
      amt: 2400,
      fill: "#bab4b4",
    },
    {
      name: "Feb",
      uv: 3000,
      amt: 2210,
      fill: "#bab4b4",
    },
    {
      name: "March",
      uv: 2000,
      amt: 2290,
      fill: "#bab4b4",
    },
    {
      name: "Apr",
      uv: 2780,
      amt: 3000,
      fill: "#bab4b4",
    },
    {
      name: "May",
      uv: 1890,
      amt: 2181,
      fill: "#bab4b4",
    },
    {
      name: "June",
      uv: 2390,
      amt: 2500,
      fill: "cornflowerblue",
    },
    {
      name: "July",
      uv: 4490,
      amt: 4100,
      fill: "#bab4b4",
    },

    {
      name: "Aug",
      uv: 1490,
      amt: 1100,
      fill: "#bab4b4",
    },

    {
      name: "Sep",
      uv: 2490,
      amt: 2500,
      fill: "#bab4b4",
    },

    {
      name: "Oct",
      uv: 4490,
      amt: 3100,
      fill: "#bab4b4",
    },

    {
      name: "Nov",
      uv: 1490,
      amt: 2100,
      fill: "#bab4b4",
    },

    {
      name: "Dec",
      uv: 2490,
      amt: 1100,
      fill: "#bab4b4",
    },
  ];

  return (
    <>
      <div className="mainHomeRightbar">
        <Navbar />
        <div className="container">
          <div className=" row">
            <div className=" col-lg-4 col-md-6">
              <div className="itemContainer1">
                <p className="taskProgress">Task Progress</p>
                <p className="taskCounter">212</p>
                <p className="currentMonth1">Current Month</p>
              </div>
              <div className="barchartContainer">
                <BarChart width={160} height={100} data={data}>
                  <Tooltip />
                  <Bar dataKey="uv" fill="fill" />
                </BarChart>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 ">
              <div className="itemContainer2">
                <p className="taskProgress">Task Completed</p>
                <p className="taskCounter1">301</p>
                <p className="currentMonth1">Current Month</p>
              </div>
              <div className="barchartContainer">
                <BarChart width={160} height={100} data={data1}>
                  <Tooltip />
                  <Bar dataKey="uv" fill="fill" />
                </BarChart>
              </div>{" "}
            </div>
            <div className=" col-lg-4 col-md-6">
              <div className="itemContainer3">
                <p className="taskProgress">Monthly Task Summary</p>
                <p className="taskCounter2">1294</p>
                <p className="currentMonth1">Current Month</p>
              </div>
              <div className="barchartContainer">
                <BarChart width={160} height={100} data={data2}>
                  <Tooltip />
                  <Bar dataKey="uv" fill="fill" />
                </BarChart>
              </div>
            </div>
          </div>
          <div className="middleTaskChart">
            <p className="taskCreatevsComplete">
              Task Created vs Task Completed
            </p>
            <AreaChart
              width={1055}
              height={200}
              data={data4}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              {/* <XAxis dataKey="name" /> */}
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="task_created"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="task_completed"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </div>

          <div className="taskContainer">
            <div className="taskChart">
              <p className="taskContainerText">
                Your Team Performance This Week
              </p>
              <PieChart width={300} height={300}>
                <Pie
                  data={data7}
                  cx={150}
                  cy={100}
                  startAngle={180}
                  endAngle={0}
                  innerRadius={50}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
              <p className="teamPerformanceTask">Your Team Performance is 5% better than last week</p>
              <button className="viewDetailsBtn">View Details</button>
            </div>
            <div className="monthlyEarning">
              <p className="taskContainerText">Monthly Earning Performance</p>
              <LineChart
                width={710}
                height={200}
                data={data6}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRightBar;
