import React from 'react';

const Step4 = ({ nextStep, prevStep, handleChange, values }) => {
  return (
    <div>
      <h2>Who Can Manage Projects</h2>
      <form>
        <label>
          Permissions:
          <select name="permissions" value={values.permissions} onChange={handleChange('permissions')}>
            <option value="Everyone">Everyone</option>
            <option value="Only Admins">Only Admins</option>
            <option value="Specific People">Specific People</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={prevStep}>Back</button>
        <button type="button" onClick={nextStep}>Next</button>
      </form>
    </div>
  );
};

export default Step4;
