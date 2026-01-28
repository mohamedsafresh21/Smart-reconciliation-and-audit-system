const auditSchema = new mongoose.Schema({
  recordId: mongoose.Schema.Types.ObjectId,
  oldValue: Object,
  newValue: Object,
  changedBy: mongoose.Schema.Types.ObjectId,
  source: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("AuditLog", auditSchema);

