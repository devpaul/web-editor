import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import * as UnitUnderTest from '../../../src/support/postcssCssnext';

import global from '@dojo/core/global';
import loadModule from '../../support/loadModule';

registerSuite({
	name: 'support/postcssCssnext',

	async 'global.cssnext default return'() {
		assert.isUndefined(global.cssnext, 'should not be defined');
		function cssnext() {}
		global.cssnext = cssnext;
		const postcssModule: typeof UnitUnderTest = await loadModule('../../src/support/postcssCssnext');
		assert.strictEqual(postcssModule.default, cssnext, 'should have exported the global variable');
		delete global.cssnext;
	}
});
