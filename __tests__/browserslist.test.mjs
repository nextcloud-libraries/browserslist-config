/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import browserslistConfig from '../browserslist.config.js'
import browserslist from 'browserslist'
import { getUserAgentRegex } from 'browserslist-useragent-regexp'

// Generate a regex that matches user agents to detect incompatible browsers
const supportedBrowsersRegExp = getUserAgentRegex({ allowHigherVersions: true, browsers: browserslistConfig })
const supportedBrowsers = browserslist(browserslistConfig)

// Log the results
console.log('Supported browsers regex for Nextcloud Web:', supportedBrowsersRegExp)
console.log('Supported browsers for Nextcloud Web:', supportedBrowsers.join(', '))

