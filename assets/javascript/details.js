const { createApp } = Vue;
createApp({
  data() {
    return {
      dataEvents: [],
      card: {},
      id: "",
      message: "¡Welcome  Amazing!",
    };
  },
  created() {
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
      .then((response) => response.json())
      .then((date) => {
        this.dataEvents = date;
        const queryString = location.search;
        const params = new URLSearchParams(queryString);
        this.id = params.get("id");
        this.card = this.dataEvents.events.find(
          (event) => event._id == this.id
        );
      })
      .catch((error) => console.log(error.message));
  },
  methods: {},
}).mount("#app");
