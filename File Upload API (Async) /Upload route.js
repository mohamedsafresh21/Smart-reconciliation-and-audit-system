router.post(
  "/upload",
  auth(["Admin", "Analyst"]),
  upload.single("file"),
  uploadController.uploadFile
);

