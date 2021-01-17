import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='fillout_info'>
          {' '}
          <Link to='/form' style={{ textDecoration: 'none', color: 'black' }}>
            Fill out your Info
          </Link>
        </div>
        <div className='single-job-container'>
          <div className='single-job'>
            <input type='text' placeholder='Provide the Job Lever Link here' />
            <button className='singlejob-btn'>Apply to this job</button>
          </div>
        </div>
        <div className='controls'>
          <div className='company_option'>
            <select name='company' id='company'>
              <option value=''>Select a company</option>
              <option value='netflix'>Netflix</option>
              <option value='netflix'>KPMG</option>
              <option value='netflix'>Shopify</option>
            </select>
          </div>
          <div className='title_option'>
            <select name='title' id='title'>
              <option value=''>Select a Job Title</option>
              <option value='netflix'>Senior Software Engineer</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
