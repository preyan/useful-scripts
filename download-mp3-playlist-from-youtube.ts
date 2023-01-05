import * as ytdl from 'youtube-dl';

async function downloadPlaylist(playlistUrl: string) {
  // Set the download options
  const options = [
    '--format=bestaudio/best',  // Select the best audio format
    '--extract-audio',          // Extract the audio from the video
    '--audio-format=mp3',       // Convert the video to mp3 format
    '--audio-quality=0',        // Set the audio quality to the highest level
    '--output=%(title)s.%(ext)s' // Set the output filename template
  ];

  // Create a new youtube-dl object
  const video = ytdl(playlistUrl, options);

  // Handle errors
  video.on('error', (error: any) => {
    console.error(error);
  });

  // Handle progress events
  video.on('progress', (progress: any) => {
    console.log(`${progress.percent}% downloaded`);
  });

  // Download the playlist
  await video.pipe(fs.createWriteStream('downloads/'));
  console.log('Playlist downloaded');
}

// Download a playlist by providing the playlist URL
downloadPlaylist(''); //Add the playlist link here
