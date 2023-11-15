let number = 0;
let backgroundImage;

function preload() {
  // Load a random image from the internet
  let imageUrl = 'https://cdn.discordapp.com/attachments/787035171361914901/1174274480663711774/scale_pdf.png?ex=6566ff55&is=65548a55&hm=3cb0667aaabf2a87cb00e6510b53b41450242f23c6386acf3333bf31577d619d&'; // Replace with your desired image URL
  backgroundImage = loadImage(imageUrl);
}

function setup() {
  createCanvas(877, 620);
}

function draw() {
  // Set the background to the loaded image
  background(backgroundImage);

  textAlign(CENTER, CENTER);
  textSize(32);

  // Check if the mouse is pressed
  if (mouseIsPressed) {
    // Increase the number up to 160
    if (number < 160) {
      number += 1;
    }
  }

  // Display the number
  fill(0);
  text(number, 430, 100);

  // Apply the blur effect when the counter reaches 135
  if (number >= 135 && number < 160) {
    let blurAmount = map(number, 135, 160, 0, 10); // Map the blur amount based on the counter
    filter(BLUR, blurAmount);
  }
}
