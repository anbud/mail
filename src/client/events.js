Template.home.events({
    'submit #js-emailForm': (e, t) => {
        e.preventDefault();

        var file = document.getElementById('js-csvMail').files[0];

        if(file) {
            $("#js-poruka").text("Sending...");

            var rd = new FileReader();

            rd.onload = function(e) {
                var cols = e.target.result.split("\n").map(i => i.split(","));

                Meteor.call('sendEmail', cols[0], "test@zamphyr.com", $("#js-subject").val(), $("#js-markdown").val(), (err, data) => {
                    if(!err)
                        $("#js-poruka").text("Sent!");
                });
            }

            rd.readAsText(file);
        }
    }
})