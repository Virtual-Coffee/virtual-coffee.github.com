const entryGlob = require('rollup-plugin-entry-glob');
 
module.exports = {
  root: '_site',
  build: {
    rollupOptions: {
      input: '_site/**/*.html',
      output: {
          dir: 'dist/'
      },
      plugins: [
          entryGlob({
            fileName: 'compiled'
          }),
      ],
    }
  }
};