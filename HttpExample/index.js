module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        // Get date and time
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        // Add a message to the Storage queue,
        // which is the name passed to the function.
        context.bindings.msg = (req.query.name || req.body.name);
        console.log("name: " + req.body.message)
        console.log("message: " + req.body.message)
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name) + ". You queried at " + dateTime
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name and message in the message body"
        };
    }
};