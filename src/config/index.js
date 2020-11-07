import cardsData from "./cards.json";

export const network = {
  56: {
    name: "BSC Mainnet",
    contract: "0x304681A36e7413d4d818ec47E1FD0fAf066f8e21",
    token: "0x10747e2045a0ef884a0586ac81558f43285ea3c7"
  },
  97: {
    name: "BSC Testnet",
    contract: "0x47E5e5cC074E581394e953B349E85b358Bd3C7D6",
    token: "0x36eb1b02cb7be3ffa1ee7bd2a3c7d036002730f7"
  }
};

export const cards = cardsData;

export const i18n = [
  {
    langDisplay: "中文",
    locale: "zh",
    aliases: ["zh", "zh-cn", "zh-hk", "zh-sg", "zh-tw"]
  },
  {
    langDisplay: "English",
    locale: "en",
    aliases: [
      "en",
      "en-us",
      "en-au",
      "en-bz",
      "en-ca",
      "en-ie",
      "en-jm",
      "en-nz",
      "en-ph",
      "en-za",
      "en-tt",
      "en-gb",
      "en-zw"
    ]
  },
  {
    langDisplay: "日本語",
    locale: "jp",
    aliases: ["jp", "ja", "ja-jp"]
  }
];
