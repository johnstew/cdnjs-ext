import React, { PropTypes } from 'react';
import Chip from 'material-ui/Chip';
import * as styles from '../global/styles';

const InfoKeywords = (props) => {
  return (
    <div style={styles.results.infoChipContainer}>
      {
        _.map(props.keywords, (kw, i) => <Chip
          key={i}
          style={styles.results.infoChip}
          labelStyle={{ fontSize: '10px' }}
        >
          {kw}
        </Chip>)
      }
    </div>
  );
}

InfoKeywords.propTypes = {
  keywords: PropTypes.array.isRequired
};

export default InfoKeywords;
