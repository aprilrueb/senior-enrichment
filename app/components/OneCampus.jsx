import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampus } from '../reducers/campuses';

export class Campus extends Component {

  componentDidMount () {
    const id = this.props.match.params.id;
    this.props.fetchCampus(id);
  }

  render() {
    const campus = this.props.campus;
    return (
      <div>
        <h1>Campus</h1>
          <ul className="campus-details">
            <h1>{campus}</h1>
          </ul>
      </div>
    );
  }
}

const mapStateToProps = ({campus}) => ({campus});
const mapDispatchToProps = { fetchCampus };

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
