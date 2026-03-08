// Définition du composant App3View

const App3View = {
  template: `
    <div id="app-3" class="container mt-5">
      <h2><i class="bi bi-lightning"></i> Application 3</h2>
      <p>Cette app démontre la puissance des bindings Vue avec Bootstrap 5.</p>
      
      <div class="row">
        <div class="col-md-6">
          <component-3 @update-prop="updateProp3"></component-3>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h6><i class="bi bi-info-circle"></i> Données reçues de Component-3</h6>
            </div>
            <div class="card-body">
              <p><strong>Prop reçue:</strong> {{ sharedData.prop3 || 'Aucune' }}</p>
              <div class="mt-3">
                <h6>État des données partagées:</h6>
                <pre>{{ JSON.stringify(sharedData, null, 2) }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-4">
        <div class="card">
          <div class="card-header">
            <h6><i class="bi bi-arrow-left-right"></i> Échange avec autres apps</h6>
          </div>
          <div class="card-body">
            <p>Les données de cette app sont partagées avec AppView-1 et AppView-2 via <code>window.sharedData</code>.</p>
            <div class="row">
              <div class="col-md-4">
                <small class="text-muted">App 1:</small><br>
                <strong>{{ sharedData.prop1 || 'Non défini' }}</strong>
              </div>
              <div class="col-md-4">
                <small class="text-muted">App 2:</small><br>
                <strong>{{ sharedData.prop2 || 'Non défini' }}</strong>
              </div>
              <div class="col-md-4">
                <small class="text-muted">App 3:</small><br>
                <strong>{{ sharedData.prop3 || 'Non défini' }}</strong>
              </div>
            </div>
            <div class="mt-3">
              <small class="text-muted">Tâches partagées:</small><br>
              <span v-if="sharedData.tasks && sharedData.tasks.length > 0">
                <span v-for="(task, index) in sharedData.tasks" :key="index" class="badge bg-primary me-1">
                  {{ task }}
                </span>
              </span>
              <span v-else class="text-muted">Aucune tâche partagée</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  computed: {
    sharedData() {
      return window.sharedData || { prop1: '', prop2: '', prop3: '', tasks: [] };
    }
  },
  methods: {
    updateProp3(value) {
      console.log('AppView-3 received from Component-3:', value);
      window.sharedData.prop3 = value;
      console.log('Updated sharedData.prop3:', window.sharedData.prop3);
    }
  }
};