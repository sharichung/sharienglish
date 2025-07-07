// ==== 資料 ====
const groups = [{
    "id": 1,
    "title": "第 1 組：s, a, t",
    "description": "開始學習s, a, t音素和相關練習",
    "letters": ["s", "a", "t"],
    "songs": [{
        "letter": "s",
        "label": "S 歌曲",
        "audio": "audio/s-song.mp3"
      },
      {
        "letter": "a",
        "label": "A 歌曲",
        "audio": "audio/a-song.mp3"
      },
      {
        "letter": "t",
        "label": "T 歌曲",
        "audio": "audio/t-song.mp3"
      }
    ],
    "phonics": [{
        "letter": "s",
        "ipa": "/s/",
        "audio": "audio/s.mp3",
        "color": "pink",
        "hint": "牙齒靠近，氣流通過發出嘶嘶聲"
      },
      {
        "letter": "a",
        "ipa": "/æ/",
        "audio": "audio/a.mp3",
        "color": "pink",
        "hint": "嘴巴張開，舌頭平放"
      },
      {
        "letter": "t",
        "ipa": "/t/",
        "audio": "audio/t.mp3",
        "color": "pink",
        "hint": "舌尖抵住上齒齦，然後快速放開"
      }
    ],
    "cards": [{
        "letter": "s",
        "label": "S /s/",
        "draggable": true
      },
      {
        "letter": "a",
        "label": "A /æ/",
        "draggable": true
      },
      {
        "letter": "t",
        "label": "T /t/",
        "draggable": true
      }
    ],
    "images": [{
        "letter": "s",
        "word": "Strawberry"
      },
      {
        "letter": "a",
        "word": "Apple"
      },
      {
        "letter": "t",
        "word": "Tiger"
      }
    ],
    "spellingPractice": {
      "words": ["a", "as", "at", "sat", "tat", "stat"]
    },
    "nextGroupId": 2
  },
  {
    "id": 2,
    "title": "第 2 組：i, p, n",
    "description": "開始學習i, p, n音素和相關練習",
    "letters": ["i", "p", "n"],
    "songs": [{
        "letter": "i",
        "label": "I 歌曲",
        "audio": "audio/i-song.mp3"
      },
      {
        "letter": "p",
        "label": "P 歌曲",
        "audio": "audio/p-song.mp3"
      },
      {
        "letter": "n",
        "label": "N 歌曲",
        "audio": "audio/n-song.mp3"
      }
    ],
    "phonics": [{
        "letter": "i",
        "ipa": "/ɪ/",
        "audio": "audio/i.mp3",
        "color": "blue",
        "hint": "嘴巴微張，舌頭略抬靠近上齒"
      },
      {
        "letter": "p",
        "ipa": "/p/",
        "audio": "audio/p.mp3",
        "color": "blue",
        "hint": "雙唇合起後突然放開並吐氣"
      },
      {
        "letter": "n",
        "ipa": "/n/",
        "audio": "audio/n.mp3",
        "color": "blue",
        "hint": "舌尖抵住上齒齦並從鼻子出聲"
      }
    ],
    "cards": [{
        "letter": "i",
        "label": "I /ɪ/",
        "draggable": true
      },
      {
        "letter": "p",
        "label": "P /p/",
        "draggable": true
      },
      {
        "letter": "n",
        "label": "N /n/",
        "draggable": true
      }
    ],
    "images": [{
        "letter": "i",
        "word": "Ink"
      },
      {
        "letter": "p",
        "word": "Penguin"
      },
      {
        "letter": "n",
        "word": "Net"
      }
    ],
    "spellingPractice": {
      "words": ["pin", "pan", "pit", "pat", "nip", "tip", "tin", "tap", "nap", "sip", "sin", "sit",
        "span", "snap", "spit", "snip", "spin", "pant", "pinna", "pipit"
      ]
    },
    "nextGroupId": 3
  },
  {
    "id": 3,
    "title": "第 3 組：c / k, e, h",
    "description": "開始學習 c / k, e, h 音素和相關練習",
    "letters": ["c", "k", "e", "h"],
    "songs": [{
        "letter": "c",
        "label": "C 歌曲",
        "audio": "audio/c-song.mp3"
      },
      {
        "letter": "k",
        "label": "K 歌曲",
        "audio": "audio/k-song.mp3"
      },
      {
        "letter": "e",
        "label": "E 歌曲",
        "audio": "audio/e-song.mp3"
      },
      {
        "letter": "h",
        "label": "H 歌曲",
        "audio": "audio/h-song.mp3"
      }
    ],
    "phonics": [{
        "letter": "c",
        "ipa": "/k/",
        "audio": "audio/ck.mp3",
        "color": "green",
        "hint": "舌頭抬起貼近上顎後快速放開"
      },
      {
        "letter": "k",
        "ipa": "/k/",
        "audio": "audio/ck.mp3",
        "color": "green",
        "hint": "舌頭抬起貼近上顎後快速放開"
      },
      {
        "letter": "e",
        "ipa": "/ɛ/",
        "audio": "audio/e.mp3",
        "color": "green",
        "hint": "嘴巴微張，舌頭抬高向前"
      },
      {
        "letter": "h",
        "ipa": "/h/",
        "audio": "audio/h.mp3",
        "color": "green",
        "hint": "嘴巴張開輕吐氣音"
      }
    ],
    "cards": [{
        "letter": "c",
        "label": "C /k/",
        "draggable": true
      },
      {
        "letter": "k",
        "label": "K /k/",
        "draggable": true
      },
      {
        "letter": "e",
        "label": "E /ɛ/",
        "draggable": true
      },
      {
        "letter": "h",
        "label": "H /h/",
        "draggable": true
      }
    ],
    "images": [{
        "letter": "c",
        "word": "Cat",
        "accepts": ["c", "k"]
      },
      {
        "letter": "e",
        "word": "Egg"
      },
      {
        "letter": "h",
        "word": "Hat"
      }
    ],
    "spellingPractice": {
      "words": [
        "hat", "cat", "kit", "cap", "net", "hen",
        "pet", "pen",
        "neck", "pack", "tack", "peck", "hack", "tech", "pick", "kick",
        "snack", "stack", "speck"
      ]
    },
    "nextGroupId": 4
  },
  {
    "id": 4,
    "title": "第 4 組：r, m, d",
    "description": "開始學習r, m, d音素和相關練習",
    "letters": ["r", "m", "d"],
    "songs": [{
        "letter": "r",
        "label": "R 歌曲",
        "audio": "audio/r-song.mp3"
      },
      {
        "letter": "m",
        "label": "M 歌曲",
        "audio": "audio/m-song.mp3"
      },
      {
        "letter": "d",
        "label": "D 歌曲",
        "audio": "audio/d-song.mp3"
      }
    ],
    "phonics": [{
        "letter": "r",
        "ipa": "/r/",
        "audio": "audio/r.mp3",
        "color": "indigo",
        "hint": "舌尖微捲，靠近但不接觸上顎"
      },
      {
        "letter": "m",
        "ipa": "/m/",
        "audio": "audio/m.mp3",
        "color": "indigo",
        "hint": "雙唇閉合並從鼻腔發聲"
      },
      {
        "letter": "d",
        "ipa": "/d/",
        "audio": "audio/d.mp3",
        "color": "indigo",
        "hint": "舌尖抵住上齒齦後快速放開發音"
      }
    ],
    "cards": [{
        "letter": "r",
        "label": "R /r/",
        "draggable": true
      },
      {
        "letter": "m",
        "label": "M /m/",
        "draggable": true
      },
      {
        "letter": "d",
        "label": "D /d/",
        "draggable": true
      }
    ],
    "images": [{
        "letter": "r",
        "word": "Rabbit"
      },
      {
        "letter": "m",
        "word": "Mouse"
      },
      {
        "letter": "d",
        "word": "Dog"
      }
    ],
    "spellingPractice": {
      "words": [
        "am", "ad", "ed",
        "mad", "ram", "dad", "dam",
        "dim", "dip", "mid", "rid", "red",
        "rad", "rim", "rap", "rat", "man", "mat",
        "drip", "trip", "trap", "trim", "prim",
        "dart", "mart", "part", "pant", "rant",
        "sand", "hand", "hard", "mark", "park", "dark"
      ]
    },
    "nextGroupId": 5
  },
  {
    "id": 5,
    "title": "第 5 組：g, o, u",
    "description": "開始學習g, o, u音素和相關練習",
    "letters": ["g", "o", "u"],
    "songs": [{
        "letter": "g",
        "label": "G 歌曲",
        "audio": "audio/g-song.mp3"
      },
      {
        "letter": "o",
        "label": "O 歌曲",
        "audio": "audio/o-song.mp3"
      },
      {
        "letter": "u",
        "label": "U 歌曲",
        "audio": "audio/u-song.mp3"
      }
    ],
    "phonics": [{
        "letter": "g",
        "ipa": "/g/",
        "audio": "audio/g.mp3",
        "color": "orange",
        "hint": "舌根貼近上顎並快速放開發聲"
      },
      {
        "letter": "o",
        "ipa": "/ɒ/",
        "audio": "audio/o.mp3",
        "color": "orange",
        "hint": "嘴巴圓張，舌頭位於口腔中後部"
      },
      {
        "letter": "u",
        "ipa": "/ʌ/",
        "audio": "audio/u.mp3",
        "color": "orange",
        "hint": "嘴巴略張，舌頭位於中央偏後"
      }
    ],
    "cards": [{
        "letter": "g",
        "label": "G /g/",
        "draggable": true
      },
      {
        "letter": "o",
        "label": "O /ɒ/",
        "draggable": true
      },
      {
        "letter": "u",
        "label": "U /ʌ/",
        "draggable": true
      }
    ],
    "images": [{
        "letter": "g",
        "word": "Goat"
      },
      {
        "letter": "o",
        "word": "Octopus"
      },
      {
        "letter": "u",
        "word": "Umbrella"
      }
    ],
    "spellingPractice": {
      "words": [
        "up", "gun", "gum",
        "got", "gut", "dog", "mud",
        "pod", "pun", "pop", "pot",
        "mud", "mug", "rug", "run",
        "dump", "punk", "pump"
      ]
    },
    "nextGroupId": 6
  },
  {
    "id": 6,
    "title": "第 6 組：l, f, b",
    "description": "開始學習l, f, b音素和相關練習",
    "letters": ["l", "f", "b"],
    "songs": [{
        "letter": "l",
        "label": "L 歌曲",
        "audio": "audio/l-song.mp3"
      },
      {
        "letter": "f",
        "label": "F 歌曲",
        "audio": "audio/f-song.mp3"
      },
      {
        "letter": "b",
        "label": "B 歌曲",
        "audio": "audio/b-song.mp3"
      }
    ],
    "phonics": [{
        "letter": "l",
        "ipa": "/l/",
        "audio": "audio/l.mp3",
        "color": "teal",
        "hint": "舌尖輕觸上齒齦，氣流從兩側通過"
      },
      {
        "letter": "f",
        "ipa": "/f/",
        "audio": "audio/f.mp3",
        "color": "teal",
        "hint": "上齒輕觸下唇，氣流摩擦發聲"
      },
      {
        "letter": "b",
        "ipa": "/b/",
        "audio": "audio/b.mp3",
        "color": "teal",
        "hint": "雙唇閉合後打開並發聲"
      }
    ],
    "cards": [{
        "letter": "l",
        "label": "L /l/",
        "draggable": true
      },
      {
        "letter": "f",
        "label": "F /f/",
        "draggable": true
      },
      {
        "letter": "b",
        "label": "B /b/",
        "draggable": true
      }
    ],
    "images": [{
        "letter": "l",
        "word": "Lion"
      },
      {
        "letter": "f",
        "word": "Fish"
      },
      {
        "letter": "b",
        "word": "Ball"
      }
    ],
    "spellingPractice": {
      "words": [
        "if", "fib", "fab",
        "lab", "lob", "bob",
        "bib", "blab", "flab",
        "flap", "flag", "flip",
        "blob", "blip", "bluff"
      ]
    },
    "nextGroupId": 7
  },
  {
    "id": 7,
    "title": "第 7 組：ai, j, oa",
    "description": "開始學習ai, j, oa音素和相關練習",
    "letters": ["ai", "j", "oa"],
    "songs": [{
        "letter": "ai",
        "label": "AI 歌曲",
        "audio": "audio/ai-song.mp3"
      },
      {
        "letter": "j",
        "label": "J 歌曲",
        "audio": "audio/j-song.mp3"
      },
      {
        "letter": "oa",
        "label": "OA 歌曲",
        "audio": "audio/oa-song.mp3"
      }
    ],
    "phonics": [{
        "letter": "ai",
        "ipa": "/eɪ/",
        "audio": "audio/ai.mp3",
        "color": "purple",
        "hint": "嘴巴微張，發出長音「欸」"
      },
      {
        "letter": "j",
        "ipa": "/dʒ/",
        "audio": "audio/j.mp3",
        "color": "purple",
        "hint": "舌頭接觸上齒齦後快速釋放，像「啾」的聲音"
      },
      {
        "letter": "oa",
        "ipa": "/əʊ/",
        "audio": "audio/oa.mp3",
        "color": "purple",
        "hint": "嘴巴圓張，從「喔」滑向「嗚」"
      }
    ],
    "cards": [{
        "letter": "ai",
        "label": "AI /eɪ/",
        "draggable": true
      },
      {
        "letter": "j",
        "label": "J /dʒ/",
        "draggable": true
      },
      {
        "letter": "oa",
        "label": "OA /əʊ/",
        "draggable": true
      }
    ],
    "images": [{
        "letter": "ai",
        "word": "Snail"
      },
      {
        "letter": "j",
        "word": "Jam"
      },
      {
        "letter": "oa",
        "word": "Boat"
      }
    ],
    "spellingPractice": {
      "words": [
        "jam", "jog", "job",
        "aim", "rain", "pain",
        "mail", "snail", "rail",
        "boat", "goat", "moat",
        "foam", "load", "road"
      ]
    },
    "nextGroupId": 8
  },
  {
    "id": 8,
    "title": "第 8 組：ie, ee, or",
    "description": "開始學習ie, ee, or音素和相關練習",
    "letters": ["ie", "ee", "or"],
    "songs": [{
        "letter": "ie",
        "label": "IE 歌曲",
        "audio": "audio/ie-song.mp3"
      },
      {
        "letter": "ee",
        "label": "EE 歌曲",
        "audio": "audio/ee-song.mp3"
      },
      {
        "letter": "or",
        "label": "OR 歌曲",
        "audio": "audio/or-song.mp3"
      }
    ],
    "phonics": [{
        "letter": "ie",
        "ipa": "/aɪ/",
        "audio": "audio/ie.mp3",
        "color": "yellow",
        "hint": "嘴巴張開，從「啊」滑向「咿」"
      },
      {
        "letter": "ee",
        "ipa": "/iː/",
        "audio": "audio/ee.mp3",
        "color": "yellow",
        "hint": "嘴角向兩側拉開，發出長音「咿」"
      },
      {
        "letter": "or",
        "ipa": "/ɔː/",
        "audio": "audio/or.mp3",
        "color": "yellow",
        "hint": "嘴巴圓張，舌頭向後抬起，發出「喔」音"
      }
    ],
    "cards": [{
        "letter": "ie",
        "label": "IE /aɪ/",
        "draggable": true
      },
      {
        "letter": "ee",
        "label": "EE /iː/",
        "draggable": true
      },
      {
        "letter": "or",
        "label": "OR /ɔː/",
        "draggable": true
      }
    ],
    "images": [{
        "letter": "ie",
        "word": "Pie"
      },
      {
        "letter": "ee",
        "word": "Bee"
      },
      {
        "letter": "or",
        "word": "Fork"
      }
    ],
    "spellingPractice": {
      "words": [
        "see", "tree", "bee",
        "feet", "seed", "need",
        "tie", "pie", "lie",
        "for", "fork", "born",
        "corn", "storm", "short"
      ]
    },
    "nextGroupId": 9
  },
  {
    "id": 9,
    "title": "第 9 組：z, w, ng",
    "description": "開始學習z, w, ng音素和相關練習",
    "letters": ["z", "w", "ng"],
    "songs": [{
        "letter": "z",
        "label": "Z 歌曲",
        "audio": "audio/z-song.mp3"
      },
      {
        "letter": "w",
        "label": "W 歌曲",
        "audio": "audio/w-song.mp3"
      },
      {
        "letter": "ng",
        "label": "NG 歌曲",
        "audio": "audio/ng-song.mp3"
      }
    ],
    "phonics": [{
        "letter": "z",
        "ipa": "/z/",
        "audio": "audio/z.mp3",
        "color": "red",
        "hint": "舌尖接近上齒齦，聲帶震動發出「zzz」聲"
      },
      {
        "letter": "w",
        "ipa": "/w/",
        "audio": "audio/w.mp3",
        "color": "red",
        "hint": "嘴唇圓張，氣流滑出，像「嗚」的起始音"
      },
      {
        "letter": "ng",
        "ipa": "/ŋ/",
        "audio": "audio/ng.mp3",
        "color": "red",
        "hint": "舌根抬起貼近軟顎，氣流從鼻腔發出「嗯」音"
      }
    ],
    "cards": [{
        "letter": "z",
        "label": "Z /z/",
        "draggable": true
      },
      {
        "letter": "w",
        "label": "W /w/",
        "draggable": true
      },
      {
        "letter": "ng",
        "label": "NG /ŋ/",
        "draggable": true
      }
    ],
    "images": [{
        "letter": "z",
        "word": "Zebra"
      },
      {
        "letter": "w",
        "word": "Whale"
      },
      {
        "letter": "ng",
        "word": "Ring"
      }
    ],
    "spellingPractice": {
      "words": [
        "zip", "zap", "zig", "zoo",
        "win", "web", "wig", "wax",
        "ring", "sing", "long", "song",
        "wing", "king", "bang", "hung"
      ]
    },
    "nextGroupId": 10
  },
  {
    "id": 10,
    "title": "第 10 組：v, oo, oo",
    "description": "學習v音與oo的兩種發音（長音與短音）",
    "letters": ["v", "oo", "oo"],
    "songs": [{
        "letter": "v",
        "label": "V 歌曲",
        "audio": "audio/v-song.mp3"
      },
      {
        "letter": "oo-long",
        "label": "OO 長音歌曲",
        "audio": "audio/oo-long-song.mp3"
      },
      {
        "letter": "oo-short",
        "label": "OO 短音歌曲",
        "audio": "audio/oo-short-song.mp3"
      }
    ],
    "phonics": [{
        "letter": "v",
        "ipa": "/v/",
        "audio": "audio/v.mp3",
        "color": "pink",
        "hint": "上齒輕觸下唇，聲帶震動發出「v」音"
      },
      {
        "letter": "oo (長)",
        "ipa": "/uː/",
        "audio": "audio/oo-long.mp3",
        "color": "pink",
        "hint": "嘴唇圓張，發出長音「嗚」"
      },
      {
        "letter": "oo (短)",
        "ipa": "/ʊ/",
        "audio": "audio/oo-short.mp3",
        "color": "pink",
        "hint": "嘴唇略圓，發出短促的「烏」音"
      }
    ],
    "cards": [{
        "letter": "v",
        "label": "V /v/",
        "draggable": true
      },
      {
        "letter": "oo (長)",
        "label": "OO /uː/",
        "draggable": true
      },
      {
        "letter": "oo (短)",
        "label": "OO /ʊ/",
        "draggable": true
      }
    ],
    "images": [{
        "letter": "v",
        "word": "Violin"
      },
      {
        "letter": " oo ",
        "word": "Moon",
        "accepts": ["oo (長)"]
      },
      {
        "letter": "oo",
        "word": "Book",
        "accepts": ["oo (短)"]
      }
    ],
    "spellingPractice": {
      "words": [
        "van", "vet", "vase", "vote",
        "moon", "soon", "boot", "food",
        "book", "look", "cook", "foot",
        "good", "wood", "hook", "wool"
      ]
    },
    "nextGroupId": 11
  },
  {
    "id": 11,
    "title": "第 11 組：y, x, ch",
    "description": "學習y, x, ch音素和相關練習",
    "letters": ["y", "x", "ch"],
    "songs": [{
        "letter": "y",
        "label": "Y 歌曲",
        "audio": "audio/y-song.mp3"
      },
      {
        "letter": "x",
        "label": "X 歌曲",
        "audio": "audio/x-song.mp3"
      },
      {
        "letter": "ch",
        "label": "CH 歌曲",
        "audio": "audio/ch-song.mp3"
      }
    ],
    "phonics": [{
        "letter": "y",
        "ipa": "/j/",
        "audio": "audio/y.mp3",
        "color": "blue",
        "hint": "舌頭接近上顎，氣流滑出，像「耶」的起始音"
      },
      {
        "letter": "x",
        "ipa": "/ks/",
        "audio": "audio/x.mp3",
        "color": "blue",
        "hint": "發出/k/與/s/的連續音，像「克斯」"
      },
      {
        "letter": "ch",
        "ipa": "/tʃ/",
        "audio": "audio/ch.mp3",
        "color": "blue",
        "hint": "舌頭接觸上齒齦後快速釋放，像「吃」的音"
      }
    ],
    "cards": [{
        "letter": "y",
        "label": "Y /j/",
        "draggable": true
      },
      {
        "letter": "x",
        "label": "X /ks/",
        "draggable": true
      },
      {
        "letter": "ch",
        "label": "CH /tʃ/",
        "draggable": true
      }
    ],
    "images": [{
        "letter": "y",
        "word": "Yogurt"
      },
      {
        "letter": "x",
        "word": "Box"
      },
      {
        "letter": "ch",
        "word": "Chair"
      }
    ],
    "spellingPractice": {
      "words": [
        "yes", "yet", "yell", "yarn",
        "box", "fox", "mix", "fix",
        "chip", "chop", "chat", "chin",
        "chick", "check", "chess", "much"
      ]
    },
    "nextGroupId": 12
  },
  {
    "id": 12,
    "title": "第 12 組：sh, th, qu",
    "description": "學習sh, th, qu音素和相關練習",
    "letters": ["sh", "th", "qu"],
    "songs": [{
        "letter": "sh",
        "label": "SH 歌曲",
        "audio": "audio/sh-song.mp3"
      },
      {
        "letter": "th",
        "label": "TH 歌曲",
        "audio": "audio/th-song.mp3"
      },
      {
        "letter": "qu",
        "label": "QU 歌曲",
        "audio": "audio/qu-song.mp3"
      }
    ],
    "phonics": [{
        "letter": "sh",
        "ipa": "/ʃ/",
        "audio": "audio/sh.mp3",
        "color": "green",
        "hint": "嘴唇微張，舌頭靠近上齒齦，氣流摩擦發出「噓」音"
      },
      {
        "letter": "th",
        "ipa": "/θ/",
        "audio": "audio/th.mp3",
        "color": "green",
        "hint": "舌尖伸出輕觸上齒，氣流摩擦發出無聲「th」音"
      },
      {
        "letter": "qu",
        "ipa": "/kw/",
        "audio": "audio/qu.mp3",
        "color": "green",
        "hint": "嘴唇圓張，發出/k/與/w/的組合音，像「快」的起始音"
      }
    ],
    "cards": [{
        "letter": "sh",
        "label": "SH /ʃ/",
        "draggable": true
      },
      {
        "letter": "th",
        "label": "TH /θ/",
        "draggable": true
      },
      {
        "letter": "qu",
        "label": "QU /kw/",
        "draggable": true
      }
    ],
    "images": [{
        "letter": "sh",
        "word": "Shark"
      },
      {
        "letter": "th",
        "word": "Thumb"
      },
      {
        "letter": "qu",
        "word": "Queen"
      }
    ],
    "spellingPractice": {
      "words": [
        "ship", "shop", "shut", "shed",
        "thin", "thick", "math", "path",
        "quiz", "quit", "quick", "quack",
        "shark", "thumb", "quiet", "quote"
      ]
    },
    "nextGroupId": 13
  },
  {
    "id": 13,
    "title": "第 13 組：ou, oi, ue",
    "description": "學習ou, oi, ue音素和相關練習",
    "letters": ["ou", "oi", "ue"],
    "songs": [{
        "letter": "ou",
        "label": "OU 歌曲",
        "audio": "audio/ou-song.mp3"
      },
      {
        "letter": "oi",
        "label": "OI 歌曲",
        "audio": "audio/oi-song.mp3"
      },
      {
        "letter": "ue",
        "label": "UE 歌曲",
        "audio": "audio/ue-song.mp3"
      }
    ],
    "phonics": [{
        "letter": "ou",
        "ipa": "/aʊ/",
        "audio": "audio/ou.mp3",
        "color": "purple",
        "hint": "嘴巴張開從「啊」滑向「嗚」，像「out」的開頭"
      },
      {
        "letter": "oi",
        "ipa": "/ɔɪ/",
        "audio": "audio/oi.mp3",
        "color": "purple",
        "hint": "嘴巴圓張從「喔」滑向「咿」，像「oil」的開頭"
      },
      {
        "letter": "ue",
        "ipa": "/juː/",
        "audio": "audio/ue.mp3",
        "color": "purple",
        "hint": "發出「y」加長音「u」，像「cue」的結尾"
      }
    ],
    "cards": [{
        "letter": "ou",
        "label": "OU /aʊ/",
        "draggable": true
      },
      {
        "letter": "oi",
        "label": "OI /ɔɪ/",
        "draggable": true
      },
      {
        "letter": "ue",
        "label": "UE /juː/",
        "draggable": true
      }
    ],
    "images": [{
        "letter": "ou",
        "word": "Mouse"
      },
      {
        "letter": "oi",
        "word": "Coin"
      },
      {
        "letter": "ue",
        "word": "Glue"
      }
    ],
    "spellingPractice": {
      "words": [
        "out", "shout", "loud", "mouth",
        "oil", "coin", "boil", "soil",
        "blue", "glue", "cue", "true",
        "suit", "rescue", "value", "argue"
      ]
    },
    "nextGroupId": 14
  },
  {
    "id": 14,
    "title": "第 14 組：er, ar, ur",
    "description": "學習er, ar, ur音素和相關練習",
    "letters": ["er", "ar", "ur"],
    "songs": [{
        "letter": "er",
        "label": "ER 歌曲",
        "audio": "audio/er-song.mp3"
      },
      {
        "letter": "ar",
        "label": "AR 歌曲",
        "audio": "audio/ar-song.mp3"
      },
      {
        "letter": "ur",
        "label": "UR 歌曲",
        "audio": "audio/ur-song.mp3"
      }
    ],
    "phonics": [{
        "letter": "er",
        "ipa": "/ɜː/",
        "audio": "audio/er.mp3",
        "color": "orange",
        "hint": "舌頭向後抬起，發出「ㄦ」音，像在her中的發音"
      },
      {
        "letter": "ar",
        "ipa": "/ɑːr/",
        "audio": "audio/ar.mp3",
        "color": "orange",
        "hint": "嘴巴張開，舌頭向後拉，像在car中的發音"
      },
      {
        "letter": "ur",
        "ipa": "/ɜː/",
        "audio": "audio/ur.mp3",
        "color": "orange",
        "hint": "與er類似，發出「ㄦ」音，像在fur中的發音"
      }
    ],
    "cards": [{
        "letter": "er",
        "label": "ER /ɜː/",
        "draggable": true
      },
      {
        "letter": "ar",
        "label": "AR /ɑːr/",
        "draggable": true
      },
      {
        "letter": "ur",
        "label": "UR /ɜː/",
        "draggable": true
      }
    ],
    "images": [{
        "letter": "er",
        "word": "Her"
      },
      {
        "letter": "ar",
        "word": "Car"
      },
      {
        "letter": "ur",
        "word": "Fur"
      }
    ],
    "spellingPractice": {
      "words": [
        "her", "term", "fern", "verb",
        "car", "star", "farm", "hard",
        "fur", "hurt", "curl", "burn",
        "surf", "turn", "blur", "purse"
      ]
    },
    "nextGroupId": null
  }


];


let currentGroupId = 1;

// ==== DOM 元素 ====
const groupList = document.getElementById("groupList");
const groupContent = document.getElementById("groupContent");
const startAdventureBtn = document.getElementById("startAdventureBtn");
const groupTitle = document.getElementById("group-title");
const groupDescription = document.getElementById("group-description");
const groupSelector = document.getElementById("group-selector");
const content = document.getElementById("content");

// 放在檔案上方，通常放在「資料」和「DOM 元素」之後、renderGroup 前面：
function getSVGForLetter(letter) {
  switch (letter) {
    case "s":
      return `
       <svg class="phonics-image" xmlns="http://www.w3.org/2000/svg"
                                    viewbox="0 0 213.24 313.23">
                                    <defs />
                                    <path class="cls-3"
                                        d="M111.65 79.77c1.59.82 1.18-.1 2.32 0 12.91 1.2 23.85 3.49 31.95 14.82 3.5 4.89 4.56 9.87 6.48 15.28 1.57 4.43 2.67 9.1 5.09 13.2-.46 1.43-5.62.3-6.95.23-2.84-.15-5.53-.52-8.33-.93-1.19-.17-2.52-.24-3.7-.46l16.21.69c-9.57-6.07-13.01-17.51-21.07-25.24-19.05-18.26-49.66-17.75-64.13 5.79-5.38 8.75-6.48 20.59-15.28 26.86l19.91-5.79c-.56.28-1.59.6-2.32.93-6.05 2.74-12.76 5.42-19.45 5.79 2.26-9.03 1.41-18.31 4.63-27.09 7.37-20.11 26.52-24.11 45.84-22.23l.93.23c-2.03-9.59-5.87-19.8-6.95-29.63-1.21-11.06-1.66-58 18.29-51.63 8.55 2.73 1.15 7.8-.69 11.34-8.5 16.38-10.41 47.36-4.63 64.82.37 1.13.67 2.4 1.85 3.01Z"
                                        style="fill: #a3d357;" />
                                    <path class="cls-7"
                                        d="M100.07 77.45C81.06 58.27 65.86 56.32 40.8 62.63c-8.51-10.34-11.69-26.14-7.64-38.89C48.03 44.71 83.3 40.01 95.44 63.33c2.14 4.1 3.51 9.62 4.63 14.12"
                                        style="fill: #56931d;" />
                                    <path class="cls-1"
                                        d="M100.53 78.38c.8.86 2.12 2.07 2.32 3.24-19.32-1.88-38.47 2.12-45.84 22.23-10.8-.03-20.94-3.78-30.1-9.26C18.56 89.6 7.12 79.91 2.37 71.44c1.19-2.71 7.66 1.66 10.42 2.32 25.99 6.13 49.97-6.24 76.86 1.39 3.43.97 7.93 4.6 10.88 3.24Z"
                                        style="fill: #7cb233;" />
                                    <path class="cls-3"
                                        d="M100.07 77.45c.63.63.43.89.46.93-2.95 1.36-7.45-2.27-10.88-3.24-26.89-7.62-50.87 4.74-76.86-1.39-2.76-.65-9.23-5.02-10.42-2.32-.27-.49-3.3-3.85-2.08-4.63 11.28 2.33 22.72 1.35 33.8-1.39 1.99-.49 5.07-2.36 6.71-2.78 25.06-6.32 40.26-4.36 59.27 14.82"
                                        style="fill: #a3d357;" />
                                    <path class="cls-1"
                                        d="M199.62 40.41c-.69 16.82-9.87 35.51-23.61 45.38-8.68 6.23-19.31 9.51-30.1 8.8-8.1-11.33-19.04-13.62-31.95-14.82-.08-.53.34-.39.46-.46 19.5-11.46 40.33-8.26 59.96-17.13 10.36-4.68 19.02-12.28 25.24-21.76Z"
                                        style="fill: #7cb233;" />
                                    <path class="cls-3"
                                        d="M199.62 40.41c-6.22 9.48-14.88 17.08-25.24 21.76-19.63 8.87-40.47 5.67-59.96 17.13v-.46c10.25-16.57 28.17-21.3 45.38-25 1.44-.31 6.39 0 8.57-.46 12.18-2.61 24.39-8.47 31.02-19.45.4.25.27 5.51.23 6.48"
                                        style="fill: #a3d357;" />
                                    <path class="cls-7"
                                        d="M114.42 78.84v.46c-.12.07-.54-.07-.46.46-1.13-.1-.73.82-2.32 0-.21-8.08 2.27-16.35 6.95-22.92 10.3-14.48 29.87-16.37 37.51-33.57 2.11 5.13-2.83 14.22-6.02 18.75-8.04 11.42-34.31 25.69-37.04 35.19-.29 1.02-.41 2.48 1.39 1.62Z"
                                        style="fill: #56931d;" />
                                    <path class="cls-7"
                                        d="M159.8 53.84c-17.2 3.71-35.13 8.44-45.38 25-1.8.86-1.68-.6-1.39-1.62 2.73-9.5 29-23.77 37.04-35.19 3.19-4.53 8.13-13.62 6.02-18.75.3-.68.33-4.19 1.16-4.17 6.67 10.06 9.9 24.09 2.55 34.73"
                                        style="fill: #56931d;" />
                                    <path class="cls-3"
                                        d="M138.5 121.91c-10.75-2.01-20.89-6.01-28.71-13.89-4.63-4.68-7.74-10.51-9.96-16.67-2.18 15.44-12.2 26.13-25.7 32.87l-19.91 5.79c8.8-6.26 9.9-18.11 15.28-26.86 14.47-23.54 45.08-24.05 64.13-5.79 8.06 7.73 11.5 19.16 21.07 25.24l-16.21-.69Z"
                                        style="fill: #a3d357;" />
                                    <path class="cls-6"
                                        d="M109.79 108.01c-8.45 12.97-26.11 14.45-38.66 21.76l-.69-1.16 1.39-3.47c.73-.33 1.75-.64 2.32-.93 13.49-6.74 23.52-17.43 25.7-32.87 2.22 6.15 5.32 11.99 9.96 16.67Z"
                                        style="fill: #e12d26;" />
                                    <path class="cls-4"
                                        d="M139.89 221.46c1.45 3.01-2.54 9.88-4.63 12.27-1.82 2.08-2.96 3.74-4.17.23-3.18-9.26 5.35-19.64 8.8-12.5m-28.24 29.63c-.24.69-2.82 4.88-3.47 5.09-.98.32-1.96-.51-2.08-.46-1.28-4.25-3.95-16.75 3.94-14.82 3.78.93 2.53 7.52 1.62 10.19Z"
                                        style="fill: #fced64;" />
                                    <path
                                        d="M57.01 103.85c-3.22 8.77-2.37 18.06-4.63 27.09 6.69-.37 13.4-3.05 19.45-5.79l-1.39 3.47.69 1.16c12.55-7.31 30.21-8.8 38.66-21.76 7.82 7.88 17.95 11.88 28.71 13.89 1.18.22 2.51.29 3.7.46 2.98 3.79 8.08 5.38 9.96 10.19l-1.62-9.26c1.33.07 6.48 1.2 6.95-.23-2.42-4.1-3.52-8.76-5.09-13.2 1.78.32 3.63 3.03 4.63 4.4 20.19 27.66 15.36 43.91 2.32 73.16-5.3 11.88-11.86 23.48-19.45 34.03-3.45-7.13-11.98 3.24-8.8 12.5l-19.45 17.13c.91-2.67 2.16-9.26-1.62-10.19-7.89-1.94-5.22 10.57-3.94 14.82-4.23 1.8-7.73 5.03-11.81 6.95-13.01 6.11-25.46 10.37-40.05 6.95-27.73-36.04-65.15-105.7-47.69-151.65 3.64-9.58 11.22-18.77 20.37-23.38 9.16 5.48 19.3 9.23 30.1 9.26"
                                        style="fill:#ed453a" />
                                    <path class="cls-2"
                                        d="M22.05 103.38c.82.38.31 3.19.23 3.94-.79 7.4-2.95 15.49-3.7 23.15-.53 5.32.43 21.8-1.85 25-4.82 6.77-8.3-2.73-8.8-6.95-1.79-15.22 4.12-33.71 14.12-45.15Z"
                                        style="fill: #f5847c;" />
                                    <path class="cls-4"
                                        d="M160.5 138.11c9.29-1.68 6.08 19.53 1.39 20.37-3.7.67-8.13-19.15-1.39-20.37m-106.96 0c8.6-.83 5.01 19.64 1.85 20.37-4.53 1.05-9.62-19.63-1.85-20.37m81.03 27.78c10.76-2.22 2.82 21.55-1.39 20.37-2.21-.62-4.99-19.06 1.39-20.37m-55.57 0c8.04-1.66 7.2 16.25 3.7 20.37-3.28.93-11.64-18.73-3.7-20.37m-54.17-7.41c7.56-1.43 7.34 19.1 4.63 19.91-4.59 1.37-11.96-18.52-4.63-19.91m81.49-19.44c9.71-3.19 6.06 18.79 2.32 19.45-4.17.73-7.33-17.8-2.32-19.45m-62.51 56.95c8.68-2.66 9.62 17.41 6.95 18.06s-14.35-15.79-6.95-18.06M32.24 109.4c.88-.18 2.38-.2 3.01.69 3.27 3.52-2.83 19.13-6.71 17.83-3.23-1.09-1.7-17.4 3.7-18.52m18.52 130.11c7.91-1.84 9.21 14.36 6.48 15.28-3.81 1.28-13.87-13.56-6.48-15.28m26.85-19.91c7.59-2.05 9.64 11.9 6.02 16.21-1.99.49-12.87-14.36-6.02-16.21m28.71-25.46c8.79-1.91 4.64 15 1.85 15.28s-7.41-14.07-1.85-15.28"
                                        style="fill: #fced64;" />
                                    <path class="cls-2"
                                        d="M13.25 172.84c4.98-2.09 11.16 11.37 5.09 12.5s-7.77-11.37-5.09-12.5"
                                        style="fill: #f5847c;" />
                                    <path class="cls-6"
                                        d="m150.54 123.29 1.62 9.26c-1.88-4.81-6.97-6.39-9.96-10.19 2.8.41 5.5.78 8.33.93Z"
                                        style="fill: #e12d26;" />
                                    <path class="cls-6"
                                        d="M54.23 269.61c14.59 3.43 27.05-.84 40.05-6.95 4.08-1.91 7.58-5.14 11.81-6.95.12-.05 1.11.78 2.08.46.65-.21 3.24-4.4 3.47-5.09l19.45-17.13c1.21 3.51 2.35 1.85 4.17-.23 2.09-2.39 6.08-9.27 4.63-12.27 7.59-10.55 14.15-22.15 19.45-34.03 13.04-29.25 17.87-45.5-2.32-73.16-1-1.37-2.85-4.08-4.63-4.4-1.92-5.41-2.98-10.39-6.48-15.28 10.78.71 21.42-2.57 30.1-8.8 59.78 22.02 34.34 100.31 14.35 142.84-11.65 24.8-49.58 87.34-81.26 84.5-19.41-1.74-43.6-28.88-54.87-43.52Z"
                                        style="fill: #e12d26;" />
                                    <path class="cls-4"
                                        d="M189.67 158.48c8.78-1.61 4.2 18.77-2.78 19.91-2.45-.63-2.79-18.89 2.78-19.91m-20.38 37.51c8.88-1.95 4.16 9.86 1.16 13.66-10.44 13.22-6.83-12.41-1.16-13.66m12.97-87.05c5.64-.66 9.6 15.91 4.63 18.98-4.06.61-10.93-18.24-4.63-18.98m-19.91 130.57c11.14-2.49 1.66 16.2-3.24 15.28-3.58-.67-1.34-14.25 3.24-15.28m-31.95 30.56c7.81-1.78 4.9 7.76 2.08 11.34-8.87 11.29-7.89-10.02-2.08-11.34m-47.69 0c7.67-1.73 8.9 14.31 5.09 14.82-3.06.41-11.9-13.28-5.09-14.82m24.07 15.28c7.16-1.48 5.36 11.37 1.85 14.35-3.41.79-7.15-13.26-1.85-14.35"
                                        style="fill: #fced64;" />
                                </svg>`;
    case "a":
      return `
        <svg class="phonics-image" xmlns="http://www.w3.org/2000/svg"
                                    viewbox="0 0 240.08 290.36">
                                    <defs />
                                    <path class="cls-2"
                                        d="M24.67 244.32c11.71 6.43 23.99 13.17 37.18 16.16 43.68 9.91 97.23-9.79 117.54-51.03 19.63-39.87 18.95-125.27-43.41-121.7 136.61-20.11 126.33 142.96 40.87 194.44-29.76 17.93-35.98 0-63.27 2.77-5.44.55-11.09 3.59-16.16 4.62-29.32 5.94-57.66-23.23-72.74-45.26Z"
                                        style="fill: #dc321e;" />
                                    <path
                                        d="M120.73 72.05c.21 1.32.28 2.79.46 4.16.56 4.17 1.58 9.35 1.85 13.39.43 6.66.05 14.11-.46 20.78-1.67.08-3.28.52-5.08.46.93-7.04-.07-13.82-.92-20.78-1.81-14.66-5.29-31.77-18.94-39.95 3.73-4.48 5.29-15.89 13.62-12.7 2.64 1.01 8.8 30.37 9.47 34.64"
                                        style="fill:#562b12" />
                                    <path
                                        d="M212.64 1.85c.01-.09 1.28-1.27 0-1.85-10.1.56-20.11 1.71-30.02 3.69-.15.03-.31-.03-.46 0-5.11 1.05-9.86 2.46-14.78 4.16-.66.23-.88.44-.92.46-2.58.93-12.22 3.89-13.39 6h-.46c-5.18 2.79-9 6.36-12.93 10.62-.29.31-.6.55-.92.92-9.2 10.61-15.3 25-12.01 39.26-2.12 2.19-3.6 4.99-6 6.93.21 1.32.28 2.79.46 4.16 1.91-2.51 4.37-4.62 6.47-6.93 12.48 7 30.75 5.58 42.95-1.39.39-.22.9-.37.92-.92 4.58-.64 10.39-7.41 13.39-10.62.14-.14.3-.28.46-.46 3.74-4.11 5.36-6.46 8.31-11.08.04-.06.53-.28.92-.92 2.41-3.91 3.7-7.82 5.54-11.55 2.18-4.41 4.55-8.56 6.47-13.39.05-.13-.05-.33 0-.46 1.87-4.76 5.33-11.7 6-16.63"
                                        style="fill:#7cb233" />
                                    <path class="cls-2"
                                        d="M117.5 110.84c1.8.06 3.41-.38 5.08-.46 7.48-.37 15.38-1 21.94-5.54-13.02 18.37-44.41 14.93-56.35-3.23 9.39 5.98 18.12 8.88 29.33 9.24Z"
                                        style="fill: #dc321e;" />
                                    <path
                                        d="M116.57 90.06c.86 6.96 1.85 13.74.92 20.78-11.21-.36-19.93-3.26-29.33-9.24 11.93 18.16 43.33 21.61 56.35 3.23-6.55 4.54-14.46 5.18-21.94 5.54.51-6.67.89-14.12.46-20.78 4.3-.68 8.63-1.21 12.93-1.85 62.36-3.57 63.05 81.83 43.41 121.7-20.31 41.24-73.86 60.94-117.54 51.03-13.19-2.99-25.46-9.73-37.18-16.16C-13.6 188.41-13.58 94.34 69.7 85.44c17.01-1.82 30.49 2.83 46.88 4.62Z"
                                        style="fill:#ec5442" />
                                    <path
                                        d="M42.91 112.23c30.35-3.51 5.65 49.02-17.55 40.18-16.87-6.43 1.38-38.31 17.55-40.18m-24.94 50.8c8.35-1.93 9.31 10.68 2.31 12.01-9.19 1.75-7.79-10.74-2.31-12.01"
                                        style="fill:#feb7ab" />
                                </svg>`;
    case "t":
      return `
        <svg class="phonics-image" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 250.91 295.24"><defs><style>.cls-3{fill:#f0781a}.cls-4{fill:#f7d5a3}.cls-5{fill:#633a29}.cls-6{fill:#f9ad1e}.cls-7{fill:#764024}.cls-9{fill:#e3b884}.cls-10{fill:#a54c1f}.cls-11{fill:#703020}.cls-12{fill:#853215}.cls-14{fill:#4e2c2e}.cls-15{fill:#591e16}.cls-17{fill:#e88a18}.cls-18{fill:#fee8cb}</style></defs><path class="cls-10" d="M74.78 35.36c.64 1.76 6.94 2.12 6.47 4.39-.55 2.64-10.02-.52-10.85-.23-.98.34-1.02 2.78 0 3.23.66.29 5.24.19 6.47.46 2.39.54 16.69 3.35 15.01 7.16-3.01 3.14-20.26-4.34-21.48-3.46-.25.78-.44 4.51-.23 4.85.37.61 11.26 1.62 14.09 2.54 1.17.38 15.75 6.8 12.47 8.78-5.12.87-9.25-2.73-13.62-4.16-4.05-1.33-7.94-2.74-12.24-3.23-.35 14.76-5.66 14.44-6.93.46-4.78-.75-8.89 1.86-13.16 3.23-1.74.56-12.56 5.91-13.39 3-.59-2.06 15.39-9.37 17.78-9.93 1.44-.34 8.74-.32 9.01-.69.16-.22.26-4.52-.69-4.85-1.94-.66-17.37 6.72-21.01 3.46-1.97-4.66 17.96-7.8 21.01-7.62 3.37-5.36-7.25-.95-9.93-2.54-1.18-1.41 5.6-4.14 6.47-4.39 1.26-.36 2.08-.3 3.23-.46 4.07-.58 7.51-.46 11.55 0Z"/><path class="cls-4" d="M92.33 150.82c-3.4 19.02-13.6 31.01-18.47 48.72-1.38 5.03-2.19 10.36-3.23 15.47-1.09-.44-4.32-.76-5.77-1.39-9.29-4.03-18.51-9.37-23.32-18.7l-.92 1.62c-.35-.73-1.03-2.11-1.39-2.77l-2.31-36.49c.44-1.84.8-2.55 1.39-4.16 2.41 3.7 15.33 3.37 16.86 4.62 1.02.83.13 3.53 2.31 4.62 6.42 3.22 28.78-7.4 34.87-11.55Z"/><path class="cls-9" d="M93.25 141.58c-.37 2.91-.43 5.89-.92 8.78-.03.15.03.31 0 .46-6.09 4.15-28.45 14.77-34.87 11.55-2.18-1.09-1.29-3.79-2.31-4.62-1.53-1.25-14.45-.92-16.86-4.62 1.45-4.04 3.23-7.77 6-11.08 15.84 3.61 33.16 2.98 48.96-.46Z"/><path class="cls-4" d="M99.26 121.26c.21.05.86.4.92.46 5.48 5.34 9.6 7.45 17.55 7.85-3.63 3.11-7.65 5.17-11.55 7.85-1.49-.54-1.66.43-1.85.46-3.61.67-7.7 2.96-11.08 3.69-15.8 3.45-33.11 4.07-48.96.46-9.24-2.1-18.99-6.5-26.33-12.47 7.32-.91 11.67-2.34 16.63-7.85.3-.34 1.22-.4.92-1.39 1.06 27.09 61.29 27.86 63.73.92Z"/><path class="cls-10" d="M4.58 91.7c1.27-3.41 3.07-5.57 4.16-8.31l30.48 19.17c-11.92.42-25.06-3.67-34.64-10.85Zm1.84 19.4c-6.58-2.7-5.57-4.31-4.62-11.08 3.31-.89 31.21 10.58 30.94 12.24-6.99 2.91-19.33 1.71-26.33-1.15Zm28.18 10.62c-4.96 5.51-9.31 6.94-16.63 7.85-3.78-3.08-6.39-5.36-8.78-9.7 8.04-.39 18.05-1.94 25.4 1.85Z"/><path class="cls-6" d="M39.22 193.77c-.19-.35-.76-1.13-1.39-.92-2.3-13.9-4.43-20.89-.92-35.56l2.31 36.49Z"/><path class="cls-10" d="M216.56 211.32c-.07 3.44-.64 7.16-.92 10.62-3.39.59-19.44 7.27-21.48 6.47-.38-.15-.7-.69-.69-1.15.02-1.4 21.01-12.82 23.09-15.93Zm-.46-12.93c-4.51 3.23-8.39 9.31-12.7 12.47-.41.3-4.27 3.16-4.39 1.62 6.85-7.99 11.06-16.59 14.32-26.56 1.45 4.19 2.3 8.05 2.77 12.47m-98.37-53.11c-1.8 4.5-4.26 8.69-6.93 12.7-3.45 5.18-22.97 30.38-29.33 28.4-.93-.48-.5-1.86-.23-2.54.42-1.06 8.91-8.05 10.62-10.16 7.39-9.12 12.35-22.69 18.01-33.02 2.69 1.64 4.88 3.31 7.85 4.62Zm25.86 7.39c6.4 18.64-.79 41.07-8.08 58.65 3.43-20.22 4.75-41.11-1.15-60.96 2.8.7 6.59 1.8 9.24 2.31Zm15.24 1.84c3.48 7.93 3.03 16.23 2.31 24.71-.23 2.7-4.45 31.83-8.54 30.25-1.53-5.2 1.58-11.41 2.08-16.86 1.13-12.36-.15-27.6-5.08-39.03 2.93.53 6.36.4 9.24.92Zm-32.79-71.12c1.23 2.88 2.75 4.62 4.16 8.31-9.14 7.52-22.89 11.24-34.64 10.85l30.48-19.17Zm48.5 73.43c1.94 14.67 2.93 34.28-6.23 46.65-2.12-.1 1.07-5.32 1.15-5.77 2.37-12.18-.31-30.82-5.08-42.26 3.3.58 6.82.71 10.16 1.39Zm-45.73-8.31c-2.22 13.11-9.44 28.43-18.01 38.56-1.21 1.43-3.01 3.71-4.85 3.93-1.46-.92 3.48-6.28 3.93-7.16 5.48-10.88 8.62-25.27 11.08-37.18 2.34.85 5.44 1.14 7.85 1.85m4.16-48.49c.77 5.44 1.8 9.18-4.16 11.55-2.82 1.12-26.38 4.25-26.33.69 9.32-5.71 19.81-9.85 30.48-12.24Zm-6.93 19.85c-2.11 3.81-5.04 6.89-8.31 9.7-7.95-.4-12.07-2.51-17.55-7.85 7.99-3.61 17.36-2.34 25.86-1.85"/><path class="cls-17" d="M211.95 38.59c-1.39 3.22-2.56 8.02-2.77 11.55l-18.01 1.85c.08-8.92 1.13-11.9 4.62-19.86 5.9.82 11.54 2.57 16.16 6.47Z"/><path class="cls-6" d="M218.87 83.39c-5.48 2.48-11.26 7.21-13.39 12.93-.89-1.94-2.79-3.99-3.69-6-1.67-3.69-3.14-7.31-4.62-11.08l14.78-11.55c1.64 5.22 4.63 10.7 6.93 15.7Zm3.7 6.93c.84 3.84 1.52 9.61 4.16 12.47-3.43 4.7-7.82 9.07-13.86 10.16-1.16-3.88-3.8-9.12-5.54-12.93l13.86-12.01c.27.59 1.01 1.49 1.39 2.31Zm-12.93-31.87c.25 1.8 1.31 5.47 1.85 7.39-6.02 1.87-11.3 5.24-15.7 9.7-2.37-6.86-4.1-10.94-4.62-18.47 1.92-.28 3.73-1.2 5.54-1.85z"/><path class="cls-17" d="M224.42 22.43c-2.72 2.4-8.33 8.93-10.16 12.01-3.65-4.97-7.8-9.22-13.86-11.08 2.36-3.56 4.82-6.26 7.85-9.24l16.16 8.31Zm2.77-20.33c4.85 2.5 8.97 8.28 7.39 13.86-2.85 1.28-6.84 3.57-9.24 5.54-2.73-4.71-6.99-9.74-12.01-12.01 4.77-3.6 8.06-5.58 13.86-7.39m12 12.01c.27-5.12 1.26-9.45-2.31-13.86 4.76-.34 12.69-1.33 13.86 5.31 1.42 8.12-6.36 6.63-11.55 8.54Z"/><path class="cls-12" d="M214.26 34.43c-.71 1.19-1.78 2.93-2.31 4.16-4.63-3.9-10.27-5.65-16.16-6.47 1.39-3.17 2.7-5.88 4.62-8.78 6.05 1.86 10.21 6.11 13.86 11.08Zm4.61 48.96c.71 1.56 1.6 3.06 2.31 4.62l-13.86 12.01c-.58-1.26-1.27-2.43-1.85-3.69 2.13-5.72 7.91-10.45 13.39-12.93ZM236.89.26c3.57 4.4 2.58 8.73 2.31 13.86-1.64.61-3.02 1.13-4.62 1.85 1.58-5.58-2.54-11.36-7.39-13.86 3.94-1.23 5.5-1.55 9.7-1.85M225.34 21.5c-.17.14-.54.59-.92.92l-16.16-8.31c1.87-1.84 2.9-2.98 5.08-4.62 5.02 2.27 9.27 7.3 12.01 12.01Zm-13.86 44.34c.17.61.31 1.35.46 1.85l-14.78 11.55c-.5-1.28-.93-2.38-1.39-3.69 4.41-4.46 9.68-7.83 15.7-9.7Zm-2.31-15.7c-.05.76 0 1.55 0 2.31-4.41-.54-8.4 1.31-12.47 2.77-1.81.65-3.62 1.56-5.54 1.85-.11-1.66-.02-3.42 0-5.08z"/><path class="cls-17" d="M209.17 52.45c.02 2.02.18 4.02.46 6l-12.93-3.23c4.07-1.46 8.06-3.31 12.47-2.77"/><path class="cls-12" d="M216.1 162.83c.34.59.6 1.24.92 1.85-2.91 3.55-5.65 7.22-9.24 10.16-.03-.04-.73-.01-.46-.92 7.32-4.07-1.51-8.08-4.62-11.55 1.98-2.35 3.99-5.19 5.54-7.85 3.71 1.22 6.03 5.2 7.85 8.31Zm14.78-54.04c-1.14.62-2.23 2.06-3.23 2.77-4 2.81-8.93 4.93-13.39 6.93-.36-1.8-.86-3.79-1.39-5.54 6.03-1.09 10.43-5.47 13.86-10.16.15-.21 1.1-.89 1.39-1.39 1.16 2.72 1.86 4.56 2.77 7.39Z"/><path class="cls-17" d="M234.11 129.57c-2 .06-3.87.67-6 .92l-.46-18.94c1.01-.71 2.1-2.15 3.23-2.77 2.57 8.02 3.84 11.98 3.23 20.78Zm-.46 3.24c-.85 6.08-2.87 10.35-5.54 15.7-1.45.21-3.18.16-4.62 0l3.69-14.78c2.18-.27 4.24-1.03 6.47-.92"/><path class="cls-12" d="M223.49 148.51c1.44.16 3.17.21 4.62 0-.78 1.57-1.58 2.44-2.31 3.69-1.21-.08-2.49.12-3.69 0-3.1-.3-7.87-1.64-10.62-3.23.24-.55.63-1.96.92-2.77 3.69.67 7.35 1.89 11.08 2.31m10.62-18.94c-.06.85-.33 2.26-.46 3.23-2.23-.1-4.28.66-6.47.92-4 .49-8.02.33-12.01.92.13-1.26.44-2.33.46-3.69 4.21.13 8.28.03 12.47-.46 2.13-.25 4-.87 6-.92Z"/><path class="cls-17" d="M225.8 152.2c-2.74 4.71-5.34 8.27-8.78 12.47-.32-.6-.58-1.26-.92-1.85l6-10.62c1.21.12 2.48-.08 3.69 0Z"/><path class="cls-6" d="m227.65 111.56.46 18.94c-4.19.49-8.26.59-12.47.46.05-3.52-.68-8.97-1.39-12.47 4.47-1.99 9.39-4.12 13.39-6.93Zm-.46 22.17-3.69 14.78c-3.73-.42-7.4-1.64-11.08-2.31 1.35-3.68 2.35-7.63 2.77-11.55 3.98-.59 8.01-.43 12.01-.92Zm-5.08 18.47-6 10.62c-1.82-3.11-4.14-7.09-7.85-8.31.76-1.3 2.77-4.46 3.23-5.54 2.75 1.59 7.52 2.94 10.62 3.23"/><path class="cls-17" d="m207.33 173.91-.69.46-7.62-7.85c.42-.25 3.11-3.47 3.69-4.16 3.11 3.46 11.93 7.47 4.62 11.55"/><path class="cls-10" d="M198.09 166.52c-.12 1.87 1.58 13.97-.69 13.86l-5.77-18.01c2.27 1.24 4.48 2.48 6.47 4.16Z"/><path class="cls-17" d="M83.09 58.91c-1.23 14.3-3.48 28.44-1.39 42.95-1.05-.26-2.16-.35-3.23-.46-6.8-.69-8.02 1.78-10.85 1.85-4.5.11-3.74-3.5-13.16-1.39-.68.15-1.19.27-1.85.46.48-8.51 2.42-17 1.85-25.63-.4-5.95-2.79-11.49-3.69-17.32 4.28-1.38 8.38-3.99 13.16-3.23 1.27 13.97 6.57 14.3 6.93-.46 4.29.49 8.19 1.91 12.24 3.23Z"/><path class="cls-6" d="M60 35.82c-.87.24-7.64 2.98-6.47 4.39 2.68 1.59 13.3-2.82 9.93 2.54-3.05-.18-22.98 2.96-21.01 7.62 3.64 3.26 19.08-4.13 21.01-3.46.95.33.85 4.63.69 4.85-.26.37-7.56.36-9.01.69-2.39.56-18.37 7.87-17.78 9.93.83 2.91 11.65-2.44 13.39-3 .91 5.83 3.3 11.37 3.69 17.32.58 8.63-1.37 17.12-1.85 25.63-8.5 2.5-17.49 7.83-17.09 18.01.3.99-.62 1.05-.92 1.39-7.35-3.79-17.36-2.23-25.4-1.85-1.55-2.81-3.51-5.28-2.77-8.78 6.99 2.87 19.34 4.06 26.33 1.15C33 110.6 5.11 99.12 1.8 100.01c.43-3.07 1.73-5.51 2.77-8.31 9.58 7.18 22.72 11.27 34.64 10.85L8.73 83.38c2.89-7.3 3.89-15.62 9.7-21.94-.06-.37-4.29-2.45-5.08-3-11.76-8.2-19.86-18.89-6.23-30.93 15.62-13.8 30.05-2.52 30.94 15.7 6.64-3.47 14.26-7.24 21.94-7.39"/><path class="cls-18" d="M19.13 33.05c1.97-.38 5.53-.08 7.39.92 2.85 1.54 6.27 10.27 5.31 13.16-.2.59-8.39 8.45-9.01 8.54C19.56 56.15 11 48 10.58 44.35c-.51-4.43 4.2-10.48 8.54-11.32Z"/><path class="cls-5" d="M42.68 79.69c11.06-2.19 10.93 18.16 2.31 18.94-9.14.82-10.08-17.39-2.31-18.94"/><path class="cls-10" d="M40.37 66.3c7.8-1.27 12.52 4.81 3.23 6.93-11.2 2.55-10.43-5.76-3.23-6.93"/><path class="cls-6" d="M132.97 35.82c4.13 13.34-7.81 20.23-17.55 26.09 5.88 6.26 7.46 14.1 10.62 21.48l-30.48 19.17c11.75.38 25.5-3.34 34.64-10.85 1.07 2.8 2.34 5.27 2.77 8.31-10.67 2.39-21.16 6.53-30.48 12.24-.05 3.55 23.5.43 26.33-.69.21 3.16-1.32 5.69-2.77 8.31-8.5-.49-17.88-1.76-25.86 1.85-.07-.06-.71-.41-.92-.46.93-10.19-8.65-17.17-17.55-19.4-2.09-14.51.15-28.65 1.39-42.95 4.37 1.43 8.51 5.02 13.62 4.16 3.28-1.98-11.3-8.39-12.47-8.78-2.82-.92-13.72-1.93-14.09-2.54-.21-.34-.02-4.07.23-4.85 1.22-.88 18.47 6.61 21.48 3.46 1.68-3.81-12.62-6.62-15.01-7.16-1.22-.27-5.81-.17-6.47-.46-1.02-.45-.98-2.9 0-3.23.83-.29 10.31 2.87 10.85.23.47-2.27-5.83-2.63-6.47-4.39 7.58.87 14.49 3.54 21.01 7.39 1.02-3.88 1.68-7.91 3.46-11.55 8.14-16.58 29.56-8.8 33.71 4.62Z"/><path class="cls-18" d="M109.65 33.05c8.47-1.86 17.49 6.99 12.24 15.47-1 1.62-8.85 7.66-10.39 7.62-.62-.01-8.82-7.95-9.01-8.54-1.23-3.82 2.95-13.62 7.16-14.55"/><path class="cls-5" d="M88.4 79.69c10.64-2.55 11.44 17.57 2.77 18.94-9.17 1.45-10.58-17.06-2.77-18.94"/><path class="cls-10" d="M89.33 66.3c2.56-.43 9.45.75 9.93 3.93.95 6.26-14.71 2.88-13.86-1.39.86-1.05 2.63-2.32 3.93-2.54"/><path class="cls-9" d="M70.62 215.01c.06.02-.18.76.23.92 1.66.67 8.27 1.81 9.01 3 .8 1.31.57 10.08.92 12.24-2.99-.39-5.78-1.29-8.78-1.39-.31-1.03-11.71-6.32-13.86-7.85-10-7.15-12.55-15.02-17.55-25.4l.92-1.62c4.82 9.34 14.03 14.68 23.32 18.7 1.45.63 4.68.95 5.77 1.39Z"/><path class="cls-3" d="M39.22 193.77c.36.66 1.04 2.04 1.39 2.77 5 10.38 7.55 18.25 17.55 25.4-.92 4.02 12.62 11.38 12.93 12.24s-.38 3.73-1.39 4.39c-3.37 1.12-6.76 3.2-10.16 4.39l11.55.69c-.28 5.56-.95 11.09-1.39 16.63l-13.39 5.77c-.69 4.21 11.89-2.48 13.39-2.08-.12 1.41-.33 2.77-.46 4.16-.25 2.72-.15 5.58-.46 8.31-.38 3.32-.57 7.47-1.39 10.62-2.25-4.89-11.26-7.02-16.16-6.93v-.92c0-2.55-1.04-6.14-1.39-8.78-.66-5.06-1.21-10.18-1.85-15.24l12.93-4.39c0-1.71-12.01 1.07-13.39.23-.56-4.33-.75-9.18-1.39-13.39 4.52.5 9.69.71 13.86-1.62l-14.78-3.46c-2.08-13.28-5.19-26.44-7.39-39.72.62-.21 1.2.57 1.39.92Z"/><path class="cls-10" d="M46.14 237.65c-.25-1.66-.66-3.42-.92-5.08L60 236.03c-4.17 2.32-9.34 2.11-13.86 1.62m1.85 17.55c-.17-1.38-.28-2.77-.46-4.16 1.38.84 13.39-1.94 13.39-.23z"/><path d="M72.01 229.79c-.07 2.94-.34 5.84-.46 8.78-.56.09-1.41-.15-1.85 0 1-.66 1.7-3.52 1.39-4.39s-13.85-8.22-12.93-12.24c2.15 1.54 13.55 6.82 13.86 7.85Z" style="fill:#e06518"/><path class="cls-10" d="M69.7 260.28c-.1 1.21.11 2.48 0 3.69-1.5-.4-14.08 6.29-13.39 2.08z"/><path d="M71.54 238.57c-.07 1.62-.38 3.38-.46 5.08l-11.55-.69c3.4-1.19 6.79-3.27 10.16-4.39.44-.15 1.29.09 1.85 0" style="fill:#b9541b"/><path class="cls-17" d="M104.34 137.89c-2.98 4.76-6.64 10.12-12.01 12.47.49-2.89.55-5.87.92-8.78 3.38-.74 7.47-3.03 11.08-3.69Z"/><path class="cls-3" d="M173.61 233.03c-4.69.97-10.85 3.67-15.24 5.77 2.84.75 6.02-.75 9.01-.69s4.56 1.86 8.08.92c1.32 2.88 3.14 5.52 4.62 8.31-4.21 4.52-7.74 6.04-13.86 6.7-.92 2.55 10.15 3.41 12.01 1.62-1.41 4.47-3.15 8.67-5.08 12.93-.93 2.04-1.68 4.54-2.77 6.47-1.05 1.85-2.74 4.34-4.62 5.54-.05-7.08-7.85-10.69-14.32-10.16.76-1.27.44-2.77.46-4.16.06-4.73.71-10.28.46-14.78.92-.6 11.89-3.24 10.16-5.31-3.45-.31-6.93-.45-10.39-.69-.37-.03-.18.93-.23.92-6.5-.48-10.18-4.95-9.24-11.55 9.78-.34 20.12-1.46 29.1-5.54.14.67 1.28 3.05 1.85 3.69Z"/><path class="cls-10" d="M175.46 239.03c-3.52.94-5.09-.87-8.08-.92s-6.17 1.44-9.01.69c4.39-2.11 10.55-4.81 15.24-5.77 2.19-.45 13.16-1.99 13.39 1.62.12 1.88-4.69.98-6.7 1.62-1.24.4-3.91 2.52-4.85 2.77Z"/><path class="cls-4" d="M171.77 223.33c.02 1.87-.38 4.13 0 6-8.98 4.08-19.31 5.2-29.1 5.54-7.09.25-14.6-.51-21.71-.92-1.15-3.72-2.91-7.24-3.69-11.08 17.98.51 36.26 3.49 54.04-.92-.08 1.38.46 1.31.46 1.39Z"/><path class="cls-9" d="M113.11 222.4c1.41-.42 3.02.43 4.16.46.79 3.85 2.55 7.37 3.69 11.08-3.71-.22-7.43-.11-11.08-.92.43-2.23.45-9.8 3.23-10.62"/><path class="cls-10" d="M180.54 248.27c-1.26 2.29-1.54 4.95-2.31 7.39-1.86 1.79-12.93.94-12.01-1.62 6.11-.66 9.65-2.17 13.86-6.7.14.27.32.64.46.92Z"/><path class="cls-6" d="M106.18 137.42c.46.16 2.83 2.7 3.69 3.23-5.66 10.33-10.62 23.9-18.01 33.02-1.71 2.11-10.21 9.1-10.62 10.16-.27.68-.7 2.06.23 2.54 6.35 1.98 25.88-23.22 29.33-28.4 2.67-4.01 5.13-8.21 6.93-12.7 1.01.44 2.22 1.02 3.23 1.39-2.46 11.9-5.61 26.3-11.08 37.18-.44.88-5.38 6.24-3.93 7.16 1.84-.22 3.64-2.5 4.85-3.93 8.57-10.13 15.8-25.46 18.01-38.56 1.71.5 3.98 1.46 5.54 1.85 5.91 19.85 4.58 40.74 1.15 60.96 7.29-17.58 14.49-40.01 8.08-58.65 1.89.37 4.03.57 6 .92 4.93 11.43 6.21 26.67 5.08 39.03-.5 5.45-3.61 11.66-2.08 16.86 4.1 1.58 8.31-27.55 8.54-30.25.72-8.48 1.17-16.77-2.31-24.71 1.81.33 3.71.6 5.54.92 4.77 11.44 7.45 30.07 5.08 42.26-.09.45-3.27 5.67-1.15 5.77 9.17-12.36 8.17-31.97 6.23-46.65 1.38.28 2.79.59 4.16.92 5.05 7.5 6.31 16.06 7.16 24.94l-.23-23.09c2.25.79 3.93 1.63 6 2.77l5.77 18.01c2.27.12.57-11.98.69-13.86.29-.04.79.08.92 0l7.62 7.85.69-.46c-.26.91.44.88.46.92 2.32 3.88 4.03 6.72 5.54 11.08-3.26 9.97-7.47 18.56-14.32 26.56.12 1.54 3.98-1.32 4.39-1.62 4.31-3.16 8.19-9.24 12.7-12.47.46 4.36.54 8.55.46 12.93-2.08 3.12-23.07 14.53-23.09 15.93 0 .47.31 1 .69 1.15 2.04.81 18.09-5.88 21.48-6.47-.35 4.18-.94 8.3-1.39 12.47l-22.17 11.78 20.78-2.54c-.47 3.55-.36 7.32-.92 11.08-2.86 4.44-5.72 5.1-10.62 6.23-.42 1.6 7.66 2.63 8.78 3-.85 3.09-2.05 5.83-3.23 8.78-1.03 2.58-2.48 5.8-3.69 8.31-.89 1.85-2.19 3.76-3.23 5.54-1.8-4.38-9.66-9.16-14.32-9.24.42-2.3-.37-4.71-.46-6.93-.11-2.73.44-8.14 0-10.62.84-1.3 12.51-5.51 11.55-6.7-4.42-.87-8.69 1.1-12.93 2.08-.71-2.43-2.12-4.67-3.23-6.93-.14-.28-.32-.65-.46-.92-1.48-2.8-3.29-5.43-4.62-8.31.94-.25 3.61-2.38 4.85-2.77 2.01-.64 6.82.26 6.7-1.62-.23-3.61-11.2-2.07-13.39-1.62-.57-.65-1.71-3.03-1.85-3.69-.38-1.88.02-4.13 0-6 7.53-2.56 14.16-7.8 19.4-13.62-6.31 2.89-11.86 7.36-19.17 7.62-1.17.79-.62 3.36-.69 4.62-17.78 4.42-36.06 1.44-54.04.92-.71-3.48-.28-7.96-1.15-11.55-1.2 2.21-2.95 6.19-3.46 8.54-.22 1-.54 1.89.46 2.54-2.78.82-2.81 8.39-3.23 10.62-.15.77-.32 1.5-.46 2.31l-14.32 3.93c3.54 3.26 9.07.78 13.39 1.62-.72 4.73-1.17 9.57-1.85 14.32-14.76 2.73-20.85 10.69-.46 3.23-.33 2.29-.6 4.63-.92 6.93-.34 2.45-.56 4.93-.92 7.39-.79 5.38-1.25 10.82-2.31 16.16-3.69-3.07-11.88-6.65-16.63-6.47.03-2.47-.25-4.94-.46-7.39-.23-2.75-.68-5.57-.92-8.31-.41-4.59-.51-9.28-.92-13.86 2.11-2.65 14.73-2.86 15.24-3.46 2.61-3.09-13.95-.81-15.24-.69-.37-4.15-1.71-9.13-1.85-13.86l14.78-1.15c.33-1.76-13.94-1.97-14.78-2.08-.03 0 .16-.38-.46-.46-.35-2.16-.12-10.93-.92-12.24-.73-1.19-7.34-2.33-9.01-3-.42-.17-.17-.9-.23-.92 1.04-5.11 1.85-10.45 3.23-15.47 4.88-17.71 15.07-29.71 18.47-48.72.03-.15-.03-.31 0-.46 5.37-2.35 9.02-7.71 12.01-12.47.18-.03.36-1 1.85-.46Z"/><path class="cls-10" d="M214.26 234.41c-.31 2.9-.98 6.23-1.39 9.24l-20.78 2.54zm-4.16 29.56c-1.11-.37-9.2-1.4-8.78-3 4.9-1.13 7.76-1.79 10.62-6.23-.51 3.41-.93 5.89-1.85 9.24Zm-24.48-104.38.23 23.09c-.85-8.88-2.11-17.44-7.16-24.94 2.29.56 4.7 1.07 6.93 1.85M80.09 213.63c1.23-.88 20.41 3.48 22.4 6.23-.38 2.57-21.93-.51-22.63-1.85-.16-.3-.06-4.18.23-4.39Zm91.68 9.7c0-.07-.54 0-.46-1.39.07-1.26-.48-3.83.69-4.62 7.31-.26 12.86-4.73 19.17-7.62-5.24 5.83-11.87 11.06-19.4 13.62Zm-62.35 12.01c-.32 1.85-.64 3.68-.92 5.54-4.32-.83-9.86 1.64-13.39-1.62l14.32-3.93Zm75.74 24.47c-.15-.84-1.06-3.49-1.39-4.62 4.24-.98 8.51-2.95 12.93-2.08.97 1.19-10.7 5.4-11.55 6.7Zm-78.51-4.61c-.15 1.08-.31 2.16-.46 3.23-20.38 7.46-14.3-.5.46-3.23m-23.56-2.31c-.14-1.51.07-3.34 0-4.16 1.29-.11 17.85-2.4 15.24.69-.51.6-13.13.82-15.24 3.46Z"/><path class="cls-17" d="M117.27 222.87c-1.14-.03-2.74-.88-4.16-.46-1-.65-.68-1.54-.46-2.54.52-2.36 2.26-6.34 3.46-8.54.87 3.58.44 8.07 1.15 11.55Z"/><path class="cls-10" d="M81.24 234.87c-.03-1.07.02-2.16 0-3.23.83.11 15.11.32 14.78 2.08z"/><path class="cls-4" d="M165.76 280.6c.06 8.15-8.75 4.79-13.86 4.16l-.23-6.47c-1.38 1.65-1.58 4.48-.69 6.47-2.83-.42-3.29-.52-6-1.39l.23-6.47c-2.07 1.74-1.69 4.12-1.15 6.47-7.15-2.56-6.6-4.99-.46-9.24 1.61-1.11 6.18-3.56 7.85-3.69 6.47-.53 14.26 3.08 14.32 10.16Z"/><path class="cls-7" d="M151.91 284.75c-.3-.04-.63.04-.92 0-.89-1.99-.69-4.82.69-6.47zm-6.93-1.38c-.24-.08-.7.08-.92 0-.54-2.34-.92-4.72 1.15-6.47z"/><path class="cls-4" d="M67.39 287.06c-.14.53-.37 2.85-.46 3-1.74 2.91-13.31 2.18-16.63 2.08l.69-5.08c-1.87-1.58-1.66 3.7-1.62 5.08-2.29-.12-4.16-.07-6.47-.46l1.15-7.39c-1.6 2.1-2.24 4.85-2.08 7.39-5.03-1.11-5.49-2.61-1.85-7.16 2.34-2.92 7.48-4.32 11.08-4.39 4.91-.09 13.91 2.03 16.16 6.93Z"/><path d="M42.91 291.68c-.29-.05-.65.06-.92 0-.17-2.54.48-5.29 2.08-7.39l-1.15 7.39Z" style="fill:#834e27"/><path class="cls-7" d="M50.3 292.14c-.3 0-.62.02-.92 0-.04-1.38-.26-6.66 1.62-5.08l-.69 5.08Z"/><path class="cls-4" d="M199.94 286.6c4.02 9.75-10.62 9.31-15.24 6.93l.46-5.31c-1.8-2.09-1.56 3.65-1.39 4.39-1.44 1.78-4.6-.38-6-.92l-.23-6.93c-1.73 2.33-1.04 4.29-.69 6.93-.92-.4-3.23-.56-3.69-2.08-1.28-4.13 6.5-11.04 10.16-11.78.44-.09 2.19-.46 2.31-.46 4.66.08 12.52 4.86 14.32 9.24Z"/><path class="cls-7" d="M177.77 291.68c-.22-.08-.73.09-.92 0-.34-2.64-1.03-4.6.69-6.93zm6.93 1.85c-.71-.36-.58.51-.92-.92-.18-.74-.42-6.48 1.39-4.39l-.46 5.31Z"/><path class="cls-4" d="M102.03 288.91c-.21 1.06.29 3.09 0 3.93-1.14 3.33-12.57 2.3-15.7 2.08l.23-6c-1.32 1.6-1.6 4.09-.69 6-2.97-.25-3.85-.72-6.47-1.39l.69-6.93c-2.33 1.53-1.73 4.44-1.62 6.93-3.22-.92-7.72-.36-4.62-5.77 1.3-2.27 9.18-5.22 11.55-5.31 4.74-.18 12.93 3.39 16.63 6.47Z"/><path class="cls-7" d="M79.4 293.53c-.26-.07-.68.07-.92 0-.12-2.49-.72-5.4 1.62-6.93l-.69 6.93Z"/><path class="cls-12" d="M86.32 294.91c-.15-.01-.31.01-.46 0-.91-1.91-.62-4.4.69-6z"/><path class="cls-18" d="M81.71 101.86c8.9 2.23 18.48 9.2 17.55 19.4-2.45 26.93-62.67 26.17-63.73-.92-.4-10.19 8.58-15.51 17.09-18.01.66-.19 1.17-.31 1.85-.46-3.3 5.3 2.78 8.87 6.7 11.08 3.27 1.85 6.98-.09 5.77 5.77-1.73 8.4-20.78 8.05-17.09-2.31-5.18-2.05-.79 6.14 1.62 7.62 3.41 2.1 8.48 1.83 12.01 0 1.14-.59 3.73-3.77 4.16-3.69 1.29.24 4.41 6.32 12.01 5.08 5.31-.86 9.5-10.15 6.47-9.7.2 10.83-16.54 11.28-18.24 3-1.2-5.84 2.75-3.97 6.23-5.77 4.76-2.46 10.17-6.61 4.39-11.55 1.07.11 2.18.2 3.23.46Z"/><path class="cls-15" d="M53.3 117.1c.34-.25 1.49.03 1.15.69-.36.72-2.15.03-1.15-.69"/><path class="cls-12" d="M82.86 111.56c.39-.23 1.18.63 1.15.69-.35.77-2.19-.07-1.15-.69"/><path class="cls-15" d="M81.94 114.33c.7-.25 1.02.68.46.92-.68.3-1.02-.72-.46-.92"/><path class="cls-11" d="M52.38 113.87c.7-.25 1.02.68.46.92-.68.3-1.02-.72-.46-.92"/><path class="cls-5" d="M75.01 116.64c.7-.25 1.02.68.46.92-.68.3-1.02-.72-.46-.92m-18.94 2.77.7.23-.7.7-.23-.23z"/><path class="cls-11" d="m78.24 118.95.46.46v.46h-.46z"/><path class="cls-15" d="m50.53 118.95.69.23-.23.69-.23-.23zm31.87-.46.69.23-.69.69-.23-.23zm-3.7-2.31.23.69-.69.23-.23-.23z"/><path style="fill:#310500" d="m57 116.18.69.23-.69.69-.23-.23z"/><path style="fill:#460400" d="m51.45 111.56.7.23-.7.7-.23-.24z"/><path class="cls-10" d="M152.37 251.5c-.09-1.64-.8-3.3-.46-5.08.05 0-.14-.95.23-.92 3.46.24 6.94.38 10.39.69 1.73 2.07-9.24 4.71-10.16 5.31"/><path class="cls-14" d="M78.47 101.4c5.79 4.94.37 9.08-4.39 11.55-3.49 1.81-7.44-.07-6.23 5.77 1.7 8.28 18.44 7.83 18.24-3 3.03-.45-1.15 8.84-6.47 9.7-7.6 1.24-10.72-4.84-12.01-5.08-.43-.08-3.02 3.1-4.16 3.69-3.53 1.83-8.6 2.1-12.01 0-2.4-1.48-6.79-9.67-1.62-7.62-3.7 10.36 15.36 10.71 17.09 2.31 1.21-5.86-2.51-3.92-5.77-5.77-3.92-2.22-10-5.78-6.7-11.08 9.42-2.12 8.66 1.5 13.16 1.39 2.84-.07 4.05-2.53 10.85-1.85Z"/><path class="cls-14" d="M59.77 103.25c1.93-.48 12.26 2.21 15.7.46 3.63 6.08-13.33 3.64-15.7 1.85-.99-.75-1.46-1.94 0-2.31"/></svg>`;
    case "i":
      return `<svg class="phonics-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.08 290.36">
  <path d="M141.82,97.24H34.21l-.23,12.93c.3.03.64-.05.92,0,12.41,2.29,40.68-.12,54.96,0,15.99.13,33.47-.91,48.49.92,35.85,4.36,33.44,22.19,33.71,52.19h8.31c-.18-13.43,2.43-30.63-6-41.8-5.99-7.93-17.43-12.47-27.25-11.08l-.46-17.32-.92-.46c.82,5.78-1.68,2.28-3.93,4.62Z" style="fill:#386a98"/>
  <path d="M179.92,239.03h-8.31c-.07,10.16,3.79,30.98-6.23,37.41-5.51,3.54-9.7,1.75-15.47,1.85-19.94.34-40.07.47-60.04.46-20.08,0-44.17,1.61-63.73,0-.76,1.18-1.31,1.7-1.72,1.87l139.58.44c3.83-.34,6.33-2.82,9.47-4.16,10.36-9.78,6.29-25.2,6.47-37.87Z" style="fill:#386a98"/>
  <path d="M23.13,279.21c-.54.1-.73,1.36-.92,1.39-1.6.21-4.27-1.73-6.23,0l7.88.02c-.51-.31-.6-1.43-.72-1.41Z" style="fill:#386a98"/>
  <path d="M171.61,239.03h8.31c.36-25.22.8-50.51.46-75.74h-8.31c.23,25.16-.28,50.51-.46,75.74Z" style="fill:#f3c920"/>
  <path d="M8.58,163.29c-.15,0-.31,0-.46,0-2.64.04-5.25-.2-7.85.46-.34,25.02-.37,50.26,0,75.28h8.31c-.39-25.23.29-50.51,0-75.74Z" style="fill:#f4d26b"/>
  <path d="M33.98,110.18l.23-12.93h107.61c2.24-2.34,4.74,1.16,3.93-4.62H33.52c.39,4.63-1.08,12.25,0,16.63.09.36-.23.94.46.92Z" style="fill:#1e5281"/>
  <path d="M8.12,163.29c-.25-.95.45-.87.46-.92,1.18-5.64-.82-15.57-.46-21.48.83-13.71,10.5-25.77,24.02-28.4-.52-2.01,1.81-1.18,2.77-2.31-.29-.05-.63.03-.92,0-.69.02-.37-.56-.46-.92-2.91,1.52-7.09.66-10.39,1.39C-3.23,116.4.54,143.54.27,163.75c2.6-.66,5.21-.43,7.85-.46Z" style="fill:#5e7ea4"/>
  <path d="M26.13,278.75c-1.59-.13-2.5-.09-4.16-.46-16.69-3.71-13.2-26.61-13.39-39.26H.27c.17,11.31-2.37,27.17,5.54,36.02,2.5,2.8,6.26,5.26,10.16,5.54,1.97-1.73,4.64.21,6.23,0,.19-.02.38-1.28.92-1.39.13-.02.21,1.1.72,1.41.15.09.33.1.56,0,.41-.17.96-.7,1.72-1.87Z" style="fill:#5e7ea4"/>
  <path d="M90.33,48.75c9.05,0,18.25-.53,27.25-.46L99.1,2.1c-3.07,0-6.16,0-9.24,0l.46,46.65Z" style="fill:#cb4c4a"/>
  <path d="M86.63,2.1c-1.37,0-3.51.38-4.62-.46l-18.94,46.65c2.16-.02,4.64.48,6.93.46L86.63,2.1Z" style="fill:#cb4c4a"/>
  <path d="M86.63,2.1c1.07,0,2.16,0,3.23,0,3.07,0,6.16,0,9.24,0-2.26-3.01-14.88-2.45-17.09-.46,1.11.84,3.25.46,4.62.46Z" style="fill:#745550"/>
  <path d="M86.63,2.1l-16.63,46.65c6.77-.04,13.56,0,20.32,0l-.46-46.65c-1.07,0-2.16,0-3.23,0Z" style="fill:#d47372"/>
</svg>
`;
    case "p":
      return `
        <svg class="phonics-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 120">
            <rect x="35" y="20" width="10" height="80" rx="5" fill="#14b8a6"/>
            <ellipse cx="40" cy="45" rx="18" ry="15" fill="#5eead4"/>
            <ellipse cx="40" cy="45" rx="10" ry="8" fill="#2dd4bf"/>
        </svg>`;
    case "n":
      return `
        <svg class="phonics-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 120">
            <rect x="20" y="20" width="10" height="80" rx="5" fill="#f59e42"/>
            <rect x="50" y="20" width="10" height="80" rx="5" fill="#f59e42"/>
            <path d="M30 100 Q40 40 50 100" stroke="#f59e42" stroke-width="10" fill="none"/>
        </svg>`;
    case "c":
    case "k":
      return `
        <svg class="phonics-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 120">
            <ellipse cx="50" cy="60" rx="25" ry="45" fill="#60a5fa"/>
            <ellipse cx="45" cy="60" rx="18" ry="35" fill="#fff"/>
            <rect x="20" y="20" width="10" height="80" rx="5" fill="#60a5fa"/>
            <rect x="55" y="60" width="10" height="40" rx="5" fill="#60a5fa"/>
            <rect x="55" y="20" width="10" height="40" rx="5" transform="rotate(30 60 40)" fill="#60a5fa"/>
        </svg>`;
    case "e":
      return `
        <svg class="phonics-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 120">
            <ellipse cx="40" cy="60" rx="30" ry="45" fill="#fde047"/>
            <rect x="25" y="55" width="30" height="10" rx="5" fill="#facc15"/>
            <rect x="25" y="30" width="30" height="10" rx="5" fill="#facc15"/>
            <rect x="25" y="80" width="30" height="10" rx="5" fill="#facc15"/>
        </svg>`;
    case "h":
      return `
        <svg class="phonics-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 120">
            <rect x="20" y="20" width="10" height="80" rx="5" fill="#ef4444"/>
            <rect x="50" y="20" width="10" height="80" rx="5" fill="#ef4444"/>
            <rect x="20" y="60" width="40" height="10" rx="5" fill="#f87171"/>
        </svg>`;
    case "r":
      return `
        <svg class="phonics-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 120">
            <rect x="20" y="20" width="10" height="80" rx="5" fill="#6366f1"/>
            <ellipse cx="40" cy="45" rx="18" ry="15" fill="#818cf8"/>
            <rect x="35" y="60" width="25" height="10" rx="5" fill="#6366f1"/>
            <rect x="50" y="70" width="10" height="30" rx="5" transform="rotate(30 55 85)" fill="#6366f1"/>
        </svg>`;
    case "m":
      return `
        <svg class="phonics-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 120">
            <rect x="15" y="20" width="10" height="80" rx="5" fill="#22c55e"/>
            <rect x="55" y="20" width="10" height="80" rx="5" fill="#22c55e"/>
            <path d="M25 60 Q40 20 55 60" stroke="#22c55e" stroke-width="10" fill="none"/>
        </svg>`;
    case "d":
      return `
        <svg class="phonics-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 120">
            <rect x="20" y="20" width="10" height="80" rx="5" fill="#fde047"/>
            <ellipse cx="40" cy="60" rx="25" ry="40" fill="#fbbf24"/>
        </svg>`;
    case "g":
      return `
        <svg class="phonics-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 120">
            <ellipse cx="40" cy="60" rx="30" ry="45" fill="#14b8a6"/>
            <ellipse cx="40" cy="60" rx="20" ry="35" fill="#fff"/>
            <rect x="40" y="80" width="20" height="10" rx="5" fill="#14b8a6"/>
        </svg>`;
    case "o":
      return `
        <svg class="phonics-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 120">
            <ellipse cx="40" cy="60" rx="30" ry="45" fill="#f59e42"/>
            <ellipse cx="40" cy="60" rx="20" ry="35" fill="#fff"/>
        </svg>`;
    case "u":
      return `
        <svg class="phonics-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 120">
            <rect x="20" y="20" width="10" height="70" rx="5" fill="#ef4444"/>
            <rect x="50" y="20" width="10" height="70" rx="5" fill="#ef4444"/>
            <ellipse cx="40" cy="90" rx="20" ry="10" fill="#f87171"/>
        </svg>`;
    default:
      return "";
  }
}


// ==== 播放音素音效 ====
if (typeof window.currentAudio === "undefined") {
  window.currentAudio = null;
}

function playPhonicsSound(event) {
  event.stopPropagation();

  const letter = event.currentTarget.getAttribute("data-letter");
  const groupId = event.currentTarget.closest(".phonics-card")?.getAttribute("data-group");
  const group = groups.find(g => String(g.id) === groupId);

  if (!group) {
    console.warn(`找不到 group ID 為 ${groupId} 的資料`);
    return;
  }

  const phoneme = group.phonics.find(p => p.letter.toLowerCase() === letter.toLowerCase());

  if (!phoneme || !phoneme.audio) {
    console.warn(`找不到 ${letter} 的音檔`);
    return;
  }

  // 🔇 停止前一個正在播放的音訊
  if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0;
  }

  // ▶️ 播放新的音訊
  window.currentAudio = new Audio(phoneme.audio);
  window.currentAudio.play().catch(err => {
    console.warn(`播放 ${letter} 音檔失敗：`, err);
  });
}


// ==== 渲染組別按鈕 ====
function renderGroupButtons() {
  const groupList = document.getElementById("groupList");
  groupList.innerHTML = "";
  groupList.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3";

  groups.forEach(group => {
    const themeColor = group.phonics?.[0]?.color || "indigo";
    const col = document.createElement("div");
    col.className = "col h-100";

    const card = document.createElement("div");
    card.className = "phonics-card border bg-white overflow-hidden shadow-lg d-flex flex-column h-100";
    card.classList.add(`theme-${themeColor}`);
    card.setAttribute("data-group", group.id);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `${group.title}：${group.letters.join(", ")}`);
    card.style.cursor = "pointer";

    card.innerHTML = `
<!-- Group Header -->
<div class="text-center p-3 text-white rounded-top"
     style="background: linear-gradient(to right, var(--color-${themeColor}-600), var(--color-${themeColor}-400));">
  <div class="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 shadow-sm"
       style="width: 3rem; height: 3rem; font-size: 1.5rem; font-weight: bold; color: var(--color-${themeColor}-600);">
    ${group.id}
  </div>
  <h3 class="fs-5 fw-bold m-0 text-white">${group.title}</h3>
</div>

<!-- Letter Circles -->
<div class="d-flex justify-content-center gap-3 p-4 flex-wrap bg-white rounded-bottom shadow-sm">
  ${group.letters.map(letter => `
    <div class="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
         data-letter="${letter.toLowerCase()}"
         onclick="playPhonicsSound(event)"
         style="
           width: 4rem;
           height: 4rem;
           font-size: 1.5rem;
           font-weight: bold;
           background-color: var(--color-${themeColor}-100);
           color: var(--color-${themeColor}-600);
           transition: background-color 0.3s ease, transform 0.2s ease;
         "
         onmouseover="this.style.backgroundColor='var(--color-${themeColor}-200)'; this.style.transform='scale(1.05)'"
         onmouseout="this.style.backgroundColor='var(--color-${themeColor}-100)'; this.style.transform='scale(1)'"
    >
      ${letter}
    </div>
  `).join("")}
</div>
`;

    // ✅ 綁定卡片點擊事件（切換頁面）
    card.addEventListener("click", () => {
      currentGroupId = group.id;
      renderGroup(group.id);
      groupList.style.display = "none";
      document.getElementById("startAdventureBtn").style.display = "none";
    });

    col.appendChild(card);
    groupList.appendChild(col);
  });
}


let currentAudio = null;

function updateGlobalPhonicsMap() {
  window.globalPhonicsMap = {};
  groups.forEach(group => {
    if (!group.phonics) return;
    group.phonics.forEach(p => {
      globalPhonicsMap[p.letter.toLowerCase()] = p.audio;
    });
  });
}


function renderGroup(id) {

  const group = groups.find(g => g.id === id);
  if (!group) return;

  currentGroupId = id;
updateGlobalPhonicsMap();

// 隱藏首頁 UI
document.getElementById("groupList").classList.add("d-none");
document.getElementById("startAdventureBtn").classList.add("d-none");


  const content = document.getElementById("content");
  const groupTitle = document.getElementById("group-title");
  const groupDescription = document.getElementById("group-description");

  groupTitle.textContent = group.title;
  groupDescription.textContent = group.description;
  content.innerHTML = "";

  // 音素歌曲 - Bootstrap styled
  const songSection = document.createElement("section");
  songSection.className = "section bg-light p-4 pb-5 mb-4";

  const nowPlaying = document.createElement("div");
  nowPlaying.className = "text-center mb-3";
  nowPlaying.innerHTML = `
    <div id="now-playing" class="bg-primary bg-opacity-10 d-inline-block px-4 py-2 rounded-pill fs-5 fw-semibold text-primary mb-3 d-flex align-items-center justify-content-center" role="status" aria-live="polite">
      <svg class="me-2 text-primary" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
      </svg>
      <span class="visually-hidden">Now playing:</span>
      🎵 <span id="song-label" class="text-white">${group.songs[0].label}</span>
    </div>
  `;
  songSection.appendChild(nowPlaying);

  // Media player container
  const mediaContainer = document.createElement("div");
  mediaContainer.id = "media-container";
  mediaContainer.className = "mb-4";
  songSection.appendChild(mediaContainer);

  const controls = document.createElement("div");
  controls.className = "d-flex justify-content-center gap-3 flex-wrap";

  group.songs.forEach(song => {
    const button = document.createElement("button");
    button.className = `btn btn-outline-primary text-center d-flex flex-column align-items-center justify-content-center p-3 shadow-sm`;

    button.innerHTML = `
      <span class="fs-2 mb-1">${song.letter}</span>
      <span>${song.label}</span>
    `;

    button.onclick = () => {
      // 停止當前音頻
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      // 播放新的音檔
      currentAudio = new Audio(song.audio);
      currentAudio.play();
      const songLabel = document.getElementById("song-label");
      if (songLabel) songLabel.textContent = song.label;

      const mediaContainer = document.getElementById("media-container");
      mediaContainer.innerHTML = "";

      const extension = song.audio.split('.').pop().toLowerCase();
      let mediaElement;

      if (extension === "mp4") {
        mediaElement = document.createElement("video");
        mediaElement.className = "w-100 rounded";
      } else {
        mediaElement = document.createElement("audio");
        mediaElement.className = "w-100";
      }

      mediaElement.controls = true;
      mediaElement.setAttribute("aria-label", `${song.label}`);

      const source = document.createElement("source");
      source.src = song.audio;
      source.type = extension === "mp4" ? "video/mp4" : "audio/mpeg";

      mediaElement.appendChild(source);
      mediaContainer.appendChild(mediaElement);
      mediaElement.play();

      // 當新 mediaElement 播放時，若有 currentAudio，則停止前一個
      if (currentAudio && currentAudio !== mediaElement) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentAudio = mediaElement;
    };

    controls.appendChild(button);
  });

  songSection.appendChild(controls);
  content.appendChild(songSection);

  // 發音練習
const phonicsSection = document.createElement("section");
phonicsSection.className = "mb-5";

phonicsSection.innerHTML = `
  <h2 class="fs-1 fw-bold text-primary mb-5 d-flex align-items-center border-bottom border-light pb-3">
    <svg class="me-3" style="width: 2.5rem; height: 2.5rem; color: var(--color-indigo-500);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
    </svg>
    發音練習
  </h2>
`;

const phonicsRow = document.createElement("div");
phonicsRow.className = "row g-4";

const count = group.phonics.length;
const colWidth = Math.floor(12 / count);
const colClass = colWidth > 0 ? `col-12 col-md-${colWidth}` : "col-12";

group.phonics.forEach(p => {
  const color = p.color || "pink";

  const col = document.createElement("div");
  col.className = `${colClass} d-flex`;

  const card = document.createElement("div");
  card.className = "card p-4 d-flex flex-column align-items-center shadow w-100 h-100";
  card.style.backgroundColor = `var(--color-${color}-100)`;
  card.style.position = "relative";

  const waveBg = document.createElement("div");
  waveBg.className = "wave-background";
  waveBg.dataset.originalColor = `var(--color-${color}-600)`; // ✅ 儲存主題色
  waveBg.style.color = waveBg.dataset.originalColor;
  waveBg.innerHTML = `
    <div class="wave-bar-bg"></div>
    <div class="wave-bar-bg"></div>
    <div class="wave-bar-bg"></div>
    <div class="wave-bar-bg"></div>
    <div class="wave-bar-bg"></div>
  `;
  card.appendChild(waveBg);

  const face = document.createElement("div");
  face.className = "d-flex align-items-center justify-content-center mb-4";
  face.innerHTML = `
    <span class="display-1 fw-bold me-3" style="color: var(--color-${color}-600);">${p.letter}</span>
    <strong class="fs-2 text-muted">${p.ipa}</strong>
  `;

  const playBtn = document.createElement("button");
  playBtn.className = `btn w-100 d-flex align-items-center justify-content-center text-white fs-5 theme-${color}`;
  playBtn.style.backgroundColor = `var(--color-${color}-500)`;
  playBtn.onmouseenter = () => playBtn.style.backgroundColor = `var(--color-${color}-600)`;
  playBtn.onmouseleave = () => playBtn.style.backgroundColor = `var(--color-${color}-500)`;
  playBtn.style.borderRadius = "1rem";
  playBtn.style.padding = "1rem";
  playBtn.innerHTML = `
    <svg style="width: 2rem; height: 2rem;" class="me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    聽發音
  `;

  // ✅ 重置波形動畫與顏色
  function resetWaveBg() {
    waveBg.classList.remove("active");
    waveBg.style.color = waveBg.dataset.originalColor;
    card.classList.remove("bg-success-pale");
  }

  // ▶️ 播放正確發音
  playBtn.addEventListener("click", () => {
    if (window.isRecording) {
      alert("錄音中無法播放音訊！");
      return;
    }
    stopAllAudio();
    resetWaveBg();

    currentAudio = new Audio(p.audio);
    currentAudio.play();

    waveBg.classList.add("active");
    waveBg.style.color = waveBg.dataset.originalColor;

    currentAudio.onended = () => {
      waveBg.classList.remove("active");
      waveBg.style.color = waveBg.dataset.originalColor;
    };
  });

  // 錄音控制（獨立狀態）
  const recordControls = document.createElement("div");
  recordControls.className = "d-flex flex-column align-items-center mt-3";

  const statusWrapper = document.createElement("div");
  statusWrapper.className = "d-flex align-items-center gap-2 mt-2";

  const statusDot = document.createElement("span");
  statusDot.className = "recording-dot";
  statusDot.style.display = "none";
  statusDot.innerHTML = `🔴 <span class="text-danger fw-bold">錄音中</span>`;

  const timerText = document.createElement("div");
  timerText.className = "recording-timer";
  timerText.style.display = "none";
  timerText.textContent = "錄音中：3 秒";

  statusWrapper.appendChild(statusDot);
  statusWrapper.appendChild(timerText);

  const btnGroup = document.createElement("div");
  btnGroup.className = "btn-group";
  btnGroup.setAttribute("role", "group");
  btnGroup.setAttribute("aria-label", "錄音控制");

  const recordBtn = document.createElement("button");
  recordBtn.className = "btn btn-outline-secondary";
  recordBtn.innerHTML = `<i class="fas fa-microphone"></i>`;
  recordBtn.title = "開始錄音";

  const stopBtn = document.createElement("button");
  stopBtn.className = "btn btn-outline-danger";
  stopBtn.innerHTML = `<i class="fas fa-stop"></i>`;
  stopBtn.title = "停止錄音";

  const playStudentBtn = document.createElement("button");
  playStudentBtn.className = "btn btn-outline-primary";
  playStudentBtn.innerHTML = `<i class="fas fa-play"></i>`;
  playStudentBtn.title = "播放學生錄音";

  let localRecorder = null;
  let localChunks = [];
  let localAudioURL = null;
  let countdownInterval = null;

  recordBtn.addEventListener("click", async () => {
    if (window.isRecording) return;
    window.isRecording = true;
    stopAllAudio();

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      localChunks = [];
      localRecorder = new MediaRecorder(stream);

      localRecorder.ondataavailable = e => {
        if (e.data.size > 0) localChunks.push(e.data);
      };

      localRecorder.onstop = () => {
        const blob = new Blob(localChunks, { type: "audio/webm" });
        localAudioURL = URL.createObjectURL(blob);
        window.isRecording = false;
        playStudentBtn.click();
      };

      localRecorder.start();
      statusDot.style.display = "inline-flex";
      timerText.style.display = "block";
      recordBtn.classList.add("recording-pulse");

      let countdown = 3;
      timerText.textContent = `錄音中：${countdown} 秒`;
      countdownInterval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
          timerText.textContent = `錄音中：${countdown} 秒`;
        } else {
          clearInterval(countdownInterval);
          timerText.style.display = "none";
        }
      }, 1000);
    } catch (err) {
      alert("無法啟用麥克風，請確認瀏覽器權限");
      window.isRecording = false;
    }
  });

  stopBtn.addEventListener("click", () => {
    if (localRecorder && localRecorder.state !== "inactive") {
      localRecorder.stop();
      statusDot.style.display = "none";
      timerText.style.display = "none";
      recordBtn.classList.remove("recording-pulse");
      clearInterval(countdownInterval);
    }
  });

  // ▶️ 播放學生錄音
  playStudentBtn.addEventListener("click", () => {
    if (window.isRecording) {
      alert("錄音中無法播放音訊！");
      return;
    }
    stopAllAudio();
    resetWaveBg();

    if (localAudioURL) {
      currentAudio = new Audio(localAudioURL);
      card.classList.add("bg-success-pale");

      waveBg.classList.add("active");
      waveBg.style.color = "var(--color-green-500)";

      currentAudio.play();
      currentAudio.onended = () => {
        card.classList.remove("bg-success-pale");
        waveBg.classList.remove("active");
        waveBg.style.color = waveBg.dataset.originalColor;
      };
    } else {
      alert("請先錄音！");
    }
  });

  btnGroup.appendChild(recordBtn);
  btnGroup.appendChild(stopBtn);
  btnGroup.appendChild(playStudentBtn);
  recordControls.appendChild(btnGroup);
  recordControls.appendChild(statusWrapper);
  recordControls.appendChild(timerText);

  const mouthHint = document.createElement("div");
  mouthHint.className = "mt-4 text-center";
  mouthHint.innerHTML = `
    <p class="fs-4 text-muted">嘴型提示：</p>
    <p class="fs-5 text-muted">${p.hint}</p>
  `;

  card.appendChild(face);
  card.appendChild(playBtn);
  card.appendChild(recordControls);
  card.appendChild(mouthHint);
  col.appendChild(card);
  phonicsRow.appendChild(col);
});

phonicsSection.appendChild(phonicsRow);
content.appendChild(phonicsSection);





  // === 字母與圖片配對遊戲（點擊連連看） ===
  const matchSection = document.createElement("section");
  matchSection.className = "section bg-light p-4 pb-5 mb-4";
  matchSection.innerHTML = `
      <div class="row align-items-center mb-4">
        <div class="col">
          <h2 class="fs-1 fw-bold text-primary d-flex align-items-center border-bottom border-light pb-3 mb-0">
            <i class="fa fa-bolt me-3" style="font-size:2.5rem; color: var(--color-indigo-500);"></i>
            字母配對遊戲
          </h2>
        </div>
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-3">
          <p class="bborder border-dashed mb-0 d-flex flex-wrap align-items-center justify-content-center text-muted text-center fs-6">
            點擊左側<strong>字母卡</strong>或右側<strong>圖片卡</strong>，再點另一側進行配對！
          </p>
          <button class="btn btn-primary shadow-sm d-flex align-items-center gap-2" id="resetMatchBtn">
            <i class="fa fa-refresh"></i>
            重設遊戲順序
          </button>
        </div>
      </div>
    `;

  // 新增重設隨機順序按鈕事件
  const resetMatchBtn = matchSection.querySelector("#resetMatchBtn");
  resetMatchBtn.onclick = () => {
    matchSection.remove();
    renderGroup(id);
  };

  // 兩欄容器
  const row = document.createElement("div");
  row.className = "row g-4";

  // 左欄：字母卡片
  const leftCol = document.createElement("div");
  leftCol.className = "col-12 col-md-5 d-flex flex-column gap-3 align-items-center pe-0 ps-5 z-index-10";
  leftCol.innerHTML = `<h3 class="fs-5 mb-3">字母卡片</h3>`;

  // 中間：SVG 連線區
  const centerCol = document.createElement("div");
  centerCol.className = "col-12 col-md-2 d-flex align-items-center justify-content-center";
  centerCol.style.position = "relative";
  centerCol.style.minHeight = "350px";
  centerCol.style.pointerEvents = "none";
  centerCol.setAttribute("aria-hidden", "true");

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.style.position = "absolute";
  svg.style.top = "0";
  svg.style.left = "0";
  svg.style.width = "100%";
  svg.style.height = "100%";
  svg.style.pointerEvents = "none";
  centerCol.appendChild(svg);

  // 右欄：圖片卡片
  const rightCol = document.createElement("div");
  rightCol.className = "col-12 col-md-5 d-flex flex-column gap-3 align-items-center ps-0 pe-5";
  rightCol.innerHTML = `<h3 class="fs-5 mb-3">音素圖片</h3>`;

  // 隨機排序
  const shuffledCards = [...group.cards].sort(() => Math.random() - 0.5);
  const shuffledImages = [...group.images].sort(() => Math.random() - 0.5);

  // 狀態追蹤
  let selectedSide = null; // "left" or "right"
  let selectedLetter = null;
  let selectedElem = null;
  let matchedLetters = new Set();
  let matchedImages = {}; // key: image.letter, value: Set of matched letters
  let lines = [];
  let focusLine = null;

  // 建立字母卡片
  shuffledCards.forEach((c, idx) => {
    const card = document.createElement("div");
    card.className = "border rounded-3 shadow-sm d-flex align-items-center justify-content-center letter-match-card";
    card.style.width = "100%";
    card.style.height = "8rem";
    card.style.cursor = "pointer";
    card.dataset.letter = c.letter;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${c.label}，點擊選擇配對`);
    card.style.position = "relative";
    card.dataset.idx = idx;

    // 取得 IPA
    const phonics = group.phonics.find(p => p.letter === c.letter);
    const ipa = phonics ? phonics.ipa : "";

    card.innerHTML = `
      <div class="d-flex align-items-center justify-content-center w-100">
        <span class="display-1 fw-bold me-4 text-primary">${c.letter.toUpperCase()}</span>
        <span class="fs-2 fw-bold text-muted">${ipa}</span>
      </div>
    `;

    card.addEventListener("click", () => {
      if (matchedLetters.has(c.letter)) return;
      if (selectedSide === "right" && selectedLetter) {
        // 已選右側，這次點左側，進行配對
        // 找到右側被選的圖片卡
        const imgObj = group.images.find(img => img.letter === selectedElem.dataset.letter);
        const accepts = imgObj?.accepts || [imgObj?.letter];
        if (accepts.includes(c.letter)) {
          // 配對成功
          matchedLetters.add(c.letter);

          // 更新 matchedImages
          if (!matchedImages[imgObj.letter]) matchedImages[imgObj.letter] = new Set();
          matchedImages[imgObj.letter].add(c.letter);

          // 標記字母卡
          card.classList.add("success-celebrate");
          card.style.pointerEvents = "none";

          // 標記圖片卡（只有當所有 accepts 都配對過才 disable）
          if (matchedImages[imgObj.letter].size === accepts.length) {
            selectedElem.classList.add("success-celebrate");
            selectedElem.style.pointerEvents = "none";
          }

          // 畫線
          lines.push({
            from: card,
            to: selectedElem,
            letter: c.letter
          });
          focusLine = null;
          drawLines();

          // 清除選擇
          selectedSide = null;
          selectedLetter = null;
          if (selectedElem) selectedElem.classList.remove("border-primary", "bg-primary-pale", "text-white");
          if (selectedElem) selectedElem.style.outline = "";
          selectedElem = null;
          if (card) card.classList.remove("border-primary", "bg-primary-pale", "text-white");
          if (card) card.style.outline = "";

          // 完成提示
          if (matchedLetters.size === group.cards.length) {
            setTimeout(() => {
              let live = document.getElementById("match-live");
              if (!live) {
                live = document.createElement("div");
                live.id = "match-live";
                live.setAttribute("aria-live", "polite");
                live.className = "visually-hidden";
                matchSection.appendChild(live);
              }
              live.textContent = "你完成了！";
              alert("你完成了！");
            }, 300);
          }
        } else {
          // 配對錯誤
          card.classList.add("border-danger", "danger-pulse-shake");

          // Remove visual feedback after animation completes
          setTimeout(() => {
            card.classList.remove("border-danger", "danger-pulse-shake");
          }, 600); // Match the duration of the CSS animation

          // Update live region for screen readers
          let live = document.getElementById("match-live");
          if (!live) {
            live = document.createElement("div");
            live.id = "match-live";
            live.setAttribute("aria-live", "polite");
            live.className = "visually-hidden";
            matchSection.appendChild(live);
          }
          live.textContent = "配對錯誤，請再試一次";
        }

      } else {
        // 先選左側
        if (selectedElem) {
          selectedElem.classList.remove("border-primary", "bg-primary-pale", "text-white");
          selectedElem.style.outline = "";
          selectedElem.style.zIndex = ""; // Reset z-index
          selectedElem.style.position = ""; // Reset position
        }

        selectedSide = "left";
        selectedLetter = c.letter;
        selectedElem = card;

        card.classList.add("border-primary", "bg-primary-pale", "text-white");
        card.style.outline = "3px solid var(--bs-primary)";
        card.style.zIndex = "10"; // Bring above the line
        card.style.position = "relative"; // Ensure z-index takes effect

        focusLine = {
          from: card,
          to: null,
          letter: c.letter
        };

        drawLines();
      }
    });

    card.addEventListener("blur", () => {
      card.style.outline = "";
    });

    leftCol.appendChild(card);
  });

  // 建立圖片卡片
  shuffledImages.forEach((i, idx) => {
    const card = document.createElement("div");
    card.className = "card text-center shadow-sm p-2 d-flex flex-row match-click-target";
    card.style.width = "100%";
    card.style.height = "8rem";
    card.style.cursor = "pointer";
    card.dataset.letter = i.letter;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${i.word}，點擊配對`);
    card.style.position = "relative";
    card.dataset.idx = idx;

    // SVG 圖片
    const svgContainer = document.createElement("div");
    svgContainer.className = "card-img-left p-3";
    svgContainer.innerHTML = getSVGForLetter(i.letter);

    // 單字
    const cardBody = document.createElement("div");
    cardBody.className = "card-body p-2 d-flex flex-column justify-content-center";
    const wordElem = document.createElement("p");
    wordElem.className = "card-text h3 text-dark fw-bold mb-0";
    wordElem.textContent = i.word;
    const letterElem = document.createElement("small");
    letterElem.className = "text-muted h3 mb-0";
    letterElem.textContent = i.letter.toUpperCase();

    cardBody.appendChild(wordElem);
    cardBody.appendChild(letterElem);
    card.appendChild(svgContainer);
    card.appendChild(cardBody);

    card.addEventListener("click", () => {
      // 取得可接受的字母陣列
      const accepts = i.accepts || [i.letter];
      // 這張圖片卡已經全部配對完就不能再配對
      if (matchedImages[i.letter] && matchedImages[i.letter].size === accepts.length) return;
      if (selectedSide === "left" && selectedLetter) {
        if (accepts.includes(selectedLetter)) {
          // 配對成功
          matchedLetters.add(selectedLetter);

          // 更新 matchedImages
          if (!matchedImages[i.letter]) matchedImages[i.letter] = new Set();
          matchedImages[i.letter].add(selectedLetter);

          // 標記圖片卡（只有當所有 accepts 都配對過才 disable）
          if (matchedImages[i.letter].size === accepts.length) {
            card.classList.add("success-celebrate");
            card.style.pointerEvents = "none";
          }

          // 標記字母卡
          const leftCards = leftCol.querySelectorAll(".letter-match-card");
          leftCards.forEach(lc => {
            if (lc.dataset.letter === selectedLetter) {
              lc.classList.add("success-celebrate");
              lc.style.pointerEvents = "none";
              lc.classList.remove("border-primary", "bg-primary-pale");
              lc.style.outline = "";
            }
          });

          // 畫線
          lines.push({
            from: selectedElem,
            to: card,
            letter: selectedLetter
          });
          focusLine = null;
          drawLines();

          // 清除選擇
          selectedSide = null;
          selectedLetter = null;
          if (selectedElem) selectedElem.classList.remove("border-primary", "bg-primary-pale", "text-white");
          if (selectedElem) selectedElem.style.outline = "";
          selectedElem = null;
          if (card) card.classList.remove("border-primary", "bg-primary-pale", "text-white");
          if (card) card.style.outline = "";

          // 完成提示
          if (matchedLetters.size === group.cards.length) {
            setTimeout(() => {
              let live = document.getElementById("match-live");
              if (!live) {
                live = document.createElement("div");
                live.id = "match-live";
                live.setAttribute("aria-live", "polite");
                live.className = "visually-hidden";
                matchSection.appendChild(live);
              }
              live.textContent = "你完成了！";
              alert("你完成了！");
            }, 300);
          }
        } else {
          // 配對錯誤：加入紅色邊框與動畫效果
          card.classList.add("border-danger", "danger-pulse-shake");

          // 移除錯誤樣式與動畫
          setTimeout(() => {
            card.classList.remove("border-danger", "danger-pulse-shake");
          }, 600); // 與 CSS 動畫時間一致

          // 更新螢幕閱讀器提示
          let live = document.getElementById("match-live");
          if (!live) {
            live = document.createElement("div");
            live.id = "match-live";
            live.setAttribute("aria-live", "polite");
            live.className = "visually-hidden";
            matchSection.appendChild(live);
          }
          live.textContent = "配對錯誤，請再試一次";
        }

      } else {
        // 先選右側
        if (selectedElem) {
          selectedElem.classList.remove("border-primary", "bg-primary-pale", "text-white");
          selectedElem.style.outline = "";
          selectedElem.style.zIndex = ""; // Reset z-index
          selectedElem.style.position = ""; // Reset position
        }

        selectedSide = "right";
        selectedLetter = i.letter;
        selectedElem = card;

        card.classList.add("border-primary", "bg-primary-pale", "text-white");
        card.style.outline = "3px solid var(--bs-primary)";
        card.style.zIndex = "10"; // Bring above the line
        card.style.position = "relative"; // Ensure z-index takes effect

        focusLine = {
          from: card,
          to: null,
          letter: i.letter
        };

        drawLines();
      }
    });

    card.addEventListener("blur", () => {
      card.style.outline = "";
    });

    rightCol.appendChild(card);
  });

  // 畫線函數
  function drawLines() {
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const centerRect = centerCol.getBoundingClientRect();
    const svgWidth = centerCol.offsetWidth;
    const svgHeight = Math.max(leftCol.offsetHeight, rightCol.offsetHeight, 350);
    svg.setAttribute("width", svgWidth);
    svg.setAttribute("height", svgHeight);

    function getCardEdge(elem, side) {
      const rect = elem.getBoundingClientRect();
      if (side === "left") {
        return {
          x: rect.right - centerRect.left,
          y: rect.top + rect.height / 2 - centerRect.top
        };
      } else {
        return {
          x: rect.left - centerRect.left,
          y: rect.top + rect.height / 2 - centerRect.top
        };
      }
    }

    lines.forEach(({
      from,
      to
    }) => {
      const p1 = getCardEdge(from, "left");
      const p2 = getCardEdge(to, "right");
      const path = document.createElementNS(svgNS, "line");
      path.setAttribute("x1", p1.x);
      path.setAttribute("y1", p1.y);
      path.setAttribute("x2", p2.x);
      path.setAttribute("y2", p2.y);
      path.setAttribute("stroke", "#0d6efd");
      path.setAttribute("stroke-width", "4");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("aria-hidden", "true");
      svg.appendChild(path);
    });

    if (focusLine && focusLine.from) {
      centerCol.onmousemove = e => {
        const mouseX = e.clientX - centerRect.left;
        const mouseY = e.clientY - centerRect.top;
        const p1 = getCardEdge(focusLine.from, focusLine.from.classList.contains("letter-match-card") ? "left" : "right");
        let tempLine = svg.querySelector("line.temp-line");
        if (!tempLine) {
          tempLine = document.createElementNS(svgNS, "line");
          tempLine.classList.add("temp-line");
          svg.appendChild(tempLine);
        }
        tempLine.setAttribute("x1", p1.x);
        tempLine.setAttribute("y1", p1.y);
        tempLine.setAttribute("x2", mouseX);
        tempLine.setAttribute("y2", mouseY);
        tempLine.setAttribute("stroke", "#fd7e14");
        tempLine.setAttribute("stroke-width", "4");
        tempLine.setAttribute("stroke-dasharray", "8 4");
        tempLine.setAttribute("stroke-linecap", "round");
        tempLine.setAttribute("aria-hidden", "true");
      };
      centerCol.onmouseleave = () => {
        const tempLine = svg.querySelector("line.temp-line");
        if (tempLine) tempLine.remove();
      };
    } else {
      centerCol.onmousemove = null;
      centerCol.onmouseleave = null;
      const tempLine = svg.querySelector("line.temp-line");
      if (tempLine) tempLine.remove();
    }
  }

  leftCol.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (document.activeElement.classList.contains("letter-match-card")) {
        document.activeElement.click();
      }
    }
  });
  rightCol.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (document.activeElement.classList.contains("match-click-target")) {
        document.activeElement.click();
      }
    }
  });

  // WCAG: live region for feedback
  const liveRegion = document.createElement("div");
  liveRegion.id = "match-live";
  liveRegion.setAttribute("aria-live", "polite");
  liveRegion.className = "visually-hidden";
  matchSection.appendChild(liveRegion);

  row.appendChild(leftCol);
  row.appendChild(centerCol);
  row.appendChild(rightCol);
  matchSection.appendChild(row);
  content.appendChild(matchSection);

  // 拼字發音練習區
  const spellingSection = document.createElement("section");
  spellingSection.className = "section bg-light p-4 pb-5 mb-4";

  const spellingHeader = document.createElement("h2");
  spellingHeader.innerHTML = `<h2 class="fs-1 fw-bold text-primary mb-5 d-flex align-items-center border-bottom border-light pb-3">
    <svg class="me-3" style="width: 2.5rem; height: 2.5rem; color: var(--color-indigo-500);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                    </svg>
    拼字發音練習
  </h2>`;
  spellingSection.appendChild(spellingHeader);

  const suggestionSection = document.createElement("div");
  suggestionSection.className = "d-flex flex-wrap gap-2 mb-3";

  group.spellingPractice.words.forEach(word => {
    const shortcutBtn = document.createElement("button");
    shortcutBtn.textContent = word;
    shortcutBtn.className = "btn btn-light border text-primary fw-semibold px-3 py-2 shadow-sm";
    shortcutBtn.addEventListener("click", () => {
      fillDropArea(dropArea, word);
    });
    suggestionSection.appendChild(shortcutBtn);
  });
  spellingSection.appendChild(suggestionSection);

  const dropArea = document.createElement("div");
  dropArea.className = "bborder border-dashed p-4 mb-4 d-flex flex-wrap align-items-center justify-content-center text-muted text-center fs-6";
  dropArea.innerHTML = "拖放字母到此處進行拼字";
  dropArea.style.minHeight = "144px";
  dropArea.style.backgroundColor = "var(--bs-light)";

  let draggedSpan = null;

  dropArea.addEventListener("dragover", e => {
    e.preventDefault();
    // If dragging over a child, let its dragenter handle placeholder
    if (e.target === dropArea) {
      // Remove any existing placeholders
      dropArea.querySelectorAll(".drop-placeholder").forEach(p => p.remove());
      // Add placeholder at the end
      const newPlaceholder = document.createElement("div");
      newPlaceholder.className = "drop-placeholder";
      dropArea.appendChild(newPlaceholder);
    }
  });

  dropArea.addEventListener("drop", e => {
    e.preventDefault();
    const letter = e.dataTransfer.getData("text/plain");
    let placeholder = dropArea.querySelector(".drop-placeholder");
    // Remove placeholder message if it's still there
    if (dropArea.textContent.includes("拖放字母到此處進行拼字")) {
      dropArea.innerHTML = "";
      placeholder = null; // After clearing, no placeholder exists
    }
    if (draggedSpan && dropArea.contains(draggedSpan)) {
      // Internal drag (reorder)
      if (placeholder) {
        dropArea.insertBefore(draggedSpan, placeholder);
        placeholder.remove();
      } else {
        dropArea.appendChild(draggedSpan);
      }
    } else if (letter) {
      // External drag (from pool)
      const span = createDraggableLetter(letter.toUpperCase());
      if (placeholder) {
        dropArea.insertBefore(span, placeholder);
        placeholder.remove();
      } else {
        dropArea.appendChild(span);
      }
    }
    // Remove any remaining placeholders after drop
    dropArea.querySelectorAll(".drop-placeholder").forEach(p => p.remove());
  });

  spellingSection.appendChild(dropArea);

  const letterPool = document.createElement("div");
  letterPool.className = "d-flex justify-content-center gap-3 mb-4 flex-wrap";
  const lettersForPool = getAccumulatedLetters(group.id);

  lettersForPool.forEach(letter => {
    const letterDiv = document.createElement("div");
    letterDiv.textContent = letter;
    letterDiv.className = "letter-choice d-flex  align-items-center justify-content-center bg-white border px-3 py-2 fw-bold text-dark shadow-sm";
    letterDiv.style.background = letter === 'S' ? 'var(--color-pink-500)' : letter === 'A' ? 'var(--color-blue-500)' : 'var(--color-green-500)';
    letterDiv.setAttribute("draggable", "true");
    letterDiv.style.userSelect = "none";
    letterDiv.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", letter.toLowerCase());
      draggedSpan = null;
    });
    letterPool.appendChild(letterDiv);
  });

  spellingSection.appendChild(letterPool);

  function createDraggableLetter(letter) {
    const span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter-card text-white border-0 d-flex align-items-center justify-content-center px-4 py-3 fw-bold shadow m-2 fs-1";
    span.setAttribute("draggable", "true");
    span.style.userSelect = "none";
    // 點擊時播放對應音素音檔
    span.addEventListener("click", () => {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      const phonics = groups
  .flatMap(g => g.phonics)
  .find(p => p.letter.toLowerCase() === letter.toLowerCase());

      // 如果找不到，就從全域對照表找
      const audioSrc = phonics?.audio || globalPhonicsMap[letter.toLowerCase()];
      if (audioSrc) {
        currentAudio = new Audio(audioSrc);
        currentAudio.play();
      } else {
        alert(`找不到 ${letter} 的發音音檔`);
      }
    });

    span.addEventListener("contextmenu", evt => {
      evt.preventDefault();
      span.remove();
      if (dropArea.children.length === 0) {
        dropArea.innerHTML = "拖放字母到此處進行拼字";
      }
    });
    span.addEventListener("dragstart", e => {
      draggedSpan = span;
      e.dataTransfer.effectAllowed = "move";
    });
    span.addEventListener("dragover", e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    });
    span.addEventListener("drop", e => {
      e.preventDefault();
      if (draggedSpan && draggedSpan !== span) {
        const children = Array.from(dropArea.children);
        const draggedIndex = children.indexOf(draggedSpan);
        const targetIndex = children.indexOf(span);
        if (draggedIndex < targetIndex) {
          dropArea.insertBefore(draggedSpan, span.nextSibling);
        } else {
          dropArea.insertBefore(draggedSpan, span);
        }
      }
    });
    span.addEventListener("dragenter", e => {
      e.preventDefault();
      // Always replace any placeholder with a new one before this span
      dropArea.querySelectorAll(".drop-placeholder").forEach(p => p.remove());
      const placeholder = document.createElement("div");
      placeholder.className = "drop-placeholder";
      dropArea.insertBefore(placeholder, span);
    });
    return span;
  }

  function addDraggableLetter(letter) {
    // Remove placeholder message if it's still there
    if (dropArea.textContent.includes("拖放字母到此處進行拼字")) {
      dropArea.innerHTML = "";
    }
    dropArea.appendChild(createDraggableLetter(letter));
  }

  const controlsWrapper = document.createElement("div");
  controlsWrapper.className = "d-flex justify-content-center gap-3";

  const playBtn = document.createElement("button");
  playBtn.textContent = "播放發音";
  playBtn.className = "btn btn-primary d-flex align-items-center gap-2 px-4 py-2";
  playBtn.innerHTML = `<i class="fas fa-play-circle"></i> 播放發音`;
  playBtn.addEventListener("click", () => {
    const spelledWord = Array.from(dropArea.children).map(span => span.textContent.toLowerCase()).join("");
    if (spelledWord) {
      playPronunciation(spelledWord);
    } else {
      alert("請先拖放字母來拼字！");
    }
  });

  const resetBtn = document.createElement("button");
  resetBtn.textContent = "重置拼字";
  resetBtn.className = "btn btn-secondary d-flex align-items-center gap-2 px-4 py-2";
  resetBtn.innerHTML = `<i class="fa fa-refresh"></i> 重置拼字`;
  resetBtn.addEventListener("click", () => {
    dropArea.innerHTML = "拖放字母到此處進行拼字";
  });

  controlsWrapper.appendChild(playBtn);
  controlsWrapper.appendChild(resetBtn);
  spellingSection.appendChild(controlsWrapper);
  content.appendChild(spellingSection);

  function fillDropArea(dropAreaElement, word) {
    dropAreaElement.innerHTML = "";
    for (const ch of word) {
      addDraggableLetter(ch.toUpperCase());
    }
  }

  function getAccumulatedLetters(groupId) {
    const lettersSet = new Set();
    for (let i = 1; i <= groupId; i++) {
      const g = groups.find(g => g.id === i);
      if (g) {
        g.letters.forEach(l => lettersSet.add(l.toLowerCase()));
      }
    }
    return Array.from(lettersSet).map(l => l.toUpperCase());
  }

  const titleArea = document.getElementById("group-title");
  const oldTopBtn = document.getElementById("topBackBtn");
  if (oldTopBtn) oldTopBtn.remove();

  // ==== 音頻播放工具 ====
  function playAudio(src) {
    const audio = new Audio(src);
    audio.play();
  }

  function playPronunciation(text) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US'; // or your preferred language/accent
      speechSynthesis.speak(utterance);
    } else {
      alert("抱歉，你的瀏覽器不支援語音合成");
    }
  }

  const topBackBtn = document.createElement("button");
  topBackBtn.id = "topBackBtn";
  topBackBtn.className = "btn btn-link mb-2";
  topBackBtn.innerHTML = `<i class="fa fa-home me-2"></i>返回首頁`;
  topBackBtn.onclick = goBackToHome;
  if (titleArea.parentNode) titleArea.parentNode.insertBefore(topBackBtn, titleArea);

  // 按鈕區塊：返回首頁、上一關、下一關都放在同一 row
  const btnRow = document.createElement("div");
  btnRow.className = "row mt-4";

  // 返回首頁按鈕
  const homeCol = document.createElement("div");
  homeCol.className = "col-auto";
  const bottomBackBtn = document.createElement("button");
  bottomBackBtn.className = "btn btn-link";
  bottomBackBtn.innerHTML = `<i class="fa fa-home me-2"></i>返回首頁`;
  bottomBackBtn.onclick = goBackToHome;
  homeCol.appendChild(bottomBackBtn);
  btnRow.appendChild(homeCol);

  // 上一關按鈕
  const prevGroup = groups.find(g => g.id === id - 1);
  if (prevGroup) {
    const prevCol = document.createElement("div");
    prevCol.className = "col-auto";
    const prevBtn = document.createElement("a");
    prevBtn.href = "#";
    prevBtn.className = "btn btn-outline-secondary";
    prevBtn.innerHTML = `<i class="fa fa-arrow-left me-2"></i>上一關：${prevGroup.title}`;
    prevBtn.onclick = e => {
      e.preventDefault();
      renderGroup(prevGroup.id);
    };
    prevCol.appendChild(prevBtn);
    btnRow.appendChild(prevCol);
  }

  // 下一關按鈕
const nextGroup = groups.find(g => g.id === group.nextGroupId);
if (nextGroup) {
  const nextCol = document.createElement("div");
  nextCol.className = "col-auto ms-auto"; // ms-auto 讓下一關靠右

  const nextBtn = document.createElement("a");
  nextBtn.href = "#";
  nextBtn.className = "btn btn-outline-primary";
  nextBtn.innerHTML = `下一關：${nextGroup.title}<i class="fa fa-arrow-right ms-2"></i>`;

  nextBtn.onclick = e => {
    e.preventDefault();
    renderGroup(nextGroup.id); // ✅ 所有狀態更新與內容重建都集中在這裡
  };

  nextCol.appendChild(nextBtn);
  btnRow.appendChild(nextCol);
}

content.appendChild(btnRow);
  }


// ==== 開始冒險按鈕 ====
document.addEventListener("DOMContentLoaded", () => {
  const startAdventureBtn = document.getElementById("startAdventureBtn");

  // Wrap the button in a centered container
  const wrapper = document.createElement("div");
  wrapper.className = "text-center my-5";
  startAdventureBtn.parentNode.insertBefore(wrapper, startAdventureBtn);
  wrapper.appendChild(startAdventureBtn);

  // Add Bootstrap classes
  startAdventureBtn.classList.add(
    "btn", "btn-lg", "text-white", "fw-bold",
    "rounded-pill", "shadow-lg", "px-5", "py-3"
  );

  // Add custom gradient + hover effect via inline styles and JS
  startAdventureBtn.style.background = "linear-gradient(to right, #6366f1, #8b5cf6)";
  startAdventureBtn.style.transition = "transform 0.2s ease, background 0.3s ease";

  // Hover effect
  startAdventureBtn.addEventListener("mouseenter", () => {
    startAdventureBtn.style.background = "linear-gradient(to right, #4f46e5, #7c3aed)";
    startAdventureBtn.style.transform = "scale(1.05)";
  });

  startAdventureBtn.addEventListener("mouseleave", () => {
    startAdventureBtn.style.background = "linear-gradient(to right, #6366f1, #8b5cf6)";
    startAdventureBtn.style.transform = "scale(1)";
  });

  // Click behavior
  startAdventureBtn.addEventListener("click", () => {
    currentGroupId = 1;
    renderGroup(currentGroupId);
    document.getElementById("groupList").classList.add("d-none");
    startAdventureBtn.classList.add("d-none");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// ==== 額外：返回首頁時移除 d-none ====
function removeDNoneFromHomeUI() {
  const groupList = document.getElementById("groupList");
  const startAdventureBtn = document.getElementById("startAdventureBtn");
  if (groupList) groupList.classList.remove("d-none");
  if (startAdventureBtn) startAdventureBtn.classList.remove("d-none");
}

// 修改 showHomeUI 讓它自動移除 d-none
const originalShowHomeUI = showHomeUI;
showHomeUI = function () {
  removeDNoneFromHomeUI();
  originalShowHomeUI();
};



// ==== 初始化 ====
document.addEventListener("DOMContentLoaded", () => {
  renderGroupButtons();
  setupStartButton();
  updateGlobalPhonicsMap();
});

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
  new bootstrap.Tooltip(el);
});


// ==== 回首頁邏輯 ====
function goBackToHome() {
  updateHomeContent();
  showHomeUI();
  removeTopBackButton();
  focusTitle();
  scrollToTop();
}

// ==== 更新首頁文字 ====
function updateHomeContent() {
  const groupTitle = document.getElementById("group-title");
  const groupDescription = document.getElementById("group-description");
  if (groupTitle && groupDescription) {
    groupTitle.innerHTML = `
            <div class="text-center mb-4">
                <h1 class="display-4 fw-bold text-primary mb-3">LadderLessons Phonics</h1>
                <p class="fs-4 text-muted">一起學習有趣的字母音素吧！選擇一組開始學習，或從第一組開始冒險！</p>
            </div>
        `;
    groupDescription.innerHTML = "";
  }
}
// 頁面初始時也顯示首頁內容
document.addEventListener("DOMContentLoaded", () => {
  updateHomeContent();
  updateGlobalPhonicsMap();
});

// ==== 顯示首頁 UI ====
function showHomeUI() {
  const groupList = document.getElementById("groupList");
  const startBtn = document.getElementById("startAdventureBtn");
  const content = document.getElementById("content");

  groupList.style.display = "flex";
  groupList.style.flexWrap = "wrap";
  groupList.classList.add("fade-in");

  startBtn.style.display = "inline-block";
  startBtn.classList.add("fade-in");

  content.innerHTML = "";
}

// ==== 移除返回按鈕 ====
function removeTopBackButton() {
  const topBackBtn = document.getElementById("topBackBtn");
  if (topBackBtn) topBackBtn.remove();
}

// ==== 聚焦標題 ====
function focusTitle() {
  const title = document.getElementById("group-title");
  if (title && typeof title.focus === "function") title.focus();
}

// ==== 平滑滾動到頂部 ====
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// ==== 設定文字內容 ====
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// ==== 初始化開始按鈕 ====
function setupStartButton() {
  const btn = document.getElementById("startAdventureBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      // 這裡可以加入開始冒險的邏輯
      console.log("Adventure started!");
    });
  }
}

// ==== 錄音功能 ====
let mediaRecorder;
let recordedChunks = [];
let studentAudioURL = null;

async function startRecording() {
const status = document.getElementById("recording-status");
  if (status) status.style.display = "block";

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  recordedChunks = [];
  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = e => {
    if (e.data.size > 0) recordedChunks.push(e.data);
  };

  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks, { type: "audio/webm" });
    studentAudioURL = URL.createObjectURL(blob);
  };

  mediaRecorder.start();
}

function stopRecording() {
const status = document.getElementById("recording-status");
  if (status) status.style.display = "none";

  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  }
}

function playStudentRecording() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  if (studentAudioURL) {
    currentAudio = new Audio(studentAudioURL);
    currentAudio.play();
  } else {
    alert("請先錄音！");
  }
}


function playCorrectAudio(src) {
  const audio = new Audio(src);
  audio.play();
}

// === 全域音訊控制 ===
if (typeof window.currentAudio === "undefined") window.currentAudio = null;
if (typeof window.isRecording === "undefined") window.isRecording = false;

function stopAllAudio() {
  if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0;
    window.currentAudio = null;
  }
}