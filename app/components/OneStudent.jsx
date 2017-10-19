import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudent } from '../reducers/student';

export class Student extends Component {

  componentDidMount () {
    const studentId = this.props.match.params.id;
    this.props.fetchStudent(studentId);
  }

  render() {
    const student = this.props.student;
    return (
      <div>
        <h1>Student Information</h1>
          <ul className="student-details">
            <li><h3>Name: {student.name}</h3></li>
            <li><h3>Email: {student.email}</h3></li>
            <li><h3>Year: {student.year}</h3></li>
            <li><h3>Major: {student.major}</h3></li>
          </ul>
      </div>
    );
  }
}

const mapStateToProps = ({student}) => ({student});
const mapDispatchToProps = { fetchStudent };

export default connect(mapStateToProps, mapDispatchToProps)(Student);
