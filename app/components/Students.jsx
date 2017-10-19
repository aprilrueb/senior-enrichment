import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Students extends Component {
  render() {
    const students = this.props.students;
    return (
      <div>
        <h1>Students</h1>
          <ul className="student-list">
            {students.map(student =>
              <h3 key={student.id}>
                <li>
                  <Link to={`/students/${student.id}`}>
                    {student.name}
                  </Link>
                </li>
              </h3>
            )}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = ({students}) => ({students});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Students);
