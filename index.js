const downloadFinished = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Download Selesai");
    }, 3000);
  });
};

const downloadResult = (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hasil Download ${result}`);
    }, 7000);
  });
};

const download = () => {
  const result = "windows-10.exe";
  console.log(await downloadFinished());
  console.log(await downloadResult(result));
};

download();
