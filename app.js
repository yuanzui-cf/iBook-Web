const { client, admin } = require("./main");
// TODO: Clent Main Interface
// client.use(express.static(__dirname + "/public"));
client.use((req, res) => {
    res.status(404);
    res.end();
});
admin.get(`/${(config.admin && config.admin.entrance) ? config.admin.entrance : "login"}`, (req, res) => {
    // TODO: Admin Login
});
admin.get(`/login`, (req, res) => {
    // TODO: Admin Login
});
admin.use((req, res) => {
    res.status(403);
    res.end();
});