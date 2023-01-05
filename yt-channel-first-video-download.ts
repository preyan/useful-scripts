import * as fs from 'fs';
import * as request from 'request';
import * as ytdl from 'ytdl-core';

// Replace CHANNEL_ID with the ID of the YouTube channel you want to scan
const CHANNEL_ID = 'CHANNEL_ID';

// Set the output directory for the downloaded video
const OUTPUT_DIR = './videos/';

async function downloadVideo(videoId: string): Promise<void> {
  // Create the output directory if it does not exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  // Set the output file path
  const outputFile = `${OUTPUT_DIR}/${videoId}.mp4`;

  // Check if the video has already been downloaded
  if (fs.existsSync(outputFile)) {
    console.log(`Video "${videoId}" has already been downloaded.`);
    return;
  }

  // Download the video
  console.log(`Downloading video "${videoId}"...`);
  ytdl(`https://www.youtube.com/watch?v=${videoId}`, { filter: 'videoonly' }).pipe(fs.createWriteStream(outputFile));
}

async function main(): Promise<void> {
  // Get the first page of videos from the YouTube channel
  const url = `https://www.googleapis.com/youtube/v3/search?key=API_KEY&channelId=${CHANNEL_ID}&part=id&order=date&maxResults=50`;
  request.get(url, async (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }

    // Parse the response
    const data = JSON.parse(body);

    // Get the first video in the list
    const firstVideo = data.items[
