import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Job from './Job';
import axios from 'axios';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      jobList: [],
    };
  }

  handleCompanyChange = async e => {
    e.preventDefault();
    this.setState({
      company: e.target.value,
    });
    const { data } = await axios.get(
      `https://api.lever.co/v0/postings/${e.target.value}`,
    );
    console.log(data);
    this.setState({ jobList: data });
  };

  render() {
    return (
      <div className='container'>
        <div className='fillout_info'>
          {' '}
          <Link to='/form' style={{ textDecoration: 'none', color: 'black', borderBottom: 'black dotted'}}>
            Fill out your Info
          </Link>
        </div>
        <div className='single-job-container'>
          <div className='single-job'>
            <input type='text' placeholder='Provide the Job Lever Link here' />
            <button className='singlejob-btn'>Apply to this job</button>
          </div>
        </div>
        <hr/>
        <div className='controls'>
          <div className='company_option'>
            <select
              name='company'
              id='company'
              onChange={this.handleCompanyChange}>
              <option value=''>Select a company</option>
              <option value='netflix'>Netflix</option>
              <option value='kpmg'>KPMG</option>
              <option value='shopify'>Shopify</option>
            </select>
          </div>
          <div className='title_option'>
            <select name='title' id='title'>
              <option value=''>Select a Job Title</option>
              <option value='netflix'>Senior Software Engineer</option>
            </select>
          </div>
          <div className='apply__btn__container'>
            <button className='apply_btn'>Apply to selected jobs</button>
          </div>
        </div>
        <div className='jobList__container'>
          <ul>
            {this.state.jobList.map(job => {
              return <Job title={job.text} applyUrl={job.applyUrl} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;
