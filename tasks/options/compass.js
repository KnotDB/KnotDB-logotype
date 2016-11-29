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
 * @require   : grunt-contrib-compass
 * @build     : SEED™ — Umeå
 *              └────── A Sequømics Product — http://sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "KnotDB®-logotype".
 * ___________________________________________________________________________
 */

module.exports = {
  compass: {
    // T:1
    dist: {
      options: {
        // Requires OS to have Ruby, Sass, and Compass >=1.0.1 installed.
        config: __dirname + 'config.rb',
        environment: 'production',
        raw: 'preferred_syntax = :scss\n' // Use `raw` since it's not directly available.
      }
    },
    // T:2
    dev: {
      options: {
        assetCacheBuster: true,
        fontsPath: './core/source/font',
        sassDir: './core/source/scss',
        cssDir: './app/en/assets/style',
        sourcemap: true
      }
    }
  }
};
