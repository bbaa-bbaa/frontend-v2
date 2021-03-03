const items = [{ itemId: '2001', name: '基础作战记录', sortId: 20004, rarity: 1, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'CARD_EXP', addTimePoint: 1, spriteCoord: [0, 0], groupID: 'exp', name_i18n: { ko: '기초작전기록', ja: '入門作戦記録', en: 'Drill Battle Record', zh: '基础作战记录' }, alias: { ja: ['入門作戦記録', 'にゅうもんさくせんきろく', 'ニュウモンサクセンキロク'], zh: ['基础作战记录', '狗粮', '录像带', '经验卡'] }, pron: { ja: ['nyuumon`sakusen`kiroku', 'nyuumon`sakusen`kiroku'], zh: ['ji`chu`zuo`zhan`ji`lu', 'gou`liang', 'lu`xiang`dai', 'jing`yan`ka'] } }, { itemId: '2002', name: '初级作战记录', sortId: 20003, rarity: 2, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'CARD_EXP', addTimePoint: 1, spriteCoord: [1, 0], groupID: 'exp', name_i18n: { ko: '초급작전기록', ja: '初級作戦記録', en: 'Frontline Battle Record', zh: '初级作战记录' }, alias: { ja: ['初級作戦記録', 'しょきゅうさくせんきろく', 'ショキュウサクセンキロク'], zh: ['初级作战记录', '狗粮', '录像带', '经验卡'] }, pron: { ja: ['shokyuu`sakusen`kiroku', 'syokyuu`sakusen`kiroku'], zh: ['chu`ji`zuo`zhan`ji`lu', 'gou`liang', 'lu`xiang`dai', 'jing`yan`ka'] } }, { itemId: '2003', name: '中级作战记录', sortId: 20002, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'CARD_EXP', addTimePoint: 1, spriteCoord: [2, 0], groupID: 'exp', name_i18n: { ko: '중급작전기록', ja: '中級作戦記録', en: 'Tactical Battle Record', zh: '中级作战记录' }, alias: { ja: ['中級作戦記録', 'ちゅうきゅうさくせんきろく', 'チュウキュウサクセンキロク'], zh: ['中级作战记录', '狗粮', '录像带', '经验卡'] }, pron: { ja: ['chuukyuu`sakusen`kiroku', 'tyuukyuu`sakusen`kiroku'], zh: ['zhong`ji`zuo`zhan`ji`lu', 'gou`liang', 'lu`xiang`dai', 'jing`yan`ka'] } }, { itemId: '2004', name: '高级作战记录', sortId: 20001, rarity: 4, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'CARD_EXP', addTimePoint: 1, spriteCoord: [3, 0], groupID: 'exp', name_i18n: { ko: '고급작전기록', ja: '上級作戦記録', en: 'Strategic Battle Record', zh: '高级作战记录' }, alias: { ja: ['上級作戦記録', 'じょうきゅうさくせんきろく', 'ジョウキュウサクセンキロク'], zh: ['高级作战记录', '狗粮', '录像带', '经验卡'] }, pron: { ja: ['joukyuu`sakusen`kiroku', 'joukyuu`sakusen`kiroku'], zh: ['gao`ji`zuo`zhan`ji`lu', 'gou`liang', 'lu`xiang`dai', 'jing`yan`ka'] } }, { itemId: '3003', name: '赤金', sortId: 10005, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', addTimePoint: 1, spriteCoord: [0, 2], name_i18n: { ko: '순금', ja: '純金', en: 'Pure Gold', zh: '赤金' }, alias: { ja: ['純金', 'じゅんきん', 'ジュンキン'], zh: ['赤金', '金条'] }, pron: { ja: ['junkin', 'junkin'], zh: ['chi`jin', 'jin`tiao'] } }, { itemId: '30011', name: '源岩', sortId: 100015, rarity: 0, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [4, 0], groupID: 'orirock', name_i18n: { ko: '원암', ja: '源岩鉱', en: 'Orirock', zh: '源岩' }, alias: { ja: ['源岩鉱', 'げんがんこう', 'ゲンガンコウ'], zh: ['源岩', '土块', '石头'] }, pron: { ja: ['gengan`kou', 'gengan`kou'], zh: ['yuan`yan', 'tu`kuai', 'shi`tou'] } }, { itemId: '30012', name: '固源岩', sortId: 100014, rarity: 1, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [5, 0], groupID: 'orirock', name_i18n: { ko: '원암 큐브', ja: '初級源岩', en: 'Orirock Cube', zh: '固源岩' }, alias: { ja: ['初級源岩', 'しょきゅうげんがん', 'ショキュウゲンガン'], zh: ['固源岩', '土块', '石头'] }, pron: { ja: ['shokyuu`gengan', 'syokyuu`gengan'], zh: ['gu`yuan`yan', 'tu`kuai', 'shi`tou'] } }, { itemId: '30013', name: '固源岩组', sortId: 100013, rarity: 2, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [0, 1], groupID: 'orirock', name_i18n: { ko: '원암 큐브 번들', ja: '中級源岩', en: 'Orirock Cluster', zh: '固源岩组' }, alias: { ja: ['中級源岩', 'ちゅうきゅうげんがん', 'チュウキュウゲンガン'], zh: ['固源岩组', '土块', '石头'] }, pron: { ja: ['chuukyuu`gengan', 'tyuukyuu`gengan'], zh: ['gu`yuan`yan`zu', 'tu`kuai', 'shi`tou'] } }, { itemId: '30014', name: '提纯源岩', sortId: 100012, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [1, 1], groupID: 'orirock', name_i18n: { ko: '정제 원암', ja: '上級源岩', en: 'Orriock Concentration', zh: '提纯源岩' }, alias: { ja: ['上級源岩', 'じょうきゅうげんがん', 'ジョウキュウゲンガン'], zh: ['提纯源岩', '土块', '石头'] }, pron: { ja: ['joukyuu`gengan', 'joukyuu`gengan'], zh: ['ti`chun`yuan`yan', 'tu`kuai', 'shi`tou'] } }, { itemId: '30061', name: '破损装置', sortId: 100019, rarity: 0, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [1, 4], groupID: 'device', name_i18n: { ko: '파손된 장치', ja: '破損装置', en: 'Damaged Device', zh: '破损装置' }, alias: { ja: ['破損装置', 'はそんそうち', 'ハソンソウチ'], zh: ['破损装置'] }, pron: { ja: ['hason`souchi', 'hason`souti'], zh: ['po`sun`zhuang`zhi'] } }, { itemId: '30062', name: '装置', sortId: 100018, rarity: 1, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [2, 4], groupID: 'device', name_i18n: { ko: '장치', ja: '初級装置', en: 'Device', zh: '装置' }, alias: { ja: ['初級装置', 'しょきゅうそうち', 'ショキュウソウチ'], zh: ['装置'] }, pron: { ja: ['shokyuu`souchi', 'syokyuu`souti'], zh: ['zhuang`zhi'] } }, { itemId: '30063', name: '全新装置', sortId: 100017, rarity: 2, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [3, 4], groupID: 'device', name_i18n: { ko: '리뉴얼 장치', ja: '中級装置', en: 'Integrated Device', zh: '全新装置' }, alias: { ja: ['中級装置', 'ちゅうきゅうそうち', 'チュウキュウソウチ'], zh: ['全新装置'] }, pron: { ja: ['chuukyuu`souchi', 'tyuukyuu`souti'], zh: ['quan`xin`zhuang`zhi'] } }, { itemId: '30064', name: '改量装置', sortId: 100016, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [4, 4], groupID: 'device', name_i18n: { ko: '개량 장치', ja: '上級装置', en: 'Optimized Device', zh: '改量装置' }, alias: { ja: ['上級装置', 'じょうきゅうそうち', 'ジョウキュウソウチ'], zh: ['改量装置'] }, pron: { ja: ['joukyuu`souchi', 'joukyuu`souti'], zh: ['gai`liang`zhuang`zhi'] } }, { itemId: '30031', name: '酯原料', sortId: 100023, rarity: 0, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [1, 2], groupID: 'ester', name_i18n: { ko: '에스테르 원료', ja: 'エステル原料', en: 'Ester', zh: '酯原料' }, alias: { ja: ['エステル原料', 'えすてるげんりょう', 'エステルゲンリョウ'], zh: ['酯原料'] }, pron: { ja: ['esuteru`genryou', 'esuteru`genryou'], zh: ['zhi`yuan`liao'] } }, { itemId: '30032', name: '聚酸酯', sortId: 100022, rarity: 1, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [2, 2], groupID: 'ester', name_i18n: { ko: '폴리에스테르', ja: '初級エステル', en: 'Polyester', zh: '聚酸酯' }, alias: { ja: ['初級エステル', 'しょきゅうえすてる', 'ショキュウエステル'], zh: ['聚酸酯'] }, pron: { ja: ['shokyuu`esuteru', 'syokyuu`esuteru'], zh: ['ju`suan`zhi'] } }, { itemId: '30033', name: '聚酸酯组', sortId: 100021, rarity: 2, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [3, 2], groupID: 'ester', name_i18n: { ko: '폴리에스테르 번들', ja: '中級エステル', en: 'Polyester Pack', zh: '聚酸酯组' }, alias: { ja: ['中級エステル', 'ちゅうきゅうえすてる', 'チュウキュウエステル'], zh: ['聚酸酯组'] }, pron: { ja: ['chuukyuu`esuteru', 'tyuukyuu`esuteru'], zh: ['ju`suan`zhi`zu'] } }, { itemId: '30034', name: '聚酸酯块', sortId: 100020, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [4, 2], groupID: 'ester', name_i18n: { ko: '폴리에스테르 팩', ja: '上級エステル', en: 'Polyester Lump', zh: '聚酸酯块' }, alias: { ja: ['上級エステル', 'じょうきゅうえすてる', 'ジョウキュウエステル'], zh: ['聚酸酯块'] }, pron: { ja: ['joukyuu`esuteru', 'joukyuu`esuteru'], zh: ['ju`suan`zhi`kuai'] } }, { itemId: '30021', name: '代糖', sortId: 100027, rarity: 0, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [2, 1], groupID: 'sugar', name_i18n: { ko: '대체당', ja: 'ブドウ糖', en: 'Sugar Substitute', zh: '代糖' }, alias: { ja: ['ブドウ糖', 'ぶどうとう', 'ブドウトウ'], zh: ['代糖'] }, pron: { ja: ['budou`tou', 'budou`tou'], zh: ['dai`tang'] } }, { itemId: '30022', name: '糖', sortId: 100026, rarity: 1, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [3, 1], groupID: 'sugar', name_i18n: { ko: '포도당', ja: '初級糖原', en: 'Sugar', zh: '糖' }, alias: { ja: ['初級糖原', 'しょきゅうとうげん', 'ショキュウトウゲン'], zh: ['糖'] }, pron: { ja: ['shokyuu`tougen', 'syokyuu`tougen'], zh: ['tang'] } }, { itemId: '30023', name: '糖组', sortId: 100025, rarity: 2, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [4, 1], groupID: 'sugar', name_i18n: { ko: '포도당 번들', ja: '中級糖原', en: 'Sugar Pack', zh: '糖组' }, alias: { ja: ['中級糖原', 'ちゅうきゅうとうげん', 'チュウキュウトウゲン'], zh: ['糖组'] }, pron: { ja: ['chuukyuu`tougen', 'tyuukyuu`tougen'], zh: ['tang`zu'] } }, { itemId: '30024', name: '糖聚块', sortId: 100024, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [5, 1], groupID: 'sugar', name_i18n: { ko: '포도당 팩', ja: '高級糖原', en: 'Sugar Lump', zh: '糖聚块' }, alias: { ja: ['高級糖原', 'こうきゅうとうげん', 'コウキュウトウゲン'], zh: ['糖聚块'] }, pron: { ja: ['koukyuu`tougen', 'koukyuu`tougen'], zh: ['tang`ju`kuai'] } }, { itemId: '30041', name: '异铁碎片', sortId: 100031, rarity: 0, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [5, 2], groupID: 'oriron', name_i18n: { ko: '이철 조각', ja: '異鉄の欠片', en: 'Oriron Shard', zh: '异铁碎片' }, alias: { ja: ['異鉄の欠片', 'いてつのかけら', 'イテツノカケラ'], zh: ['异铁碎片'] }, pron: { ja: ['i`tetsu`no`kakera', 'i`tetu`no`kakera'], zh: ['yi`tie`sui`pian'] } }, { itemId: '30042', name: '异铁', sortId: 100030, rarity: 1, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [0, 3], groupID: 'oriron', name_i18n: { ko: '이철', ja: '初級異鉄', en: 'Oriron', zh: '异铁' }, alias: { ja: ['初級異鉄', 'しょきゅういてつ', 'ショキュウイテツ'], zh: ['异铁'] }, pron: { ja: ['shokyuu`i`tetsu', 'syokyuu`i`tetu'], zh: ['yi`tie'] } }, { itemId: '30043', name: '异铁组', sortId: 100029, rarity: 2, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [1, 3], groupID: 'oriron', name_i18n: { ko: '이철 번들', ja: '中級異鉄', en: 'Oriron Cluster', zh: '异铁组' }, alias: { ja: ['中級異鉄', 'ちゅうきゅういてつ', 'チュウキュウイテツ'], zh: ['异铁组'] }, pron: { ja: ['chuukyuu`i`tetsu', 'tyuukyuu`i`tetu'], zh: ['yi`tie`zu'] } }, { itemId: '30044', name: '异铁块', sortId: 100028, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [2, 3], groupID: 'oriron', name_i18n: { ko: '이철 팩', ja: '高級異鉄', en: 'Oriron Block', zh: '异铁块' }, alias: { ja: ['高級異鉄', 'こうきゅういてつ', 'コウキュウイテツ'], zh: ['异铁块'] }, pron: { ja: ['koukyuu`i`tetsu', 'koukyuu`i`tetu'], zh: ['yi`tie`kuai'] } }, { itemId: '30051', name: '双酮', sortId: 100035, rarity: 0, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [3, 3], groupID: 'keton', name_i18n: { ko: '디케톤', ja: 'アケトン試剤', en: 'Diketon', zh: '双酮' }, alias: { ja: ['アケトン試剤', 'あけとんしざい', 'アケトンシザイ'], zh: ['双酮'] }, pron: { ja: ['aketon`shi`zai', 'aketon`si`zai'], zh: ['shuang`tong'] } }, { itemId: '30052', name: '酮凝集', sortId: 100034, rarity: 1, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [4, 3], groupID: 'keton', name_i18n: { ko: '아케톤 응집체', ja: '初級アケトン', en: 'Polyketon', zh: '酮凝集' }, alias: { ja: ['初級アケトン', 'しょきゅうあけとん', 'ショキュウアケトン'], zh: ['酮凝集'] }, pron: { ja: ['shokyuu`aketon', 'syokyuu`aketon'], zh: ['tong`ning`ji'] } }, { itemId: '30053', name: '酮凝集组', sortId: 100033, rarity: 2, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [5, 3], groupID: 'keton', name_i18n: { ko: '아케톤 응집체 번들', ja: '中級アケトン', en: 'Aketon', zh: '酮凝集组' }, alias: { ja: ['中級アケトン', 'ちゅうきゅうあけとん', 'チュウキュウアケトン'], zh: ['酮凝集组', '胶囊'] }, pron: { ja: ['chuukyuu`aketon', 'tyuukyuu`aketon'], zh: ['tong`ning`ji`zu', 'jiao`nang'] } }, { itemId: '30054', name: '酮阵列', sortId: 100032, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [0, 4], groupID: 'keton', name_i18n: { ko: '아케톤 팩', ja: '高級アケトン', en: 'Keton Colloid', zh: '酮阵列' }, alias: { ja: ['高級アケトン', 'こうきゅうあけとん', 'コウキュウアケトン'], zh: ['酮阵列', '蜂蜜'] }, pron: { ja: ['koukyuu`aketon', 'koukyuu`aketon'], zh: ['tong`zhen`lie', 'feng`mi'] } }, { itemId: '30073', name: '扭转醇', sortId: 100005, rarity: 2, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [5, 4], groupID: 'kohl', name_i18n: { ko: '로식 콜', ja: '合成コール', en: 'Loxic Kohl', zh: '扭转醇' }, alias: { ja: ['合成コール', 'ごうせいこーる', 'ゴウセイコール'], zh: ['扭转醇', '口香糖', '香口胶', '水果糖'] }, pron: { ja: ['gousei`kooru', 'gousei`kooru'], zh: ['niu`zhuan`chun', 'kou`xiang`tang', 'xiang`kou`jiao', 'shui`guo`tang'] } }, { itemId: '30074', name: '白马醇', sortId: 100004, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [0, 5], groupID: 'kohl', name_i18n: { ko: '화이트 호스 콜', ja: '上級合成コール', en: 'White Horse Kohl', zh: '白马醇' }, alias: { ja: ['上級合成コール', 'じょうきゅうごうせいこーる', 'ジョウキュウゴウセイコール'], zh: ['白马醇', '口香糖', '香口胶', '水果糖', '司马醇'] }, pron: { ja: ['joukyuu`gousei`kooru', 'joukyuu`gousei`kooru'], zh: ['bai`ma`chun', 'kou`xiang`tang', 'xiang`kou`jiao', 'shui`guo`tang', 'si`ma`chun'] } }, { itemId: '30083', name: '轻锰矿', sortId: 100007, rarity: 2, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [1, 5], groupID: 'manganese', name_i18n: { ko: '망간 광석', ja: 'マンガン', en: 'Manganese Ore', zh: '轻锰矿' }, alias: { ja: ['マンガン', 'まんがん', 'マンガン'], zh: ['轻锰矿', '紫水晶', '紫海苔', '紫薯', '紫方块', '紫砖头'] }, pron: { ja: ['mangan', 'mangan'], zh: ['qing`meng`kuang', 'zi`shui`jing', 'zi`hai`tai', 'zi`shu', 'zi`fang`kuai', 'zi`zhuan`tou'] } }, { itemId: '30084', name: '三水锰矿', sortId: 100006, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [2, 5], groupID: 'manganese', name_i18n: { ko: '망간 중합체', ja: '上級マンガン', en: 'Manganese Trihydrate', zh: '三水锰矿' }, alias: { ja: ['上級マンガン', 'じょうきゅうまんがん', 'ジョウキュウマンガン'], zh: ['三水锰矿', '紫水晶', '紫海苔', '紫薯', '紫方块', '紫砖头'] }, pron: { ja: ['joukyuu`mangan', 'joukyuu`mangan'], zh: ['san`shui`meng`kuang', 'zi`shui`jing', 'zi`hai`tai', 'zi`shu', 'zi`fang`kuai', 'zi`zhuan`tou'] } }, { itemId: '30093', name: '研磨石', sortId: 100009, rarity: 2, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [3, 5], groupID: 'grindstone', name_i18n: { ko: '연마석', ja: '砥石', en: 'Grindstone', zh: '研磨石' }, alias: { ja: ['砥石', 'といし', 'トイシ'], zh: ['研磨石', '磨刀石', '地砖', '瓷砖'] }, pron: { ja: ['toishi', 'toisi'], zh: ['yan`mo`shi', 'mo`dao`shi', 'di`zhuan', 'ci`zhuan'] } }, { itemId: '30094', name: '五水研磨石', sortId: 100008, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [4, 5], groupID: 'grindstone', name_i18n: { ko: '고급연마석', ja: '上級砥石', en: 'Grindstone Pentahydrate', zh: '五水研磨石' }, alias: { ja: ['上級砥石', 'じょうきゅうといし', 'ジョウキュウトイシ'], zh: ['五水研磨石', '磨刀石', '地砖', '瓷砖', '大地砖', '大瓷砖'] }, pron: { ja: ['joukyuu`toishi', 'joukyuu`toisi'], zh: ['wu`shui`yan`mo`shi', 'mo`dao`shi', 'di`zhuan', 'ci`zhuan', 'da`di`zhuan', 'da`ci`zhuan'] } }, { itemId: '30103', name: 'RMA70-12', sortId: 100011, rarity: 2, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [5, 5], groupID: 'rma', name_i18n: { ko: 'RMA70-12', ja: 'RMA70-12', en: 'RMA70-12', zh: 'RMA70-12' }, alias: { zh: ['RMA70-12', '海胆', '刺球', '圣晶石'] }, pron: { zh: ['RMA70-12', 'hai`dan', 'ci`qiu', 'sheng`jing`shi'] } }, { itemId: '30104', name: 'RMA70-24', sortId: 100010, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [0, 6], groupID: 'rma', name_i18n: { ko: 'RMA70-24', ja: 'RMA70-24', en: 'RMA70-24', zh: 'RMA70-24' }, alias: { zh: ['RMA70-24', '海胆', '刺球', '圣晶石'] }, pron: { zh: ['RMA70-24', 'hai`dan', 'ci`qiu', 'sheng`jing`shi'] } }, { itemId: 'furni', name: '家具', sortId: 999999, rarity: 0, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'FURN', name_i18n: { ko: '가구', ja: '家具', en: 'Furniture', zh: '家具' }, alias: { ja: ['家具', 'かぐ', 'カグ'], zh: ['家具'] }, pron: { ja: ['kagu', 'kagu'], zh: ['jia`ju'] } }, { itemId: '3112', name: '碳', sortId: 200008, rarity: 1, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', addTimePoint: 2, spriteCoord: [1, 6], groupID: 'carbon', name_i18n: { ko: '카본', ja: '初級炭素材', en: 'Carbon Stick', zh: '碳' }, alias: { ja: ['初級炭素材', 'しょきゅうたんそざい', 'ショキュウタンソザイ'], zh: ['碳'] }, pron: { ja: ['shokyuu`tan`sozai', 'syokyuu`tan`sozai'], zh: ['tan'] } }, { itemId: '3113', name: '碳素', sortId: 200007, rarity: 2, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', addTimePoint: 2, spriteCoord: [2, 6], groupID: 'carbon', name_i18n: { ko: '카본 번들', ja: '中級炭素材', en: 'Carbon Brick', zh: '碳素' }, alias: { ja: ['中級炭素材', 'ちゅうきゅうたんそざい', 'チュウキュウタンソザイ'], zh: ['碳素'] }, pron: { ja: ['chuukyuu`tan`sozai', 'tyuukyuu`tan`sozai'], zh: ['tan`su'] } }, { itemId: '3114', name: '碳素组', sortId: 200006, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', addTimePoint: 2, spriteCoord: [3, 6], groupID: 'carbon', name_i18n: { ko: '카본 팩', ja: '上級炭素材', en: 'Carbon Brick', zh: '碳素组' }, alias: { ja: ['上級炭素材', 'じょうきゅうたんそざい', 'ジョウキュウタンソザイ'], zh: ['碳素组'] }, pron: { ja: ['joukyuu`tan`sozai', 'joukyuu`tan`sozai'], zh: ['tan`su`zu'] } }, { itemId: '3301', name: '技巧概要·卷1', sortId: 300003, rarity: 1, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', addTimePoint: 2, spriteCoord: [4, 6], groupID: 'skillbook', name_i18n: { ko: '스킬개론 제1권', ja: 'アーツ学Ⅰ', en: 'Skill Summary - 1', zh: '技巧概要·卷1' }, alias: { ja: ['アーツ学Ⅰ', 'あーつがくⅠ', 'アーツガクⅠ'], zh: ['技巧概要·卷1', '技能书', '白书'] }, pron: { ja: ['aatsu`gaku`ichi', 'aatu`gaku`ichi'], zh: ['ji`qiao`gai`yao`juan`1', 'ji`neng`shu', 'bai`shu'] } }, { itemId: '3302', name: '技巧概要·卷2', sortId: 300002, rarity: 2, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', addTimePoint: 2, spriteCoord: [5, 6], groupID: 'skillbook', name_i18n: { ko: '스킬개론 제2권', ja: 'アーツ学Ⅱ', en: 'Skill Summary - 2', zh: '技巧概要·卷2' }, alias: { ja: ['アーツ学Ⅱ', 'あーつがくⅡ', 'アーツガクⅡ'], zh: ['技巧概要·卷2', '技能书', '绿书'] }, pron: { ja: ['aatsu`gaku`ni', 'aatu`gaku`ni'], zh: ['ji`qiao`gai`yao`juan`2', 'ji`neng`shu', 'lv`shu'] } }, { itemId: '3303', name: '技巧概要·卷3', sortId: 300001, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', addTimePoint: 2, spriteCoord: [0, 7], groupID: 'skillbook', name_i18n: { ko: '스킬개론 제3권', ja: 'アーツ学Ⅲ', en: 'Skill Summary - 3', zh: '技巧概要·卷3' }, alias: { ja: ['アーツ学Ⅲ', 'あーつがくⅢ', 'アーツガクⅢ'], zh: ['技巧概要·卷3', '技能书', '蓝书'] }, pron: { ja: ['aatsu`gaku`san', 'aatu`gaku`san'], zh: ['ji`qiao`gai`yao`juan`3', 'ji`neng`shu', 'lan`shu'] } }, { itemId: 'et_ObsidianPass', name: '黑曜石节门票', sortId: -10000, rarity: 4, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'ACTIVITY_ITEM', addTimePoint: 0, spriteCoord: [1, 7], name_i18n: { ko: '옵시디언 페스티벌 티켓', ja: 'フェスチケット', en: 'Obsidian Festival Ticket', zh: '黑曜石节门票' }, alias: { ja: ['フェスチケット', 'ふぇすちけっと', 'フェスチケット'], zh: ['黑曜石节门票'] }, pron: { ja: ['fesuchiketto', 'fesutiketto'], zh: ['hei`yao`shi`jie`men`piao'] } }, { itemId: 'token_Obsidian', name: '汐斯塔的黑曜石', sortId: -10000, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'ACTIVITY_ITEM', addTimePoint: 0, spriteCoord: [2, 7], name_i18n: { ko: '시에스타의 흑요석', ja: 'シエスタの黒曜石', en: 'Siesta Obsidian', zh: '汐斯塔的黑曜石' }, alias: { ja: ['シエスタの黒曜石', 'しえすたのくろようせき', 'シエスタノクロヨウセキ'], zh: ['汐斯塔的黑曜石'] }, pron: { ja: ['shiesutano`kuro`you`seki', 'siesutano`kuro`you`seki'], zh: ['xi`si`ta`de`hei`yao`shi'] } }, { itemId: 'token_ObsidianCoin', name: '黑曜石节抽奖代币', sortId: -10000, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'ACTIVITY_ITEM', addTimePoint: 0, spriteCoord: [3, 7], name_i18n: { ko: '옵시디언 페스티벌 추첨 코인', ja: 'ガチャコイン', en: 'Obsidian Festival Token', zh: '黑曜石节抽奖代币' }, alias: { ja: ['ガチャコイン', 'がちゃこいん', 'ガチャコイン'], zh: ['黑曜石节抽奖代币'] }, pron: { ja: ['gachakoin', 'gatyakoin'], zh: ['hei`yao`shi`jie`chou`jiang`dai`bi'] } }, { itemId: '4001_2000', name: '龙门币2000', sortId: -10000, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'TEMP', addTimePoint: 0, spriteCoord: [4, 7], name_i18n: { ko: '용문폐2000', ja: '龍門幣2000', en: 'LMD2000', zh: '龙门币2000' }, alias: { ja: ['龍門幣2000', 'りゅうもんへい2000', 'リュウモンヘイ2000'], zh: ['龙门币2000', '钱'] }, pron: { ja: ['ryuu`mon`hei`2000', 'ryuu`mon`hei`2000'], zh: ['long`men`bi`2000', 'qian'] } }, { itemId: '4001_1500', name: '龙门币1500', sortId: -10000, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'TEMP', addTimePoint: 0, spriteCoord: [5, 7], name_i18n: { ko: '용문폐1500', ja: '龍門幣1500', en: 'LMD1500', zh: '龙门币1500' }, alias: { ja: ['龍門幣1500', 'りゅうもんへい1500', 'リュウモンヘイ1500'], zh: ['龙门币1500', '钱'] }, pron: { ja: ['ryuu`mon`hei`1500', 'ryuu`mon`hei`1500'], zh: ['long`men`bi`1500', 'qian'] } }, { itemId: '4001_1000', name: '龙门币1000', sortId: -10000, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'TEMP', addTimePoint: 0, spriteCoord: [0, 8], name_i18n: { ko: '용문폐1000', ja: '龍門幣1000', en: 'LMD1000', zh: '龙门币1000' }, alias: { ja: ['龍門幣1000', 'りゅうもんへい1000', 'リュウモンヘイ1000'], zh: ['龙门币1000', '钱'] }, pron: { ja: ['ryuu`mon`hei`1000', 'ryuu`mon`hei`1000'], zh: ['long`men`bi`1000', 'qian'] } }, { itemId: '31013', name: '凝胶', sortId: 100037, rarity: 2, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', addTimePoint: 3, spriteCoord: [1, 8], groupID: 'gel', name_i18n: { ko: '젤', ja: '人工ゲル', en: 'Coagulating Gel', zh: '凝胶' }, alias: { ja: ['人工ゲル', 'じんこうげる', 'ジンコウゲル'], zh: ['凝胶', '果冻', '铠甲'] }, pron: { ja: ['jinkou`geru', 'zinkou`geru'], zh: ['ning`jiao', 'guo`dong', 'kai`jia'] } }, { itemId: '31014', name: '聚合凝胶', sortId: 100036, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', addTimePoint: 3, spriteCoord: [2, 8], groupID: 'gel', name_i18n: { ko: '중합젤', ja: '融合ゲル', en: 'Polymerized Gel', zh: '聚合凝胶' }, alias: { ja: ['融合ゲル', 'ゆうごうげる', 'ユウゴウゲル'], zh: ['聚合凝胶', '果冻', '铠甲'] }, pron: { ja: ['yuugou`geru', 'yuugou`geru'], zh: ['ju`he`ning`jiao', 'guo`dong', 'kai`jia'] } }, { itemId: '31023', name: '炽合金', sortId: 100039, rarity: 2, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', addTimePoint: 3, spriteCoord: [3, 8], groupID: 'alloy', name_i18n: { ko: '열합금', ja: '熾合金', en: 'Incandescent Alloy', zh: '炽合金' }, alias: { ja: ['熾合金', 'しごうきん', 'シゴウキン'], zh: ['炽合金', '水银'] }, pron: { ja: ['shi`goukin', 'si`goukin', 'oki`goukin'], zh: ['chi`he`jin', 'shui`yin'] } }, { itemId: '31024', name: '炽合金块', sortId: 100038, rarity: 3, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'MATERIAL', addTimePoint: 3, spriteCoord: [4, 8], groupID: 'alloy', name_i18n: { ko: '열합금 팩', ja: '上級熾合金', en: 'Incandescent Alloy Block', zh: '炽合金块' }, alias: { ja: ['上級熾合金', 'じょうきゅうしごうきん', 'ジョウキュウシゴウキン'], zh: ['炽合金块', '水银', '大水银'] }, pron: { ja: ['joukyuu`shi`goukin', 'joukyuu`si`goukin', 'joukyuu`oki`goukin'], zh: ['chi`he`jin`kuai', 'shui`yin', 'da`shui`yin'] } }, { itemId: 'randomMaterial_1', name: '罗德岛物资补给', sortId: 30005, rarity: 4, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'ACTIVITY_ITEM', addTimePoint: 3, spriteCoord: [5, 8], name_i18n: { ko: '로도스 아일랜드 보급 물자', ja: '補給物資・ロドス', en: 'Rhodes Island Supplies', zh: '罗德岛物资补给' }, alias: { ja: ['補給物資・ロドス', 'ほきゅうぶっし・ろどす', 'ホキュウブッシ・ロドス'], zh: ['罗德岛物资补给', '补给箱'] }, pron: { ja: ['hokyuubusshi`rodosu', 'hokyuubussi`rodosu'], zh: ['luo`de`dao`wu`zi`bu`ji', 'bu`ji`xiang'] } }, { itemId: 'ap_supply_lt_010', name: '应急理智小样', sortId: 50004, rarity: 4, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'ACTIVITY_ITEM', addTimePoint: 3, spriteCoord: [0, 9], name_i18n: { ko: '응급 이성 샘플', ja: '試供理性回復剤', en: 'Emergency Sanity Sampler', zh: '应急理智小样' }, alias: { ja: ['試供理性回復剤', 'しきょうりせいかいふくざい', 'シキョウリセイカイフクザイ'], zh: ['应急理智小样'] }, pron: { ja: ['shikyou`risei`kaifukuzai', 'sikyou`risei`kaifukuzai'], zh: ['ying`ji`li`zhi`xiao`yang'] } }, { itemId: 'randomMaterial_2', name: '岁过华灯', sortId: 30005, rarity: 4, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'ACTIVITY_ITEM', addTimePoint: 4, spriteCoord: [1, 9], name_i18n: { ko: '축제 등불', ja: '年関ランタン', en: "New Year's Lantern", zh: '岁过华灯' }, alias: { ja: ['年関ランタン', 'ねんかんらんたん', 'ネンカンランタン'], zh: ['岁过华灯'] }, pron: { ja: ['nen`kan`rantan', 'nen`kan`rantan'], zh: ['sui`guo`hua`deng'] } }, { itemId: '4005', name: '资质凭证', sortId: 10007, rarity: 2, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'LGG_SHD', spriteCoord: [2, 9], name_i18n: { ko: '자격증명서', ja: '一般資格証', en: 'Commendation Certificate', zh: '资质凭证' }, alias: { ja: ['一般資格証', 'いっぱんしかくしょう', 'イッパンシカクショウ'], zh: ['资质凭证', '绿票'] }, pron: { ja: ['ippan`shikaku`shou', 'ippan`sikaku`syou'], zh: ['zi`zhi`ping`zheng', 'lv`piao'] } }, { itemId: '30115', name: '聚合剂', sortId: 100003, rarity: 4, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'ARKPLANNER', spriteCoord: [3, 9], name_i18n: { ko: '중합제', ja: '融合剤', en: 'Polymerization Preparation', zh: '聚合剂' }, alias: { ja: ['融合剤', 'ゆうごうざい', 'ユウゴウザイ'], zh: ['聚合剂', '胶水'] }, pron: { ja: ['yuugou`zai', 'yuugou`zai'], zh: ['ju`he`ji', 'jiao`shui'] } }, { itemId: '30125', name: '双极纳米片', sortId: 100002, rarity: 4, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'ARKPLANNER', spriteCoord: [4, 9], name_i18n: { ko: '바이폴라 나노플레이크 칩', ja: 'ナノフレーク', en: 'Bipolar Nanoflake', zh: '双极纳米片' }, alias: { ja: ['ナノフレーク', 'なのふれーく', 'ナノフレーク'], zh: ['双极纳米片'] }, pron: { ja: ['nanofureeku', 'nanofureeku'], zh: ['shuang`ji`na`mi`pian'] } }, { itemId: '30135', name: 'D32钢', sortId: 100001, rarity: 4, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'ARKPLANNER', spriteCoord: [5, 9], name_i18n: { ko: 'D32강', ja: 'D32鋼', en: 'D32 Steel', zh: 'D32钢' }, alias: { ja: ['D32鋼', 'D32こう', 'D32コウ'], zh: ['D32钢', '钢丝球', '星极'] }, pron: { ja: ['D32`kou', 'D32`kou'], zh: ['D32`gang', 'gang`si`qiu', 'xing`ji'] } }, { itemId: 'randomMaterial_3', name: '32h战略配给', sortId: 30005, rarity: 4, existence: { US: { exist: true }, JP: { exist: true }, KR: { exist: true }, CN: { exist: true } }, itemType: 'ACTIVITY_ITEM', addTimePoint: 4, spriteCoord: [0, 10], name_i18n: { ko: '32h 전략 보급', ja: '32h戦略補給', en: '32-hour Strategic Ration', zh: '32h战略配给' }, alias: { zh: ['32h战略配给', '补给箱'] }, pron: { zh: ['32h`zhan`lve`pei`ji', '32h`zhan`lue`pei`ji', 'bu`ji`xiang'] } }, { itemId: 'randomMaterial_4', name: '感谢庆典物资补给', sortId: 30005, rarity: 4, existence: { US: { exist: false }, JP: { exist: false }, KR: { exist: false }, CN: { exist: true } }, itemType: 'ACTIVITY_ITEM', addTimePoint: 4, spriteCoord: [4, 13], name_i18n: { ko: '感谢庆典物资补给', ja: '感谢庆典物资补给', en: '感谢庆典物资补给', zh: '感谢庆典物资补给' }, alias: { zh: ['感谢庆典物资补给', '补给箱'] }, pron: { zh: ['gan`xie`qing`dian`wu`zi`bu`ji', 'bu`ji`xiang'] } }, { itemId: '31033', name: '晶体元件', sortId: 100042, rarity: 2, existence: { US: { exist: false }, JP: { exist: false }, KR: { exist: false }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [1, 13], groupID: 'crystal', name_i18n: { ko: '晶体元件', ja: '晶体元件', en: '晶体元件', zh: '晶体元件' }, alias: { zh: ['晶体元件', '电路板'] }, pron: { zh: ['jing`ti`yuan`jian', 'dian`lu`ban'] } }, { itemId: '31034', name: '晶体电路', sortId: 100041, rarity: 3, existence: { US: { exist: false }, JP: { exist: false }, KR: { exist: false }, CN: { exist: true } }, itemType: 'MATERIAL', spriteCoord: [2, 13], groupID: 'crystal', name_i18n: { ko: '晶体电路', ja: '晶体电路', en: '晶体电路', zh: '晶体电路' }, alias: { zh: ['晶体电路', '电路板'] }, pron: { zh: ['jing`ti`dian`lu', 'dian`lu`ban'] } }, { itemId: '30145', name: '晶体电子单元', sortId: 100040, rarity: 4, existence: { US: { exist: false }, JP: { exist: false }, KR: { exist: false }, CN: { exist: true } }, itemType: 'ARKPLANNER', spriteCoord: [3, 13], name_i18n: { ko: '晶体电子单元', ja: '晶体电子单元', en: '晶体电子单元', zh: '晶体电子单元' }, alias: { zh: ['晶体电子单元', '电路板'] }, pron: { zh: ['jing`ti`dian`zi`dan`yuan', 'dian`lu`ban'] } }, { itemId: '3211', name: '先锋芯片', sortId: 400018, rarity: 2, existence: { CN: { exist: true }, US: { exist: true }, JP: { exist: true }, KR: { exist: true } }, itemType: 'CHIP', spriteCoord: [3, 10], groupID: 'chip', name_i18n: { ko: '뱅가드 칩', ja: '初級先鋒SoC', en: 'Vanguard Chip', zh: '先锋芯片' }, alias: { ja: ['初級先鋒SoC', 'しょきゅうせんぽうSoC', 'ショキュウセンポウSoC'], zh: ['先锋芯片'] }, pron: { ja: ['shokyuu`senpou`SoC', 'syokyuu`senpou`SoC'], zh: ['xian`feng`xin`pian'] } }, { itemId: '3221', name: '近卫芯片', sortId: 400019, rarity: 2, existence: { CN: { exist: true }, KR: { exist: true }, US: { exist: true }, JP: { exist: true } }, itemType: 'CHIP', spriteCoord: [5, 10], groupID: 'chip', name_i18n: { ko: '가드 칩', ja: '初級前衛SoC', en: 'Guard Chip', zh: '近卫芯片' }, alias: { ja: ['初級前衛SoC', 'しょきゅうぜんえいSoC', 'ショキュウゼンエイSoC'], zh: ['近卫芯片'] }, pron: { ja: ['shokyuu`zenei`SoC', 'syokyuu`zenei`SoC'], zh: ['jin`wei`xin`pian'] } }, { itemId: '3241', name: '狙击芯片', sortId: 400020, rarity: 2, existence: { CN: { exist: true }, US: { exist: true }, JP: { exist: true }, KR: { exist: true } }, itemType: 'CHIP', spriteCoord: [3, 11], groupID: 'chip', name_i18n: { ko: '스나이퍼 칩', ja: '初級狙撃SoC', en: 'Sniper Chip', zh: '狙击芯片' }, alias: { ja: ['初級狙撃SoC', 'しょきゅうそげきSoC', 'ショキュウソゲキSoC'], zh: ['狙击芯片'] }, pron: { ja: ['shokyuu`sogeki`SoC', 'syokyuu`sogeki`SoC'], zh: ['ju`ji`xin`pian'] } }, { itemId: '3231', name: '重装芯片', sortId: 400021, rarity: 2, existence: { CN: { exist: true }, KR: { exist: true }, US: { exist: true }, JP: { exist: true } }, itemType: 'CHIP', spriteCoord: [1, 11], groupID: 'chip', name_i18n: { ko: '디펜더 칩', ja: '初級重装SoC', en: 'Defender Chip', zh: '重装芯片' }, alias: { ja: ['初級重装SoC', 'しょきゅうじゅうそうSoC', 'ショキュウジュウソウSoC'], zh: ['重装芯片'] }, pron: { ja: ['shokyuu`juusou`SoC', 'syokyuu`juusou`SoC'], zh: ['zhong`zhuang`xin`pian'] } }, { itemId: '3261', name: '医疗芯片', sortId: 400022, rarity: 2, existence: { US: { exist: true }, KR: { exist: true }, JP: { exist: true }, CN: { exist: true } }, itemType: 'CHIP', spriteCoord: [1, 12], groupID: 'chip', name_i18n: { ko: '메딕 칩', ja: '初級医療SoC', en: 'Medic Chip', zh: '医疗芯片' }, alias: { ja: ['初級医療SoC', 'しょきゅういりょうSoC', 'ショキュウイリョウSoC'], zh: ['医疗芯片'] }, pron: { ja: ['shokyuu`iryou`SoC', 'syokyuu`iryou`SoC'], zh: ['yi`liao`xin`pian'] } }, { itemId: '3271', name: '辅助芯片', sortId: 400023, rarity: 2, existence: { KR: { exist: true }, JP: { exist: true }, US: { exist: true }, CN: { exist: true } }, itemType: 'CHIP', spriteCoord: [3, 12], groupID: 'chip', name_i18n: { ko: '서포터 칩', ja: '初級補助SoC', en: 'Supporter Chip', zh: '辅助芯片' }, alias: { ja: ['初級補助SoC', 'しょきゅうほじょSoC', 'ショキュウホジョSoC'], zh: ['辅助芯片'] }, pron: { ja: ['shokyuu`hojo`SoC', 'syokyuu`hojo`SoC'], zh: ['fu`zhu`xin`pian'] } }, { itemId: '3251', name: '术师芯片', sortId: 400024, rarity: 2, existence: { US: { exist: true }, CN: { exist: true }, JP: { exist: true }, KR: { exist: true } }, itemType: 'CHIP', spriteCoord: [5, 11], groupID: 'chip', name_i18n: { ko: '캐스터 칩', ja: '初級術師SoC', en: 'Caster Chip', zh: '术师芯片' }, alias: { ja: ['初級術師SoC', 'しょきゅうじゅつしSoC', 'ショキュウジュツシSoC'], zh: ['术师芯片'] }, pron: { ja: ['shokyuu`jutsushi`SoC', 'syokyuu`jutusi`SoC'], zh: ['shu`shi`xin`pian'] } }, { itemId: '3281', name: '特种芯片', sortId: 400025, rarity: 2, existence: { JP: { exist: true }, KR: { exist: true }, CN: { exist: true }, US: { exist: true } }, itemType: 'CHIP', spriteCoord: [5, 12], groupID: 'chip', name_i18n: { ko: '스페셜리스트 칩', ja: '初級特殊SoC', en: 'Specialist Chip', zh: '特种芯片' }, alias: { ja: ['初級特殊SoC', 'しょきゅうとくしゅSoC', 'ショキュウトクシュSoC'], zh: ['特种芯片'] }, pron: { ja: ['shokyuu`tokushu`SoC', 'syokyuu`tokusyu`SoC'], zh: ['te`zhong`xin`pian'] } }, { itemId: '3212', name: '先锋芯片组', sortId: 400010, rarity: 3, existence: { US: { exist: true }, CN: { exist: true }, JP: { exist: true }, KR: { exist: true } }, itemType: 'CHIP', spriteCoord: [4, 10], groupID: 'chip', name_i18n: { ko: '뱅가드 칩셋', ja: '中級先鋒SoC', en: 'Vanguard Chip Pack', zh: '先锋芯片组' }, alias: { ja: ['中級先鋒SoC', 'ちゅうきゅうせんぽうSoC', 'チュウキュウセンポウSoC'], zh: ['先锋芯片组'] }, pron: { ja: ['chuukyuu`senpou`SoC', 'tyuukyuu`senpou`SoC'], zh: ['xian`feng`xin`pian`zu'] } }, { itemId: '3222', name: '近卫芯片组', sortId: 400011, rarity: 3, existence: { JP: { exist: true }, KR: { exist: true }, CN: { exist: true }, US: { exist: true } }, itemType: 'CHIP', spriteCoord: [0, 11], groupID: 'chip', name_i18n: { ko: '가드 칩셋', ja: '中級前衛SoC', en: 'Guard Chip Pack', zh: '近卫芯片组' }, alias: { ja: ['中級前衛SoC', 'ちゅうきゅうぜんえいSoC', 'チュウキュウゼンエイSoC'], zh: ['近卫芯片组'] }, pron: { ja: ['chuukyuu`zenei`SoC', 'tyuukyuu`zenei`SoC'], zh: ['jin`wei`xin`pian`zu'] } }, { itemId: '3242', name: '狙击芯片组', sortId: 400012, rarity: 3, existence: { JP: { exist: true }, US: { exist: true }, CN: { exist: true }, KR: { exist: true } }, itemType: 'CHIP', spriteCoord: [4, 11], groupID: 'chip', name_i18n: { ko: '스나이퍼 칩셋', ja: '中級狙撃SoC', en: 'Sniper Chip Pack', zh: '狙击芯片组' }, alias: { ja: ['中級狙撃SoC', 'ちゅうきゅうそげきSoC', 'チュウキュウソゲキSoC'], zh: ['狙击芯片组'] }, pron: { ja: ['chuukyuu`sogeki`SoC', 'tyuukyuu`sogeki`SoC'], zh: ['ju`ji`xin`pian`zu'] } }, { itemId: '3232', name: '重装芯片组', sortId: 400013, rarity: 3, existence: { US: { exist: true }, KR: { exist: true }, JP: { exist: true }, CN: { exist: true } }, itemType: 'CHIP', spriteCoord: [2, 11], groupID: 'chip', name_i18n: { ko: '디펜더 칩셋', ja: '中級重装SoC', en: 'Defender Chip Pack', zh: '重装芯片组' }, alias: { ja: ['中級重装SoC', 'ちゅうきゅうじゅうそうSoC', 'チュウキュウジュウソウSoC'], zh: ['重装芯片组'] }, pron: { ja: ['chuukyuu`juusou`SoC', 'tyuukyuu`juusou`SoC'], zh: ['zhong`zhuang`xin`pian`zu'] } }, { itemId: '3262', name: '医疗芯片组', sortId: 400014, rarity: 3, existence: { JP: { exist: true }, KR: { exist: true }, CN: { exist: true }, US: { exist: true } }, itemType: 'CHIP', spriteCoord: [2, 12], groupID: 'chip', name_i18n: { ko: '메딕 칩셋', ja: '中級医療SoC', en: 'Medic Chip Pack', zh: '医疗芯片组' }, alias: { ja: ['中級医療SoC', 'ちゅうきゅういりょうSoC', 'チュウキュウイリョウSoC'], zh: ['医疗芯片组'] }, pron: { ja: ['chuukyuu`iryou`SoC', 'tyuukyuu`iryou`SoC'], zh: ['yi`liao`xin`pian`zu'] } }, { itemId: '3272', name: '辅助芯片组', sortId: 400015, rarity: 3, existence: { JP: { exist: true }, KR: { exist: true }, CN: { exist: true }, US: { exist: true } }, itemType: 'CHIP', spriteCoord: [4, 12], groupID: 'chip', name_i18n: { ko: '서포터 칩셋', ja: '中級補助SoC', en: 'Supporter Chip Pack', zh: '辅助芯片组' }, alias: { ja: ['中級補助SoC', 'ちゅうきゅうほじょSoC', 'チュウキュウホジョSoC'], zh: ['辅助芯片组'] }, pron: { ja: ['chuukyuu`hojo`SoC', 'tyuukyuu`hojo`SoC'], zh: ['fu`zhu`xin`pian`zu'] } }, { itemId: '3252', name: '术师芯片组', sortId: 400016, rarity: 3, existence: { US: { exist: true }, CN: { exist: true }, JP: { exist: true }, KR: { exist: true } }, itemType: 'CHIP', spriteCoord: [0, 12], groupID: 'chip', name_i18n: { ko: '캐스터 칩셋', ja: '中級術師SoC', en: 'Caster Chip Pack', zh: '术师芯片组' }, alias: { ja: ['中級術師SoC', 'ちゅうきゅうじゅつしSoC', 'チュウキュウジュツシSoC'], zh: ['术师芯片组'] }, pron: { ja: ['chuukyuu`jutsushi`SoC', 'tyuukyuu`jutusi`SoC'], zh: ['shu`shi`xin`pian`zu'] } }, { itemId: '3282', name: '特种芯片组', sortId: 400017, rarity: 3, existence: { CN: { exist: true }, US: { exist: true }, KR: { exist: true }, JP: { exist: true } }, itemType: 'CHIP', spriteCoord: [0, 13], groupID: 'chip', name_i18n: { ko: '스페셜리스트 칩셋', ja: '中級特殊SoC', en: 'Specialist Chip Pack', zh: '特种芯片组' }, alias: { ja: ['中級特殊SoC', 'ちゅうきゅうとくしゅSoC', 'チュウキュウトクシュSoC'], zh: ['特种芯片组'] }, pron: { ja: ['chuukyuu`tokushu`SoC', 'tyuukyuu`tokusyu`SoC'], zh: ['te`zhong`xin`pian`zu'] } }]

export default items
