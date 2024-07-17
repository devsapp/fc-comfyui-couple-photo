export async function blobToBase64(blob: Blob) {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return await new Promise<string>((resolve) => {
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
  });
}
