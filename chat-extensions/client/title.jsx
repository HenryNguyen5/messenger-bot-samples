/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ===== External Libraries ====================================================
import React, {createElement} from 'react';
import {Input} from 'react-weui';

// Portfolio title field
const Title = ({text, setTitleText}) => {
  return (
    <div id='title'>
      <Input
        value={text}
        placeholder='Currency'
        onChange={(event) => setTitleText(event.target.value)}
      />
    </div>
  );
};

Title.propTypes = {
  text: React.PropTypes.string,
  setTitleText: React.PropTypes.func.isRequired,
};

export default Title;
