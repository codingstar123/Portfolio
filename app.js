
function contact () {

}

$(() => {
  console.log('hello world');

  $('.contact').on("click", () => {
      console.log('My email is : , My phone number is : ');//when the contact is clicked, window shows up and display a message.
      contact();
      // should be a window that pops up and text appear inside

  })
});
