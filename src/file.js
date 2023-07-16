/**
 * SPDX-FileCopyrightText: 2018 John Molakvoæ <skjnldsv@protonmail.com>
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { generateFilePath } from '@nextcloud/router';

import { createApp } from 'vue';
import File from './view/File.vue';

// eslint-disable-next-line
__webpack_public_path__ = generateFilePath(appName, '', 'js/')

const myApp = createApp(File);
myApp.mount('#content');
