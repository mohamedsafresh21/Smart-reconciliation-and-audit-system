const csv = require("csv-parser");
const fs = require("fs");
const Record = require("../models/Record");

module.exports = async ({ jobId, filePath }) => {
  const records = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", row => {
      records.push({
        uploadJobId: jobId,
        transactionId: row.TransactionID,
        amount: row.Amount,
        referenceNumber: row.Reference,
        date: row.Date
      });
    })
    .on("end", async () => {
      await Record.insertMany(records);
    });
};

