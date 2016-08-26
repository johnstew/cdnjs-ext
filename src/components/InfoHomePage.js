import React, { PropTypes } from 'react';
import * as styles from '../global/styles';

const InfoHomePage = (props) => {
  return (
    <div style={styles.results.infoHomePageContainer}>
      <a
        style={styles.results.infoHomePageLink}
        href={props.homePage}
        target="_blank">
        {props.homePage}
      </a>
    </div>
  );
}

InfoHomePage.propTypes = {
  homePage: PropTypes.string.isRequired
};

export default InfoHomePage;
