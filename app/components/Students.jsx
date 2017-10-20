import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Students extends Component {
  render() {
    const students = this.props.students;
    return (
      <div>
      <div className="float-left">
        <h3>Students</h3>
          <ul>
            {students.map(student =>
                <li key={student.id}>
                  <Link to={`/students/${student.id}`}>
                    {student.name}
                  </Link>
                </li>
            )}
          </ul>
          </div>
      </div>
    );
  }
}

const mapStateToProps = ({students}) => ({students});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Students);
