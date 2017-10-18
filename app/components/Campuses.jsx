import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Campuses extends Component {

  render() {
    const campuses = this.props.campuses;
    return (
      <div>
        <h1>Campuses</h1>
          <ul className="campus-list">
            {campuses.map(campus => <h1 key={campus.id}>{campus.name}</h1>)}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = ({campuses}) => ({campuses});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
