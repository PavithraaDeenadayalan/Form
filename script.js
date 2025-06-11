const userData = [];

function showDetails(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gen").value.trim();
  const phone = document.getElementById("ph").value.trim();
  const email = document.getElementById("mail").value.trim();

  if (!name || !phone || !email) {
    alert("Please fill in the required fields: Name, Phone, and Email!");
    return;
  }

  userData.push({
    name,
    age,
    dob,
    gender,
    phone,
    email
  });

  // Clear inputs
  document.querySelector("form").reset();

  display();
}

function display() {
  const output = document.getElementById("output");
  output.innerHTML = "";

  userData.forEach((user, index) => {
    const customerDiv = document.createElement("div");
    customerDiv.classList.add("customer-card");
    customerDiv.innerHTML = `
      <h4>Customer ${index + 1}</h4>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Age:</strong> ${user.age}</p>
      <p><strong>Date of Birth:</strong> ${user.dob}</p>
      <p><strong>Gender:</strong> ${user.gender}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Email:</strong> ${user.email}</p>
    `;
    output.appendChild(customerDiv);
  });
}
