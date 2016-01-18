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
    root.gridmapLayoutVietnam = factory();
  }
}(this, function () {
  return [
  {
    "x": 2,
    "y": 0,
    "enName": "Hà Giang",
    "enAbbr": "HG",
    "localName": "Hà Giang",
    "localAbbr": "HG"
  },
  {
    "x": 3,
    "y": 0,
    "enName": "Cao Bằng",
    "enAbbr": "CB",
    "localName": "Cao Bằng",
    "localAbbr": "CB"
  },
  {
    "x": 0,
    "y": 1,
    "enName": "Lai Châu",
    "enAbbr": "LC",
    "localName": "Lai Châu",
    "localAbbr": "LC"
  },
  {
    "x": 1,
    "y": 1,
    "enName": "Lào Cai",
    "enAbbr": "LCa",
    "localName": "Lào Cai",
    "localAbbr": "LCa"
  },
  {
    "x": 2,
    "y": 1,
    "enName": "Yên Bái",
    "enAbbr": "YB",
    "localName": "Yên Bái",
    "localAbbr": "YB"
  },
  {
    "x": 3,
    "y": 1,
    "enName": "Tuyên Quang",
    "enAbbr": "TQ",
    "localName": "Tuyên Quang",
    "localAbbr": "TQ"
  },
  {
    "x": 4,
    "y": 1,
    "enName": "Bắc Kạn",
    "enAbbr": "BC",
    "localName": "Bắc Cạn",
    "localAbbr": "BC"
  },
  {
    "x": 0,
    "y": 2,
    "enName": "Điện Biên",
    "enAbbr": "ĐB",
    "localName": "Điện Biên",
    "localAbbr": "ĐB"
  },
  {
    "x": 1,
    "y": 2,
    "enName": "Sơn La",
    "enAbbr": "SL",
    "localName": "Sơn La",
    "localAbbr": "SL"
  },
  {
    "x": 2,
    "y": 2,
    "enName": "Phú Thọ",
    "enAbbr": "PT",
    "localName": "Phú Thọ",
    "localAbbr": "PT"
  },
  {
    "x": 3,
    "y": 2,
    "enName": "Vĩnh Phúc",
    "enAbbr": "VP",
    "localName": "Vĩnh Phúc",
    "localAbbr": "VP"
  },
  {
    "x": 4,
    "y": 2,
    "enName": "Thái Nguyên",
    "enAbbr": "TNg",
    "localName": "Thái Nguyên",
    "localAbbr": "TNg"
  },
  {
    "x": 5,
    "y": 2,
    "enName": "Lạng Sơn",
    "enAbbr": "LS",
    "localName": "Lạng Sơn",
    "localAbbr": "LS"
  },
  {
    "x": 2,
    "y": 3,
    "enName": "Hòa Bình",
    "enAbbr": "HB",
    "localName": "Hoà Bình",
    "localAbbr": "HB"
  },
  {
    "x": 3,
    "y": 3,
    "enName": "Hà Nội",
    "enAbbr": "HN",
    "localName": "Hà Nội",
    "localAbbr": "HN"
  },
  {
    "x": 4,
    "y": 3,
    "enName": "Bắc Ninh",
    "enAbbr": "BN",
    "localName": "Bắc Ninh",
    "localAbbr": "BN"
  },
  {
    "x": 5,
    "y": 3,
    "enName": "Bắc Giang",
    "enAbbr": "BG",
    "localName": "Bắc Giang",
    "localAbbr": "BG"
  },
  {
    "x": 6,
    "y": 3,
    "enName": "Quảng Ninh",
    "enAbbr": "QN",
    "localName": "Quảng Ninh",
    "localAbbr": "QN"
  },
  {
    "x": 3,
    "y": 4,
    "enName": "Hà Nam",
    "enAbbr": "HNa",
    "localName": "Hà Nam",
    "localAbbr": "HNa"
  },
  {
    "x": 4,
    "y": 4,
    "enName": "Hưng Yên",
    "enAbbr": "HY",
    "localName": "Hưng Yên",
    "localAbbr": "HY"
  },
  {
    "x": 5,
    "y": 4,
    "enName": "Hải Dương",
    "enAbbr": "HD",
    "localName": "Hải D­ương",
    "localAbbr": "HD"
  },
  {
    "x": 2,
    "y": 5,
    "enName": "Ninh Bình",
    "enAbbr": "NB",
    "localName": "Ninh Bình",
    "localAbbr": "NB"
  },
  {
    "x": 3,
    "y": 5,
    "enName": "Nam Định",
    "enAbbr": "NĐ",
    "localName": "Nam Định",
    "localAbbr": "NĐ"
  },
  {
    "x": 4,
    "y": 5,
    "enName": "Thái Bình",
    "enAbbr": "TB",
    "localName": "Thái Bình",
    "localAbbr": "TB"
  },
  {
    "x": 2,
    "y": 6,
    "enName": "Thanh Hóa",
    "enAbbr": "TH",
    "localName": "Thanh Hoá",
    "localAbbr": "TH"
  },
  {
    "x": 3,
    "y": 6,
    "enName": "Ninh Bình",
    "enAbbr": "NB",
    "localName": "Ninh Bình",
    "localAbbr": "NB"
  },
  {
    "x": 4,
    "y": 6,
    "enName": "Hải Phòng",
    "enAbbr": "HP",
    "localName": "Hải Phòng",
    "localAbbr": "HP"
  },
  {
    "x": 2,
    "y": 7,
    "enName": "Nghệ An",
    "enAbbr": "NA",
    "localName": "Nghệ An",
    "localAbbr": "NA"
  },
  {
    "x": 3,
    "y": 8,
    "enName": "Hà Tĩnh",
    "enAbbr": "HT",
    "localName": "Hà Tĩnh",
    "localAbbr": "HT"
  },
  {
    "x": 4,
    "y": 9,
    "enName": "Quảng Bình",
    "enAbbr": "QB",
    "localName": "Quảng Bình",
    "localAbbr": "QB"
  },
  {
    "x": 5,
    "y": 10,
    "enName": "Quảng Trị",
    "enAbbr": "QT",
    "localName": "Quảng Trị",
    "localAbbr": "QT"
  },
  {
    "x": 6,
    "y": 11,
    "enName": "Thừa Thiên - Huế",
    "enAbbr": "TTH",
    "localName": "Thừa Thiên Huế",
    "localAbbr": "TTH"
  },
  {
    "x": 6,
    "y": 12,
    "enName": "Quảng Nam",
    "enAbbr": "QNa",
    "localName": "Quảng Nam",
    "localAbbr": "QNa"
  },
  {
    "x": 7,
    "y": 12,
    "enName": "Đà Nẵng",
    "enAbbr": "ĐNa",
    "localName": "Đà Nẵng",
    "localAbbr": "ĐNa"
  },
  {
    "x": 6,
    "y": 13,
    "enName": "Kon Tum",
    "enAbbr": "KT",
    "localName": "Kon Tum",
    "localAbbr": "KT"
  },
  {
    "x": 7,
    "y": 13,
    "enName": "Quảng Ngãi",
    "enAbbr": "QNg",
    "localName": "Quảng Ngãi",
    "localAbbr": "QNg"
  },
  {
    "x": 6,
    "y": 14,
    "enName": "Gia Lai",
    "enAbbr": "GL",
    "localName": "Gia Lai",
    "localAbbr": "GL"
  },
  {
    "x": 7,
    "y": 14,
    "enName": "Bình Định",
    "enAbbr": "BĐ",
    "localName": "Bình Định",
    "localAbbr": "BĐ"
  },
  {
    "x": 6,
    "y": 15,
    "enName": "Đắk Lắk",
    "enAbbr": "ĐL",
    "localName": "Đắc Lắc",
    "localAbbr": "ĐL"
  },
  {
    "x": 7,
    "y": 15,
    "enName": "Phú Yên",
    "enAbbr": "PY",
    "localName": "Phú Yên",
    "localAbbr": "PY"
  },
  {
    "x": 4,
    "y": 16,
    "enName": "Bình Phước",
    "enAbbr": "BP",
    "localName": "Bình Ph­ước",
    "localAbbr": "BP"
  },
  {
    "x": 5,
    "y": 16,
    "enName": "Đăk Nông",
    "enAbbr": "ĐNô",
    "localName": "Đắc Nông",
    "localAbbr": "ĐNô"
  },
  {
    "x": 6,
    "y": 16,
    "enName": "Lâm Đồng",
    "enAbbr": "LĐ",
    "localName": "Lâm Đồng",
    "localAbbr": "LĐ"
  },
  {
    "x": 7,
    "y": 16,
    "enName": "Khánh Hòa",
    "enAbbr": "KH",
    "localName": "Khánh Hoà",
    "localAbbr": "KH"
  },
  {
    "x": 3,
    "y": 17,
    "enName": "Tây Ninh",
    "enAbbr": "TN",
    "localName": "Tây Ninh",
    "localAbbr": "TN"
  },
  {
    "x": 4,
    "y": 17,
    "enName": "Bình Dương",
    "enAbbr": "BD",
    "localName": "Bình D­ương",
    "localAbbr": "BD"
  },
  {
    "x": 5,
    "y": 17,
    "enName": "Đồng Nai",
    "enAbbr": "ĐN",
    "localName": "Đồng Nai",
    "localAbbr": "ĐN"
  },
  {
    "x": 6,
    "y": 17,
    "enName": "Bình Thuận",
    "enAbbr": "BTh",
    "localName": "Bình Thuận",
    "localAbbr": "BTh"
  },
  {
    "x": 7,
    "y": 17,
    "enName": "Ninh Thuận",
    "enAbbr": "NT",
    "localName": "Ninh Thuận",
    "localAbbr": "NT"
  },
  {
    "x": 1,
    "y": 18,
    "enName": "An Giang",
    "enAbbr": "AG",
    "localName": "An Giang",
    "localAbbr": "AG"
  },
  {
    "x": 2,
    "y": 18,
    "enName": "Đồng Tháp",
    "enAbbr": "ĐT",
    "localName": "Đồng Tháp",
    "localAbbr": "ĐT"
  },
  {
    "x": 3,
    "y": 18,
    "enName": "Long An",
    "enAbbr": "LA",
    "localName": "Long An",
    "localAbbr": "LA"
  },
  {
    "x": 4,
    "y": 18,
    "enName": "Hồ Chí Minh city",
    "enAbbr": "HCM",
    "localName": "Tp. Hồ Chí Minh",
    "localAbbr": "HCM"
  },
  {
    "x": 6,
    "y": 18,
    "enName": "Bà Rịa - Vũng Tàu",
    "enAbbr": "BV",
    "localName": "Bà Rịa – Vũng Tàu",
    "localAbbr": "BV"
  },
  {
    "x": 1,
    "y": 19,
    "enName": "Kiên Giang",
    "enAbbr": "KG",
    "localName": "Kiên Giang",
    "localAbbr": "KG"
  },
  {
    "x": 2,
    "y": 19,
    "enName": "Cần Thơ",
    "enAbbr": "CT",
    "localName": "Cần Thơ",
    "localAbbr": "CT"
  },
  {
    "x": 3,
    "y": 19,
    "enName": "Tiền Giang",
    "enAbbr": "TG",
    "localName": "Tiền Giang",
    "localAbbr": "TG"
  },
  {
    "x": 2,
    "y": 20,
    "enName": "Hậu Giang",
    "enAbbr": "HGi",
    "localName": "Hậu Giang",
    "localAbbr": "HGi"
  },
  {
    "x": 3,
    "y": 20,
    "enName": "Vĩnh Long",
    "enAbbr": "VL",
    "localName": "Vĩnh Long",
    "localAbbr": "VL"
  },
  {
    "x": 4,
    "y": 20,
    "enName": "Bến Tre",
    "enAbbr": "BT",
    "localName": "Bến Tre",
    "localAbbr": "BT"
  },
  {
    "x": 2,
    "y": 21,
    "enName": "Bạc Liêu",
    "enAbbr": "BL",
    "localName": "Bạc Liêu",
    "localAbbr": "BL"
  },
  {
    "x": 3,
    "y": 21,
    "enName": "Sóc Trăng",
    "enAbbr": "ST",
    "localName": "Sóc Trăng",
    "localAbbr": "ST"
  },
  {
    "x": 4,
    "y": 21,
    "enName": "Trà Vinh",
    "enAbbr": "TV",
    "localName": "Trà Vinh",
    "localAbbr": "TV"
  },
  {
    "x": 2,
    "y": 22,
    "enName": "Cà Mau",
    "enAbbr": "CM",
    "localName": "Cà Mau",
    "localAbbr": "CM"
  }
];
}));