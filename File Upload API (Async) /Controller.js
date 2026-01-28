const UploadJob = require("../models/UploadJob");
const { addJobToQueue } = require("../services/queue");

exports.uploadFile = async (req, res) => {
  const job = await UploadJob.create({
    status: "Processing",
    uploadedBy: req.user.id
  });

  await addJobToQueue(job._id, req.file.path);

  res.json({ uploadJobId: job._id });
};

