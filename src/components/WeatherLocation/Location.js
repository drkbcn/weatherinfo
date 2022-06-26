import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => {
    return (<div className="location text-2xl uppercase">{city}</div>)
};

Location.propTypes = {
    city: PropTypes.string.isRequired
};

export default Location;