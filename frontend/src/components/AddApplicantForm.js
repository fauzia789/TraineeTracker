import React, { useState } from 'react';
import axios from 'axios';

const AddApplicantForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    application_date: '',
    status: 'New',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/applicants', formData);
      onAdd(response.data);
      setFormData({ name: '', email: '', role: '', application_date: '', status: 'New' });
    } catch (error) {
      console.error('Error adding applicant:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Role"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      />
      <input
        type="date"
        value={formData.application_date}
        onChange={(e) => setFormData({ ...formData, application_date: e.target.value })}
      />
      <select
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      >
        <option value="New">New</option>
        <option value="WIP">WIP</option>
        <option value="Wait">Wait</option>
        <option value="Pass">Pass</option>
        <option value="Fail">Fail</option>
        <option value="Hire">Hire</option>
      </select>
      <button type="submit">Add Applicant</button>
    </form>
  );
};

export default AddApplicantForm;