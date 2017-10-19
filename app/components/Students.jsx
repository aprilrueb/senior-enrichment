import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Students extends Component {

  render() {
    const students = this.props.students;
    return (
      <div>
        <h1>All Available Students</h1>
          <ul className="student-list">
            {students.map(student => <h3 key={student.id}><li>{student.name}</li></h3>)}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = ({students}) => ({students});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Students);
