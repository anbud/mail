import { Meteor } from 'meteor/meteor';

exec = Npm.require('child_process').exec;
cmd = Meteor.wrapAsync(exec);
Meteor.methods({

    sendEmail: function(to, from, subject, text) {
        check([from, subject, text], [String]);
        check(to, [String]);

        // var converter = new Showdown.converter();
        // var html = converter.makeHtml(markdown);

        this.unblock();

        to.forEach(i =>
            cmd("sendmail -f " + from + " -F " + "Sender" + " -v " + to + " " + text);
        )


    }
});
