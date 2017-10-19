import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Campuses from './Campuses';
import Campus from './OneCampus';
import Students from './Students';
import Student from './OneStudent';
import { fetchCampuses } from '../reducers/campuses';
import { fetchStudents } from '../reducers/students';
import { connect } from 'react-redux';

export class Root extends Component {

  componentDidMount () {
    this.props.fetchCampuses();
    this.props.fetchStudents();
  }

  render () {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Campuses} />
            <Route exact path="/campuses" component={Campuses} />
            <Route exact path="/students" component={Students} />
            <Route path="/campuses/:id" component={Campus} />
            <Route path="/students/:id" component={Student} />
            <Redirect to="/" />
          </Switch>
      </Router>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = { fetchCampuses, fetchStudents };

export default connect(mapStateToProps, mapDispatchToProps)(Root);

