exports.reconcile = async (record) => {
  const existing = await Record.findOne({
    transactionId: record.transactionId,
    _id: { $ne: record._id }
  });

  if (existing) return "Duplicate";

  if (existing?.amount === record.amount) return "Matched";

  if (existing &&
     Math.abs(existing.amount - record.amount) / existing.amount <= 0.02)
    return "Partially Matched";

  return "Unmatched";
};

