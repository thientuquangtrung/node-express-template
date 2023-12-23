const mongoose = require("mongoose");
const { countConnections } = require("../helpers/check.connect");
const {
    DB: { host, name, port },
} = require("../configs");

const connectString = `mongodb://${host}:${port}/${name}`;

class Database {
    constructor() {
        this.connect();
    }

    // connect
    connect(type = "mongodb") {
        if (1 === 1) {
            // all executed methods log output to console
            mongoose.set("debug", true);

            // disable colors in debug mode
            mongoose.set("debug", { color: false });

            // get mongodb-shell friendly output (ISODate)
            mongoose.set("debug", { shell: true });
        }

        mongoose
            .connect(connectString)
            .then((_) => console.log(`Connect mongodb success`, countConnections()))
            .catch((error) => console.log(`Connect error: ${error}`));
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
