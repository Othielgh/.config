#!/bin/bash
#
# Wait until hyprpaper is running (max 10 retries)
retries=10
until pgrep -x hyprpaper >/dev/null || [ $retries -eq 0 ]; do
  echo "Waiting for hyprpaper to start..."
  sleep 3
  ((retries--))
done

hyprctl hyprpaper unload all

case $(date +%H) in
22 | 23 | 00 | 01 | 02 | 03 | 04 | 05 | 06 | 07)
  hyprctl hyprpaper preload ~/.config/Wallpapers/asciiEarth.jpeg
  hyprctl hyprpaper wallpaper ",~/.config/Wallpapers/asciiEarth.jpeg"
  ;;
08 | 09 | 10 | 11 | 12 | 13 | 14 | 15)
  hyprctl hyprpaper preload ~/.config/Wallpapers/summer-day.png
  hyprctl hyprpaper wallpaper ",~/.config/Wallpapers/summer-day.png"
  ;;
16 | 17 | 18 | 19 | 20 | 21)
  hyprctl hyprpaper preload ~/.config/Wallpapers/evening.png
  hyprctl hyprpaper wallpaper ",~/.config/Wallpapers/evening.png"
  ;;
esac
