let firstName = "John";
let lastName = "Mickal";

let username = {
  firstName: "Zoe",
  lastName: "Lisa",
  greet: function () {
    return `Say Hi to ${this.firstName} ${this.lastName} `;
  },
};

console.log(username.greet());
