const recordSchema = new mongoose.Schema({
  uploadJobId: mongoose.Schema.Types.ObjectId,
  transactionId: String,
  amount: Number,
  referenceNumber: String,
  date: Date
});

recordSchema.index({ transactionId: 1 });
recordSchema.index({ referenceNumber: 1 });

module.exports = mongoose.model("Record", recordSchema);

