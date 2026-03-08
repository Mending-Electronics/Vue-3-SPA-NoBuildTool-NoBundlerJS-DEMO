// Définition du Composant 2

const Component2 = {
  template: `
    <div class="card">
      <div class="card-header">
        <h5><i class="bi bi-list-check"></i> Composant 2 - Liste de Tâches</h5>
      </div>
      <div class="card-body">
        <div v-if="loading" class="skeleton" style="height: 200px; width: 100%;"></div>
        <div v-else>
          <p>Prop reçue: <strong>{{ receivedProp }}</strong></p>
          <div class="mb-3">
            <input v-model="newTask" @keyup.enter="addTask" class="form-control" placeholder="Nouvelle tâche">
            <button @click="addTask" class="btn btn-success mt-2"><i class="bi bi-plus-circle"></i> Ajouter</button>
          </div>
          <ul class="list-group">
            <li v-for="(task, index) in tasks" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
              {{ task }}
              <button @click="removeTask(index)" class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
            </li>
          </ul>
          <p class="mt-3">Nombre de tâches: {{ taskCount }}</p>
          <button @click="emitData" class="btn btn-info"><i class="bi bi-send"></i> Envoyer données</button>
        </div>
      </div>
    </div>
  `,
  props: {
    receivedProp: {
      type: String,
      default: 'Aucune prop'
    }
  },
  data() {
    return {
      newTask: '',
      loading: true
    };
  },
  computed: {
    tasks() {
      return window.sharedData.tasks || [];
    },
    taskCount() {
      return this.tasks.length;
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        window.sharedData.tasks.push(this.newTask.trim());
        this.newTask = '';
        this.$emit('task-added', window.sharedData.tasks.length);
      }
    },
    removeTask(index) {
      window.sharedData.tasks.splice(index, 1);
      this.$emit('task-removed', index);
    },
    emitData() {
      this.$emit('send-data', { tasks: window.sharedData.tasks, count: this.taskCount });
    }
  },
  mounted() {
    console.log('Component2 mounted - Props:', this.receivedProp);
    setTimeout(() => {
      this.loading = false;
    }, 1500); // Simulate loading
  },
  watch: {
    'window.sharedData.tasks': {
      handler() {
        console.log('Shared tasks updated:', window.sharedData.tasks);
      },
      deep: true
    }
  }
};