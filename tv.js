﻿const otvinta = [
"1|Wolfenstein 3D+Comanche: Maximum Overkill+Master of Orion|20.05.1995|M",
"2|Betrayal at Krondor+DOOM+Lost in Time|27.05.1995|M",
"3|DOOM 2+Alone in the Dark|03.06.1995|NM",
"4|Mad Dog McCree+Iron Cross+Dogfight: 80 Years of Aerial Warfare|10.06.1995|NM",
"5|Corridor 7+NASCAR Racing|17.06.1995|NM",
"6|Dawn Patrol+Magic Carpet|24.06.1995|NM",
"7|Mortal Kombat+BioForge|01.07.1995|M",
"8|Wing Commander 3|08.07.1995|M",
"9|Heretic+Gone Fishin'+Creature Shock|15.07.1995|NM",
"10|Rise of the Triad: Dark War+Cyberia|22.07.1995|NM",
"11|Crime Patrol 2: Drug Wars+Descent|29.07.1995|NM",
"12|Star Wars: Dark Forces+Little Big Adventure+MegaRace|05.08.1995|NM",
"13|Under a Killing Moon+Terminal Velocity+Space Pirates|12.08.1995|NM",
"14|Novastorm+Lost Eden+FX Fighter|19.08.1995|M",
"15|Full Throttle+Outpost|02.09.1995|NM",
"16|Mad Dog McCree+Alone in the Dark+Mortal Kombat|09.09.1995|NM",
"17|Heretic+BioForge+Dogfight: 80 Years of Aerial Warfare|16.09.1995|NM",
"18|Magic Carpet+Gone Fishin'+NASCAR Racing|23.09.1995|NM",
"19|Renegade: Battle for Jacob's Star+Hi-Octane+Tube|30.09.1995|N",
"20|The Last Dynasty+Legend of the Seven Paladins+Castles 2|22.01.1996|NM",
"21|Day of the Tentacle+Slipstream 5000+Tube|29.01.1996|N",
"22|Full Throttle+Hardball 4|07.02.1996|M",
"23|Witchaven+Werewolf vs. Comanche 2.0+Aces of the Deep|12.02.1996|M",
"24|TFX+Hexen (Windows 95)+Primal Rage|19.02.1996|M",
"25|Fade to Black+Magic Carpet 2|26.02.1996|M",
"26|Z+Urban Runner+Die Hard Trilogy|29.03.1997|NM",
"27|C&C: Red Alert+Duke Nukem 3D (Atomic Edition)+Diablo|30.03.1997|NM",
"28|WarCraft 2+Time Commando+Tomb Raider|05.04.1997|NM",
"29|Monty Python & the Quest for the Holy Grail+Quake+The Dig|06.04.1997|NM",
"30|The Dig+Wayne Gretzky and the NHLPA All Stars+Screamer|12.04.1997|N",
"31|Dragon Lore 2+Panzer Dragoon|13.04.1997|NM",
"32|Virtua Squad+Eradicator+Hind|19.04.1997|NM",
"33|Age of Sail+War Wind+Flying Corps|20.04.1997|NM",
"34|Redneck Rampage+KKnD+MDK|26.04.1997|NM",
"35|Heroes of Might & Magic 2+Stonekeep+Duke Nukem 3D (турнир)|27.04.1997|NM",
"36|Road Rash+Leisure Suit Larry 7+Theme Hospital|03.05.1997|NM",
"37|Cyberia 2: Resurrection+One Must Fall 2097+The Need for Speed|04.05.1997|NM",
"38|Strife+Independence Day+Kingdom O' Magic|10.05.1997|N",
"39|Chronomaster+Spycraft: The Great Game+B.C. Racers|11.05.1997|NM",
"40|Противостояние+Terminator: Future Shock|17.05.1997|N",
"41|Interstate '76+Star Trek: Deep Space Nine - Harbinger|18.05.1997|NM",
"42|Need for Speed 2+Titanic+Ravage D.C.X.|24.05.1997|NM",
"43|Torin's Passage+F-22 Lightning 2+Mortal Coil|25.05.1997|NM",
"44|Scorcher+G-Nome+SWIV 3D|31.05.1997|NM",
"45|Killing Time+Test Drive: Off-Road+Hardline+Dominion: Storm Over Gift 3|01.06.1997|NM",
"46|Stars!+Redneck Rampage|07.06.1997|NM",
"47|Virtual Karts+Torin's Passage+Ecstatica|08.06.1997|NM",
"48|Vampire Diaries+Pike: Операция «Громовержец»|14.06.1997|NM",
"49|Abrams Battle Tank+Wolfenstein 3D+Diablo (Battle.net)+Carmageddon|15.06.1997|NM",
"49<sub>2</sub>|Freddi Fish 2+Descent 2|21.06.1997|X",
"49<sub>3</sub>|Extreme Assault+Quarantine 2: Road Warrior|22.06.1997|X",
"49<sub>4</sub>|Alien Earth+Broken Sword+Lost Paradise|28.06.1997|X",
"49<sub>5</sub>|Titanic+Witchaven 2+Daytona USA|29.06.1997|X",
"49<sub>6</sub>|Jagged Alliance: Deadly Games+Harvester+MegaRace 2|05.07.1997|N",
"49<sub>7</sub>|Obsidian+Privateer 2: The Darkening+Aliens+Afterlife|06.07.1997|N",
"50|Terminator: SkyNET+Screamer 2+WWF in Your House+Syndicate Wars|12.07.1997|NM",
"51|The Pandora Directive+Crusader: No Remorse+Destruction Derby 2+Silent Thunder|13.07.1997|NM",
"52|Olympic Soccer+Australian Rugby League+XS+M.A.X.+Realms of the Haunting|19.07.1997|NM",
"53|iM1A2 Abrams+Beavis and Butt-head+Admiral: Sea Battles|20.07.1997|NM",
"54|Phantasmagoria+Police Quest: SWAT+Timelapse+Silent Hunter|26.07.1997|NM",
"55|Air Warrior+Gender Wars+Comanche 3|27.07.1997|NM",
"55<sub>2</sub>|Ecstatica 2+HyperBlade+Gadget|02.08.1997|N",
"55<sub>3</sub>|Carmageddon+Blood+Re-Loaded|03.08.1997|N",
"55<sub>4</sub>|Jane's Longbow Gold+Outlaws+Dungeon Keeper|09.08.1997|N",
"55<sub>5</sub>|Star Wars: X-Wing Vs. TIE Fighter+Sandwarriors|10.08.1997|N",
"56|JetFighter 3+Offensive|16.08.1997|NM",
"57|Formula 1+Lion+Normality|17.08.1997|NM",
"58|Enemy Nations+Little Big Adventure 2+Congo: Descent into Zinj|23.08.1997|NM",
"59|Star Command: Revolution+Alpha Storm+Alien Odyssey|24.08.1997|NM",
"60|Hexen 2+The City of Lost Children|30.08.1997|M",
"61|Fable+Flight Action|31.08.1997|M",
"62|Hardcore 4x4+Shivers|06.09.1997|M",
"63|The 7th Guest+Shellshock|07.09.1997|M",
"64|Banzai Bug+Ark of Time+Top Gun|13.09.1997|M",
"65|No Respect+D.O.G.: Fight For Your Life+Parkan: Хроника Империи|14.09.1997|M",
"66|Imperium Galactica+Time Warriors+TigerShark|20.09.1997|M",
"67|POD+Warlords 3+Star Wars: TIE Fighter+Star Wars: Rebel Assault 2|21.09.1997|M",
"68|Gabriel Knight 2+Time Slaughter+Moto Extreme|27.09.1997|M",
"69|Moto Racer+Lighthouse+Pandemonium|28.09.1997|M",
"70|Hexen 2+SCARAB|04.10.1997|M",
"71|Area 51+NCAA Final Four 1997+Sega Rally Championship|05.10.1997|V",
"72|Dark Reign+Волшебный сон+HeliCops|11.10.1997|M",
"73|Shadow Warrior+Братья Пилоты: По следам полосатого слона+Conquest Earth|12.10.1997|M",
"73<sub>2</sub>|The Crow: City of Angels+XCar: Experimental Racing+Man of War|18.10.1997|V",
"73<sub>3</sub>|Jurassic War+Monty Python & the Quest for the Holy Grail+Darklight Conflict|19.10.1997|V",
"74|7th Legion+G-Nome+Ubik|25.10.1997|M",
"75|Ace Ventura+Mass Destruction+Бермудский синдром+Total Control|26.10.1997|M",
"76|Speedboat Attack+Waterworld+Бородино: Наука побеждать|01.11.1997|M",
"77|Armored Fist 2+Beasts & Bumpkins+Star Wars: Jedi Knight - Dark Forces 2|02.11.1997|M",
"78|NHL 98+Soldier Boyz+Jane's ATF: Advanced Tactical Fighters|08.11.1997|M",
"79|Excalibur 2555 AD+Total Annihilation+Postal|09.11.1997|M",
"80|Earth 2140+Shannara|15.11.1997|M",
"81|Buccaneer+Heroes of Might & Magic 2: The Price of Loyalty+Age of Empires|16.11.1997|M",
"82|Incubation: Time is Running Out+Dreams to Reality+Outpost 2|22.11.1997|M",
"83|The Neverhood+Blood Omen: Legacy of Kain+Uprising: Join or Die|23.11.1997|M",
"84|Constructor+NHL Powerplay 98+Take No Prisoners|29.11.1997|M",
"85|Chasm: The Rift+Всеслав Чародей+Аллоды+Вьюга в пустыне+War Inc.|30.11.1997|V",
"86|Fallout+Streets of SimCity+Pax Imperia: Eminent Domain|06.12.1997|NM",
"87|Betrayal in Antara+Dark Earth|07.12.1997|M",
"88|FIFA 98+Duckman+Sid Meier's Gettysburg!|13.12.1997|M",
"89|Tomb Raider 2+Myth: The Fallen Lords+Sub Culture|14.12.1997|M",
"90|NetStorm+Duke Nukem 3D (чемпионат)+Toonstruck|20.12.1997|M",
"91|C&C: Red Alert - The Aftermath+Duke Nukem 3D (чемпионат)+Scud: Industrial Evolution|21.12.1997|M",
"92|Jane's Longbow 2+NBA Live 98+Screamer Rally|27.12.1997|M",
"93|Quake 2+Diablo: Hellfire+Over the Reich|28.12.1997|M",
"94|JetFighter 3+Dark Reign+Sid Meier's Gettysburg!|03.01.1998|M",
"95|Carmageddon+Dungeon Keeper+Hexen 2|04.01.1998|NM",
"96|NHL 98+Fallout+The Neverhood|10.01.1998|V",
"97|Age of Empires+Total Annihilation+Beasts & Bumpkins|11.01.1998|V",
"98|Test Drive 4+Heavy Gear+NHL 98|17.01.1998|M",
"99|Red Baron+Wing Commander: Prophecy+Men in Black|18.01.1998|M",
"100|Mortal Kombat Trilogy+Nightmare Creatures+Pro Pilot|24.01.1998|M",
"101|Dementia+Wipeout 2097+MadSpace|25.01.1998|M",
"102|Dreams to Reality+Monster Truck Madness+Virus: The Game|31.01.1998|M",
"103|Lands of Lore 2+Safecracker|01.02.1998|M",
"104|Blade Runner+Goosebumps: Attack of the Mutant|07.02.1998|M",
"105|Birthright: The Gorgon's Alliance+Rally Championship+Z.A.R.|08.02.1998|M",
"106|International Rally Championship+Close Combat 2+Realms of Arkania|14.02.1998|M",
"107|Ultima Online+Противостояние+Virtual On: Cyber Troopers|15.02.1998|M",
"108|G-Police+Mageslayer+Whiplash|21.02.1998|M",
"109|ГЭГ: Отвязное приключение+Lords of Magic+Juggernaut for Quake 2|22.02.1998|M",
"110|Nuclear Strike+War Wind 2+Final Liberation|28.02.1998|M",
"111|Rebel Moon Rising+Panzer General 2+Sabre Ace|01.03.1998|M",
"112|Broken Sword 2+Andretti Racing+Redneck Rampage: Suckin' Grits on Route 66|07.03.1998|M",
"113|Star Wars: Shadows of the Empire+Riven: The Sequel to Myst+Tone Rebellion|08.03.1998|M",
"114|War Gods+Дорожные войны|14.03.1998|M",
"115|Oddworld: Abe's Oddysee+Malice+Discworld 2|15.03.1998|M",
"116|Turok: Dinosaur Hunter+AHX-1|21.03.1998|M",
"117|Armor Command+Deadly Tide|22.03.1998|M",
"118|The Pink Panther: Passport to Peril+Axelerator|28.03.1998|M",
"119|Wing Commander: Prophecy|29.03.1998|M",
"120|Redline Racer+The Curse of Monkey Island+Last Bronx|18.04.1998|M",
"121|Spec Ops: Rangers Lead the Way+Interstate '76+Ubik|19.04.1998|M",
"122|Shadow Master+The Curse of Monkey Island+Ultimate Race Pro|25.04.1998|M",
"123|Jane's F-15+StarCraft+Battlezone|26.04.1998|M",
"124|Outwars+Deer Hunter+Burnout: Championship Drag Racing|02.05.1998|V",
"125|M1 Tank Platoon 2+Warhammer: Dark Omen+Manx TT SuperBike|03.05.1998|M",
"126|Die by the Sword+Forsaken+Final Racing|17.05.1998|M",
"127|Tomb Raider (Nude Raider)+Riana Rouge+Might & Magic 6+Fighting Force|16.05.1998|M",
"128|WarBreeds+Daytona USA Deluxe+iPanzer '44|23.05.1998|M",
"129|Army Men+Halls of the Dead: Faery Tale Adventure 2+Monster Truck Madness 2|24.05.1998|M",
"130|Descent: Freespace - The Great War+Unreal|05.09.1998|M",
"131|Deathtrap Dungeon+Commandos: Behind Enemy Lines|06.09.1998|M",
"132|SiN+RoboRumble|13.09.1998|M",
"133|Dune 2000+Carmageddon 2: Carpocalypse Now|19.09.1998|M",
"134|Spearhead+Return Fire 2+Montezuma's Return|20.09.1998|M",
"135|Hexplore+Powerboat Racing|26.09.1998|M",
"136|Half-Life+Need for Speed 3+MechCommander|27.09.1998|M"
]
const tvs = [["Былое и DOOMы|bid",
"Tetris|10.08.2007|j-UMeYukgVY|1985",
"Space Quest|17.08.2007|LW_FMXuKDmw|1986",
"Pirates!|24.08.2007|jiR93dbFlNM|1987",
"F-19 Stealth Fighter|31.08.2007|P8j_ROZsvfk|1988",
"Deathtrack+Abrams Battle Tank|07.09.2007|BZ2cGpUJwxw|1989",
"Wing Commander|14.09.2007|tNB5xLaq-n8|1990",
"Civilization|21.09.2007|OyAsAxYyf70|1991",
"Alone in the Dark|29.09.2007|exvRr_gNS6s|1992",
"DOOM|06.10.2007|ATwVc8OO_3E|1993",
"Heretic|13.10.2007|4NrriGlSm90|1994",
"Full Throttle|20.10.2007|A37NdOpIxSo|1995",
"Duke Nukem 3D+Quake|27.10.2007|zuMPZGz-JYU|1996",
"Dungeon Keeper+Diablo|03.11.2007|KReLTGyLOqg|1997",
"Thief: The Dark Project|10.11.2007|QHri6B8Lk2A|1998",
"Homeworld|Отменен|https://pastebin.com/HsTfK4yS|1999",
"Shogun: Total War|24.11.2007|LHBX17wVLFw|2000",
"Max Payne|01.12.2007|2Lz1b-LQgAw|2001",
"Mafia|08.12.2007|GW9Xb3rcl5k|2002",
"Splinter Cell|15.12.2007|KPX4LmnnNY0|2003",
"Far Cry|22.12.2007|Xkz1YEih9tE|2004"
],["Без винта|bv",
"Корсары: Город потерянных кораблей+Hour of Victory+Death Track: Возрождение|25.03.2008|GwR30cFA2WY",
"Deathtrack+The Need for Speed+Monster Truck Madness+Carmageddon+Grand Theft Auto+Полный привод: УАЗ 4x4+S.T.A.L.K.E.R.+Call of Duty 4: Modern Warfare|01.04.2008|e8IbFrs65z4",
"Turning Point: Fall of Liberty+TimeShift+Duke Nukem Forever|08.04.2008|3OB43WAxMhU",
"Rome: Total War+The History Channel: Great Battles of Rome+Imperium Romanum+Cradle of Rome+Europa Universalis: Rome+Gods & Heroes|15.04.2008|Qb1Hg5o9ZaQ",
"Assassin's Creed+Золотая Орда+Lost: Via Domus|22.04.2008|fpc_MkHONv8",
"Age of Conan: Hyborian Adventures|27.04.2008|D7SeBXP_cbs",
"Alone in the Dark 5+The Graveyard+Penumbra: Black Plague|29.04.2008|q2DV5_Q4vm4",
"Second Life+The Sims 3+There+Red Light Center|04.05.2008|gmU7EdAwZUo",
"Silent Hunter 4: U-Boat Missions+BioShock+Морской охотник|06.05.2008|v-tzcHOn7nE",
"America's Army+Frontlines: Fuel of War+Splinter Cell: Conviction|11.05.2008|pOkL5IaGzQE",
"Command & Conquer 3: Kane's Wrath+Crusaders: Thy Kingdom Come+Warhammer 40000: Dawn of War - Soulstorm|13.05.2008|bZObOLevaOA",
"Requiem: Bloodymare+F.E.A.R.: Perseus Mandate+Mount & Blade|18.05.2008|tlxTjNh2x3c",
"Rainbow Six: Vegas 2+This is Vegas+The Lost Crown|20.05.2008|aEypSEkagbM",
"Rising Eagle+Driving Speed 2+Alien Arena+Voxelstein 3D|27.05.2008|B9VFlf1itQ0",
"Crysis+Manhunt 2+WorldShift+Terrorist Takedown 2|01.06.2008|6gl9F6xknXI",
"The Witcher+Vampire Hunters (Vampire World)+The Endless Forest|03.06.2008|C0ULdYTxBqw",
"Turok+Hellgate: London+World in Conflict: Soviet Assault|08.06.2008|A9mFucVyC60",
"Tabula Rasa+Lost Empire: Immortals+BlackSite: Area 51|10.06.2008|P-Cn2k6Gsfs",
"WarpFire+Defcon 5+Seafight+Gladiatus+Horse Isle|15.06.2008|1Tknv60DKQY",
"Race Driver: GRID+Sango 2+Operation Blitzsturm|17.06.2008|P0V4tfH3hPE",
"Heresy War+Spore+Предтечи (The Precursors)|22.06.2008|8wwo2Y0YUew",
"Gunfighter+Warriors Orochi+Fable 2|24.06.2008|8VRgnY8rOn8",
"Bus Simulator 2008+Postal 2: Share the Pain+Windchaser|29.06.2008|L1p4dg94B1A",
"Portal+Mass Effect|01.07.2008|VofZSEeZS54",
"Тургор+Audiosurf+Far Cry 2|06.07.2008|3SZ0Vs9mJWs",
"The Incredible Hulk+Iron Man+The Golden Compass|08.07.2008|T34x7YvSZXk",
"C&C: Red Alert 3+Devil May Cry 4+Dracula: Origin|13.07.2008|sAEnyADv16w",
"FlatOut: Ultimate Carnage+Live for Speed S2+TrackMania United Forever|15.07.2008|oYmsGXO_eLs",
"Mount & Blade+Crusaders: Thy Kingdom Come+Empire: Total War|20.07.2008|jbPNjqm2vLg",
"Mass Effect+EndWar+The Bourne Conspiracy|22.07.2008|WY8Srbjh0rY",
"Spore (Creature Creator)+Alone in the Dark 5+Brothers in Arms: Hell's Highway|16.09.2008|wpef24MKt-g",
"Nancy Drew: Danger by Design+EverQuest 2+Grand Theft Auto+Dead Space|21.09.2008|icsiOCjVyUA",
"War Leaders: Clash of Nations+French Street Racing+Legendary|23.09.2008|6NrZj9HxuLk",
"Diablo 3+Opera Slinger+Территория тьмы|28.09.2008|BHlv3Lj4oOo",
"Wall-E+Wolfenstein+Operation Flashpoint: Dragon Rising+Dragon Age: Origins+Velvet Assassin+Tomb Raider: Underworld|30.09.2008|aBxir9J0W9I",
"Code of Honor 2: Conspiracy Island+Fallout 3+Erotic Empire|05.10.2008|D9Ev7ZAGlws",
"S.T.A.L.K.E.R.: Чистое небо+Трудно быть богом+HAWX|07.10.2008|H5Ux3EGyNq8",
"LotRO+Алмазный меч. Деревянный меч|12.10.2008|8pHDb_SC57s",
"Space Force: Rogue Universe+PreVa+Mercenaries 2: World in Flames|14.10.2008|YpXUqNGu_cA",
"Wolf Team+International Cricket Captain 2008+Lost Planet: Extreme Condition (Colonies Edition)|19.10.2008|PwO1HIJrGzU",
"Beijing 2008+Pro Cycling Manager 2007+NHL 09|21.10.2008|2zQ6vZriPj8",
"Drakensang: The Dark Eye+Legend: Hand of God+Total Battleship|26.10.2008|DXTXfAEPA3M",
"Space Siege+Dead Space|28.10.2008|xAfYdFF5DG8",
"Gore+Romance of the Three Kingdoms 11+The House of the Dead 3|02.11.2008|8z9wG7rxjpg",
"Counter-Strike: Source+Samurai Warriors 2+Call of Duty: World at War|04.11.2008|QvRcMj4cTMY",
"Star Wars: Knights of the Force+Star Trek: Elite Force 2+Star Trek Online|09.11.2008|BsU1XRmWhKU",
"FUEL+The Last Bounty Hunter+Who Shot Johnny Rock+The Godfather 2|11.11.2008|MMB3dyM9124",
"Team Fortress 2+Florensia+Shot Online|16.11.2008|V2LIQJP8XGQ",
"The Sims 3+Voyage of Columbus (Screensaver)|18.11.2008|e0P7mcsp2ao",
"The Godfather 2+Red Faction: Guerrilla|23.11.2008|yy-_Rs4_cVM",
"World of WarCraft: Wrath of the Lich King+LotRO+EverQuest 2|25.11.2008|3HlMA95H1EE",
"Microsoft Flight Simulator X|30.11.2008|JdxXrVfWYiY"
],["Икона видеоигр|ivi",
"Civilization 4|13.01.2008|cu6QuGGcYzc",
"Sudden Strike 3: Arms for Victory|20.01.2008|h1JrEppfxtg",
"Lost Planet: Extreme Condition|27.01.2008|8OYjsxN2Uyk",
"King's Bounty. Легенда о рыцаре|03.02.2008|rYf3qYyU9mc",
"Sledgehammer|10.02.2008|niMLqXqV6aI",
"Burnout: Paradise|17.02.2008|gMSb1ETs_B4",
"Warhammer 40000: Dawn of War - Soulstorm|24.02.2008|7y4oRT0OExY",
"EverQuest|02.03.2008|aJodfdKw-G0",
"Rainbow Six|09.03.2008|GiBsIuhEWrk",
"Xbox (спецвыпуск)|16.03.2008|_ZuL0cq9ARY",
"Pirates of the Burning Sea|23.03.2008|zSBrkj54FTM",
"The Sims|30.03.2008|cvmrOvuI81U",
"Assassin's Creed|06.04.2008|hIHCLjgB3h4",
"Turning Point: Fall of liberty|13.04.2008|991OGr9Rukk",
"Lost Odyssey (Xbox)|20.04.2008|csojFt5u3lw",
"Rayman Raving Rabbids|27.04.2008|JTArqhgkcNo",
"WorldShift|03.05.2008|5jsf00fR9yg",
"Age of Conan: Hyborian Adventures|11.05.2008|q6kVwRCjm40",
"FlatOut|18.05.2008|krWd-nVWM9k",
"Ninja Gaiden 2 (Xbox)|25.05.2008|hwBpcD02qfc",
"Alone in the Dark|01.06.2008|FgschoyrXKQ",
"Devil May Cry (PS)|08.06.2008|JnfLXvi8yP0",
"Kung Fu Panda|15.06.2008|xU0rLYcLC9s",
"Granado Espada|22.06.2008|lhn3S2i1WI4",
"Battlefield: Bad Company|01.07.2008|8Vu79Qk0WVU",
"Wall-E|06.07.2008|1QrPtpQpLP8",
"Perfect World|15.07.2008|bnDGJkJDwhk",
"GTR Evolution|06.08.2008|MMeXaLaXFTY",
"В тылу врага 2: Лис пустыни|10.08.2008|H8vjQPIOGPs",
"Collapse|17.08.2008|fvx9961VU0Q",
"Xenus 2: Белое золото|24.08.2008|ms7CbrxNyG0",
"Санитары подземелий 2|31.08.2008|QsZZbFC4cAo",
"Spore|07.09.2008|gAh0vdytKDg",
"Mercenaries 2: World in Flames|14.09.2008|wvIV3l9a7A4",
"Sacred 2: Fallen Angel|21.09.2008|PwzFJyG8xqk",
"LotRO|28.09.2008|YKau9p5WCfM",
"Gears of War 2|05.10.2008|kBY1XQ0T0a8",
"FIFA 09|12.10.2008|pHY0fCs2Cvk",
"Tomb Raider: Underworld|19.10.2008|27rqIzYGb0c",
"Морской охотник|26.10.2008|ZYvts87XaOY",
"NHL 09|04.11.2008|kmQDnmUealg",
"Mirror's Edge|09.11.2008|Eti8Gg6meks",
"Fable 2|16.11.2008|pTcC1Q_dpMQ",
"Dead Space|26.11.2008|7AsuDKuxS8E",
"C&C: Red Alert 3|30.11.2008|bcKQAuqkRug",
"Left 4 Dead|07.12.2008|rHtl19enwHU",
"Need for Speed: Undercover|14.12.2008|9fVBUdvUHmY",
"Prince of Persia (series)|21.12.2008|eyojhkB88NQ",
"Warhammer Online|18.01.2009|A0Tb4W2pMJQ",
"Lineage 2|25.01.2009|5Ft8SGc9baA",
"Бонус и Гамовер (спецвыпуск)|01.02.2009|if8UdwfrOgc",
"F.E.A.R. (series)|08.02.2009|u6gaFx7mrDI",
"NecroVisioN|19.02.2009|k-rHz9K5ms0",
"Halo Wars (Xbox)|22.02.2009|XDVSyjGrgzs",
"Tetris|01.03.2009|xiw2hjJ5i6k",
"Ninja Blade|22.03.2009|O4SSRg3j3UE",
"RF Online+R2 Online+Ace Online|29.03.2009|-JZnyARyTM8",
"Perfect World|26.04.2009|imPUkCCdv70",
"LotRO|11.05.2009|y5yZBW0pons",
"Пара Па: Город Танцев|18.05.2009|FWVGuPr1uXA",
"Freestyle Street Basketball|24.05.2009|43kDdO6_nio",
"The Sims 3|07.06.2009|qPIGbm5_9r8",
"ArmA 2|14.06.2009|mwNbQy3m-Ks",
"Harry Potter and the Half-Blood Prince|19.07.2009|XjQfR69X-xA",
"Last Chaos|02.08.2009|06K2bhNvyU8",
"Wolfenstein+Prototype+Singularity|09.08.2009|6r7mjfZ0810",
"Черные бушлаты|16.08.2009|IDJOERkBqiM",
"Half-Life|23.08.2009|CmxQ6B-G6lE",
"LotRO+Пара Па: Город Танцев+Perfect World|30.08.2009|1T1cluBXPjo"
],["Виртуальные сокровища человечества|vsc",
"Space War (PDP-1)+Pong (Arcade)+Snake (Arcade)+Pac-Man (Arcade)+Microsoft Flight Simulator+Bomberman (MSX)+Karateka+Elite+Tetris+Super Mario Bros. (NES)|13.04.2009|BbbIYoSNcEk",
"Battle City+The Legend of Zelda (NES)+Arkanoid+Space Quest+Pirates!+Contra (NES)+Abrams Battle Tank+SimCity+Golden Axe+Deathtrack|20.04.2009|bJnqNWwjDA8",
"Prince of Persia+King's Bounty+LHX: Attack Chopper+Monkey Island+Street Fighter 2+Road Rash+Sonic the Hedgehog (Sega)+Another World+Battletoads (NES)+Dune 2|27.04.2009|SfIrmTk4S9A",
"Wolfenstein 3D+Star Control+Flashback: The Quest for Identity+Alone in the Dark+Desert Strike+Rock n' Roll Racing (SNES)+Mortal Kombat 2+Aladdin+Myst+X-COM: UFO Defense|04.05.2009|g_fj8BgECq8",
"DOOM+Cyberia+Little Big Adventure+Wing Commander 3+Theme Park+Quarantine+Donkey Kong Country (SNES)+Earthworm Jim+Ecstatica+Worms|12.05.2009|NQRXUVXEE7A",
"Full Throttle+Star Wars: Dark Forces+Comix Zone (Sega)+Heroes of Might & Magic+Phantasmagoria+Command & Conquer+Quake+Civilization 2+Tomb Raider+Super Mario 64 (N64)|18.05.2009|BM_O_m97g2I",
"The House of the Dead+Duke Nukem 3D+Virtua Fighter 3 (Arcade)+The Elder Scrolls 2: Daggerfall+Broken Sword+The Settlers 2+The Neverhood+SoulCalibur (Arcade)+Grand Theft Auto+Oddworld: Abe's Oddysee|29.05.2009|usIQeP8me2g",
"Gran Turismo (PS)+Ultima Online+Castlevania (PS)+Carmageddon+Total Annihilation+MDK+Final Fantasy 7+Metal Gear Solid+Grim Fandango+Need for Speed 3|06.06.2009|Xb5xXn06ZW4",
"Resident Evil 2+Fallout 2+Warhammer: Dark Omen+Might & Magic 6+StarCraft+Half-Life+Planescape: Torment+Jagged Alliance 2+Shenmue (DC)+System Shock 2|13.06.2009|fnf8uELsx28",
"Age of Empires 2+Counter-Strike+Deus Ex+Diablo 2+Baldur's Gate 2+Thief 2: The Metal Age+The Sims+Shogun: Total War+American McGee's Alice+Hitman: Codename 47|19.06.2009|m4Ut7o9SXUc"
],["Аватары|ava",
"King's Bounty: Перекрестки миров|20.09.2010|BPs7wjnTlYE",
"Point Blank|04.10.2010|CPRHJFnQDmY",
"Fallout: New Vegas+Halo: Reach+Mass Effect 2+Heavy Rain+StarCraft 2|21.12.2010|https://yadi.sk/i/AUSmOc4QcVWKGg"
],["От винта! (НИМ)|ov2",
"World of Tanks Blitz+Wasteland 2|03.10.2014",
"Бонус и Гамовер (спецвыпуск)|10.10.2014",
"The Sims 4|17.10.2014",
"Middle-earth: Shadow of Mordor+F1 2014|24.10.2014",
"Alien: Isolation+Borderlands: The Pre-Sequel|31.10.2014",
"The Evil Within+Heroes & Generals+World of WarCraft: Warlords of Draenor|07.11.2014",
"Assassin's Creed: Unity+DIG IT!|14.11.2014",
"Verdun+LineAge 2|21.11.2014",
"Call of Duty: Advanced Warfare+Grand Theft Auto 5+Guns of Icarus|28.11.2014",
"Lords of the Fallen+Блицкриг 3|05.12.2014",
"Far Cry 4+Depth|12.12.2014",
"The Division+The Witcher 3+World of Warships|19.12.2014",
"Game of Thrones+Tales from the Borderlands|26.12.2014",
"Rise of the Tomb Raider+Mortal Kombat X+StarCraft 2|30.01.2015",
"Valkyria Chronicles+Titanfall|06.02.2015",
"Grim Fandango+World of Warships|13.02.2015",
"The Talos Principle+World of Guns|20.02.2015",
"Heroes of the Storm+League of Legends+Dota 2|28.02.2015",
"Dying Light|06.03.2015",
"Evolve+Life is Strange|13.03.2015",
"Total War: Attila+Besiege|20.03.2015",
"The Order: 1886+Resident Evil: Revelations 2|27.03.2015",
"This War of Mine+7 Days to Die+The Forest|03.04.2015",
"World of Tanks: Generals+White Night|10.04.2015",
"Battlefield: Hardline|17.04.2015",
"Ride+Pillars of Eternity|24.04.2015",
"War Thunder+Dark Souls 2: Scholar of the First Sin|01.05.2015",
"Survarium+AdVenture Capitalist|08.05.2015",
"Mortal Kombat X+Trine 3|15.05.2015",
"Elite: Dangerous+Space Beast Terror Fright|22.05.2015",
"Wolfenstein: The Old Blood+Foldit|29.05.2015",
"Grand Theft Auto 5+Storm Age|05.06.2015",
"Project Cars+Car Mechanic Simulator 2015|12.06.2015",
"The Witcher 3+Victor Vran|19.06.2015",
"Carmageddon: Reincarnation|26.06.2015",
"Mad Max+Metal Gear Solid 5|04.09.2015",
"Armored Warfare: Проект Армата+WH 40k Regicide|11.09.2015",
"The Witcher 3+Might & Magic: Heroes VII|18.09.2015",
"Until Dawn+Shadowrun: Hong Kong|25.09.2015",
"Black Desert+Zombi|02.10.2015",
"ARK: Survival Evolved+Destiny: The Taken King+WoWS|09.10.2015",
"Rainbow Six: Siege+Skyhill|16.10.2015",
"Life is Feudal+Forza Motorsport 6+WoWS|23.10.2015",
"The Witcher 3: The Hearts of Stone+WoWS|30.10.2015",
"Halo 5: Guardians+Мор. Утопия+WoWS|06.11.2015",
"Rise of the Tomb Raider+Warhammer: End Times - Vermintide+WoWS|13.11.2015",
"ArcheAge+Skyforge+Just Dance 2016|27.11.2015",
"Fallout 4+Мор. Утопия+WoWS|04.12.2015",
"Assassin's Creed: Syndicate+WoWS|11.12.2015",
"World of Tanks+Just Cause 3+WoWS|18.12.2015",
"Guitar Hero Live+Rock Band+WoWS|25.12.2015",
"Dishonored 2+Total War: Warhammer+Far Cry: Primal+DOOM 2016+WoWS|22.01.2016"
]]