import React, { Component } from 'react';
import Notifications from './Notification';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';

class DashBoard extends Component { 
  render() { 
    const { projects } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>  
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return {
    //create out own property and give it projects from projectReducer
    projects: state.project.projects
  }
}
//connect()() passes data from the state to 
export default connect(mapStateToProps)(DashBoard);