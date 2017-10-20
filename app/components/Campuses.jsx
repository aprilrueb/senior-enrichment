import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Campuses extends Component {
  render() {
    const campuses = this.props.campuses;
    return (
      <div>
        <h3>The Best NYC Colleges</h3>
          <ul className="float-left">
            {campuses.map(campus =>
                  <li key={campus.id}>
                    <Link to={`/campuses/${campus.id}`}>
                      {campus.name}
                    </Link>
                  </li>
              )}
              </ul>
          <img src="/images/april-nyu.jpg" className="rounded float-right" />
      </div>
    );
  }
}

const mapStateToProps = ({campuses}) => ({campuses});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
