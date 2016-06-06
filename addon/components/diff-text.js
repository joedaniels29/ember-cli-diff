import Ember from 'ember';
import layout from '../templates/components/diff-text';

diff_match_patch.prototype.html = function (a) {
    var text;
    text = "";
    a.forEach(function (d, i) {
        if (a[i][0] === 0) {
            text += "" + a[i][1] + "";
        } else if (a[i][0] === 1) {
            text += "<span class='new'>" + a[i][1] + "</span>";
        } else if (a[i][0] === -1) {
            text += "<span class='removed'>" + a[i][1] + "</span>";
        }
        // return text.replace(/\n|\r/g, "<br/>");
    });
    return text;
};

const dmp = new diff_match_patch();

dmp.Diff_Timeout = 3;

export default Ember.Component.extend({
    layout: layout,
    diff: Ember.computed("firstText", "secondText", function () {
        var firstText = this.get("firstText");
        var secondText = this.get("secondText");
        if (!firstText) {return null;}
        const d = dmp.diff_main(firstText, (secondText  || firstText ));
        dmp.diff_cleanupSemantic(d);
        return d;
    }),

    changes: Ember.computed("diff", function () {
        if (this.get("diff")) {
            return dmp.html(this.get("diff"));
        } else {
            return "";
        }
    })
});

