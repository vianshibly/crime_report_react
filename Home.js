import React, { useState } from 'react';
import '../style/crime.css';

const CrimeReport = () => {
  const [reports, setReports] = useState([]);
  const [report, setReport] = useState({
    id: '',
    reporterName: '',
    crimeDate: '',
    crimeTime: '',
    crimeType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReport({ ...report, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!report.id || !report.reporterName || !report.crimeDate || !report.crimeTime || !report.crimeType) {
      alert('you should fill all of the blanks');
      return;
    }
    setReports([...reports, { ...report, uniqueId: Date.now() }]);
    setReport({ id: '', reporterName: '', crimeDate: '', crimeTime: '', crimeType: '' });
  };

  const removeReport = (uniqueId) => {
    setReports(reports.filter(r => r.uniqueId !== uniqueId));
  };

  return (
    <div className="crime-container">
      <h2 className="crime-title">Crime Report Management</h2>
      <section class="report-section">
      <h2>Add New Report</h2>
      
      <form onSubmit={handleSubmit}>
        <div class="form-group">
        <input
          type="text"
          name="id"
          value={report.id}
          onChange={handleInputChange}
          placeholder="Report ID"
        />
        </div>
       
        <div class="form-group">
        <input
          type="text"
          name="reporterName"
          value={report.reporterName}
          onChange={handleInputChange}
          placeholder="Reporter Name"
        />
         </div>
       
        <div class="form-group">
        <input
          type="date"
          name="crimeDate"
          value={report.crimeDate}
          onChange={handleInputChange}
        />
         </div>
        
        <div class="form-group">
        <input
          type="time"
          name="crimeTime"
          value={report.crimeTime}
          onChange={handleInputChange}
          required
        />
         </div>
        
        <div class="form-group">
        <input
          type="text"
          name="crimeType"
          value={report.crimeType}
          onChange={handleInputChange}
          placeholder="Type of Crime"
        />
         </div>
        
        <div class="form-group"></div>
        <button type="submit">Add Report</button>
       
      </form>
      
      </section>
      <h1>Crime Reports</h1>
      <table className="crime-table">
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Reporter Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Type of Crime</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r) => (
            <tr key={r.uniqueId}>
              <td>{r.id}</td>
              <td>{r.reporterName}</td>
              <td>{r.crimeDate}</td>
              <td>{r.crimeTime}</td>
              <td>{r.crimeType}</td>
              <td>
                <button onClick={() => removeReport(r.uniqueId)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrimeReport;