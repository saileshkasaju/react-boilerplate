/**
*
* Footer
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Footer() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Footer.propTypes = {

};

export default Footer;
