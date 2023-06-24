document.addEventListener('DOMContentLoaded', () => {
  // Add a click event listener for the "Place Order" button
  const submitBtn = document.getElementById('submitbtn');
  submitBtn.addEventListener('click', () => {
    // Get the input values
    const regNo = document.getElementById('reg').value;
    const hostelNo = document.getElementById('bh').value;
    const roomNo = document.getElementById('room').value;
    let message = `Registration No.: ${regNo}%0AHostel No.: ${hostelNo}%0ARoom No.: ${roomNo}`;
    let total = 0;

    // Add items if quantities are entered
    const sandwichQty = document.getElementById('qty1').value;
    if (sandwichQty > 0) {
      message += `%0ASandwich Qty.: ${sandwichQty}`;
    }

    const pizzaQty = document.getElementById('qty2').value;
    if (pizzaQty > 0) {
      message += `%0APizza Qty.: ${pizzaQty}`;
    }

    const samosaQty = document.getElementById('qty3').value;
    if (samosaQty > 0) {
      message += `%0ASamosa Qty.: ${samosaQty}`;
    }

    const dosaQty = document.getElementById('qty4').value;
    if (dosaQty > 0) {
      message += `%0ADosa Qty.: ${dosaQty}`;
    }

    // do the total calculation
    let totalsandwich = sandwichQty * 70;
    let totalpizza = pizzaQty * 160;
    let totalsamosa = samosaQty * 10;
    let totaldosa = dosaQty * 50;
    let Usertotal = totalsandwich + totalpizza + totalsamosa + totaldosa;

    if (regNo === "" || hostelNo === "" || roomNo === "") {
      alert("Please enter all the details");
      return;
    }

    // Check if no items are entered
    if (message === `Registration No.: ${regNo}%0AHostel No.: ${hostelNo}%0ARoom No.: ${roomNo}`) {
      alert("Please enter at least one item");
      return;
    }
    // let link ="";
    // if(sandwichQty > 0){
    //    link = `https://wa.me/8789465702?text=${message}`;
    //   console.log(message);
    // }
    // if(pizzaQty > 0){
    //   link = `https://wa.me/9135198984?text=${message}`;
    //   console.log(message);
    // }
    message += `%0ATotal: ${Usertotal}`;

  
    // Construct the WhatsApp link with the message
    const link = `https://wa.me/8789465702?text=${message}`;
    console.log(message);

   // Open the URL in a new window
  //  setTimeout(function(){ window.open(url); }, 3000);
  
    // Open the WhatsApp chat window
    window.open(link);
  });
});
