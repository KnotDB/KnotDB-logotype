/*!
 * ----------------
 * KnotDB®-logotype
 * ----------------
 * LogoType of KnotDB® — A manually curated dedicated Protein Knots database.
 * ___________________________________________________________________________
 *
 * Grunt, http://gruntjs.com/ — The JavaScript Task Runner.
 * ___________________________________________________________________________
 *
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Sequømics Research [http://research.sequomics.com/].
 * @copyright : Sequømics Corporation [http://sequomics.com/].
 * ___________________________________________________________________________
 *
 * @date      : 29-Nov-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @require   : grunt-contrib-concat
 * @build     : SEED™ — Umeå
 *              └────── A Sequømics Product — http://sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "KnotDB®-logotype".
 * ___________________________________________________________________________
 */

module.exports = {
  dist: {
    options: {
      separator: ';\n',
      // Replace all 'use strict' statements in the code with a single one at the top.
      banner: "'use strict';\n",
      process: function(src, filepath) {
        return '// Source: ' + filepath + '\n' + src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
      }
    },
    files: {
      // compiled JavaScript for — intermediate work.
      // ./app/en/assets/script/knotdb-logotype-0.0.1.js
      './app/en/assets/script/<%= pkg.name %>-<%= pkg.version %>.js': ['./core/source/script/**/*.js']
    }
  }
};
