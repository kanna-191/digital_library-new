import React from "react";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <DashboardCard title="Total Books" value="120" />
      <DashboardCard title="Borrowed Books" value="15" />
      <DashboardCard title="Available Books" value="105" />
    </div>
  );
}

export default Dashboard;
