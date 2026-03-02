const PHONE = "917348782577";
const BRAND = "KING MODE 18";

document.querySelectorAll(".order-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const card = btn.closest(".product-card");
    const product = card.dataset.name;
    const price = card.dataset.price;
    const size = card.querySelector(".size-select").value;

    if(!size){ alert("Please select a size"); return; }

    const msg = `
Hi ${"CRICKET MODE 18"} Team 👋
I want to order:
Product: ${product}
Price: ₹${price}
Size: ${size}
Please share delivery details
Pincode
Mobile Number.
    `;
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`,"_blank");
  });
});