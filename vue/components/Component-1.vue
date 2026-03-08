// Définition du Composant 1

const Component1 = {
  template: `
    <div class="card">
      <div class="card-header">
        <h5><i class="bi bi-puzzle-piece"></i> Composant 1 - Démonstration Vue 3</h5>
      </div>
      <div class="card-body">
        <div v-if="loading" class="skeleton" style="height: 20px; width: 100%; margin-bottom: 10px;"></div>
        <div v-else>
          <p>Nom: <strong>{{ name }}</strong></p>
          <div class="mb-3">
            <label class="form-label">Entrez votre nom:</label>
            <input v-model="name" class="form-control" placeholder="Votre nom">
          </div>
          <p>Nom en majuscules: <strong>{{ nameUpper }}</strong></p>
          <button @click="greet" class="btn btn-primary me-2"><i class="bi bi-hand-wave"></i> Saluer</button>
          <button @click="reset" class="btn btn-secondary"><i class="bi bi-arrow-counterclockwise"></i> Réinitialiser</button>
          <p v-if="message" class="mt-3 alert alert-info">{{ message }}</p>
          <p>Compteur: {{ counter }}</p>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      name: 'Utilisateur',
      message: '',
      counter: 0,
      loading: true
    };
  },
  computed: {
    nameUpper() {
      return this.name.toUpperCase();
    }
  },
  methods: {
    greet() {
      this.message = `Bonjour ${this.name}!`;
      this.counter++;
      this.$emit('update-prop', this.name);
    },
    reset() {
      this.name = 'Utilisateur';
      this.message = '';
      this.counter = 0;
      this.$emit('update-prop', this.name);
    }
  },
  mounted() {
    console.log('Component1 mounted - Hook onMounted');
    setTimeout(() => {
      this.loading = false;
    }, 1000); // Simulate loading
  },
  watch: {
    name(newVal) {
      console.log('Name changed to:', newVal);
      this.$emit('update-prop', newVal);
    }
  }
};