import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampus } from '../reducers/campus';
import { Students } from './Students';

export class Campus extends Component {

  componentDidMount () {
    const campusId = this.props.match.params.id;
    this.props.fetchCampus(campusId);
  }

  render() {
    const campus = this.props.campus;
    return (
      <div>
      <img src={campus.image} className="rounded float-right" />
      <div className="float-left">
      <ul>
        <h3>College Information</h3>
            <li>Name: {campus.name}</li>
            <li>Phone: {campus.phone}</li>
            <li>Address: {campus.address}</li>
            </ul>
            <ul>
            {campus.students && <Students students={campus.students} />}
            </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({campus}) => ({campus});
const mapDispatchToProps = { fetchCampus };

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
