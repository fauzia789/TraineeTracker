import React from 'react';

const ApplicantTable = ({ applicants }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Application Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {applicants.map((applicant) => (
          <tr key={applicant.id}>
            <td>{applicant.name}</td>
            <td>{applicant.email}</td>
            <td>{applicant.role}</td>
            <td>{applicant.application_date}</td>
            <td>{applicant.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ApplicantTable;