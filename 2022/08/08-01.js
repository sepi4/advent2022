
let input = `30373
25512
65332
33549
35390`
input = `3037330373
2551225512
6533265332
3354933549
3539035390
3037330373
2551225512
6533265332
3354933549
3539035390`
input = getInput()

/*
  2222222222

2 3037330373     x..x......
2 2551225512     xx........
1 6533265332     x.........
3 3354933549     x.x.x.....
3 3539035390     xx.x......
2 3037330373     x..x......
2 2551225512     xx........
1 6533265332     x.........
3 3354933549     x.x.x.....
3 3539035390     xx.x......
                 

*/


let arr = input.split('\n').map(row => row.split('').map(x => Number(x)))
let marked = arr.map(r => r.map(x => false))
console.log('arr len:', arr.length)
console.log('marked len:', marked.length)
// console.log(arr.length)
// console.log(arr[0].length)
// console.log(marked.length)
// console.log(marked[0].length)
// console.log(marked[0])
countVisibleTreesFromEdges(arr)
print(marked)
// let n = 0
// for (let row of marked) {
//   for (let x of row) {
//     if (x) {
//       n++
//     }
//   }
// }
// console.log(n)


/**
 * 
 * @param {number[][]} arr 
 */
function countVisibleTreesFromEdges(arr) {
  // let sum = down(arr) + left(arr) + up(arr) + right(arr)
  let d = down(arr)
  let r = right(arr)
  let l = left(arr)
  let u = up(arr)
  let sum = d + r + l + u
  console.log(sum)
}

function mark(arr, marked, max, n, y, x) {
  if (max === undefined || arr[y][x] > max) {
    max = arr[y][x]
    if (!marked[y][x]) {
      n++
    }
    marked[y][x] = true
  }
  return [arr, marked, max, n, y, x]
}

/**
 * 
 * @param {number[][]} arr 
 */
function left(arr) {
  let n = 0
  for (let y = 0; y < arr.length; y++) {
    let max
    for (let x = arr[0].length - 1; x >= 0; x--) {
      [arr, marked, max, n, y, x] = mark(arr, marked, max, n, y, x)
    }
  }
  return n
}

/**
 * 
 * @param {number[][]} arr 
 */
function right(arr) {
  let n = 0
  for (let y = 0; y < arr.length; y++) {
    let max
    for (let x = 0; x < arr[0].length; x++) {
      [arr, marked, max, n, y, x] = mark(arr, marked, max, n, y, x)
    }
  }
  return n
}

/**
 * 
 * @param {number[][]} arr 
 */
function up(arr) {
  let n = 0
  for (let x = 0; x < arr[0].length; x++) {
    let max
    for (let y = arr.length - 1; y >= 0; y--) {
      [arr, marked, max, n, y, x] = mark(arr, marked, max, n, y, x)
    }
  }
  return n
}

/**
 * 
 * @param {number[][]} arr 
 */
function down(arr) {
  let n = 0
  for (let x = 0; x < arr[0].length; x++) {
    let max
    for (let y = 0; y < arr.length; y++) {
      [arr, marked, max, n, y, x] = mark(arr, marked, max, n, y, x)
    }
  }
  return n
}

function getInput() {
  return `011201001000123232122300403211332202122424332111151523152310403222120311202224013311113203311122001
102201211220103202323002411123324024134251423232343141424431144431022143443131141222323122010012220
002022232232102013311311301321044421352134513235443522243113311323213013301030440423203311103101020
002212021110130112400112141310424411421435324412235335534245212325313312413434430114302030310200000
202000312203303110042324124431114212153432535412115323131323541522511253002131401212012131031321110
120203002030304244102444143021314124552253521343321513511124144454343454102412220143321013220111212
012133330030200444414333325255125142322121412245551424242135123513411533153323130432231002121211210
012300220003100211444401144353345522135453435223464636451554321531323513234331131114224102232333310
000201310302031301344341134512444312432566266533252332656654251123535525135213300040211242011230031
121002133124022203240512452433331223524622643252532325346635555552514352434233454024134201432001111
112213110140442401434531255323512525265655352543623565556265545555235551143135124203142220020302000
033001202421424143555311243322416262636322654432542644633525453666655354514351121150231101002002310
133303044321221102531154151541224245536464535622566355532543644552554644312231415325142303020031312
112333344411024045335422225146442243536464622553556234523445362524655623435243115242532313102020021
123023422310204444121415255225254435644446326664473564435422565325224635623542352154120001224144312
102303024142131515433355242322223363453633455657436436574636544336652564626641215232314243234004001
021344140434455245134415553542352643537665534644574553367446664254532523624521243554252411433032112
100140101131444142414254644644434663647646555637737475474473636562243265243536422253531252202124322
111043301134142345422324342454235374733474673456744577746755765343355535622342432251442244140231224
232120141224122324244532255543256467566454337465647735433663734756446566663442525425254525142212311
102310340244433433553362546534535757453376643763344566566557634664535744445254533545223521213213014
330111232252114431226334564636467643777466445537346735563633337744734474466254662225321443542401243
344311321253412213666443354643647347656735478884748547564466577774737677363226422622515344334010341
222340105234132533423442424376674757757675647476557547564445666676437755355626455436313331225343402
334241221121414455435265324646757456774784864846746867457546648735456677555624445353555434433340341
333430021343121666326363537633737767788775478777445558858444854755434544735362564626265444342330020
332224425333452333556456745375454657668644877658744844547774765844454475434765533256545152435214410
411322431421116436336347456774356844455867864644844878664785864444475567664473365652253123453220003
130345455115155526426437663665665668576686587847778476557678655576775553535745643522532344433523042
241333521455132466523664543556384776587787745658797755565556576546847447434775733626365325451531301
202135433134452323646546565545646885747548679876767658578565476458486465755545465664435422532454541
344025243154435524235475655536845545775797795959686975588855546544875685664377465455353661444452422
120511445324333353265334766654858656857755669695597899959957757545465687447345336332322634434414522
041425252513666643357433333888555778459755889566967799659865567757457567576463765323236366123221323
142343534134652443554434768544658774587669979986775985989879787975445856456554364645323653454511323
443155144123223566654765746758688875856899955996667659755976778586644774777456744653322566354532232
013242522162435447764573774877757879868788876799896979576555597985885468586473474464455426633333452
101431333345553353553337548577478656967866886877887889699999856979976485874455544477534422463331314
422325541533664573334736464857446675995799977868697688998787757585668584775766563477536636621514142
313315332565562573637376866486547776557979868979996867779966955885566785455767644565336236452541411
231122455364326235655644685888786685587796897688777698977986787596655865857448333576665523356143332
314415154446535337443754887576795586569678967879977696896667866768856785586774365336636426455324541
251324556334435537567468544665859588888869687767876697967887867856679658788866355353346553442543353
134353225423362456734666455757877769577678987866887877799886886885859796767664444665534363236114533
251241346545626367667578575687955957988796678987999979977897978877579787844755554533763646262143315
353543555544353753474346565789555799696999667888997899777669899867697878476845756644734243432245123
221521465632632737777766744748678869769669668898887888987898666789869785645678734643552655525624335
351552456455622567337644647486678857766866879798779999878779869885869788874885873744772665326352324
153242153665224557353455465857685566797887699998988788877767696668668675666664465757646436665554315
321113152666424547657348876876678597898779877779998999978978777885976658558676664444674243656333212
421511245364456777655754476646885699898678788797778788778778999795687589454774563737333365434325525
213532265252653474345766566877669898969767779777879797899977669868595997784466766655547455234435452
125232235356525353764645486577668857868788699799787978898988669878688867586564457353673236664223343
441242562562223643773466848558599657669669968987979987787969676777796877655876456745562442232541525
135122156635652746574578664849659556998698797778797889988788869797687977855447474475546334662522444
144315413442434666777478887855885568968799966889978797797867786966685589646488554737453225335213325
511213234443636433646678657654587788667696879878989799867699988765895758788675765445656425425334544
052145146243336363474565857687976889776768867898889967686967668565998666768575534675445244546424155
235513424332444756467574556745997958679678999799789777998968876679956958746554677637762355253554335
331155256654246447545776676487485655676699678967897779688898989999768655488874564764434223445132152
152152253254255234473347878744485766678897879689897888667968795675655864748584644653323363464154251
245154344235223346354765457746867586969968687876867899766986679689585778787473555663424264553541344
235253541263666477544377746867785766579566868896689699876766695956667455774677646576554255521144355
033522343456423455634354575764856898657669957896677776766596688857787474488436433455326554242331222
321532413246333226435563556578864759978657759897896799958558598588975755858856537673332523244522141
101422552442534324467345475684574877989759655788785857697957976679848768474665346435664653421242444
103425135453353666736674677847548667967885667765576995797857589796866646565443377775564436443333543
041131245522253556554636537878457787468577768876778599999689667978487755747676763666266652435545351
424232344536333364556466767555646468677996965895798968676966868665587584664535544755645232211324114
334034423343366322247357747635787857555667756956768657779596877655676555367754633345545442422145333
424344345121532564223643563774744574746844686888885779565686455664565643634566756543362551431252401
232123114442152332546734767375678475664877645798695799654765488755876545334345452455463633534433233
414423121145222454332477456654436757485685646546884446667744645744675377357654436554353221451345404
234130223314353235262655676637577858558554556467788664555466588778677546456334642623666524333250443
414001252524152463224524734765775677644765886656877578666575855788653533364773455446565352432424320
024323134311552535243564667476365737764685474446876486685546667685363735646643655435355533243440034
331141044111451522226436327536773637654887585478885586588745847444466365767232265352211455413531431
241321311312323233252665352455436545735388846445565487667644555744667753556266645332452431541341044
234030032312154414563442653244476576544654676884777445766434443476675746365245632242515342521301442
202112004552434344564624422526757574735736566643654737673776743354737744242533546523434111443034202
323422334452422412134566522262537334374446646774476534347655656336555632626663364214333341322443300
031243421344143515452456444553266345437737337675574563437533573575456463665443432215213541123241240
002114441013421154331235436253442576764555535635775735635377573353666526333623554524421352131443020
111342301013125124521245222663363363467436357434736773473777464564655622533254352444544553311114233
222323000331131531351433363334345533653474663466435557365553376535246564324662454422135233103003200
002103300342403311123432563445263435443255635353333564444573456633466424623313351545133022013122320
300304042333200223123432352234525626625234236453763536563235242224645265643515312312520000242200000
210121244033001141551213125554433445222532265463624234562324443435344362451243522525243002401410013
303323342040431313415255233251226626334264553655346266323665655652522363324341123235410333230402230
300112203021311400115231251543524354554262365526643622264625434236554412121342322522123434120120203
011001023222004142422445443143212526654365444643442536365453622222634154551441553400220414300301332
230032020342121242113341435444543253355352433246243543645634456552525315313143243431133302112320020
232132202131312144424224413332214322543242664652323324456222615212244414145113442320023403200012111
112222030320432400004224215552515412325221525356363643351335211141344255554442403013303120331312202
110321230332323212301432002424211134155124241552254334221154111545254253122214132321141212032221001
021020121321302320401011302153145251455114411155452245422422135453412153112033343412340101230302010
122203012232330222213342133012334131225335225325343355122151154444535354414423434423220001330003020
221120213213221333210131242440001425551432522221141211124544343151315104244333311124033221102312011
202201033331203122413021242022211002455531321354252412214332215513311231404032244320020330332301120`
}

function print(arr) {
  for (let row of arr) {
    let rowStr = ''
    for (let c of row) {
      rowStr += c ? 'x' : '.'
    }
    console.log(rowStr)
  }
}