Template.home.events({
    'submit #js-emailForm': (e, t) => {
        e.preventDefault();

        var file = document.getElementById('js-csvMail').files[0];

        if(file) {
            document.getElementById("js-submit-btn").disabled = true;
            $("#js-submit-btn").text("Sending...");

            var rd = new FileReader();

            rd.onload = function(e) {
                var cols = e.target.result.split("\n").map(i => i.split(","));

                Meteor.call('sendEmail', cols[0], "test@zamphyr.com", $("#js-subject").val(), $("#js-message").val(), (err, data) => {
                    if(!err)
                        document.getElementById("js-submit-btn").disabled = false;
                        $("#js-submit-btn").text("Send");
                        $("#js-subject").val("");
                        $("#js-message").val("");
                        $("#js-csvMail").val("");
                       
                });
            }

            rd.readAsText(file);
        }
    }
})