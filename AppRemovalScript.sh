
#!/bin/bash

#  Name: Unapproved_App_List.sh
#  Author: Matt Krause mkrause@hccsc.k12.in.us
#  Date: March 14, 2017
#
#  Notes:
#  This is a script to remove disallowed apps on macbooks
#
#  Version Info:
#  1.0.0 - Initial script (MK)
#  1.1.0 - Added for loops (MK 20170316)
#  1.2.0 - Added Script header info, alt loging function, adjusted script format for readability (JRW 20170317)
#
#  ToDo:
#
#
#

#log all to filewave client log

exec 1>>/var/log/fwcld.log

#FileWave client log file location
LOG_FILE='/var/log/fwcld.log'

# Set DEBUG to 1 to see DEBUG Messages
DEBUG=0

# Debug function
# Usage: db message in parts
function db {
if [ $DEBUG -eq 1 ];
then
echo "$@"
fi
}

# Log function, handles input from stdin or from arguments
# Usage: log message in parts
# Usage2: echo message | log
function log {
# If there are parameters read from parameters
if [ $# -gt 0 ]; then
echo "$(date +"%Y-%m-%d %H:%M:%S")|HCCSC|INFO| $@" >> $LOG_FILE
db "$@"
else
# If there are no parameters read from stdin
while read data
do
echo "$(date +"%Y-%m-%d %H:%M:%S")|HCCSC|INFO| $data" >> $LOG_FILE
db "$data"
done
fi
}


function removeApps {
rm -rfv 123D\ Design.app
rm -rfv 1Player.app
rm -rfv 100%\ Hidden\ Objects.app
rm -rfv 2048*.app
rm -rfv 2048\ Game.app
rm -rfv 2048+.app
rm -rfv ABC\ Coloring\ Town\ Free.app
rm -rfv AhaLinkColorAll.app
rm -rfv AngryDriver.app
rm -rfv Animation\ Desk.app
rm -rfv Apowersoft\ Audio\ Recorder.app
rm -rfv Apowersoft\ Screen\ Recorder.app
rm -rfv App\ for\ Instagram.app
rm -rfv App\ for\ Youtube.app
rm -rfv AppBox\ for\ Dropbox.app
rm -rfv Aquarium\ live\ lite.app
rm -rfv Army\ Truck\ 3D.app
rm -rfv Army\ Truck\ 2\ -\ Civil\ Uprising\ 3D.app
rm -rfv Artpaper\ -\ Art\ Wallpapers\ HD.app
rm -rfv Basketmania.app
rm -rfv BATTLE\ BEARS\ -1.app
rm -rfv Battle\ of\ Ships\ 3D.app
rm -rfv Blood\ And\ Glory\ 2.app
rm -rfv Bloons\ TD\ 5.app
rm -rfv bloxorz.app
rm -rfv BombSquad.app
rm -rfv Bowling\ Club\ 3D.app
rm -rfv Bridge\ Constructor\ FREE.app
rm -rfv Burger.app
rm -rfv Candy\ Mania\ Star.app
rm -rfv Carrier\ Landings.app
rm -rfv Castle\ Breakout*.app
rm -rfv CollageFactory\ Free.app
rm -rfv CollageIt\ 3\ Free.app
rm -rfv Color\ Beatz.app
rm -rfv Color\ by\ Numbers\ -\ Halloween\ -\ Free.app
rm -rfv Color\ Change\ 0.0.2.app
rm -rfv Colors\ for\ Hue.app
rm -rfv Construction\ Simulator\ 2015.app
rm -rfv Contract\ Killer2.app
rm -rfv Crash\ Drive\ 2.app
rm -rfv Crazy\ Monster\ Truck\ Escape.app
rm -rfv Croc\'s\ World*.app
rm -rfv CSR\ Racing.app
rm -rfv Deer\ Hunter\ Reloaded.app
rm -rfv Desktop\ Clock.app
rm -rfv Dirt\ Bikes\ Super\ Racing.app
rm -rfv Do\ not\ Press\ the\ Red\ Button.app
rm -rfv Download\ Shuttle.app
rm -rfv Draw\ a\ Stickman\ EPIC.app
rm -rfv Epic.app
rm -rfv Epic\ Truck.app
rm -rfv Extreme\ Landings.app
rm -rfv Extreme\ Road\ Trip\ 2.app
rm -rfv FaceChat\ for\ Facebook\ Messenger.app
rm -rfv Factory\ Parking.app
rm -rfv Farkle.app
rm -rfv Farming\ Simulator*.app
rm -rfv Filters\ for\ Photos.app
rm -rfv FingerBasketball.app
rm -rfv Firefox.app
rm -rfv Fireplace\ 3D\ Lite.app
rm -rfv Fix-it-up:\ Kate\'s\ Adventure.app
rm -rfv Flap\ Flap.app
rm -rfv Flappy\ Golf\ 2.app
rm -rfv Flip\ Run.app
rm -rfv Flix\ Mate.app
rm -rfv FlixMaster.app
rm -rfv Fotor\ Photo\ Editor.app
rm -rfv Frontline\ Commando.app
rm -rfv Full\ Deck\ Solitaire.app
rm -rfv FuturidiumEP.app
rm -rfv Galaxy\ Ball\ 3D.app
rm -rfv Gardenscapes.app
rm -rfv Gardenscapes\ 2.app
rm -rfv Generator.app
rm -rfv GL\ Golf\ Lite.app
rm -rfv Go\ for\ YouTube
rm -rfv Gods\ of\ Drifting.app
rm -rfv Gunship*.app
rm -rfv Hack\ RUN.app
rm -rfv Happy\ Chef*.app
rm -rfv Head\ Basketball.app
rm -rfv headsoccer.app
rm -rfv Hero\ Academy.app
rm -rfv Highway\ Rally.app
rm -rfv Hockey\ General\ Manager.app
rm -rfv Holes-and-Balls-Free.app
rm -rfv Hunting\ Animals*.app
rm -rfv Icecream\ Screen\ Recorder\ \(Free\ Version\).app
rm -rfv Ice\ Rush.app
rm -rfv iHeartRadio.app
rm -rfv iLikeBasket.app
rm -rfv Impossible\ Twisty\ Dots.app
rm -rfv Industry\ Transporte\ 3D.app
rm -rfv Install\ macOS\ Sierra.app
rm -rfv InstaMaster.app
rm -rfv Island\ Racer\ Lite.app
rm -rfv Jason_vs_Zombies_Free.app
rm -rfv Jigsaw\ Puzzle\ Epic.app
rm -rfv Jigsaws\ Galore\ Free.app
rm -rfv KingdomCoins-LuckyVegas.app
rm -rfv LepsWorld.app
rm -rfv Level\ Crossing.app
rm -rfv Live\ VideoWall\ Lite.app
rm -rfv Live\ Wallpaper*.app
rm -rfv Living\ Wallpaper*.app
rm -rfv Living\ Weather*.app
rm -rfv Mahjong\ Solitaire\ Epic.app
rm -rfv MahJongFree.app
rm -rfv Mancala.app
rm -rfv Media\ Player.app
rm -rfv Memory.app
rm -rfv MenuTab \for\ Facebook.app
rm -rfv MillionDollarAdventureLite.app
rm -rfv Minesweeper*.app
rm -rfv MiniBikers*.app
rm -rfv MiniPlayer.app
rm -rfv Mix\ Up\ Studio\ -\ Professional\ Sequencer.app
rm -rfv Monster\ Truck*.app
rm -rfv Moto\ Racing\ 3D.app
rm -rfv Motorbike*.app
rm -rfv Music\ Streaming\ for\ Pandora\ Radio.app
rm -rfv Octagon.app
rm -rfv Off-Road\ Super\ Racing.app
rm -rfv OpenEmu.app
rm -rfv Paint\ 2.app
rm -rfv Paint\ X\ Lite.app
rm -rfv Paintbrush.app
rm -rfv PapiDrive.app
rm -rfv PapiJumpFree.app
rm -rfv PapiPlane.app
rm -rfv Parkour\ Simulator\ 3D.app
rm -rfv PicCollage\ Lite.app
rm -rfv Pixel\ Starships.app
rm -rfv Pixir.app
rm -rfv Poker*.app
rm -rfv Pool.app
rm -rfv POOL\ SIMULATOR*.app
rm -rfv PopStar\ 3.app
rm -rfv ProPaint.app
rm -rfv Radio\ FM.app
rm -rfv RC\ Mini\ Racers.app
rm -rfv RC\ Plane\ 3.app
rm -rfv Real\ Boxing.app
rm -rfv Reaper.app
rm -rfv Roblox*.app
rm -rfv Robot\ Fighting*.app
rm -rfv Samurai\ vs.\ Zombies.app
rm -rfv Screen\ Record\ Pre\ -\ HD\ Screen\ Recorder\ Lite.app
rm -rfv Screen\ Record\ Studio\ Lite.app
rm -rfv Screen\ Recorder\ Robot\ Lite.app
rm -rfv Screen\ Video\ Shot\ -\ Hotkey.app
rm -rfv ShadowFight*.app
rm -rfv Sharks\ 3D.app
rm -rfv Simple\ Recorder.app
rm -rfv siftyforce.app
rm -rfv Sketchbook.app
rm -rfv *Skyrim*.app
rm -rfv SlideSoccer.app
rm -rfv SmartTab\ for\ Messenger.app
rm -rfv Sniper\ Ops\ 3DD\ -\ Kill\ Terror\ Shooter.app
rm -rfv Solitaire\ Free.app
rm -rfv Spades.app
rm -rfv Speed\ Car\ Fighter*.app
rm -rfv Spider\ Free.app
rm -rfv Spider\ Solitaire\ Free.app
rm -rfv Spotify.app
rm -rfv StandOFoodPlayground-Mac.app
rm -rfv Standard\ Snake.app
rm -rfv Streaming.app
rm -rfv Stream\ for\ YouTube.app
rm -rfv Streaming\ for\ SoundCloud.app
rm -rfv Subway\ Simulator\ 9\ -\ Paris\ Edition.app
rm -rfv Super\ Ninja\ Square\ Attack.app
rm -rfv Super\ Stickman\ Golf\ 3.app
rm -rfv Supercars\ Racing.app
rm -rfv TedGinnKickReturn.app
rm -rfv Terraria*.app
rm -rfv Tetri3D\ Lite.app
rm -rfv TextNow.app
rm -rfv The\ ROBLOX\ Browser.app
rm -rfv The\ Sandbox.app
rm -rfv The\ Secret\ Society\ -\ Hidden\ Mystery.app
rm -rfv Tic-Tac-Toe.app
rm -rfv Toads\ Tool\ 64.app
rm -rfv To\ MP3\ Converter\ Free.app
rm -rfv Top\ Bike.app
rm -rfv Top\ Speed.app
rm -rfv Touchgrind.app
rm -rfv Touchgrind\ BMX.app
rm -rfv Township.app
rm -rfv Toy\ Defense\ 2.app
rm -rfv Toy\ Defense.\ World\ War\ I.app
rm -rfv TrickShotBowling.app
rm -rfv Twitter.app
rm -rfv Undertale\ Demo.app
rm -rfv Unscramble.app
rm -rfv VideoPad\ Video\ Editor\ Free.app
rm -rfv Virtual\ City\ Playground.app
rm -rfv VirtualDJ\ Home.app
rm -rfv VOX.app
rm -rfv Wallble.app
rm -rfv Wallcat.app
rm -rfv Wallpaper*.app
rm -rfv Wallpaper\ Wizard\ Lite.app
rm -rfv Wallpaperer.app
rm -rfv Wallpapers.app
rm -rfv Wallpapers\ HD\ Lite.app
rm -rfv Water\ Blades.app
rm -rfv Waterfox.app
rm -rfv Weather\ Dock.app
rm -rfv Weather\ HD.app
rm -rfv WeChat.app
rm -rfv Wharkike.app
rm -rfv Word\ Search\ Epic.app
rm -rfv World\ of\ Tanks*.app
rm -rfv Zen\ Pinball*.app
rm -rfv Zig\ N\ Zag\ 3D.app
rm -rfv Zombie*.app
rm -rfv Zombie\ Apocalypse.app
rm -rfv Zombies\ Ate\ My\ Friends.app
rm -rfv zuma.app
}

echo "Removing apps from /Applications..."
cd /Applications
removeApps

echo "Removing apps from User directories..."

temp=$(ls /Users | grep -v ".localized" | grep -v "Shared")
for i in $temp
do
rm -rfv /Users/${i}/Applications/Chrome\ Apps
rm -rfv /Users/${i}/Downloads/*Spotify*.app
cd /Users/${i}/Applications
removeApps
cd /Users/${i}/Desktop
removeApps
cd /Users/${i}/Documents
removeApps
cd /Users/${i}/Downloads
removeApps
cd /Users/${i}/Dropbox
removeApps
cd /Users/${i}/Google\ Drive
removeApps
cd /Users/${i}/Library
removeApps
cd /Users/${i}/Movies
removeApps
cd /Users/${i}/Music
removeApps
cd /Users/${i}/Pearson
removeApps
cd /Users/${i}/Pictures
removeApps
cd /Users/${i}/Public
removeApps

echo "Removing additional unapproved files..."

find /Users/${i}/ -iname "*.dmg" -type f -delete -print
find /Users/${i}/ -iname "*.pkg" -type f -delete -print
find /Users/${i}/ -iname "*.exe" -type f -delete -print
find /Users/${i}/ -iname "*.save" -type f -delete -print
find /Users/${i}/ -iname "*minecraft*.jar" -type f -delete -print
find /Users/${i}/ -iname "*spotify*.zip" -type f -delete -print

done