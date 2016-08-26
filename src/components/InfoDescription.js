import React, { PropTypes } from 'react';
import * as styles from '../global/styles';

const InfoDescription = (props) => {
  return (
    <div style={styles.results.infoDescriptionContainer}>
      <span style={styles.results.infoDescription}>
        {props.description}
      </span>
    </div>
  );
}

InfoDescription.propTypes = {
  description: PropTypes.string.isRequired
};

export default InfoDescription;
