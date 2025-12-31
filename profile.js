import React from "react";
import "../style/crime.css";
import avatarImg from "../assets/officer.jpg";

function Profile() {
  const officerId = "OFF-10293";
  const yearsOfService = 12;
  const certificates = [
    "Advanced Investigations",
    "Cybercrime Fundamentals",
    "Community Policing",
    "Forensics Basics"
  ];
  const serviceHistory = [
    { period: "2013–2016", location: "Beirut Central District" },
    { period: "2016–2019", location: "Tripoli North Precinct" },
    { period: "2019–2022", location: "Sidon Coastal Unit" },
    { period: "2022–Present", location: "Criminal Investigations HQ" }
  ];

  return (
    <div className="crime-container">
      <img src={avatarImg} alt="Officer photo" className="profile-avatar" />
      <section className="report-section ">
        <h2>Officer Profile</h2>

        <div className="form-group">
          <label>Officer ID</label>
          <input type="text" value={officerId} readOnly />
        </div>

        <div className="form-group">
          <label>Years of Service</label>
          <input type="number" value={yearsOfService} readOnly />
        </div>

        <div className="form-group">
          <label>Certificates</label>
          <ul>
            {certificates.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        <div className="form-group">
          <label>Service History</label>
          <table className="crime-table">
            <thead>
              <tr>
                <th>Period</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {serviceHistory.map((s, i) => (
                <tr key={i}>
                  <td>{s.period}</td>
                  <td>{s.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Profile;
