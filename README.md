<div align="center">

# [Spy.pet Info](https://thatsinewave.github.io/Spy.pet-Info)
 
This repository serves as an index for all info the community has gathered on the Spy.pet situation and as well as my own tables and tools written for these investigations.
All credit to the original files and investigations goes to their owners, in case I forgot to credit someone please contact me ASAP, thanks!

</div>

## Credits

- data/ids.json - originally found by [kickthespy.pet](https://kickthespy.pet) using an API vulnerability.
- data/servers.json - big thanks to [youcoldyet](https://github.com/youcoldyet/spy-bot-serverlist) for scraping and compiling the giant lists of servers by Spy.pet.
- data/servers_and_ids.json - big thanks to [youcoldyet](https://github.com/youcoldyet/spy-bot-serverlist) for scraping and compiling the giant lists of servers by Spy.pet.

<div align="center">

## ☕ [Support my work on Ko-Fi](https://ko-fi.com/thatsinewave)

</div>

## Repository Structure

- `data/ids.json` - Data file made by [kickthespy.pet](https://kickthespy.pet) containing all bot accounts used by spy.pet.
- `data/servers.json` - Data file scraped by [youcoldyet](https://github.com/youcoldyet/spy-bot-serverlist) containing all servers tracked by spy.pet.
- `data/crawler_output/json` - Data file containing crawled pages from the spy.pet domain.
- `data/servers_and_ids.json` - Data file scraped by [youcoldyet](https://github.com/youcoldyet/spy-bot-serverlist) containing all servers and bot accounts used by spy.pet.
- `data/detailed_servers_and_ids.json` - Data file compiled by merging `scanner_output.json` made by me and `servers_and_ids.json` made by [youcoldyet](https://github.com/youcoldyet/spy-bot-serverlist)
- `data/all_known_servers_22042024.json` - Data file containing the full list of known servers by spy.pet
- `data/all_tracked_servers_22042024` - Data file containing the full list of tracked servers by spy.pet
- `data/detailed_all_known_servers_22042024.json` - Data file containing the full detailed list of known servers by spy.pet
- `data/detailed_all_tracked_servers_22042024` - Data file containing the full detailed list of tracked servers by spy.pet
- `kts_tester.py` - Script used to check guilds for bot accounts using [kickthespy.pet's](https://kickthespy.pet) endpoint.
- `data/kts_tester_output.json` - Output file for `kts_tester.py`.
- `user_scanner.py` - Script used to check the Discord IDs inside `ids.json` with Discord's API.
- `data/scanner_output.json` - Output file for `user_scanner.py`.
- `server_scanner.py` - Script used to check server IDs inside `all_known_servers_22042024.json` and `all_tracked_servers_22042024` with Discord's API.
- `index.html` - Main HTML file for the web interface.
- `styles.css` - Main CSS file for the web interface.
- `script.js` - Main JavaScript file for the web interface.

<div align="center">

# [Join my discord server](https://discord.gg/2nHHHBWNDw)

</div>

## Bot accounts used by Spy.pet
the following list contains confirmed bot accounts via an API vulnerability discovered by [kickthespy.pet](https://kickthespy.pet) and checked against Discord's API by myself to compile the list and the incoming site.

| NUMBER |     DISCORD_ID      |           USERNAME            |           NICKNAME            |                                               PROFILE IMAGE                                               |
|:------:|:-------------------:|:-----------------------------:|:-----------------------------:|:---------------------------------------------------------------------------------------------------------:|
|   1    | 1185030898148724777 |      markumusqupo_25047       |           Markumus            | ![Profile-Image](https://cdn.discordapp.com/avatars/1185030898148724777/eee1c6b725875494e01a8250ec4434b9) | 
|   2    | 956131521733984287  |         mrazozygamer.         |         MrAzozyGamer          | ![Profile-Image](https://cdn.discordapp.com/avatars/956131521733984287/65523d82e81d8e1e35341731d399792b)  | 
|   3    | 956097947727179806  |           rfirered.           |           RFireRed            | ![Profile-Image](https://cdn.discordapp.com/avatars/956097947727179806/2499266879d8db07083bd0396f5a957d)  | 
|   4    | 1185045871478448242 |   charles26ntiyex0740_87313   |        Charles26ntiyex        | ![Profile-Image](https://cdn.discordapp.com/avatars/1185045871478448242/c7ec166026a0718a8f4153b89fe4c318) | 
|   5    | 932096380879667253  |           alcah2277           |             alcah             | ![Profile-Image](https://cdn.discordapp.com/avatars/932096380879667253/7a3a6320655e04d268594a4a860b539a)  | 
|   6    | 956246550152118374  |         mysterioeses.         |         Mysterioeses          | ![Profile-Image](https://cdn.discordapp.com/avatars/956246550152118374/f31870888ae6a876e72bf1d0c906346d)  | 
|   7    | 928549000431407164  |       gokublackssr49864       |         GokublackSSR4         | ![Profile-Image](https://cdn.discordapp.com/avatars/928549000431407164/220215ac2afc3119557693ae79ad74c1)  | 
|   8    | 976786710836944936  |           qestron.            |             NONE              | ![Profile-Image](https://cdn.discordapp.com/avatars/976786710836944936/59ea0c91f63bf94686eb014f88d867e4)  | 
|   9    | 956128945227567145  |          vector0934           |            vector             | ![Profile-Image](https://cdn.discordapp.com/avatars/956128945227567145/f24dcfc2328733d300ece6bfd2ac8260)  | 
|   10   | 956137602564640799  |           varel5894           |             Varel             | ![Profile-Image](https://cdn.discordapp.com/avatars/956137602564640799/f84861e5654623dce481e04fbf921c54)  | 
|   11   | 956237066503585873  |         mr.robot5972          |           Mr. Robot           | ![Profile-Image](https://cdn.discordapp.com/avatars/956237066503585873/f7a749a240797ccfba7841db4398de35)  | 
|   12   | 932098848900411423  |          warypug3727          |            WaryPug            | ![Profile-Image](https://cdn.discordapp.com/avatars/932098848900411423/ae50797a51f78880c385905d0e6f49aa)  | 
|   13   | 932079867003039804  |           raevi10_            |            raevi10            | ![Profile-Image](https://cdn.discordapp.com/avatars/932079867003039804/bbfbc8e0d69903f913e5add43dff70fd)  | 
|   14   | 956054319529066527  |        petitepugilist         |        Petite Pugilist        | ![Profile-Image](https://cdn.discordapp.com/avatars/956054319529066527/2bd0b559f204fec03df4aeaf08573fe1)  | 
|   15   | 932082257689190450  |         xheqdshot0710         |           xheqdshot           | ![Profile-Image](https://cdn.discordapp.com/avatars/932082257689190450/3d9aa301a34694abe4cb754f5a76936b)  | 
|   16   | 956131426250657862  |           xhediome            |            xhedio             | ![Profile-Image](https://cdn.discordapp.com/avatars/956131426250657862/321d674be5edf30656f147f93b0aa4eb)  | 
|   17   | 932041199282454528  |         carrotffs1209         |           CarrotFFS           | ![Profile-Image](https://cdn.discordapp.com/avatars/932041199282454528/d01f098c65875ed4e173460000ee9446)  | 
|   18   | 1185048077468450947 |   joseph28axhuvut0465_78086   |        Joseph28axhuvUt        | ![Profile-Image](https://cdn.discordapp.com/avatars/1185048077468450947/c7ec166026a0718a8f4153b89fe4c318) | 
|   19   | 1185034806908682281 |     phillipunan0861_14052     |          Phillipunan          | ![Profile-Image](https://cdn.discordapp.com/avatars/1185034806908682281/25054e50abfff75fe38ba6e16b3b0978) | 
|   20   | 1185046309976166460 |  michael71kmkebay0523_43623   |       Michael71kmkebAy        | ![Profile-Image](https://cdn.discordapp.com/avatars/1185046309976166460/c7ec166026a0718a8f4153b89fe4c318) | 
|   21   | 928561259069177947  |           super5819           |             Super             | ![Profile-Image](https://cdn.discordapp.com/avatars/928561259069177947/568ae001a82b513b6838820efa46d2f0)  | 
|   22   | 1185046163473309696 |  richard87vplibij0153_16225   |       Richard87vplibIj        |                     ![Profile-Image](https://cdn.discordapp.com/embed/avatars/1.png)                      | 
|   23   | 956350881241104495  |            nauke._            |             NONE              | ![Profile-Image](https://cdn.discordapp.com/avatars/956350881241104495/3fa949a01e62d5ed73345ef210653034)  | 
|   24   | 978778806863151114  |            rpi1893            |             NONE              | ![Profile-Image](https://cdn.discordapp.com/avatars/978778806863151114/dfd7f01b94b75f7f417f6fa5cd35b698)  | 
|   25   | 923404990511480852  |      swiftknight7019498       |        SwiftKnight701         | ![Profile-Image](https://cdn.discordapp.com/avatars/923404990511480852/c27780f15495185b385f20320b129d2a)  | 
|   26   | 1172074070901264404 |           peasapwx            |           peasapwx            | ![Profile-Image](https://cdn.discordapp.com/avatars/1172074070901264404/e14919a71e46c92b22d4a23dbb72f65e) | 
|   27   | 928453229740712006  |          dream000633          |           D r e a m           | ![Profile-Image](https://cdn.discordapp.com/avatars/928453229740712006/9857318cb68522f4777adf8e839e4f4f)  | 
|   28   | 956292731880239176  |     niconicokneecaps1508      |      Nico-Nico-kneecaps       | ![Profile-Image](https://cdn.discordapp.com/avatars/956292731880239176/0364714142e93dc2a69440ab4df6fbcc)  | 
|   29   | 975468900244398151  |            jbrtoy             |             NONE              | ![Profile-Image](https://cdn.discordapp.com/avatars/975468900244398151/9ce2659e32c32b56a571872a38273f0d)  | 
|   30   | 1185046537944973383 |     thomasorav_364_05311      |          Thomasorav           | ![Profile-Image](https://cdn.discordapp.com/avatars/1185046537944973383/c7ec166026a0718a8f4153b89fe4c318) | 
|   31   | 956126507984637982  |           otak1264            |             otak              | ![Profile-Image](https://cdn.discordapp.com/avatars/956126507984637982/6eeaf34ecc2c0990800f0edf6d1068bd)  | 
|   32   | 956119888991232050  |           pratboi69           |             NONE              | ![Profile-Image](https://cdn.discordapp.com/avatars/956119888991232050/54208f77a435e0079162a81d1e6a6b46)  | 
|   33   | 1185044083996098590 |     calvinsited_343_44117     |          CalvinsitEd          | ![Profile-Image](https://cdn.discordapp.com/avatars/1185044083996098590/c7ec166026a0718a8f4153b89fe4c318) | 
|   34   | 928490228841328680  |           rat07542            |              Rat              | ![Profile-Image](https://cdn.discordapp.com/avatars/928490228841328680/de16ed9613a6b4e46d580f6bbed5412b)  | 
|   35   | 1172076548791226439 |         desutd_31778          |            desutd             | ![Profile-Image](https://cdn.discordapp.com/avatars/1172076548791226439/57f6c7e9ec68651ed47e4cea3c215b58) | 
|   36   | 1185044808637616159 |       ronald12bs_47492        |          Ronald12bs           | ![Profile-Image](https://cdn.discordapp.com/avatars/1185044808637616159/c7ec166026a0718a8f4153b89fe4c318) | 
|   37   | 1185047344148918509 |     tillerezamadef_76453      |          Tillerezam           | ![Profile-Image](https://cdn.discordapp.com/avatars/1185047344148918509/c7ec166026a0718a8f4153b89fe4c318) | 
|   38   | 1185035242222923927 |   george02oeirux0923_21512    |        George02oeirux         | ![Profile-Image](https://cdn.discordapp.com/avatars/1185035242222923927/f1a85b42e33360fee0caa0d5292f065f) | 
|   39   | 1185047045413797898 |     kenneth38iz0211_33502     |          Kenneth38iz          | ![Profile-Image](https://cdn.discordapp.com/avatars/1185047045413797898/c7ec166026a0718a8f4153b89fe4c318) | 
|   40   | 1185038000795680769 |   christopher86rxumih_02451   |      Christopher86rxumih      | ![Profile-Image](https://cdn.discordapp.com/avatars/1185038000795680769/9c3899e3ada49bcc2905750f3deb9c78) | 
|   41   | 956080137932259398  |          mortina9768          |            Mortina            | ![Profile-Image](https://cdn.discordapp.com/avatars/956080137932259398/19a74245183d255fe72df70e2062f600)  | 
|   42   | 1210161585658798100 |        outwestt_76004         |           OUT WEST            | ![Profile-Image](https://cdn.discordapp.com/avatars/1210161585658798100/4f705700e1cf419d07b024c3d8685aaf) | 
|   43   | 932084358326681662  |          fuzzyg1885           |            FuzzyG             | ![Profile-Image](https://cdn.discordapp.com/avatars/932084358326681662/b3efefb9a4f6f49770c424428a054e83)  | 
|   44   | 956069338820001837  |         mcducklings.          |          McDucklings          | ![Profile-Image](https://cdn.discordapp.com/avatars/956069338820001837/3b9a9d6082ae378d0b90a3a63b262d8d)  | 
|   45   | 956173030218940486  |            paiym.             |             NONE              | ![Profile-Image](https://cdn.discordapp.com/avatars/956173030218940486/61b09f6656d9b194961aea458f667ef1)  | 
|   46   | 956261113115336774  |           louky6623           |             Louky             | ![Profile-Image](https://cdn.discordapp.com/avatars/956261113115336774/d6ec4198c44ed6412e64ff8e97b2c928)  | 
|   47   | 956104664821157918  |           maximxls.           |             NONE              | ![Profile-Image](https://cdn.discordapp.com/avatars/956104664821157918/d61b1980729319642c939c596f4a21d8)  | 
|   48   | 956178931512410222  |            mekonya            |            Mekonya            | ![Profile-Image](https://cdn.discordapp.com/avatars/956178931512410222/f4ced85a824f3affe348e8c7cf1ea3ce)  | 
|   49   | 956031608144666665  |    idunnowhattoputhere0360    |   i dunno what to put here    | ![Profile-Image](https://cdn.discordapp.com/avatars/956031608144666665/a0b35565272fde24b896b918a605d1d6)  | 
|   50   | 923351918439436309  |          krista6530           |            Krista             | ![Profile-Image](https://cdn.discordapp.com/avatars/923351918439436309/6377dc2ae6d6e89fe1415888fd19f5a7)  | 
|   51   | 1185019322331045902 |        ericepur_96318         |           Ericepur            | ![Profile-Image](https://cdn.discordapp.com/avatars/1185019322331045902/c7ec166026a0718a8f4153b89fe4c318) | 
|   52   | 1185051129147555890 |        tonytomiy_51927        |           TonytomIy           | ![Profile-Image](https://cdn.discordapp.com/avatars/1185051129147555890/c7ec166026a0718a8f4153b89fe4c318) | 
|   53   | 1185050948675047539 |     james19jrbahin_55571      |        James19jrbahIn         | ![Profile-Image](https://cdn.discordapp.com/avatars/1185050948675047539/c7ec166026a0718a8f4153b89fe4c318) | 
|   54   | 956375867632799787  |          stormfuls_           |             NONE              | ![Profile-Image](https://cdn.discordapp.com/avatars/956375867632799787/599c684486e393b9233595ad1920b917)  | 
|   55   | 1185045560273666170 |        fredusef_27373         |           Fredusef            | ![Profile-Image](https://cdn.discordapp.com/avatars/1185045560273666170/c7ec166026a0718a8f4153b89fe4c318) | 
|   56   | 1185046383015760016 |     thomas30pd0664_35675      |          Thomas30pd           | ![Profile-Image](https://cdn.discordapp.com/avatars/1185046383015760016/c7ec166026a0718a8f4153b89fe4c318) | 
|   57   | 1210165420493905982 |           jcmoon420           |          J. C. Moon           | ![Profile-Image](https://cdn.discordapp.com/avatars/1210165420493905982/a74ae4e71cb12bb624b3de0f40d4c1fd) | 
|   58   | 1185046791826178099 |      josefoyorolor_15224      |           JosefoyOr           | ![Profile-Image](https://cdn.discordapp.com/avatars/1185046791826178099/c7ec166026a0718a8f4153b89fe4c318) | 
|   59   | 1185047847557672993 |      john90nz0497_98774       |           John90nz            | ![Profile-Image](https://cdn.discordapp.com/avatars/1185047847557672993/c7ec166026a0718a8f4153b89fe4c318) | 
|   60   | 1185036634270478406 |     joseph64xw0442_60910      |          Joseph64xw           | ![Profile-Image](https://cdn.discordapp.com/avatars/1185036634270478406/abe477670ec65e69ee0d8244fc0ac19c) | 
|   61   | 1185042820009054312 |     george72xw0746_56809      |       ThomasBerrington        | ![Profile-Image](https://cdn.discordapp.com/avatars/1185042820009054312/c7ec166026a0718a8f4153b89fe4c318) | 
|   62   | 956075132571508757  |           ektoman11           |             NONE              | ![Profile-Image](https://cdn.discordapp.com/avatars/956075132571508757/64de15a9ec12d808adedfa15379764d1)  | 
|   63   | 956164930061619230  |          milk.man69.          |          milk.man69           | ![Profile-Image](https://cdn.discordapp.com/avatars/956164930061619230/19e96f290a6f3c4ff7069472ddea9e51)  | 
|   64   | 1185033314189443133 |        david11tc_68956        |           David11tc           | ![Profile-Image](https://cdn.discordapp.com/avatars/1185033314189443133/f0b12667f9172bbe88e1574d9d662d67) | 
|   65   | 959468187328589845  |          bravo05357           |            ! Bravo            | ![Profile-Image](https://cdn.discordapp.com/avatars/959468187328589845/9eb6d295968346e9372aee00e0fc6e39)  | 
|   66   | 1185039817231323187 |      juanewuqmegq_70955       |           Juanewuq            | ![Profile-Image](https://cdn.discordapp.com/avatars/1185039817231323187/c7ec166026a0718a8f4153b89fe4c318) | 
|   67   | 956037057157943377  |         seargent4542          |             NONE              | ![Profile-Image](https://cdn.discordapp.com/avatars/956037057157943377/0142e638aed8e134ac275dbcfa760a12)  | 
|   68   | 956222023816847411  |           slavicity           |             NONE              | ![Profile-Image](https://cdn.discordapp.com/avatars/956222023816847411/e4efd84b667c86f1b81bc1878d0ff2f9)  | 
|   69   | 1185010648120303717 |      mark13hn0787_01529       |           JayEvans            | ![Profile-Image](https://cdn.discordapp.com/avatars/1185010648120303717/9cbc90d5427af89c4520e510e2788651) | 
|   70   | 1171219789738410037 |           deathyzr            |           Deathyzr            | ![Profile-Image](https://cdn.discordapp.com/avatars/1171219789738410037/0939fd3773b1e8ba23b691da40e8de29) | 
|   71   | 1185036106257944677 |    kenneth86sxqotex_32333     |       Kenneth86sxqotEx        | ![Profile-Image](https://cdn.discordapp.com/avatars/1185036106257944677/c7ec166026a0718a8f4153b89fe4c318) | 
|   72   | 1185045436331982848 |     kenneth49yv0920_84309     |          Kenneth49yv          | ![Profile-Image](https://cdn.discordapp.com/avatars/1185045436331982848/c7ec166026a0718a8f4153b89fe4c318) | 
|   73   | 1171206094794797191 |           kingidyi            |           KingIdyi            | ![Profile-Image](https://cdn.discordapp.com/avatars/1171206094794797191/d03e5f85ec73e01af3682481114c6e81) | 
|   74   | 956035417860362308  |         shaleniyserg          |           COMRADES            | ![Profile-Image](https://cdn.discordapp.com/avatars/956035417860362308/36dc9b281dffb1a60563778fb19b6187)  | 
|   75   | 1185047194261274665 |      theodoreopog_22575       |         Theodoreopog          | ![Profile-Image](https://cdn.discordapp.com/avatars/1185047194261274665/c7ec166026a0718a8f4153b89fe4c318) | 
|   76   | 1185043981785112728 |     randallanin_604_87246     |          Randallanin          | ![Profile-Image](https://cdn.discordapp.com/avatars/1185043981785112728/c7ec166026a0718a8f4153b89fe4c318) | 
|   77   | 1171223723714556015 |           aetheqwk            |           aetheqwk            | ![Profile-Image](https://cdn.discordapp.com/avatars/1171223723714556015/bfb75902aa24199c69c905dad47c4606) | 
|   78   | 974926574346440765  |          pzycho9357           |             NONE              | ![Profile-Image](https://cdn.discordapp.com/avatars/974926574346440765/1ec5ea58d50a8cdcb1e370a39dbfadc0)  | 
|   79   | 1185047344023081011 |     joseph18qr0605_93268      |          Joseph18qr           | ![Profile-Image](https://cdn.discordapp.com/avatars/1185047344023081011/c7ec166026a0718a8f4153b89fe4c318) | 
|   80   | 932033861699919882  |        xivswooxiv1740         |          XIVSwooXIV           | ![Profile-Image](https://cdn.discordapp.com/avatars/932033861699919882/0044f2cdd8402d29b346315b25388d38)  | 
|   81   | 1171223836973338634 |           fenovsbt            |           FeNovsbt            | ![Profile-Image](https://cdn.discordapp.com/avatars/1171223836973338634/7d4bf99f0d2fc83d70ca7b86f8348b65) | 
|   82   | 1185033074304630936 |      john07fi0806_59617       |         EthaneHancock         | ![Profile-Image](https://cdn.discordapp.com/avatars/1185033074304630936/2a1a8de3397e98985efd4969542b6cee) | 
|   83   | 1185047968886308895 |      mark44vouquk_45843       |         Mark44vouquk          | ![Profile-Image](https://cdn.discordapp.com/avatars/1185047968886308895/c7ec166026a0718a8f4153b89fe4c318) | 
|   84   | 928483283698851901  |           matt5895            |             matt;             | ![Profile-Image](https://cdn.discordapp.com/avatars/928483283698851901/093b1e408e709988898a803f8c2d02de)  | 
|   85   | 1171225487494893622 |        luishttd_33862         |           Luishttd            | ![Profile-Image](https://cdn.discordapp.com/avatars/1171225487494893622/d927223f166f5873002c95bf846869a2) | 
|   86   | 1185038081322135603 |        mikeapob_86960         |           Mikeapob            | ![Profile-Image](https://cdn.discordapp.com/avatars/1185038081322135603/9c3899e3ada49bcc2905750f3deb9c78) | 
|   87   | 956200330251624468  |          fpsmarcus.           |           FPSMarcus           | ![Profile-Image](https://cdn.discordapp.com/avatars/956200330251624468/40bc8213ca895a076d33b8bfbc15c95e)  | 
|   88   | 1210212474780127232 |          kwaitlover           |          Kwait Lover          | ![Profile-Image](https://cdn.discordapp.com/avatars/1210212474780127232/70a10dfa3150a901c0f660afff843ace) | 
|   89   | 928350122843193385  |        reallybabyyoda_        |        ReallyBabyYoda         | ![Profile-Image](https://cdn.discordapp.com/avatars/928350122843193385/fda26648ac524e410c87fe73a2e122ae)  | 
|   90   | 1185047033183227947 |      kevin41fs0630_70553      |        JeffreyCollins         | ![Profile-Image](https://cdn.discordapp.com/avatars/1185047033183227947/c7ec166026a0718a8f4153b89fe4c318) | 
|   91   | 1172086562176114689 |         l03rahj_39262         |            l03rahj            | ![Profile-Image](https://cdn.discordapp.com/avatars/1172086562176114689/0939fd3773b1e8ba23b691da40e8de29) | 
|   92   | 1210158972280111164 |        lockbitrewards         |           FBI Supp            | ![Profile-Image](https://cdn.discordapp.com/avatars/1210158972280111164/dfb58c5ebe6745a09620cc0ea8e14294) | 
|   93   | 1185037104523268189 |     anthony07et0450_17606     |        JustineDonovan         | ![Profile-Image](https://cdn.discordapp.com/avatars/1185037104523268189/d03e5f85ec73e01af3682481114c6e81) | 
|   94   | 1210170987073503265 |        guntergaymaster        |             Gnter             | ![Profile-Image](https://cdn.discordapp.com/avatars/1210170987073503265/9da6c8f6ae6fa90065435c990b4746c3) | 
|   95   | 956153059371810836  |          mistermack.          |          Mister Mack          | ![Profile-Image](https://cdn.discordapp.com/avatars/956153059371810836/edd219370573426ae6c9f853048de1e9)  | 
|   96   | 1185047092478095443 |      john00sl0122_76360       |          EddieBaker           | ![Profile-Image](https://cdn.discordapp.com/avatars/1185047092478095443/c7ec166026a0718a8f4153b89fe4c318) | 
|   97   | 928369956716937287  |       lilspideygame4790       |         lilspideygame         | ![Profile-Image](https://cdn.discordapp.com/avatars/928369956716937287/80118cdcf51267cb690ab2da89127165)  | 
|   98   | 1185035279791292469 |   jason27ajkuxoq0930_21989    |        Jason27ajkuxOq         | ![Profile-Image](https://cdn.discordapp.com/avatars/1185035279791292469/a0c30029194df6ddf4bda60940acd6f4) | 
|   99   | 1171196139647803513 |         gingvgo_72321         |            gingvgo            | ![Profile-Image](https://cdn.discordapp.com/avatars/1171196139647803513/83ec69b6311b3416928259f2e70eba56) | 
|  100   | 1172080432389574690 |           sammymxx            |           Sammymxx            | ![Profile-Image](https://cdn.discordapp.com/avatars/1172080432389574690/7d4bf99f0d2fc83d70ca7b86f8348b65) | 
|  101   | 932054618568032336  |           cin03541            |             !Cin!             | ![Profile-Image](https://cdn.discordapp.com/avatars/932054618568032336/7f0f36f04583be58f1f9ec8d16ed4c62)  | 
|  102   | 928318741060673627  |            ctm3306            |               C               | ![Profile-Image](https://cdn.discordapp.com/avatars/928318741060673627/98d1f079ab182835a2b3c5bf710b5ab0)  | 
|  103   | 923426902574759976  |         lavendxr5852          |           Lavendxr            | ![Profile-Image](https://cdn.discordapp.com/avatars/923426902574759976/97816497e8be8bf52afced5e3962a711)  | 
|  104   | 928591647611179018  |        justnathan2072         |          JustNathan           | ![Profile-Image](https://cdn.discordapp.com/avatars/928591647611179018/e88a0855f94cd40009d95ff671e744a6)  | 
|  105   | 1185021551825920066 |     sebastianwikok_15049      |        SebastianwikOk         | ![Profile-Image](https://cdn.discordapp.com/avatars/1185021551825920066/8417c52cc3d6461abeec7aacec586d19) | 
|  106   | 932086630767013908  |         cardsback3516         |          Card's Back          | ![Profile-Image](https://cdn.discordapp.com/avatars/932086630767013908/649596e9a1af962b945a4d198aabf538)  | 
|  107   | 956192794014269481  |       noobypilotcedbalo       |          NoobyPilot           | ![Profile-Image](https://cdn.discordapp.com/avatars/956192794014269481/3465a61c4ca1a4410ffba3a5a55382c9)  | 
|  108   | 1185044716111265799 |        jeff71sj_50545         |           Jeff71sj            | ![Profile-Image](https://cdn.discordapp.com/avatars/1185044716111265799/c7ec166026a0718a8f4153b89fe4c318) | 
|  109   | 932033514931650640  |      pikkujiiyoshiro0106      |       Pikku JiiYoshiro        | ![Profile-Image](https://cdn.discordapp.com/avatars/932033514931650640/a07c9a6785e38a25e11b27fcf0be3015)  | 
|  110   | 928366751090106368  |       thinkmeaname3956        |         ThinkMeAName          | ![Profile-Image](https://cdn.discordapp.com/avatars/928366751090106368/f5e415be0f7831eab3666ef8fa880461)  | 
|  111   | 956004017299927061  |         leethepenguin         |        Lee The Penguin        | ![Profile-Image](https://cdn.discordapp.com/avatars/956004017299927061/74aae30d24da983ab36804b7e5898bcb)  | 
|  112   | 1171227973450469426 |           alexaknx            |           Alexaknx            | ![Profile-Image](https://cdn.discordapp.com/avatars/1171227973450469426/74d4773bc17a30a56535c021fe01c923) | 
|  113   | 923435722025869312  |           nuqlr1852           |             Nuqlr             | ![Profile-Image](https://cdn.discordapp.com/avatars/923435722025869312/6d6b51a84dd530f29da94d01aff46044)  | 
|  114   | 1172105789494792242 |           enbieiuj            |           Enbieiuj            | ![Profile-Image](https://cdn.discordapp.com/avatars/1172105789494792242/abe477670ec65e69ee0d8244fc0ac19c) | 
|  115   | 1185039549991235654 |       joseph18op_88897        |          Joseph18op           | ![Profile-Image](https://cdn.discordapp.com/avatars/1185039549991235654/c7ec166026a0718a8f4153b89fe4c318) | 
|  116   | 1185047411605897301 |    timothyhobuz0470_75133     |         TimothyhobUz          | ![Profile-Image](https://cdn.discordapp.com/avatars/1185047411605897301/c7ec166026a0718a8f4153b89fe4c318) | 
|  117   | 919301068620435467  |         pengulink3296         |           Pengulink           | ![Profile-Image](https://cdn.discordapp.com/avatars/919301068620435467/561f3f83be035c3794c2f80bdd5fe9e0)  | 
|  118   | 1185039045747818610 |     thomas57uliqun_95752      |        Thomas57uliqun         | ![Profile-Image](https://cdn.discordapp.com/avatars/1185039045747818610/c7ec166026a0718a8f4153b89fe4c318) | 
|  119   | 1185037967992037489 |     keithroyilcuyo_96818      |          KeithroyIl           | ![Profile-Image](https://cdn.discordapp.com/avatars/1185037967992037489/8779c7de372fc222f795ba8fac04f0dd) | 
|  120   | 1171205707576660133 |            mineprz            |            mineprz            | ![Profile-Image](https://cdn.discordapp.com/avatars/1171205707576660133/53ae9bfd8b28431bd72ce771ca57ea6f) | 
|  121   | 1185038424101629962 |     anthony61jc0489_45767     |          Anthony61jc          | ![Profile-Image](https://cdn.discordapp.com/avatars/1185038424101629962/5a5cf0cd30b9e698e4f90a3a44f93f4c) | 
|  122   | 956202276408688650  |           slade4945           |             Slade             | ![Profile-Image](https://cdn.discordapp.com/avatars/956202276408688650/5c5622a970883d9eff8bae6b478e5615)  | 
|  123   | 1185036303155335240 |      juanatoc_464_16174       |           Juanatoc            | ![Profile-Image](https://cdn.discordapp.com/avatars/1185036303155335240/74d4773bc17a30a56535c021fe01c923) | 
|  124   | 932067526681186414  |          talaan7447           |            Talaan             | ![Profile-Image](https://cdn.discordapp.com/avatars/932067526681186414/32cef82424e1684f48c96a4e61dd3ad6)  | 
|  125   | 956210819325132921  |          tomasiko69           |             NONE              | ![Profile-Image](https://cdn.discordapp.com/avatars/956210819325132921/1d3bab8fb0554a7b6a003600f8c27698)  | 
|  126   | 1172073543836631040 |           katrifbo            |           katrifbo            | ![Profile-Image](https://cdn.discordapp.com/avatars/1172073543836631040/30882e7b1a3e6d154feb4d06109ae19e) | 
|  127   | 1185039095211241552 |      frankerawbanc_70119      |           Frankeraw           | ![Profile-Image](https://cdn.discordapp.com/avatars/1185039095211241552/428403842226837fe4cca6582f758149) | 
|  128   | 1185043232661450814 |   christopher35ho0241_45629   |         LoganBrickman         | ![Profile-Image](https://cdn.discordapp.com/avatars/1185043232661450814/c7ec166026a0718a8f4153b89fe4c318) | 
|  129   | 928398544392560743  |          lolunab3518          |           lol u nab           | ![Profile-Image](https://cdn.discordapp.com/avatars/928398544392560743/020392b3e145ceffb62551b7672b4b2a)  | 
|  130   | 1185043681737179197 |      paul73zmofod_90500       |         Paul73zmofod          | ![Profile-Image](https://cdn.discordapp.com/avatars/1185043681737179197/c7ec166026a0718a8f4153b89fe4c318) | 
|  131   | 932082311263039488  |            4030500            |              403              | ![Profile-Image](https://cdn.discordapp.com/avatars/932082311263039488/af0a38e4a97c20684857b8ee3ecbe802)  | 
|  132   | 1185045337325449267 |    derrickcagakjibi_12087     |         DerrickcagAk          | ![Profile-Image](https://cdn.discordapp.com/avatars/1185045337325449267/c7ec166026a0718a8f4153b89fe4c318) | 
|  133   | 1185047444619284641 |     robert71cv0398_69104      |          Robert71cv           | ![Profile-Image](https://cdn.discordapp.com/avatars/1185047444619284641/c7ec166026a0718a8f4153b89fe4c318) | 
|  134   | 923422685541851196  | dannydevitonotachefgaming5257 | Danny devito (notachefgaming) | ![Profile-Image](https://cdn.discordapp.com/avatars/923422685541851196/68a189d69654da90867d4c91c05c728d)  | 
|  135   | 1185033301099020311 |     danielucuw_283_53388      |          Danielucuw           | ![Profile-Image](https://cdn.discordapp.com/avatars/1185033301099020311/c7ec166026a0718a8f4153b89fe4c318) | 
|  136   | 956887823024275487  |          emokun0346           |            emo-kun            | ![Profile-Image](https://cdn.discordapp.com/avatars/956887823024275487/bd30663b356bb2d8247a8c2336785e4f)  | 
|  137   | 928586086828085358  |           jeuaiaki_           |           Jeuaiaki            | ![Profile-Image](https://cdn.discordapp.com/avatars/928586086828085358/10410537f77f2393a3d00d2c8749c8ef)  | 
|  138   | 928355373763674162  |           reyjr6542           |             ReyJr             | ![Profile-Image](https://cdn.discordapp.com/avatars/928355373763674162/e17b99a410f57738115d2fa770320618)  | 
|  139   | 1171204995392209047 |           imafrsnm            |           IMAFRsnm            | ![Profile-Image](https://cdn.discordapp.com/avatars/1171204995392209047/0939fd3773b1e8ba23b691da40e8de29) | 
|  140   | 1185045242706153573 |     geraldnekuw0616_54600     |          GeraldnekUw          | ![Profile-Image](https://cdn.discordapp.com/avatars/1185045242706153573/c7ec166026a0718a8f4153b89fe4c318) | 
|  141   | 956092289552384010  |         murasaki3097          |           Murasaki            | ![Profile-Image](https://cdn.discordapp.com/avatars/956092289552384010/3404ab3c77c1ed21bf0f585215a8a9c5)  | 
|  142   | 1185034487537606676 |     michael79bzocis_66346     |        Michael79bzocis        | ![Profile-Image](https://cdn.discordapp.com/avatars/1185034487537606676/86dcfb1f52c85c5311445880a707e4bd) | 
|  143   | 932057102841708655  |         brooklynhalo.         |         BrooklynHalo          | ![Profile-Image](https://cdn.discordapp.com/avatars/932057102841708655/000d8033971044f887a5300e9eea5f85)  | 
|  144   | 1185018638567231562 |      leosorev0926_79390       |           LeosorEv            | ![Profile-Image](https://cdn.discordapp.com/avatars/1185018638567231562/c7ec166026a0718a8f4153b89fe4c318) | 
|  145   | 1185038257789079614 |        john49sq_34097         |           John49sq            | ![Profile-Image](https://cdn.discordapp.com/avatars/1185038257789079614/31705984e79cfd8d8ae9e25b0b0a0836) | 
|  146   | 1185045519576338442 |     edward04gg0505_21319      |         FrankAdamson          | ![Profile-Image](https://cdn.discordapp.com/avatars/1185045519576338442/c7ec166026a0718a8f4153b89fe4c318) | 
|  147   | 928600396002373633  |          chairs1275           |            CHAIRS             | ![Profile-Image](https://cdn.discordapp.com/avatars/928600396002373633/37a3503dd4659bf80104c60b5494e5c6)  | 
|  148   | 956294250927120436  |         nyanpasu2803          |             NONE              | ![Profile-Image](https://cdn.discordapp.com/avatars/956294250927120436/83ce8007d86c4a12159200e5dd31a7c2)  | 
|  149   | 1171197414632341508 |           ptalanzy            |           Ptalanzy            | ![Profile-Image](https://cdn.discordapp.com/avatars/1171197414632341508/eb92d260f3f9d4f18b118754ccfed967) | 
|  150   | 956172424309784617  |           yukai1994           |             yukai             | ![Profile-Image](https://cdn.discordapp.com/avatars/956172424309784617/466f0a688fcef113f6d0c3389b91d34d)  | 
|  151   | 1185045420594974761 |      craigaqetlifv_52424      |           Craigaqet           | ![Profile-Image](https://cdn.discordapp.com/avatars/1185045420594974761/c7ec166026a0718a8f4153b89fe4c318) | 
|  152   | 956323664062722100  |           paah2281            |             Paah              | ![Profile-Image](https://cdn.discordapp.com/avatars/956323664062722100/a6f3157d78af0d87c7277d2ed9a62451)  | 
|  153   | 1171191966059466802 |           noahdwam            |           Noahdwam            | ![Profile-Image](https://cdn.discordapp.com/avatars/1171191966059466802/57f6c7e9ec68651ed47e4cea3c215b58) | 
|  154   | 932094826059563040  |        andrew.ppxt7127        |          andrew.ppxt          | ![Profile-Image](https://cdn.discordapp.com/avatars/932094826059563040/80223d5a18f288b2986a75e696969266)  | 
|  155   | 1185043970150117467 |       janabuv_449_62362       |            Janabuv            | ![Profile-Image](https://cdn.discordapp.com/avatars/1185043970150117467/c7ec166026a0718a8f4153b89fe4c318) | 
|  156   | 1210174835985088532 |          emotional69          |           emotional           | ![Profile-Image](https://cdn.discordapp.com/avatars/1210174835985088532/7f1a84a0477f7f0f2d7da2ea0ac2599c) | 
|  157   | 932070704042631219  |           sagaf3412           |             sagaf             | ![Profile-Image](https://cdn.discordapp.com/avatars/932070704042631219/eea2704be6a96e995e1e92e8d98953b4)  | 
|  158   | 956157904539512874  |           scotties_           |             NONE              | ![Profile-Image](https://cdn.discordapp.com/avatars/956157904539512874/7ce932c2789da478e611953669fe58fe)  | 
|  159   | 932039160854872084  |        jackmeister4570        |          Jackmeister          | ![Profile-Image](https://cdn.discordapp.com/avatars/932039160854872084/2ba031f94c1d951f65b2d51abd14034e)  | 


## Contributing

Your contributions to this repo are highly appreciated! 
If you know of any valuable tools or websites that are not listed here, please feel free to contribute by submitting a pull request. 
Here's how you can contribute:

1. Fork this repository.
2. Add your tool/website to the appropriate category, providing a brief description and any relevant information.
3. Ensure your additions follow the existing format.
4. Create a pull request and explain your changes.

## License

This repository is provided under the MIT License
By utilizing the contents of this repository, you agree to abide by the terms of this license.
