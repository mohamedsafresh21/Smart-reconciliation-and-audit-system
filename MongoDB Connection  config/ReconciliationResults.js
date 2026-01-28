const reconciliationSchema = new mongoose.Schema({
  recordId: mongoose.Schema.Types.ObjectId,
  status: String, // Matched / Partial / Unmatched / Duplicate
  mismatchedFields: [String]
});

module.exports = mongoose.model("ReconciliationResult", reconciliationSchema);

