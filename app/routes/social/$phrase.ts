import { createCanvas, loadImage, registerFont } from 'canvas';
import { getLines } from '../../utils/canvasUtils';
import { parseEmojiFlag } from '../../utils/parseEmojiFlag';

registerFont('assets/fonts/Inter/Inter-Regular.otf', {
  family: 'Inter',
  weight: '400',
});
registerFont('assets/fonts/Inter/Inter-Bold.otf', {
  family: 'Inter',
  weight: '700',
});

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
  };
}

const generateImage = async ({
  phrase = 'Good morning',
  flag,
  width = 1200,
  height = 630,
  fontSize = 60,
  margin = 60,
  font = 'Inter',
}: GenerateSocialImage) => {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createLinearGradient(0, width, width, height);
  gradient.addColorStop(0.45, '#87CEEB');
  gradient.addColorStop(1, '#f2d544');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Calculate font sizes and metrics
  ctx.font = `bold ${fontSize}px ${font}`;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  const titleLines = getLines(ctx, 'Good Morning of the day', width - margin * 2);
  const lineHeight = fontSize * 1.2;
  const textHeight = titleLines.length * lineHeight;
  const offset = 150;

  // Draw title text
  titleLines
    .map((line, index) => ({
      text: line,
      x: width / 2,
      y: (height - textHeight) / 2 + index * lineHeight - offset,
    }))
    .forEach(({ text, x, y }) => {
      ctx.fillStyle = '#000';
      ctx.fillText(text, x, y);
    });

  // Vertical spacing after the title before drawing the author info
  const spacingAfterTitle = 20;
  const spacingAfterFlag = 40;

  // Where to start drawing author info
  const bottomOfTitleText = height / 2 + textHeight / 2 + spacingAfterTitle;
  // Height of the author name text, used for vertically centering with image
  const phraseHeight = ctx.measureText(phrase).actualBoundingBoxAscent;

  if (flag) {
    const country = parseEmojiFlag(flag);
    const flagImage = await loadImage(`https://flagcdn.com/108x81/${country}.png`);
    const x = width / 2.18;
    const y = bottomOfTitleText + lineHeight / 2 - offset;
    ctx.drawImage(flagImage, x, y);
  }

  const phrasePosition = {
    x: width / 2,
    y: bottomOfTitleText + phraseHeight / 2 + spacingAfterFlag,
  };
  ctx.font = `${fontSize + 30}px ${font}`;
  ctx.fillText(phrase, phrasePosition.x, phrasePosition.y);

  return canvas.toBuffer('image/png');
};

export async function loader({ params }: Params) {
  const imageName = params.phrase.slice(0, params.phrase.indexOf('.'));

  const canvasImage = await generateImage({ flag: '🇮🇹', phrase: imageName });
  return new Response(canvasImage, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Content-Disposition': `inline; filename="${imageName}.png"`,
      'Cache-Control': 'public, max-age=2419200',
      'x-content-type-options': 'nosniff',
    },
  });
}
