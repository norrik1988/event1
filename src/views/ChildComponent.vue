<template>
  <div v-if="localEvent">
    <h3>Dettagli del Figlio per l'evento: {{ localEvent.name }}</h3>
    <p>Data: {{ localEvent.date }}</p>
    <h4>Partecipanti nel figlio</h4>
    <ul>
      <li v-for="participant in localEvent.participants" :key="participant.id">
        {{ participant.name }}
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    // Creare una versione locale della prop usando computed
    const localEvent = computed(() => props.event);

    return { localEvent };
  }
}
</script>
