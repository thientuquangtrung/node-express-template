const { Types } = require("mongoose");

const convertToObjId = (id) => new Types.ObjectId(id);

module.exports = {
    convertToObjId,
};
