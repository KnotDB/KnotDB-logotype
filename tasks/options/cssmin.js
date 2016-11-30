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
 * @require   : grunt-contrib-cssmin
 * @build     : SEED™ — Umeå
 *              └────── A Sequømics Product — http://sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "KnotDB®-logotype".
 * ___________________________________________________________________________
 */

module.exports = {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      // 1. for LogoType and 2. for KnotDB®-Logo.
      './app/en/assets/style/logotype.min.css': ['./app/en/assets/style/normalize.css', './app/en/assets/style/logotype.css'],
      './app/en/assets/style/knotdb.min.css': ['./app/en/assets/style/normalize.css', './app/en/assets/style/knotdb-logo.css'],
    }
  }
};
