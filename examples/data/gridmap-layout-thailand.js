// Define module using Universal Module Definition pattern
// https://github.com/umdjs/umd/blob/master/returnExports.js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // Support AMD. Register as an anonymous module.
    define([], factory);
  }
  else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory();
  }
  else {
    // No AMD. Set module as a global variable
    root.gridmapLayoutThailand = factory();
  }
}(this, function () {
  return [
  {
    "x": 2,
    "y": 0,
    "enName": "ChiangRai",
    "enAbbr": "CRI",
    "localName": "เชียงราย",
    "localAbbr": "ชร"
  },
  {
    "x": 0,
    "y": 1,
    "enName": "MaeHongSon",
    "enAbbr": "MSN",
    "localName": "แม่ฮ่องสอน",
    "localAbbr": "มส"
  },
  {
    "x": 1,
    "y": 1,
    "enName": "ChiangMai",
    "enAbbr": "CMI",
    "localName": "เชียงใหม่",
    "localAbbr": "ชม"
  },
  {
    "x": 2,
    "y": 1,
    "enName": "Phayao",
    "enAbbr": "PYO",
    "localName": "พะเยา",
    "localAbbr": "พย"
  },
  {
    "x": 3,
    "y": 1,
    "enName": "Nan",
    "enAbbr": "NAN",
    "localName": "น่าน",
    "localAbbr": "นน"
  },
  {
    "x": 0,
    "y": 2,
    "enName": "Lamphun",
    "enAbbr": "LPN",
    "localName": "ลำพูน",
    "localAbbr": "ลพ"
  },
  {
    "x": 1,
    "y": 2,
    "enName": "Lampang",
    "enAbbr": "LPG",
    "localName": "ลำปาง",
    "localAbbr": "ลป"
  },
  {
    "x": 2,
    "y": 2,
    "enName": "Phrae",
    "enAbbr": "PRE",
    "localName": "แพร่",
    "localAbbr": "พร"
  },
  {
    "x": 3,
    "y": 2,
    "enName": "Uttaradit",
    "enAbbr": "UTT",
    "localName": "อุตรดิตถ์",
    "localAbbr": "อต"
  },
  {
    "x": 0,
    "y": 3,
    "enName": "Tak",
    "enAbbr": "TAK",
    "localName": "ตาก",
    "localAbbr": "ตก"
  },
  {
    "x": 1,
    "y": 3,
    "enName": "Sukhothai",
    "enAbbr": "STI",
    "localName": "สุโขทัย",
    "localAbbr": "สท"
  },
  {
    "x": 2,
    "y": 3,
    "enName": "Phitsanulok",
    "enAbbr": "PLK",
    "localName": "พิษณุโลก",
    "localAbbr": "พล"
  },
  {
    "x": 1,
    "y": 4,
    "enName": "KamphaengPhet",
    "enAbbr": "KPT",
    "localName": "กำแพงเพชร",
    "localAbbr": "กพ"
  },
  {
    "x": 2,
    "y": 4,
    "enName": "Phichit",
    "enAbbr": "PCT",
    "localName": "พิจิตร",
    "localAbbr": "พจ"
  },
  {
    "x": 3,
    "y": 4,
    "enName": "Loei",
    "enAbbr": "LEI",
    "localName": "เลย",
    "localAbbr": "ลย"
  },
  {
    "x": 4,
    "y": 4,
    "enName": "NongKhai",
    "enAbbr": "NKI",
    "localName": "หนองคาย",
    "localAbbr": "นค"
  },
  {
    "x": 5,
    "y": 4,
    "enName": "BeungKan",
    "enAbbr": "BKN",
    "localName": "บึงกาฬ",
    "localAbbr": "บก"
  },
  {
    "x": 6,
    "y": 4,
    "enName": "SakonNakhon",
    "enAbbr": "SNK",
    "localName": "สกลนคร",
    "localAbbr": "สน"
  },
  {
    "x": 7,
    "y": 4,
    "enName": "NakhonPhanom",
    "enAbbr": "NPM",
    "localName": "นครพนม",
    "localAbbr": "นพ"
  },
  {
    "x": 1,
    "y": 5,
    "enName": "UthaiThani",
    "enAbbr": "UTI",
    "localName": "อุทัยธานี",
    "localAbbr": "อน"
  },
  {
    "x": 2,
    "y": 5,
    "enName": "NakhonSawan",
    "enAbbr": "NSN",
    "localName": "นครสวรรค์",
    "localAbbr": "นว"
  },
  {
    "x": 3,
    "y": 5,
    "enName": "Phetchabun",
    "enAbbr": "PNB",
    "localName": "เพชรบูรณ์",
    "localAbbr": "พช"
  },
  {
    "x": 4,
    "y": 5,
    "enName": "NongBuaLamPhu",
    "enAbbr": "NBP",
    "localName": "หนองบัวลำภู",
    "localAbbr": "นภ"
  },
  {
    "x": 5,
    "y": 5,
    "enName": "UdonThani",
    "enAbbr": "UDN",
    "localName": "อุดรธานี",
    "localAbbr": "อด"
  },
  {
    "x": 6,
    "y": 5,
    "enName": "Kalasin",
    "enAbbr": "KSN",
    "localName": "กาฬสินธุ์",
    "localAbbr": "กส"
  },
  {
    "x": 7,
    "y": 5,
    "enName": "Mukdahan",
    "enAbbr": "MDH",
    "localName": "มุกดาหาร",
    "localAbbr": "มห"
  },
  {
    "x": 1,
    "y": 6,
    "enName": "ChaiNat",
    "enAbbr": "CNT",
    "localName": "ชัยนาท",
    "localAbbr": "ชน"
  },
  {
    "x": 2,
    "y": 6,
    "enName": "SingBuri",
    "enAbbr": "SBR",
    "localName": "สิงห์บุรี",
    "localAbbr": "สห"
  },
  {
    "x": 3,
    "y": 6,
    "enName": "LopBuri",
    "enAbbr": "LRI",
    "localName": "ลพบุรี",
    "localAbbr": "ลบ"
  },
  {
    "x": 4,
    "y": 6,
    "enName": "Chaiyaphum",
    "enAbbr": "CPM",
    "localName": "ชัยภูมิ",
    "localAbbr": "ชย"
  },
  {
    "x": 5,
    "y": 6,
    "enName": "KhonKaen",
    "enAbbr": "KKN",
    "localName": "ขอนแก่น",
    "localAbbr": "ขก"
  },
  {
    "x": 6,
    "y": 6,
    "enName": "MahaSarakham",
    "enAbbr": "MKM",
    "localName": "มหาสารคาม",
    "localAbbr": "มค"
  },
  {
    "x": 7,
    "y": 6,
    "enName": "RoiEt",
    "enAbbr": "RET",
    "localName": "ร้อยเอ็ด",
    "localAbbr": "รอ"
  },
  {
    "x": 8,
    "y": 6,
    "enName": "Yasothon",
    "enAbbr": "YST",
    "localName": "ยโสธร",
    "localAbbr": "ยส"
  },
  {
    "x": 9,
    "y": 6,
    "enName": "AmnatCharoen",
    "enAbbr": "ACR",
    "localName": "อำนาจเจริญ",
    "localAbbr": "อจ"
  },
  {
    "x": 1,
    "y": 7,
    "enName": "SuphanBuri",
    "enAbbr": "SPB",
    "localName": "สุพรรณบุรี",
    "localAbbr": "สพ"
  },
  {
    "x": 2,
    "y": 7,
    "enName": "AngThong",
    "enAbbr": "ATG",
    "localName": "อ่างทอง",
    "localAbbr": "อท"
  },
  {
    "x": 3,
    "y": 7,
    "enName": "PhraNakhonSiAyutthaya",
    "enAbbr": "AYA",
    "localName": "พระนครศรีอยุธยา",
    "localAbbr": "อย"
  },
  {
    "x": 4,
    "y": 7,
    "enName": "Saraburi",
    "enAbbr": "SRI",
    "localName": "สระบุรี",
    "localAbbr": "สบ"
  },
  {
    "x": 5,
    "y": 7,
    "enName": "NakhonRatchasima",
    "enAbbr": "NMA",
    "localName": "นครราชสีมา",
    "localAbbr": "นม"
  },
  {
    "x": 6,
    "y": 7,
    "enName": "BuriRam",
    "enAbbr": "BRM",
    "localName": "บุรีรัมย์",
    "localAbbr": "บร"
  },
  {
    "x": 7,
    "y": 7,
    "enName": "Surin",
    "enAbbr": "SRN",
    "localName": "สุรินทร์",
    "localAbbr": "สร"
  },
  {
    "x": 8,
    "y": 7,
    "enName": "SiSaKet",
    "enAbbr": "SSK",
    "localName": "ศรีสะเกษ",
    "localAbbr": "ศก"
  },
  {
    "x": 9,
    "y": 7,
    "enName": "UbonRatchathani",
    "enAbbr": "UBN",
    "localName": "อุบลราชธานี",
    "localAbbr": "อบ"
  },
  {
    "x": 1,
    "y": 8,
    "enName": "Kanchanaburi",
    "enAbbr": "KRI",
    "localName": "กาญจนบุรี",
    "localAbbr": "กจ"
  },
  {
    "x": 2,
    "y": 8,
    "enName": "Nonthaburi",
    "enAbbr": "NBI",
    "localName": "นนทบุรี",
    "localAbbr": "นบ"
  },
  {
    "x": 3,
    "y": 8,
    "enName": "PathumThani",
    "enAbbr": "PTE",
    "localName": "ปทุมธานี",
    "localAbbr": "ปท"
  },
  {
    "x": 4,
    "y": 8,
    "enName": "NakhonNayok",
    "enAbbr": "NYK",
    "localName": "นครนายก",
    "localAbbr": "นย"
  },
  {
    "x": 5,
    "y": 8,
    "enName": "PrachinBuri",
    "enAbbr": "PRI",
    "localName": "ปราจีนบุรี",
    "localAbbr": "ปจ"
  },
  {
    "x": 1,
    "y": 9,
    "enName": "Ratchaburi",
    "enAbbr": "RBR",
    "localName": "ราชบุรี",
    "localAbbr": "รบ"
  },
  {
    "x": 2,
    "y": 9,
    "enName": "NakhonPathom",
    "enAbbr": "NPT",
    "localName": "นครปฐม",
    "localAbbr": "นฐ"
  },
  {
    "x": 3,
    "y": 9,
    "enName": "Bangkok",
    "enAbbr": "BKK",
    "localName": "กรุงเทพมหานคร",
    "localAbbr": "กทม"
  },
  {
    "x": 4,
    "y": 9,
    "enName": "ChonBuri",
    "enAbbr": "CBI",
    "localName": "ชลบุรี",
    "localAbbr": "ชบ"
  },
  {
    "x": 5,
    "y": 9,
    "enName": "Chachoengsao",
    "enAbbr": "CCO",
    "localName": "ฉะเชิงเทรา",
    "localAbbr": "ฉช"
  },
  {
    "x": 6,
    "y": 9,
    "enName": "SaKaeo",
    "enAbbr": "SKW",
    "localName": "สระแก้ว",
    "localAbbr": "สก"
  },
  {
    "x": 1,
    "y": 10,
    "enName": "Phetchaburi",
    "enAbbr": "PBI",
    "localName": "เพชรบุรี",
    "localAbbr": "พบ"
  },
  {
    "x": 2,
    "y": 10,
    "enName": "SamutSongkhram",
    "enAbbr": "SKM",
    "localName": "สมุทรสงคราม",
    "localAbbr": "สส"
  },
  {
    "x": 3,
    "y": 10,
    "enName": "SamutSakhon",
    "enAbbr": "SKN",
    "localName": "สมุทรสาคร",
    "localAbbr": "สค"
  },
  {
    "x": 4,
    "y": 10,
    "enName": "SamutPrakan",
    "enAbbr": "SPK",
    "localName": "สมุทรปราการ",
    "localAbbr": "สป"
  },
  {
    "x": 5,
    "y": 10,
    "enName": "Rayong",
    "enAbbr": "RYG",
    "localName": "ระยอง",
    "localAbbr": "รย"
  },
  {
    "x": 6,
    "y": 10,
    "enName": "Chanthaburi",
    "enAbbr": "CTI",
    "localName": "จันทบุรี",
    "localAbbr": "จบ"
  },
  {
    "x": 1,
    "y": 11,
    "enName": "PrachuapKhiriKhan",
    "enAbbr": "PKN",
    "localName": "ประจวบคีรีขันธ์",
    "localAbbr": "ปข"
  },
  {
    "x": 6,
    "y": 11,
    "enName": "Trat",
    "enAbbr": "TRT",
    "localName": "ตราด",
    "localAbbr": "ตร"
  },
  {
    "x": 0,
    "y": 12,
    "enName": "Ranong",
    "enAbbr": "RNG",
    "localName": "ระนอง",
    "localAbbr": "รน"
  },
  {
    "x": 1,
    "y": 12,
    "enName": "Chumphon",
    "enAbbr": "CPN",
    "localName": "ชุมพร",
    "localAbbr": "ชพ"
  },
  {
    "x": 0,
    "y": 13,
    "enName": "Phang-nga",
    "enAbbr": "PNA",
    "localName": "พังงา",
    "localAbbr": "พง"
  },
  {
    "x": 1,
    "y": 13,
    "enName": "SuratThani",
    "enAbbr": "SNI",
    "localName": "สุราษฎร์ธานี",
    "localAbbr": "สฎ"
  },
  {
    "x": 0,
    "y": 14,
    "enName": "Phuket",
    "enAbbr": "PKT",
    "localName": "ภูเก็ต",
    "localAbbr": "ภก"
  },
  {
    "x": 1,
    "y": 14,
    "enName": "Krabi",
    "enAbbr": "KBI",
    "localName": "กระบี่",
    "localAbbr": "กบ"
  },
  {
    "x": 2,
    "y": 14,
    "enName": "NakhonSiThammarat",
    "enAbbr": "NRT",
    "localName": "นครศรีธรรมราช",
    "localAbbr": "นศ"
  },
  {
    "x": 2,
    "y": 15,
    "enName": "Trang",
    "enAbbr": "TRG",
    "localName": "ตรัง",
    "localAbbr": "ตง"
  },
  {
    "x": 3,
    "y": 15,
    "enName": "Phatthalung",
    "enAbbr": "PLG",
    "localName": "พัทลุง",
    "localAbbr": "พท"
  },
  {
    "x": 3,
    "y": 16,
    "enName": "Satun",
    "enAbbr": "STN",
    "localName": "สตูล",
    "localAbbr": "สต"
  },
  {
    "x": 4,
    "y": 16,
    "enName": "Songkhla",
    "enAbbr": "SKA",
    "localName": "สงขลา",
    "localAbbr": "สข"
  },
  {
    "x": 5,
    "y": 16,
    "enName": "Pattani",
    "enAbbr": "PTN",
    "localName": "ปัตตานี",
    "localAbbr": "ปน"
  },
  {
    "x": 5,
    "y": 17,
    "enName": "Yala",
    "enAbbr": "YLA",
    "localName": "ยะลา",
    "localAbbr": "ยล"
  },
  {
    "x": 6,
    "y": 17,
    "enName": "Narathiwat",
    "enAbbr": "NWT",
    "localName": "นราธิวาส",
    "localAbbr": "นธ"
  }
];
}));