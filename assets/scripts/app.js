const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drawGrain = (ctx) => {
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 255;
      data[i] = noise;
      data[i + 1] = noise;
      data[i + 2] = noise;
      data[i + 3] = 49;
    }
    ctx.putImageData(imageData, 0, 0);
  },
  writeText = (ctx, props) => {
    ctx.font = props?.font || '12px Arial';
    ctx.fillStyle = props?.color || 'white';
    ctx.textAlign = props?.align || 'center';
    ctx.textBaseline = props?.baseline || 'middle';
    ctx.fillText(props?.text || '', props?.x, props?.y);
  },
  canvaQueries =
    canvas.width > 700
      ? 72
      : canvas.width > 600
      ? 48
      : canvas.width > 400
      ? 32
      : 32,
  wellcomeTextOffset = canvas.width > 700 ? 305 : 0;

drawGrain(context);

writeText(context, {
  text: `Hello, I'm`,
  font: `32px Inter`,
  color: '#000100aa',
  align: 'center',
  baseline: 'middle',
  x: canvas.width / 2 - wellcomeTextOffset,
  y: canvas.height / 2 - 70,
});

writeText(context, {
  text: 'Francisco Hernández',
  font: `${canvaQueries}px Inter Black`,
  color: '#000100',
  align: 'center',
  baseline: 'middle',
  x: canvas.width / 2,
  y: canvas.height / 2,
});
