import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
    return Ember.String.htmlSafe(`<pre> ${params[0]} </pre>`);
});