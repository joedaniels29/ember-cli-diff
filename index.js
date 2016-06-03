/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-cli-diff',
    
    included: function (app) {
        this._super.included(app);
        app.import({
            development: "bower_components/google-diff-match-patch/diff_match_patch_uncompressed.js",
            production: "bower_components/google-diff-match-patch/diff_match_patch.js"
        });
    }
};
