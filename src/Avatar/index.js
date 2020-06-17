import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Avatar({ url, email }) {
    return url ? (
        <section className="img-wrap">
            <img src={url} alt={email} />
            <p className="mail">{email}</p>
        </section>
    ) : null;
}

Avatar.propTypes = {
    url: PropTypes.string,
    email: PropTypes.string
};
export default Avatar;