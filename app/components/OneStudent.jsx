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
        <h3>Student Information</h3>
          <ul className="float-left">
            <li>Name: {student.name}</li>
            <li>Email: {student.email}</li>
            <li>Year: {student.year}</li>
            <li>Major: {student.major}</li>
          </ul>
      </div>
    );
  }
}

const mapStateToProps = ({student}) => ({student});
const mapDispatchToProps = { fetchStudent };

export default connect(mapStateToProps, mapDispatchToProps)(Student);
