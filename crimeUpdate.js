import React, { useState } from 'react';
import '../style/crime.css';

export default function CrimeUpdate() {
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
    alert('Crime update submitted');
  };

  return (
    <div className="crime-container">
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
    </div>
  );
}

