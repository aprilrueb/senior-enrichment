import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Campuses from './Campuses';
import Campus from './OneCampus';
import Students from './Students';
//import store from '../store';
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
      <div>
        <main>
          <Switch>
            <Route exact path="/" component={Campuses} />
            <Route path="/students" component={Students} />
            <Route path="/campuses/:id" component={Campus} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = { fetchCampuses, fetchStudents };

export default connect(mapStateToProps, mapDispatchToProps)(Root);

