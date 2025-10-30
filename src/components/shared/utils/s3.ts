export const uploadToS3 = async (file, presignedUrl) => {
  const response = await fetch(presignedUrl, {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": file.type,
      "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(
        file.name
      )}`,
    },
  });
  return response.url;
};
