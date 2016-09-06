
/*jshint node:true*/
module.exports = {
  description: 'Ember-cli-diff',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
      return this.addBowerPackageToProject('google-diff-match-patch');
  }
};
