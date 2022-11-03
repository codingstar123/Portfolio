// console.log("corgi carousel connected to app.js!");
$(() => {

let numOfImages = $('.carousel-images').children().length - 1
let currentImgIndex = 0;

// Next Button
    $('.next').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex)
      .css('display', 'none');
    if(currentImgIndex < numOfImages) {
      currentImgIndex ++
    } else {
      currentImgIndex = 0
    }
    $('.carousel-images').children().eq(currentImgIndex)
      .css('display', 'block')
    })

// Previous Button
    $('.previous').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex)
      .css('display','none')
    if (currentImgIndex > 0) {
      currentImgIndex--
    } else {
      currentImgIndex = numOfImages
    }
    $('.carousel-images').children().eq(currentImgIndex)
      .css('display','block')
    })

$( () => {

    //======grabbing the buttons=======
    const openBtn = $('#openContact');
    const contact = $('#contact');
    const closeBtn = $('#close');

    //===Event Handler===
    function openContact (){
      contact.css('display','block')
    };
    function closeContact () {
      contact.css('display','none')
    }
    openBtn.on("click", openContact);
    closeBtn.on('click',closeContact);
    });
});
