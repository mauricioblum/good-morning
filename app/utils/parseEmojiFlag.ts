export const regionalIndicatorSymbolsMap = {
  '🇦': 'a',
  '🇧': 'b',
  '🇨': 'c',
  '🇩': 'd',
  '🇪': 'e',
  '🇫': 'f',
  '🇬': 'g',
  '🇭': 'h',
  '🇮': 'i',
  '🇯': 'j',
  '🇰': 'k',
  '🇱': 'l',
  '🇲': 'm',
  '🇳': 'n',
  '🇴': 'o',
  '🇵': 'p',
  '🇶': 'q',
  '🇷': 'r',
  '🇸': 's',
  '🇹': 't',
  '🇺': 'u',
  '🇻': 'v',
  '🇼': 'w',
  '🇽': 'x',
  '🇾': 'y',
  '🇿': 'z',
} as Record<string, string>;

export function parseEmojiFlag(flag: string) {
  const country = [...flag].map((char) => regionalIndicatorSymbolsMap[char]).join('');

  return country;
}

export function parseLetterFlag(value: string) {
  const country = [...value].map((char) => regionalIndicatorSymbolsMap[char]).join('');

  return country;
}
