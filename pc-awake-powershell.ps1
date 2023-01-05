# Set the number of times to move the mouse cursor
$numIterations = 10

# Set the number of seconds to sleep between cursor moves
$sleepDuration = 60

# Set the cursor move distance
$cursorDistance = 10

# Keep the PC awake by moving the mouse cursor
for ($i = 0; $i -lt $numIterations; $i++) {
  [System.Windows.Forms.Cursor]::Position = ([System.Windows.Forms.Cursor]::Position.X + $cursorDistance, [System.Windows.Forms.Cursor]::Position.Y + $cursorDistance)
  Start-Sleep -Seconds $sleepDuration
  [System.Windows.Forms.Cursor]::Position = ([System.Windows.Forms.Cursor]::Position.X - $cursorDistance, [System.Windows.Forms.Cursor]::Position.Y - $cursorDistance)
  Start-Sleep -Seconds $sleepDuration
}
