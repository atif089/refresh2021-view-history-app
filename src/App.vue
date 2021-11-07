<template >
  <div>
    <h2>Ticket Viewing History</h2>
    <div>
      <div class="grid">
        <div class="grid-item">
          <strong>Ticket ID</strong>
          <strong>Subject</strong>
          <strong>Last Viewed</strong>
        </div>

        <div
          class="grid-item"
          v-for="ticket in recent_tickets"
          :key="ticket.id"
          @click="openTicket(ticket.id)"
        >
          <span class="id">{{ ticket.id }}</span>
          <span class="link">{{ ticket.subject }}</span>
          <span class="last-viewed">{{ ticket.last_viewed_at | timeago }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default {
  mounted() {
    app.initialized().then((client) => {
      this.client = client;
    });
    this.getTickets();
  },
  name: "App",
  data() {
    return {
      recent_tickets: [],
    };
  },
  methods: {
    getTickets() {
      // parse recent_tickets from localStorage into this.recent_tickets
      var recent_tickets = JSON.parse(localStorage.getItem("recent_tickets"));
      if (recent_tickets) {
        this.recent_tickets = recent_tickets;
      }
    },
    openTicket(ticketID) {
      this.client.interface.trigger("click", { id: "ticket", value: ticketID });
    },
  },
  filters: {
    timeago(input) {
      const time = dayjs(input);
      dayjs.extend(relativeTime);
      return time.fromNow();
    },
  },
};
</script>

<style scoped>
.link {
  cursor: pointer;
  text-decoration: underline;
  color: #0070f3;
}

.last-viewed {
  font-style: italic;
}

.grid-item {
  display: grid;
  grid-template-columns: 1fr 6fr 3fr;
  grid-gap: 10px;
  margin-bottom: 1em;
  font-size: 1.2em;
}
</style>


