import React, { useState } from 'react';
import '../style/crime.css';

export default function Reports() {
  const [updates, setUpdates] = useState([]);
  const [form, setForm] = useState({
    reportId: '',
    assignedOffice: '',
    notes: '',
    status: 'Pending'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.reportId || !form.assignedOffice || !form.status) return;
    setUpdates([
      ...updates,
      { ...form, uniqueId: Date.now() }
    ]);
    setForm({
      reportId: '',
      assignedOffice: '',
      notes: '',
      status: 'Pending'
    });
  };

  const removeUpdate = (uniqueId) => {
    setUpdates(updates.filter(u => u.uniqueId !== uniqueId));
  };

  return (
    <div className="crime-container">
      <h1 className="crime-title">Crime Reports Updates</h1>
      <section className="report-section">
        <h2>Update Crime Case</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="reportId">Report ID</label>
            <input
              id="reportId"
              type="text"
              name="reportId"
              value={form.reportId}
              onChange={handleChange}
              placeholder="Enter crime report ID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="assignedOffice">Assigned Police Office</label>
            <input
              id="assignedOffice"
              type="text"
              name="assignedOffice"
              value={form.assignedOffice}
              onChange={handleChange}
              placeholder="Enter police office name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="notes">Crime Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Add notes about the crime"
              rows={4}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Crime Status</label>
            <select
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="Under Investigation">Under Investigation</option>
              <option value="Resolved">Resolved</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <button type="submit">Submit Update</button>
        </form>
      </section>
      <h2 style={{marginTop: "40px"}}>Updates Table</h2>
      <table className="crime-table">
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Assigned Office</th>
            <th>Notes</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {updates.map((u) => (
            <tr key={u.uniqueId}>
              <td>{u.reportId}</td>
              <td>{u.assignedOffice}</td>
              <td>{u.notes}</td>
              <td>{u.status}</td>
              <td>
                <button onClick={() => removeUpdate(u.uniqueId)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}