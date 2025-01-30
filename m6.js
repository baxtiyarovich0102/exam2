const contactList = [];
const contactForm = document.getElementById("contactForm");
const contactListUl = document.getElementById("contactList");


contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
  
    contactList.push({ name, phone, email });
  
    updateContactList();
  
    contactForm.reset();
  });
  
  function updateContactList() {
    contactListUl.innerHTML = "";
  
    contactList.forEach((contact, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        Ismi: ${contact.name} 
        Telefon raqami: ${contact.phone} 
        Email: ${contact.email || "Berilmagan"}
        <button onclick="deleteContact(${index})">O'chirish</button>
      `;
      contactListUl.appendChild(li);
    });
  }


  function deleteContact(index) {
    contactList.splice(index, 1);
    updateContactList();
  }