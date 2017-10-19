import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampus } from '../reducers/campuses';

export class Campus extends Component {

  componentDidMount () {
    const campusId = this.props.match.params.id;
    this.props.fetchCampus(campusId);
    console.log('props are: ', this.props);
  }


  render() {
    const campus = this.props.campuses;
    console.log(campus.name);
    console.log('props are: ', this.props);
    return (
      <div>
        <h1>Campus</h1>
          <ul className="campus-details">
            <h1>{campus.name}</h1>
          </ul>
      </div>
    );
  }
}

const mapStateToProps = ({campuses}) => ({campuses});
const mapDispatchToProps = { fetchCampus };

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
