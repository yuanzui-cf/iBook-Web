#!node
/*
Grass iBook Original Novel System
[version 1.0.0-alpha]
Copyright (c) 2022 Grass Development Team. All rights reserved.

Use Module:
Expressjs
 Body-Parser
 Cookie-Parser
 Cors
 Express-Ip
Fs-Extra
*/
let express = require("express"),
    body_parser = require("body-parser"),
    cookie_parser = require("cookie-parser"),
    cors = require("cors"),
    fs = require("fs-extra"),
    express_ip = require("express-ip"),
    func = require("./func");
let client = express(),
    admin = express();
let config = {
    client: {
        port: 9000,
        conf: "/data/setting.json"
    },
    admin: {
        port: 9001,
        entrance: func.Random.char(8)
    }
};
if(fs.existsSync(__dirname + "/config.json")){
    config = fs.readJsonSync(__dirname + "/config.json");
}
else{
    fs.writeJsonSync(__dirname + "/config.json", config);
}
client.use(cors());
client.use(cookie_parser());
admin.use(cookie_parser());
admin.use(body_parser.json());
admin.use(body_parser.urlencoded({
    extended: false
}));
admin.use(express_ip().getIpInfoMiddleware)
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
let start_status = {
    client: false,
    admin: false
};
client.listen((config.client && typeof config.client.port == "number" && config.client.port <= 25565 && config.client.port > 0) ? config.client.port : 9000, start_status.client = true);
admin.listen((config.admin && typeof config.admin.port == "number" && config.admin.port <= 25565 && config.admin.port > 0) ? config.admin.port : 9001, start_status.admin = true);
console.log(`${start_status.client ? "Clent Started Successfully!" : (new Error("Clent didn't Start!"), process.exit(-1))}\n${start_status.admin ? "Admin System Started Successfully!" : new Error("Admin System didn't Start!")}`);