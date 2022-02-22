import altaiFlag from '../assets/flags/altai.png';
import aragonFlag from '../assets/flags/aragon.png';
import asturiasFlag from '../assets/flags/asturias.png';
import bashkirFlag from '../assets/flags/bashkir.png';
import basqueFlag from '../assets/flags/basque.png';
import bavarianFlag from '../assets/flags/bavarian.png';
import bretonFlag from '../assets/flags/breton.png';
import catalanFlag from '../assets/flags/catalan.png';
import galiciaFlag from '../assets/flags/galicia.png';

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

export const customFlagsMap = {
  'custom-altai': altaiFlag,
  'custom-aragon': aragonFlag,
  'custom-asturias': asturiasFlag,
  'custom-bashkir': bashkirFlag,
  'custom-basque': basqueFlag,
  'custom-bavarian': bavarianFlag,
  'custom-breton': bretonFlag,
  'custom-catalan': catalanFlag,
  'custom-galician': galiciaFlag,
} as Record<string, string>;

export function parseEmojiFlag(flag: string) {
  if (flag.startsWith('custom')) {
    return flag;
  }

  const country = [...flag].map((char) => regionalIndicatorSymbolsMap[char]).join('');

  return country;
}

export function parseLetterFlag(value: string) {
  const country = [...value].map((char) => regionalIndicatorSymbolsMap[char]).join('');

  return country;
}

export function parseFlag(flag: string, width?: number, height?: number) {
  if (flag.startsWith('custom')) {
    return <img src={customFlagsMap[flag]} width={width || 36} height={height || 40} alt={flag} />;
  } else {
    return flag;
  }
}
