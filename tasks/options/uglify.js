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
 * @require   : grunt-contrib-uglify
 * @build     : SEED™ — Umeå
 *              └────── A Sequømics Product — http://sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "KnotDB®-logotype".
 * ___________________________________________________________________________
 */

module.exports = {
  options: {
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - author: <%= pkg.author %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
    compress: {
      warnings: false
    },
    mangle: {
      // Specify [mangle: false] to prevent changes to your variable and function names,
      // Or, to leave untouched with an except array in the mangle options.
      except: ['jQuery', 'Modernizr']
    }
  },
  my_target: {
    options: {
      sourceMap: true,
      sourceMapName: './app/en/assets/script/index.js.map'
    },
    files: {
      // Outfile: ———— ./app/en/assets/script/knotdb-logotype-0.0.1.min.js
      './app/en/assets/script/<%= pkg.name %>-<%= pkg.version %>.min.js': ['./app/en/assets/script/<%= pkg.name %>-<%= pkg.version %>.js']
    }
  }
};
