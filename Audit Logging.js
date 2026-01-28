await AuditLog.create({
  recordId,
  oldValue,
  newValue,
  changedBy: userId,
  source: "Manual Correction"
});

