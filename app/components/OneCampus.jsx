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
        <h1>College Information</h1>
          <ul className="campus-details">
            <li><h3>Name: {campus.name}</h3></li>
            <li><h3>Phone: {campus.phone}</h3></li>
            <li><h3>Address: {campus.address}</h3></li>
            <img src={campus.image} />
          </ul>
            {campus.students && <Students students={campus.students} />}
      </div>
    );
  }
}

const mapStateToProps = ({campus}) => ({campus});
const mapDispatchToProps = { fetchCampus };

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
