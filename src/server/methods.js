import { Meteor } from 'meteor/meteor';

Meteor.methods({
	sendEmail: function (to, from, subject, markdown) {
		check([from, subject, markdown], [String]);
		check(to, [String]);

        var converter = new Showdown.converter();
		var html = converter.makeHtml(markdown); 

		this.unblock();

		to.forEach(i => 
			Email.send({
				to: i,
				from: from,
				subject: subject,
				html: html
			})
		)
	}
})