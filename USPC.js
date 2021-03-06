/*UltimateSinglePlayerCommands*/
/*Do NOT redestribute*/
//A variable to store the MC:PE activity
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
//What version is the user running?
var version = "1.7 build 8 (Snapshot)";
//New version available?
var newVersion;
//Arrays to store the /give names and IDs
var names = [];
var ids = [];
var data = [];
//Get MC:PE Version
var mcv= ModPE.getMinecraftVersion();
//Mod Version
var uspcver= "1.7 build 8";
//Language Pack
var lang= 'English';
var langid= '1';
//A bunch of other variables
var panoActive = false;
var showingCoords = false;
var coordsActive = false;
var window = null;
var textview = null;
var mcActive = false;
var mcTick = 0;
var bindCommand = [];
var bindLft = false;
var bindBtn = null;
var showDownloadAlert = false;
var newScript;
//Update Variables
var version = "1.7.8";
//New version available?
var newVersion;

function procCmd(command)
{
var cmd = command.split(" ");
case "g":
		case "give":
			if(Level.getGameMode() === 1) {
				errorMsg("You must be in survival!");
			}
			else if(!isset(p[1]) || !isset(p[2])) {
				errorMsg("Not enough parameters!");
			}
			else if(!parseInt(p[2])) {
				errorMsg("The quantity must be a number!");
			}
			else if(parseInt(p[1])) {
				var id = p[1].split(':');
				if(isset(id[1])) {
					Player.addItemInventory(id[0], p[2], id[1]);
					colourMsg("Given §b" + p[2] + " §fof §b" + names[ids.indexOf(id[0])] + "§f (§b" + id[0] + "§f)");
				}
				else {
					Player.addItemInventory(p[1], p[2]);
					colourMsg("Given §b" + p[2] + " §fof §b" + names[ids.indexOf(p[1])] + "§f (§b" + p[1] + "§f)");
				}
			}
			else if(!parseInt(p[1])) {
				if(hasGiveFile) {
					if(names.indexOf(p[1].toUpperCase()) > -1) {
						if(data[names.indexOf(p[1].toUpperCase())] == 0) {
							Player.addItemInventory(ids[names.indexOf(p[1].toUpperCase())], p[2]);
							colourMsg("Given §b" + p[2] + " §fof §b" + p[1].toUpperCase() + "§f (§b" + ids[names.indexOf(p[1].toUpperCase())] + "§f)");
						}
						else {
							Player.addItemInventory(ids[names.indexOf(p[1].toUpperCase())], p[2], data[names.indexOf(p[1].toUpperCase())]);
							colourMsg("Given §b" + p[2] + " §fof §b" + p[1].toUpperCase() + "§f (§b" + ids[names.indexOf(p[1].toUpperCase())] + "§f:§b" + data[names.indexOf(p[1].toUpperCase())] + "§f)");
						}
					}
					else {
						errorMsg("Item not found!");
					}
				}
				else {
					errorMsg("You do not have the /give config!");
					errorMsg("You can only use IDs.");
				}
			}
			break;
if(cmd[0] == "fly-on")
{
Player.setCanFly(1);
}
if(cmd[0] == "fly-on")
{
clientMessage("§9[USPC]§4Fly-On")
}
if(cmd[0] == "fly-off")
{
Player.setCanFly(0);
}
if(cmd[0] == "fly-off")
{
clientMessage("§9[USPC]§5Fly-Off")
}
if(cmd[0] == "about")
{
clientMessage("§9[USPC] About Menu:")
}
if(cmd[0] == "about")
{
clientMessage("§9[USPC] Your MC:PE version is: " + "§f" +mcv)
clientMessage("§9[USPC] §7Installed mod version: : " + "§f" +uspcver)
}
if(cmd[0] == "about")
{
clientMessage("§9[USPC] Current Language : " + "§f" +lang)
clientMessage("§9[USPC] §7Language ID : " + "§f" +langid)
}
if(cmd[0] == "heal")
{
Player.setHealth(20);
}
if(cmd[0] == "heal")
{
clientMessage("§9[USPC]§1You have been healed")
}
if(cmd[0] == "invincible")
{
Player.setHealth(5000);
}
if(cmd[0] == "invincible")
{
clientMessage("§9[USPC]§1You are now invincible")
}
if(cmd[0] == "clone")
{
addItemInventory(39, 1);
}
if(cmd[0] == "clone")
{
clientMessage("§9[USPC]§2Use This Item!")
}
if(cmd[0] == "help5")
{
clientMessage("§9[USPC]§6Page 5")
}
if(cmd[0] == "help5")
{
clientMessage("§9[USPC] /about - Info about the mod")
}
if(cmd[0] == "help")
{
clientMessage("§9[USPC]§6Page 1")
}
if(cmd[0] == "help")
{
clientMessage("§9[USPC] /fly-on - Turn On")
}
if(cmd[0] == "help")
{
clientMessage("§9[USPC] /fly-off - Turn Off")
}
if(cmd[0] == "speed1")
{
Entity.addEffect(getPlayerEnt(),1,6000,0);
}
if(cmd[0] == "speed2")
{
Entity.addEffect(getPlayerEnt(),1,6000,1);
}
if(cmd[0] == "speed3")
{
Entity.addEffect(getPlayerEnt(),1,6000,2);
}
if(cmd[0] == "speed4")
{
Entity.addEffect(getPlayerEnt(),1,6000,3);
}
if(cmd[0] == "speed5")
{
Entity.addEffect(getPlayerEnt(),1,6000,4);
}
if(cmd[0] == "speed6")
{
Entity.addEffect(getPlayerEnt(),1,6000,5);
}
if(cmd[0] == "speed7")
{
Entity.addEffect(getPlayerEnt(),1,6000,6);
}
if(cmd[0] == "speed8")
{
Entity.addEffect(getPlayerEnt(),1,6000,7);
}
if(cmd[0] == "speed9")
{
Entity.addEffect(getPlayerEnt(),1,6000,8);
}
if(cmd[0] == "speed10")
{
Entity.addEffect(getPlayerEnt(),1,6000,9);
}
if(cmd[0] == "haste1")
{
Entity.addEffect(getPlayerEnt(),3,6000,0);
}
if(cmd[0] == "haste2")
{
Entity.addEffect(getPlayerEnt(),3,6000,1);
}
if(cmd[0] == "haste3")
{
Entity.addEffect(getPlayerEnt(),3,6000,2);
}
if(cmd[0] == "haste4")
{
Entity.addEffect(getPlayerEnt(),3,6000,3);
}
if(cmd[0] == "haste5")
{
Entity.addEffect(getPlayerEnt(),3,6000,4);
}
if(cmd[0] == "haste6")
{
Entity.addEffect(getPlayerEnt(),3,6000,5);
}
if(cmd[0] == "haste7")
{
Entity.addEffect(getPlayerEnt(),3,6000,6);
}
if(cmd[0] == "haste8")
{
Entity.addEffect(getPlayerEnt(),3,6000,7);
}
if(cmd[0] == "haste9")
{
Entity.addEffect(getPlayerEnt(),3,6000,8);
}
if(cmd[0] == "haste10")
{
Entity.addEffect(getPlayerEnt(),3,6000,9);
}
if(cmd[0] == "jump1")
{
Entity.addEffect(getPlayerEnt(),8,6000,0);
}
if(cmd[0] == "jump2")
{
Entity.addEffect(getPlayerEnt(),8,6000,1);
}
if(cmd[0] == "jump3")
{
Entity.addEffect(getPlayerEnt(),8,6000,2);
}
if(cmd[0] == "jump4")
{
Entity.addEffect(getPlayerEnt(),8,6000,3);
}
if(cmd[0] == "jump5")
{
Entity.addEffect(getPlayerEnt(),8,6000,4);
}
if(cmd[0] == "jump6")
{
Entity.addEffect(getPlayerEnt(),8,6000,5);
}
if(cmd[0] == "jump7")
{
Entity.addEffect(getPlayerEnt(),8,6000,6);
}
if(cmd[0] == "jump8")
{
Entity.addEffect(getPlayerEnt(),8,6000,7);
}
if(cmd[0] == "jump9")
{
Entity.addEffect(getPlayerEnt(),8,6000,8);
}
if(cmd[0] == "jump10")
{
Entity.addEffect(getPlayerEnt(),8,6000,9);
}
if(cmd[0] == "regeneration1")
{
Entity.addEffect(getPlayerEnt(),10,6000,0);
}
if(cmd[0] == "regeneration2")
{
Entity.addEffect(getPlayerEnt(),10,6000,1);
}
if(cmd[0] == "regeneration3")
{
Entity.addEffect(getPlayerEnt(),10,6000,2);
}
if(cmd[0] == "regeneration4")
{
Entity.addEffect(getPlayerEnt(),10,6000,3);
}
if(cmd[0] == "regeneration5")
{
Entity.addEffect(getPlayerEnt(),10,6000,4);
}
if(cmd[0] == "regeneration6")
{
Entity.addEffect(getPlayerEnt(),10,6000,5);
}
if(cmd[0] == "regeneration7")
{
Entity.addEffect(getPlayerEnt(),10,6000,6);
}
if(cmd[0] == "regeneration8")
{
Entity.addEffect(getPlayerEnt(),10,6000,7);
}
if(cmd[0] == "regeneration9")
{
Entity.addEffect(getPlayerEnt(),10,6000,8);
}
if(cmd[0] == "regeneration10")
{
Entity.addEffect(getPlayerEnt(),10,6000,9);
}
if(cmd[0] == "setworldspawn") {
Level.setSpawn(getPlayerX(),getPlayerY(),getPlayerZ());
}
if(cmd[0] == "setworldspawn") {
clientMessage("§6§lNew Spawn Set!")
}
if(cmd[0] == "gm0")
{
Level.setGameMode(0);
}
if(cmd[0] == "gm0")
{
clientMessage("§9[USPC]§2Your Gamemode Has Been Change To Survival!");
}
if(cmd[0] == "help")
{
clientMessage("§9[USPC] /heal - to heal your self")
}
if(cmd[0] == "help")
{
clientMessage("§9[USPC] /help2 - Help Page 2")
}
if(cmd[0] == "gm1")
{
Level.setGameMode(1);
}
if(cmd[0] == "gm1")
{
clientMessage("§9[USPC]§2Your Gamemode Has Been Change To Creative!");
}
if(cmd[0] == "help2")
{
clientMessage("§9[USPC] /invincible - To make yourself invincible")
}
if(cmd[0] == "help2")
{
clientMessage("§9[USPC] /explode - To explode yourself")
}
if(cmd[0] == "help2")
{
clientMessage("§9[USPC] /gm 0 - To Change Your Gamemode To Survival")
}
if(cmd[0] == "help2")
{
clientMessage("§9[USPC] /gm 1 - To Change Your Gamemode To Creative")
}
if(cmd[0] == "help2")
{
clientMessage("§9[USPC] /clone - To clone yourself")
}
if(cmd[0] == "uspc")
{
clientMessage("§9[USPC]§2Mod written by MrMudkipPvP: §1Subcribe: http://adf.ly/1b77St  §2Follow Me At Twitter: http://adf.ly/1ZmoFb")
}
if(cmd[0] == "uspc-sponsors")
{
clientMessage("§9[USPC]§6§lSpecial thanks to")
}
if(cmd[0] == "sponsors")
{
clientMessage("§9[USPC]§c§lModPE IDE Team")
}
if(cmd[0] == "sponsors")
{
clientMessage("§9[USPC]§c§lGeany Editor for Linux Team")
}
if(cmd[0] == "sponsors")
{
clientMessage("§9[USPC]§c§lAtom Mult-Platform IDE")
}
if(cmd[0] == "sponsors")
{
clientMessage("§9[USPC]§7§lNotepad++ Team")
}
if(cmd[0] == "help 2")
{
clientMessage(" /kill - Suicide")
}
if(cmd[0] == "kill")
{
Player.setHealth(0);
}
if(cmd[0] == "help3")
{
clientMessage("§9[USPC]§6Page 3")
}
if(cmd[0] == "help3")
{
clientMessage("§9[USPC]§ /regeneratrion[stength] Regeneration effect")
}
if(cmd[0] == "help3")
{
clientMessage("§9[USPC]§ /jump[stength] Jump boost")
}
if(cmd[0] == "help3")
{
clientMessage("§9[USPC]§ /haste[stength] Haste effect")
}
if(cmd[0] == "help3")
{
clientMessage("§9[USPC]§ /speed[stength] Speed boost")
}
if(cmd[0] == "help3")
{
clientMessage("§9[USPC]§ /setworldspawn Set new world spawn")
}
if(cmd[0] == "help3")
{
clientMessage("§9[USPC]§ /sethome Set a home location(Broken,don't use it) ")
}
if(cmd[0] == "help3")
{
clientMessage("§9[USPC]§ /home Go home (Broken,don't use it)")
}
if(cmd[0] == "help2")
{
clientMessage("§9[USPC]§6 /about - About")
}
if(cmd[0] == "kill")
{
clientMessage("§9[USPC]§cYou fell out of the world")
}
if(cmd[0] == "explode")
{
clientMessage(" §9[USPC]§r[Warning] Explosion incoming!")
}
if(cmd[0]=="explode"){
Player.getX();
Player.getY();
Player.getZ();
Level.explode(Player.getX(),Player.getY(),Player.getZ(),cmd[1]);
}
if(cmd[0] == "day")
{
Level.setTime(0);
}
if(cmd[0] == "day")
{
clientMessage("§9[USPC]§2Time Set To Day!")
}
if(cmd[0] == "nigth")
{
Level.setTime(14000);
}
if(cmd[0] == "nigth")
{
clientMessage("§9[USPC]§2Time Set To Nigth")
}
if(cmd[0] == "help")
{
clientMessage("§9[USPC] /day - Time set to day")
}
if(cmd[0] == "contributors")
{
clientMessage("§9[USPC]§6 MrMudkipPvP - Creator")
clientMessage("§9[USPC]§6 robalb - Contributed with ")
clientMessage("§9[USPC]§6 /explode [radius] command ")
}
if(cmd[0] == "help5")
{
clientMessage("§9[USPC]§6 /contributors Shows contributors' list")
}
if(cmd[0] == "help")
{
clientMessage("§9[USPC] /nigth - Time set to nigth")
}
if(cmd[0] == "kit-soldier")
{
addItemInventory(272,1);
}
if(cmd[0] == "kit-soldier")
{
addItemInventory(364,5);
}
if(cmd[0] == "kit-soldier")
{
clientMessage("§9[USPC]§2You Have Now A Kit!")
}
if(cmd[0] == "kit-vip")
{
addItemInventory(258,1);
}
if(cmd[0] == "kit-vip")
{
addItemInventory(314,1);
}
if(cmd[0] == "kit-vip")
{
addItemInventory(315,1);
addItemInventory(300,1);
addItemInventory(301,1);
addItemInventory(364,5);
}
if(cmd[0] == "kit-vip")
{
clientMessage("§9[USPC]§2You Have Now A Kit!")
}
if(cmd[0] == "kit-list")
{
clientMessage("§9[USPC]Kit List:")
clientMessage(" /kit-vip")
clientMessage(" /kit-soldier")
clientMessage(" /kit-ubervip")
}
if(cmd[0] == "help2")
{
clientMessage("§9[USPC] /kit-list - List For Kits")
}
if(cmd[0] == "kit-ubervip")
{
addItemInventory(279,1);
addItemInventory(310,1);
addItemInventory(311,1);
addItemInventory(312,1);
addItemInventory(313,1);
}
if(cmd[0] == "kit-ubervip")
{
clientMessage("§9[USPC]§2You've recieved kit UberVip!")
}
function compareVersion() {
	var r  = new java.lang.Runnable({ run: function() {
		try {
			var u = new java.net.URL("raw.githubusercontent.com/MudkipPvP/ModPE/USPC/version");
			var c = u.openConnection();
			c.setRequestMethod("GET");
			c.setDoOutput(true);
			c.connect();
			c.getContentLength();
			var input = c.getInputStream();
			var contents = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
			var bytesRead = 0;
			var strFileContents;
			while((bytesRead = input.read(contents)) != -1) {
				strFileContents = new java.lang.String(contents, 0, bytesRead);
			}
			newVersion = strFileContents;
			if(version+"\n" != strFileContents) {
				colourMsg("New version! " + newVersion);
				showDownloadAlert = true;
			}

		}
		catch(e) {
			if(e == "JavaException: java.net.UnknownHostException: Unable to resolve host \"raw.githubusercontent.com\": No address associated with hostname") { }
			else {
				errorMsg("Line 1211: " + e);
			}
		}
	}});
	var th = new java.lang.Thread(r);
	th.start();
}

function updateScript() {
	try {
		var builder = new android.app.AlertDialog.Builder(ctx);
		builder.setTitle("New version available!");
		builder.setMessage("An update to USPC was found!\nWould you like to download it now?\nCurrent version: " + version + "\nNew version: " + newVersion);
		builder.setNegativeButton("No", new android.content.DialogInterface.OnClickListener() {
			onClick: function(par1) {
				dialog.dismiss();
			}
		});
		builder.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener() {
			onClick: function(par1) {
				var ru  = new java.lang.Runnable({ run: function() {
					try {
						var u = new java.net.URL("raw.githubusercontent.com/MudkipPvP/ModPE/USPC/USPC.js");
						var c = u.openConnection();
						c.setRequestMethod("GET");
						c.setDoOutput(true);
						c.connect();
						c.getContentLength();
						var input = c.getInputStream();
						var contents = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
						var bytesRead = 0;
						while((bytesRead = input.read(contents)) != -1) {
							newScript += new java.lang.String(contents, 0, bytesRead);
						}
						var patchesFolder = ctx.getDir("modscripts", 0);
						var scriptFile = new java.io.File(patchesFolder, "USPC.js");
						var printWriter = new java.io.PrintWriter(scriptFile);
						printWriter.write(newScript);
						printWriter.flush();
						printWriter.close();
						try {
							net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, false);
							net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, true);
							colourMsg("Downloaded and enabled!");
						}
						catch(e) {
							errorMsg("Line 1255: " + e);
						}
					}
					catch(e) {
						errorMsg("Line 1259: " + e);
					}
				}});
				var th = new java.lang.Thread(ru);
				th.start();
			}
		});
		var dialog = builder.create();
		dialog.show()
	}
	catch(e) {
		errorMsg("Line 1270: " + e);
	}
}
}
function newLevel()
{
clientMessage("§9[USPC]§6UltimateSinglePlayerCommands has been enabled with success!");
clientMessage("§6§lVersion " + ChatColor.GREEN + "1.7 build 8 SNAPSHOT");
clientMessage("§9[USPC]§7Mod coded by MrMudkipPvP");
clientMessage("§9[USPC]§cUse /help");
 }
function leaveGame()
{
print("[USPC]Succesfully disabled...");
}
default:
			errorMsg("Command " + p[0] + " does not exist!");
			break;
	}
}

function modTick() {
	if(active === false) {
		print("USPC by MrMudkipPvP");
		colourMsg("USPC version §b" + version + "§f by MrMudkipPvP");
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try {
				compareVersion();
				var dir = new java.io.File(android.os.Environment.getExternalStorageDirectory()+"/USPC/");
				if(!dir.isDirectory()) {
					var makedir = dir.mkdirs();
				}
				var giveFile = new java.io.File(android.os.Environment.getExternalStorageDirectory()+"/USPC/", "USPC-Give-Config.txt");
				if(giveFile.isFile()) {
					if(!hasGiveFile) {
						colourMsg("/give config found and loaded!");
					}
					hasGiveFile = true;
				} else if(!giveFile.isFile()) {
					hasGiveFile = false;
					downloadConfig("https://raw.githubusercontent.com/MrMudkipPvPDev/ModPE-Scripts/USPC/USPC-Give-Config.txt", "USPC-Give-Config.txt");
				}
			}
			catch(e) {
				errorMsg("Line 644: " + e);
			}
		}}));
		active = true;
		function compareVersion() {
			var r  = new java.lang.Runnable({ run: function() {
				try {
					var u = new java.net.URL("https://raw.githubusercontent.com/MrMudkipPvPDev/ModPE-Scripts/USPC/version");
					var c = u.openConnection();
					c.setRequestMethod("GET");
					c.setDoOutput(true);
					c.connect();
					c.getContentLength();
					var input = c.getInputStream();
					var contents = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
					var bytesRead = 0;
					var strFileContents;
					while((bytesRead = input.read(contents)) != -1) {
						strFileContents = new java.lang.String(contents, 0, bytesRead);
					}
					newVersion = strFileContents;
					if(version+"\n" != strFileContents) {
						colourMsg("New version! " + newVersion);
						showDownloadAlert = true;
					}

				}
				catch(e) {
					if(e == "JavaException: java.net.UnknownHostException: Unable to resolve host \"raw.githubusercontent.com\": No address associated with hostname") { }
					else {
						errorMsg("Line 1211: " + e);
					}
				}
			}});
			var th = new java.lang.Thread(r);
			th.start();
		}

		function updateScript() {
			try {
				var builder = new android.app.AlertDialog.Builder(ctx);
				builder.setTitle("New version available!");
				builder.setMessage("An update to SPCPE was found!\nWould you like to download it now?\nCurrent version: " + version + "\nNew version: " + newVersion);
				builder.setNegativeButton("No", new android.content.DialogInterface.OnClickListener() {
					onClick: function(par1) {
						dialog.dismiss();
					}
				});
				builder.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener() {
					onClick: function(par1) {
						var ru  = new java.lang.Runnable({ run: function() {
							try {
								var u = new java.net.URL("https://raw.githubusercontent.com/MrMudkipPvPDev/ModPE-Scripts/USPC/USPC.js");
								var c = u.openConnection();
								c.setRequestMethod("GET");
								c.setDoOutput(true);
								c.connect();
								c.getContentLength();
								var input = c.getInputStream();
								var contents = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
								var bytesRead = 0;
								while((bytesRead = input.read(contents)) != -1) {
									newScript += new java.lang.String(contents, 0, bytesRead);
								}
								var patchesFolder = ctx.getDir("modscripts", 0);
								var scriptFile = new java.io.File(patchesFolder, "USPC.js");
								var printWriter = new java.io.PrintWriter(scriptFile);
								printWriter.write(newScript);
								printWriter.flush();
								printWriter.close();
								try {
									net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, false);
									net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, true);
									colourMsg("Downloaded and enabled!");
								}
								catch(e) {
									errorMsg("Line 1255: " + e);
								}
							}
							catch(e) {
								errorMsg("Line 1259: " + e);
							}
						}});
						var th = new java.lang.Thread(ru);
						th.start();
					}
				});
				var dialog = builder.create();
				dialog.show()
			}
			catch(e) {
				errorMsg("Line 1270: " + e);
			}
Status API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Contact Help
