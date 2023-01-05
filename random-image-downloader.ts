import * as request from 'request';

async function downloadImage(url: string, fileName: string): Promise<void> {
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error) {
        return reject(error);
      }
      return resolve(body);
    }).pipe(fs.createWriteStream(fileName));
  });
}

async function getRandomImage(): Promise<void> {
  const imageId: number = Math.floor(Math.random() * 1000000000);
  const url: string = `https://prnt.sc/${imageId}`;

  return new Promise((resolve, reject) => {
    request.get(url, (error, response) => {
      if (error) {
        return reject(error);
      }
      if (response.statusCode === 200) {
        downloadImage(url, `${imageId}.png`).then(() => {
          console.log(`Downloaded image ${imageId}.png`);
          return resolve();
        });
      } else {
        return getRandomImage();
      }
    });
  });
}

async function main(): Promise<void> {
  for (let i = 0; i < 10000; i++) {
    await getRandomImage();
  }
}

main();
