<template>
    <div>
      <h1>{{ event.name }}</h1>
      <p>{{ event.date }}</p>
      <h2>Partecipanti</h2>
      <ul>
        <li v-for="participant in event.participants" :key="participant.id">
          {{ participant.name }}
        </li>
      </ul>
      <ChildComponent :event="event" />
    </div>
    <button @click="$router.go(-1)">Indietro</button>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    components: {
    ChildComponent
  },
    setup() {
      const route = useRoute();
      const event = ref({
        id: route.params.id,
        name: 'Evento ' + route.params.id,
        date: '2024-07-0' + route.params.id,
        participants: [
          { id: 1, name: 'Partecipante 1' },
          { id: 2, name: 'Partecipante 2' }
        ]
      });
      return { event };
    }
  }
  </script>
  