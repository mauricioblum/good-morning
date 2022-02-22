import { createCanvas, Image, loadImage } from 'canvas';
import { getLines } from '../../utils/canvasUtils';
import { parseFlag } from '../../utils/parseEmojiFlag';

type GenerateSocialImage = {
  // Author name to display.
  flag?: string;
  // Author name to display.
  phrase?: string;
  // Width of the social image.
  width?: number;
  // Height of the social image.
  height?: number;
  // Font size to use for the title and author name.
  fontSize?: number;
  // How much margin to leave around the edges of the image.
  margin?: number;
  // Path to the author profile image to display.
  profileImage?: string;
  // The radius of the author's profile image, if an image is supplied.
  profileRadius?: number;
  // The font to use for all text in the social image.
  font?: string;
};

interface Params {
  params: {
    phrase: string;
    flag: string;
  };
}

const generateImage = async ({
  phrase = 'Good morning',
  flag,
  width = 1200,
  height = 630,
  fontSize = 60,
  margin = 60,
  font = 'Nimbus Sans',
}: GenerateSocialImage) => {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createLinearGradient(0, width, width, height);
  gradient.addColorStop(0.45, '#27272a');
  gradient.addColorStop(1, '#27272a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Calculate font sizes and metrics
  ctx.font = `bold ${fontSize}px ${font}`;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  const titleLines = getLines(ctx, 'Good Morning of the day', width - margin * 2);
  const lineHeight = fontSize * 1.2;
  const textHeight = titleLines.length * lineHeight;
  const offset = 120;

  //

  const titleImage = await loadImage(
    'https://dummyimage.com/1200x200/27272a/fff.png&text=Good+Morning+of+the+day'
  );

  ctx.drawImage(titleImage, 0, 0);
  // Draw title text
  // titleLines
  //   .map((line, index) => ({
  //     text: line,
  //     x: width / 2,
  //     y: (height - textHeight) / 2 + index * lineHeight - offset,
  //   }))
  //   .forEach(({ text, x, y }) => {
  //     ctx.fillStyle = '#fff';
  //     ctx.fillText(text, x, y);
  //   });

  // Vertical spacing after the title before drawing the author info
  const spacingAfterTitle = 20;
  const spacingAfterFlag = 20;

  // Where to start drawing author info
  const bottomOfTitleText = height / 2 + textHeight / 2 + spacingAfterTitle;
  // Height of the author name text, used for vertically centering with image
  const phraseHeight = ctx.measureText(phrase).actualBoundingBoxAscent;

  if (flag) {
    const country = flag;
    let flagImage: Image;
    if (country.startsWith('custom')) {
      flagImage = await loadImage(parseFlag(country, 192, 144) as string);
    } else {
      flagImage = await loadImage(`https://flagcdn.com/192x144/${country}.png`);
    }
    const x = width / 2.42;
    const y = bottomOfTitleText + lineHeight / 2 - offset - 50;
    ctx.drawImage(flagImage, x, y);
  }

  const phraseWithPluses = encodeURIComponent(phrase).replace(/ /g, '+');

  const phraseImage = await loadImage(
    `https://dummyimage.com/1200x200/27272a/fff.png&text=${phraseWithPluses}`
  );

  ctx.drawImage(phraseImage, 0, bottomOfTitleText + phraseHeight / 2 + spacingAfterFlag);

  // const phrasePosition = {
  //   x: width / 2,
  //   y: bottomOfTitleText + phraseHeight / 2 + spacingAfterFlag,
  // };
  ctx.font = `${fontSize + 30}px ${font}`;

  // const phraseLines = getLines(ctx, phrase, width - margin * 2);
  // phraseLines
  //   .map((line, index) => ({
  //     text: line,
  //     x: phrasePosition.x,
  //     y: phrasePosition.y + index * lineHeight,
  //   }))
  //   .forEach(({ text, x, y }) => {
  //     ctx.fillStyle = '#fff';
  //     ctx.fillText(text, x, y);
  //   });

  return canvas.toBuffer('image/png');
};

export async function loader({ params }: Params) {
  const imageName = params.phrase.slice(0, params.phrase.indexOf('.'));
  const flag = params.flag;

  const canvasImage = await generateImage({ flag, phrase: imageName });
  return new Response(canvasImage, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Content-Disposition': `inline; filename="${encodeURIComponent(imageName)}.png"`,
      'Cache-Control': 'public, max-age=2419200',
      'x-content-type-options': 'nosniff',
    },
  });
}
