import React from 'react';

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {
  return (
    <div>
      <h2>Select a View</h2>
      <form>
        <label>
          View:
          <select name="view" value={values.view} onChange={handleChange('view')}>
            <option value="List">List</option>
            <option value="Board">Board</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={prevStep}>Back</button>
        <button type="button" onClick={nextStep}>Next</button>
      </form>
    </div>
  );
};

export default Step3;
