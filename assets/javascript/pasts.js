const { createApp } = Vue
createApp({
  data() {
    return {
      datos: {},
      dataEvents: [],
      checked: [],
      checkBox: [],
      eventPast: [],
      eventFiltered: [],
      textSearch: ""

    }
  },
  created() {
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
      .then(response => response.json())
      .then(datos => {
        this.datos = datos
        this.dataEvents = this.datos.events

        this.eventPast = this.dataEvents.filter(event => new Date(event.date) < new Date(this.datos.currentDate))
        this.checkBox = [... new Set(this.eventPast.map(event => event.category))]
      })

      .catch(error => console.log(error.message))

  },
  computed: {
    filteredxCheck: function filtroCheck() {
      let eventCheck = this.checked.length == 0 ? this.eventPast :
        this.eventPast.filter(evento =>
          this.checked.includes(evento.category))
      this.eventFiltered = this.textSearch == "" ? eventCheck : eventCheck.filter(event => event.name.toLowerCase().search(this.textSearch.toLowerCase().trim()) != -1)

    }
  }
}).mount('#app')