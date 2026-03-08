// Définition du composant App2View

const App2View = {
  template: `

    <div id="app-2" class="container mt-5">
      <h2><i class="bi bi-app"></i> Application 2</h2>
      <p>Cette app reçoit et envoie des props à App 1.</p>
      <div class="row">
        <div class="col-md-6">
          <component-2 :received-prop="sharedData.prop1" @send-data="handleDataFrom2InApp2"></component-2>
        </div>
        <div class="col-md-6">
          <component-1 @update-prop="updateProp2"></component-1>
        </div>
      </div>
      <div class="mt-3">
        <p>Données partagées:</p>
        <pre>{{ JSON.stringify(sharedData, null, 2) }}</pre>
      </div>
    </div>
  `,

  computed: {
    sharedData() {
      return window.sharedData || { prop1: '', prop2: '' };
    }
  },

  data() {
    return {
      localSharedData: window.sharedData || { prop1: '', prop2: '' }
    };
  },

  methods: {
    updateProp2(value) {
      console.log('AppView-2 received from Component-1:', value);
      window.sharedData.prop2 = value;
      console.log('Updated sharedData.prop2:', window.sharedData.prop2);
    },
    handleDataFrom2InApp2(data) {
      console.log('AppView-2 received from Component-2:', data);
      window.sharedData.prop1 = 'Réponse de App2: ' + data.tasks.length + ' éléments';
      console.log('Updated sharedData.prop1:', window.sharedData.prop1);
    }
  }
  
};