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
// $(() => {
//   console.log('hello world');
//   openContact.on("click", openContact);
//   closeBtn.on('click',closeContact);
//       // should be a window that pops up and text appear inside
// })
