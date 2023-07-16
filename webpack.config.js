// SPDX-FileCopyrightText: coxlong <coxlong@qq.com>
// SPDX-License-Identifier: AGPL-3.0-or-later
const webpackConfig = require('@nextcloud/webpack-vue-config');
const path = require('path');

webpackConfig.entry = {
  main: path.join(__dirname, 'src', 'main.js'),
  plugin: path.join(__dirname, 'src', 'plugin.js'),
  file: path.join(__dirname, 'src', 'file.js'),
};

module.exports = webpackConfig;
