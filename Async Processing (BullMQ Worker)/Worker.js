const { Worker } = require("bullmq");
const processFile = require("../services/fileProcessor");

new Worker("uploadQueue", async job => {
  await processFile(job.data);
});

