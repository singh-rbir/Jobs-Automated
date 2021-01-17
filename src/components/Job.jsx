import React from 'react';

const Job = props => {
  return (
    <div className='job__container'>
      <div className='right__container'>
        <div className='title'>{props.title}</div>
        <div className='apply_url'>{props.applyUrl}</div>
      </div>
      <div className="left__container">
        <input type="checkbox" name="job" id="job"/>
      </div>
    </div>
  );
};

export default Job;
