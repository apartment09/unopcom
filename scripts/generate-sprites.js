/**
 * UNOPCOM Sprite Generator
 * Creates original pixel-art sprites inspired by the X-COM universe.
 * Each sprite is defined as string art with color-coded characters.
 */

const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const OUT = path.join(__dirname, '..', 'public', 'assets', 'sprites');

// ── Palette ──────────────────────────────────────────────────────────

const C = {
  '.': [0, 0, 0, 0],           // transparent
  // Grays
  'w': [220, 225, 230, 255],   // white/light
  'l': [170, 178, 186, 255],   // light gray
  'g': [120, 128, 136, 255],   // gray
  'd': [70, 78, 86, 255],      // dark gray
  'k': [30, 35, 40, 255],      // near-black
  // Soldier blues
  'B': [40, 80, 160, 255],     // armor blue
  'b': [60, 110, 190, 255],    // armor blue light
  'N': [30, 55, 110, 255],     // armor blue dark
  // Soldier green
  'G': [50, 120, 60, 255],     // armor green
  'h': [70, 150, 80, 255],     // armor green light
  // Skin
  's': [210, 175, 140, 255],   // skin
  'S': [185, 150, 115, 255],   // skin shadow
  // Sectoid (gray-green)
  'a': [140, 155, 130, 255],   // alien skin
  'A': [110, 125, 100, 255],   // alien skin dark
  'e': [20, 20, 20, 255],      // alien eyes
  // Floater (brown-red)
  'f': [160, 100, 70, 255],    // floater body
  'F': [130, 75, 50, 255],     // floater dark
  'j': [100, 110, 120, 255],   // jet pack
  // Muton (dark green)
  'M': [80, 100, 50, 255],     // muton body
  'm': [100, 130, 60, 255],    // muton light
  'K': [55, 70, 35, 255],      // muton dark
  // Ethereal (purple-white)
  'E': [160, 130, 190, 255],   // ethereal robe
  'P': [130, 100, 165, 255],   // ethereal dark
  'p': [190, 170, 215, 255],   // ethereal light
  // Snakeman (green-yellow)
  'V': [100, 140, 50, 255],    // snake body
  'v': [130, 170, 70, 255],    // snake light
  'W': [70, 100, 35, 255],     // snake dark
  // Chryssalid (dark purple-blue)
  'X': [80, 50, 110, 255],     // chrys body
  'x': [110, 70, 145, 255],    // chrys light
  'Z': [55, 30, 80, 255],      // chrys dark
  // Red accents
  'r': [200, 50, 50, 255],     // red
  'R': [160, 35, 35, 255],     // dark red
  // Yellow accents
  'y': [220, 200, 60, 255],    // yellow
  'Y': [180, 160, 40, 255],    // dark yellow
  // Orange
  'o': [210, 140, 40, 255],    // orange
  // Cyan
  'c': [0, 180, 216, 255],     // cyan accent
};

// ── Sprite Definitions ───────────────────────────────────────────────

const SPRITES = {

  // ── Soldiers ─────────────────────────────────────────────────────

  xcom0: [  // Standard soldier, blue armor
    '...........',
    '....sss....',
    '...sssss...',
    '...sSsSs...',
    '....sss....',
    '....bBb....',
    '...bBBBb...',
    '..bbBBBbb..',
    '.bbbBBBbbb.',
    '..dBBBBBd..',
    '...bBBBb...',
    '...BNNNB...',
    '...BB.BB...',
    '...Bd.dB...',
    '...dd.dd...',
    '...........',
  ],

  xcom1: [  // Scout soldier, green armor
    '...........',
    '....sss....',
    '...sssss...',
    '...sSsSs...',
    '....sss....',
    '....hGh....',
    '...hGGGh...',
    '..hhGGGhh..',
    '.dhhGGGhhd.',
    '..dGGGGGd..',
    '...hGGGh...',
    '...GdddG...',
    '...GG.GG...',
    '...Gd.dG...',
    '...dd.dd...',
    '...........',
  ],

  xcom2: [  // Heavy soldier, dark armor
    '...........',
    '....sss....',
    '...sssss...',
    '...sSsSs...',
    '....sss....',
    '....dNd....',
    '...dNNNd...',
    '..ddNNNdd..',
    '.dddNNNddd.',
    '..kNNNNNk..',
    '...dNNNd...',
    '...NkkkN...',
    '...NN.NN...',
    '...Nk.kN...',
    '...kk.kk...',
    '...........',
  ],

  // ── Aliens ───────────────────────────────────────────────────────

  sectoid: [  // Classic gray — big head, small body
    '...........',
    '...aaaaa...',
    '..aaaaaaa..',
    '.aaaaaaaaa.',
    '.aeaaaaaea.',
    '.aeeaaaeea.',
    '..aaAaAaa..',
    '...aAAAa...',
    '....aAa....',
    '...AaAaA...',
    '..Aa.a.aA..',
    '....aAa....',
    '....A.A....',
    '...A...A...',
    '...........',
    '...........',
  ],

  floater: [  // Hovering alien with jet pack
    '...........',
    '....fff....',
    '...fffff...',
    '...fefef...',
    '...fffff...',
    '....fFf....',
    '...fFFfj...',
    '..jfFFfjj..',
    '..jjFFjjj..',
    '...jrrj....',
    '...jooj....',
    '....yy.....',
    '...y..y....',
    '...........',
    '...........',
    '...........',
  ],

  muton: [  // Big, muscular green alien
    '...........',
    '....MMM....',
    '...MMMMM...',
    '...MeMeM...',
    '...MMMMM...',
    '....KMK....',
    '..mMMMMMm..',
    '.mMMMMMMMMm.',
    '.MMMMMMMMM.',
    '..MMMMMMM..',
    '..mMMMMMm..',
    '...MKKKm...',
    '..MM...MM..',
    '..MK...KM..',
    '..KK...KK..',
    '...........',
  ],

  ethereal: [  // Tall, thin, robed psychic alien
    '...........',
    '....ppp....',
    '...ppppp...',
    '...pepep...',
    '...ppppp...',
    '....EPE....',
    '...EEEEE...',
    '..EEEEEEE..',
    '..EEPEPEE..',
    '..EEEEEEE..',
    '...EEEEE...',
    '...EEEEE...',
    '..EEEEEEE..',
    '..PEEEEEP..',
    '...PPPPP...',
    '...........',
  ],

  snakeman: [  // Serpentine body, upright posture
    '...........',
    '....VVV....',
    '...VVVVV...',
    '...VeVeV...',
    '...VVVVV...',
    '....WVW....',
    '...vVVVv...',
    '...VVVVV...',
    '....VVV....',
    '....VWV....',
    '...VWWV....',
    '..VWWWV....',
    '..VWWV.....',
    '..VVV......',
    '..WW.......',
    '...........',
  ],

  chryssalid: [  // Insectoid horror, claws
    '...........',
    '..x.....x..',
    '..xx...xx..',
    '...xx.xx...',
    '...XXXXX...',
    '..XXXXXXX..',
    '.XXXXXXXXX.',
    '.XxXXXXXxX.',
    '..XXXXXXX..',
    '..XXZZZXX..',
    '...XXXXX...',
    '..xX...Xx..',
    '.xX.....Xx.',
    '.x.......x.',
    '...........',
    '...........',
  ],
};

// ── Renderer ─────────────────────────────────────────────────────────

function renderSprite(name, rows) {
  const height = rows.length;
  const width = Math.max(...rows.map(r => r.length));
  const scale = 3;  // 3x scale for crisp pixels

  const png = new PNG({ width: width * scale, height: height * scale });
  png.data.fill(0); // transparent

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < rows[y].length; x++) {
      const ch = rows[y][x];
      const color = C[ch];
      if (!color || color[3] === 0) continue;

      // Draw scaled pixel
      for (let sy = 0; sy < scale; sy++) {
        for (let sx = 0; sx < scale; sx++) {
          const px = (x * scale + sx);
          const py = (y * scale + sy);
          const idx = (py * width * scale + px) * 4;
          png.data[idx] = color[0];
          png.data[idx + 1] = color[1];
          png.data[idx + 2] = color[2];
          png.data[idx + 3] = color[3];
        }
      }
    }
  }

  const filePath = path.join(OUT, `${name}.png`);
  fs.writeFileSync(filePath, PNG.sync.write(png));
  console.log(`  ${name}.png (${width * scale}x${height * scale})`);
}

// ── Main ─────────────────────────────────────────────────────────────

function main() {
  fs.mkdirSync(OUT, { recursive: true });
  console.log('Generating UNOPCOM sprites...\n');

  for (const [name, rows] of Object.entries(SPRITES)) {
    renderSprite(name, rows);
  }

  console.log(`\nDone! ${Object.keys(SPRITES).length} sprites generated.`);
}

main();
