import React from 'react';

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
  return (
    <div>
      <h2>Project Type</h2>
      <form>
        <label>
          Type:
          <select name="projectType" value={values.projectType} onChange={handleChange('projectType')}>
            <option value="Time & Materials">Time & Materials</option>
            <option value="Fixed Fee">Fixed Fee</option>
            <option value="Non-Billable">Non-Billable</option>
          </select>
        </label>
        <br />
        <label>
          Hourly Rate:
          <input 
            type="number" 
            name="hourlyRate" 
            value={values.hourlyRate} 
            onChange={handleChange('hourlyRate')} 
          />
        </label>
        <br />
        <label>
          Budget:
          <input 
            type="number" 
            name="budget" 
            value={values.budget} 
            onChange={handleChange('budget')} 
          />
        </label>
        <br />
        <button type="button" onClick={prevStep}>Back</button>
        <button type="button" onClick={nextStep}>Next</button>
      </form>
    </div>
  );
};

export default Step2;
