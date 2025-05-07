#!/bin/sh

case $(date +%H) in
22 | 23 | 00 | 01 | 02 | 03 | 04 | 05 | 06 | 07) # First 8 hours of the day
  # Uncomment below to setup the image you wish to display as your
  # wallpaper if you run this script during the first 8 hours of the
  # day

  swaybg -i ~/.config/Wallpapers/Wall.jpeg
  ;;
08 | 09 | 10 | 11 | 12 | 13 | 14 | 15) # Middle 8 hours of the day
  # Same as above, but for the middle 8 hours of the day

  swaybg -i ~/.config/Wallpapers/summer-day.png
  ;;
16 | 17 | 18 | 19 | 20 | 21)
  # Same as above, but for the final 8 hours of the day

  swaybg -i ~/.config/Wallpapers/evening.png
  ;;
esac
