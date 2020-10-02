class RecognitionData {
  /**
   *
   * @param {Object} Data
   */
  static Encode(Data) {
    let Id = Object.keys(Data);
    let keySize = Id.reduce((a, b) => a + b.length + 1, 0);
    let DataSize = Math.ceil((Data[Id[0]].hash[0].length * 3) / 8) * Id.length;
    let PrefixSize = Id.length;
    let HeaderSize = 2;
    let AllSize = PrefixSize + keySize + DataSize + HeaderSize;
    let DataBuffer = new Uint8Array(AllSize);
    let index = 0;
    // Write Header
    DataBuffer[index++] = 3; //Version
    DataBuffer[index++] = (Data[Id[0]].hash[0].length >> 8) & 0b11111111;
    DataBuffer[index++] = Data[Id[0]].hash[0].length & 0b11111111;

    //
    for (let [k, v] of Object.entries(Data)) {
      let type=v.type;
      v=v.hash;
      DataBuffer[index++] = k.length;
      // Write Key
      for (let s of k) {
        DataBuffer[index++] = s.charCodeAt(0);
      }
      // Write Type
      DataBuffer[index++]=this.ItemTypes.indexOf(type)
      v = [].concat(...v);
      let Byte = 0;
      let BitI = 0;
      for (let [i, bit] of v.entries()) {
        if (bit) {
          Byte = (Byte << 1) + 1;
        } else {
          Byte = Byte << 1;
        }
        if (++BitI == 8 || i == v.length - 1) {
          Byte = Byte << (8 - BitI);
          DataBuffer[index++] = Byte;
          Byte = 0;
          BitI = 0;
        }
      }
    }
    return DataBuffer;
  }
  static Decode(Encoded) {
    let Index = 1;
    let BitLength = (Encoded[Index] << 8) | Encoded[Index + 1];
    Index += 2;
    let Mode = "KeySize";
    let Key = "";
    let KeySize = 0;
    let KeyIndex = 0;
    let Data = [[], [], []];
    let DataC = 0;
    let OutPut = {};
    let Type=""
    for (; Index < Encoded.length; Index++) {
      switch (Mode) {
        case "KeySize":
          KeySize = Encoded[Index];
          Mode = "Key";
          KeyIndex = 0;
          Key = "";
          break;
        case "Key":
          Key += String.fromCharCode(Encoded[Index]);
          if (++KeyIndex == KeySize) {
            Mode = "Type";
            DataC = 0;
            Data = [[], [], []];
          }
          break;
        case "Type":
          Type=this.ItemTypes[Encoded[Index]];
          Mode = "Data";
          break;
        case "Data":
          var Byte = Encoded[Index];
          var BinByte = Byte.toString("2").padStart(8, "0").split("");
          for (let Bit of BinByte) {
            if (Data[DataC].push(Bit == "1") == BitLength) {
              if (++DataC == 3) {
                OutPut[Key] = {hash:Data,type:Type};
                Mode = "KeySize";
                break;
              }
            }
          }
          break;
      }
    }
    return OutPut;
  }
}
RecognitionData.ItemTypes = [
  "CARD_EXP",
  "MATERIAL",
  "GOLD",
  "DIAMOND",
  "DIAMOND_SHD",
  "HGG_SHD",
  "LGG_SHD",
  "EXP_PLAYER",
  "TKT_TRY",
  "TKT_RECRUIT",
  "TKT_INST_FIN",
  "TKT_GACHA",
  "TKT_GACHA_10",
  "SOCIAL_PT",
  "AP_GAMEPLAY",
  "AP_BASE",
  "TKT_GACHA_PRSV",
  "AP_ITEM",
  "ACTIVITY_COIN",
  "AP_SUPPLY",
  "RENAMING_CARD",
  "ACTIVITY_ITEM",
  "ET_STAGE",
  "VOUCHER_PICK",
  "VOUCHER_CGACHA",
  "VOUCHER_MGACHA",
  "CRS_SHOP_COIN",
  "CRS_RUNE_COIN",
  "LMTGS_COIN",
  "EPGS_COIN",
  "LIMITED_TKT_GACHA_10",
  "REP_COIN"
];
module.exports = RecognitionData;
