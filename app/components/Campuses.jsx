import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Campuses extends Component {
  render() {
    const campuses = this.props.campuses;
    return (
      <div>
        <h1>All Available Campuses</h1>
          <ul className="campus-list">
            {campuses.map(campus =>
                <h3 key={campus.id}>
                  <li>
                    <Link to={`/campuses/${campus.id}`}>
                      {campus.name}
                    </Link>
                  </li>
                </h3>)
            }
          </ul>
      </div>
    );
  }
}

const mapStateToProps = ({campuses}, ownProps) => ({campuses, ownProps});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
