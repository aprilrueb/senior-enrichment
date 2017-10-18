import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Students extends Component {

  render() {
    const students = this.props.students;
    return (
      <div>
        <h1>Students</h1>
          <ul className="student-list">
            {students.map(student => <h1 key={student.id}>{student.name}</h1>)}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = ({students}) => ({students});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Students);
