/*
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import browserslist from 'browserslist'
import { getUserAgentRegex } from 'browserslist-useragent-regexp'
import { test } from 'node:test'
import browserslistConfig from '../browserslist.config.js'

test('browserslist.config.js is a valid browserslist config', () => {
	// Generate a regex that matches user agents to detect incompatible browsers
	const supportedBrowsersRegExp = getUserAgentRegex({ allowHigherVersions: true, browsers: browserslistConfig })
	const supportedBrowsers = browserslist(browserslistConfig)

	// Log the results
	console.log('Supported browsers regex for Nextcloud Web:\n', supportedBrowsersRegExp)
	console.log('Supported browsers for Nextcloud Web:\n', supportedBrowsers.join(', '))

	// No assertions needed, if browserslistConfig is invalid, an error will be thrown
})
