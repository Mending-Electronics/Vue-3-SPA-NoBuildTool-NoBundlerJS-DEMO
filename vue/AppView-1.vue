// Définition du composant App1View

const App1View = {

  template: `

    <div id="app-1" class="container mt-5">
      <h2><i class="bi bi-app"></i> Application 1</h2>
      <p>Cette app démontre l'échange de props entre composants.</p>
      <div class="row">
        <div class="col-md-6">
          <component-1 @update-prop="updateProp1"></component-1>
        </div>
        <div class="col-md-6">
          <component-2 :received-prop="sharedData.prop2" @send-data="handleDataFrom2"></component-2>
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
    updateProp1(value) {
      console.log('AppView-1 received from Component-1:', value);
      window.sharedData.prop1 = value;
      console.log('Updated sharedData.prop1:', window.sharedData.prop1);
    },
    handleDataFrom2(data) {
      console.log('AppView-1 received from Component-2:', data);
      window.sharedData.prop2 = 'Données de Component2: ' + data.count + ' tâches';
      console.log('Updated sharedData.prop2:', window.sharedData.prop2);
    }
  }

};