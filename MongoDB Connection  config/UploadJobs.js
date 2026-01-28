const uploadJobSchema = new mongoose.Schema({
  fileHash: String,
  status: { type: String, enum: ["Processing", "Completed", "Failed"] },
  uploadedBy: mongoose.Schema.Types.ObjectId,
  totalRecords: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("UploadJob", uploadJobSchema);

