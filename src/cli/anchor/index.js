// Copyright 2019 OpenST Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ----------------------------------------------------------------------------
//
// http://www.simpletoken.org/
//
// ----------------------------------------------------------------------------

'use strict';

const file = require('../../config/file');
const AnchorConfig = require('../../config/AnchorConfig');

/**
 * Anchors a state root from a source blockchain onto a target blockchain.
 * @param {string} configFile Path to a mosaic configuration file.
 * @param {Object} anchorCmd The command that provides the options from CLI.
 * @param {string} target Which target to anchor onto.
 */
const anchor = (configFile, anchorCmd, target) => {
  try {
    const config = file.readConfig(configFile);
    const anchorConfig = new AnchorConfig(config, anchorCmd, target);

    // Actual anchor CLI code will go here. console.log as placeholder.
    console.log(anchorConfig);
  } catch (error) {
    console.log(error.toString());
    process.exit(1);
  }
};

module.exports = anchor;
