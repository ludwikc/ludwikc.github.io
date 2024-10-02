
1. weź najnowsze video w folderze ~/Movies/
	1. do wyboru MP4 i MKV
2. Skompresuj je `ffmpeg`
   `ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 256k -movflags +faststart output.mp4`
3. Wrzuć na bunny.net via API.
3. Skopiuj zmodyfikowany DirectPlay URL do schowka.  