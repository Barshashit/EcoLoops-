import React from "react";
import "../Account/AccountHistory.css"; // Reuse sidebar styles
import "./Recycle.css"; // For any new styles (keep minimal for now)
import EcoCoinsProgress from "./EcoCoinsProgress";
import RecycleForm from "./RecycleForm";
import ImpactStats from "./ImpactStats";

const RecyclePage = () => {
  // Progress state starts at 0, updates after recycling
  const [ecoCoins, setEcoCoins] = React.useState(0);
  const [showImpact, setShowImpact] = React.useState(false);
  const [impactData, setImpactData] = React.useState(null);

  // Handler to show impact after form submission and update progress
  const handleRecycle = (data) => {
    setImpactData(data);
    setShowImpact(true);
    setEcoCoins((prev) => prev + (data.coins || 0));
  };

  return (
    <div className="account-history-container">
      <aside className="account-sidebar">
        <div className="sidebar-section">
          <h4>Recycle History</h4>
        </div>
        <div className="sidebar-section">
          <h4>EcoBadges</h4>
        </div>
        <div className="sidebar-section">
          <h4>EcoCoins</h4>
        </div>
      </aside>
      <main className="account-main">
        <h2>Recycle an Item</h2>
        <EcoCoinsProgress current={ecoCoins} nextMilestone={200} />
        {!showImpact ? (
          <RecycleForm onRecycle={handleRecycle} />
        ) : (
          <ImpactStats data={impactData} onBack={() => setShowImpact(false)} />
        )}
      </main>
    </div>
  );
};

export default RecyclePage; 