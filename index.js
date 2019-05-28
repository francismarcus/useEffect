import React from 'react';

export default callback => {
  React.useEffect(() => {
    return callback()
  }, []);
};
