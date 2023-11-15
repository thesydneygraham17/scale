let currentImageIndex = 0;
let images = [
  'https://media.discordapp.net/attachments/1059984634114490499/1174286355652677662/blueskin.png?ex=65670a64&is=65549564&hm=60724730d7d4ceaa98c492773d5365ceb425f78580526a7531b5083899b25117&=&width=691&height=489',
  'https://media.discordapp.net/attachments/1059984634114490499/1174289097087537152/pinched_skin.png?ex=65670cf1&is=655497f1&hm=5a4fbc321ffcaf1dbfd44e66c4681916488ef849baf54efb838837166b839eab&=&width=691&height=489',
];

function preload() {
  // Load initial image
  loadImage(images[currentImageIndex], img => {
    currentImage = img;
  });
}

function setup() {
  createCanvas(877, 620);
}

function draw() {
  background(220);

  // Display the current image
  if (currentImage) {
    image(currentImage, 0, 0, width, height);
  }


}

function mousePressed() {
  // Switch to the next image when clicked
  currentImageIndex = (currentImageIndex + 1) % images.length;
  loadImage(images[currentImageIndex], img => {
    currentImage = img;
  });
}
///