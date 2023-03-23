const { createApp } = Vue
createApp({

  data() {
    return {
      date: {},
      dataEvents: [],
      checked: [],
      checkBox: [],
      eventfiltered: [],
      textSearch: ""
    }
  },
  created() {
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
      .then(response => response.json())
      .then(date => {
        this.date = date
        this.dataEvents = this.date.events
        this.checkBox = [... new Set(this.dataEvents.map(event => event.category))]
      })
      .catch(error => console.log(error.message))

  },
  computed: {
    filteredxCheck: function filtroCheck() {
      let eventCheck = this.checked.length == 0 ? this.dataEvents :
        this.dataEvents.filter(evento =>
          this.checked.includes(evento.category))
      this.eventfiltered = this.textSearch == "" ? eventCheck : eventCheck.filter(event => event.name.toLowerCase().search(this.textSearch.toLowerCase().trim()) != -1)
    }
  }

}).mount('#app')