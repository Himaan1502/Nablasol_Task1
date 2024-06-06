import React, { useState } from 'react';

const Step1 = ({ nextStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!values.projectName) tempErrors.projectName = "Project Name is required";
    if (!values.client) tempErrors.client = "Client is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div>
      <h2>Create a Project</h2>
      <form>
        <label>
          Project Name:
          <input 
            type="text" 
            name="projectName" 
            value={values.projectName} 
            onChange={handleChange('projectName')} 
          />
          {errors.projectName && <p className="error">{errors.projectName}</p>}
        </label>
        <label>
          Client:
          <select name="client" value={values.client} onChange={handleChange('client')}>
            <option value="" disabled>Select a client</option>
            <option value="Client1">Client1</option>
            <option value="Client2">Client2</option>
          </select>
          {errors.client && <p className="error">{errors.client}</p>}
          <button type="button">New Client</button>
        </label>
        <label>
          Dates:
          <input 
            type="date" 
            name="startDate" 
            value={values.startDate} 
            onChange={handleChange('startDate')} 
          />
          <input 
            type="date" 
            name="endDate" 
            value={values.endDate} 
            onChange={handleChange('endDate')} 
          />
        </label>
        <label>
          Notes:
          <textarea 
            name="notes" 
            value={values.notes} 
            onChange={handleChange('notes')} 
          ></textarea>
        </label>
        <button type="button" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default Step1;
