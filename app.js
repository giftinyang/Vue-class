var app = new Vue({
  el: "#app",
  data: {
    user: {
      name: "",
      role: ""
    },
    message: "Hello Vue!",
    persons: [
      { name: "Wisdom", role: "Html dev" },
      { name: "Samuel", role: "js dev" },
      { name: "Stanley", role: "php dev" },
      { name: "Joe", role: "UI/Ux dev" },
      { name: "Mata", role: "UX dev" }
    ],
    status: false
  },
  methods: {
    addUser() {
      this.persons.push(this.user);
    },
    removeItem() {
      alert("Delete me");
    },
    updateItem(id) {
      this.status = !this.status;
    },
    updatePerson(){
      alert('Field has been updated');
    }
  }
});
