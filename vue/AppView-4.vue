// Définition du composant App4View - Documentation complète Vue 3 Global CDN

const App4View = {
  template: `
    <div id="app-4" class="container mt-5">
      <h1 class="mb-4"><i class="bi bi-book"></i> Documentation Vue 3 Global CDN</h1>
      
      <!-- Introduction -->
      <div class="alert alert-primary mb-4">
        <h5><i class="bi bi-info-circle"></i> Vue 3 sans BuildTools ni Bundler</h5>
        <p>Cette documentation explique comment créer des applications Vue 3 complètes sans Node.js, npm, Vite ou Webpack. 
        Idéal pour intégrer Vue dans des projets existants (Flask, Django, PHP) ou pour des SPAs légères.</p>
      </div>

      <!-- Architecture -->
      <section class="mb-5">
        <h2><i class="bi bi-diagram-3"></i> Architecture Vue 3 Global CDN</h2>
        
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-file-code"></i> Structure des fichiers *.vue</h6>
              </div>
              <div class="card-body">
                <p><strong>Format BuildTools (avec Node.js) :</strong></p>
                <pre class="bg-light p-3 rounded small"><code>&lt;template&gt;
  &lt;div&gt;Contenu HTML&lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
// Logique JavaScript
&lt;/script&gt;

&lt;style scoped&gt;
/* Styles CSS */
&lt;/style&gt;</code></pre>
                
                <p class="mt-3"><strong>Format Global CDN (sans BuildTools) :</strong></p>
                <pre class="bg-light p-3 rounded small"><code>// Définition du composant
const ComponentName = {
  template: \`&lt;div&gt;Contenu HTML&lt;/div&gt;\`,
  data() { return {} },
  methods: {},
  computed: {},
  mounted() {},
  watch: {}
};</code></pre>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-globe"></i> Intégration avec Backend</h6>
              </div>
              <div class="card-body">
                <h6>Python Flask/Django :</h6>
                <ul>
                  <li>Placer les fichiers Vue dans <code>static/</code></li>
                  <li>Servir les fichiers via le serveur de développement</li>
                  <li>Utiliser les décorateurs <code>[[]]</code> pour éviter les conflits</li>
                </ul>
                
                <h6>PHP :</h6>
                <ul>
                  <li>Placer les fichiers Vue dans le répertoire public</li>
                  <li>Servir directement les fichiers HTML/CSS/JS</li>
                  <li>Compatible avec Apache, Nginx, PHP-FPM</li>
                </ul>
                
                <h6>Avantages :</h6>
                <ul>
                  <li><i class="bi bi-check text-success"></i> Pas de dépendances Node.js</li>
                  <li><i class="bi bi-check text-success"></i> Déploiement simple</li>
                  <li><i class="bi bi-check text-success"></i> Compatible avec tous les backends</li>
                  <li><i class="bi bi-check text-success"></i> Micro-service minimal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Configuration Django/Flask -->
      <section class="mb-5">
        <h2><i class="bi bi-gear"></i> Configuration pour Django/Flask</h2>
        
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-code-slash"></i> Configuration Vue</h6>
              </div>
              <div class="card-body">
                <p><strong>Pour éviter les conflits avec les templates Django/Flask :</strong></p>
                <pre class="bg-light p-3 rounded small"><code>// Dans app.js
const app = Vue.createApp({
  delimiters: ['[[', ']]']  // Remplace {{}} par [[]]
});

// Ou globalement
Vue.config.delimiters = ['[[', ']]'];</code></pre>
                
                <p><strong>Utilisation dans les templates :</strong></p>
                <pre class="bg-light p-3 rounded small"><code>&lt;!-- Vue template --&gt;
&lt;div&gt;[[ message ]]&lt;/div&gt;

&lt;!-- Django/Flask template --&gt;
&lt;div&gt;{{ django_variable }}&lt;/div&gt;</code></pre>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-server"></i> Structure Backend</h6>
              </div>
              <div class="card-body">
                <h6>Django :</h6>
                <pre class="bg-light p-3 rounded small"><code>myproject/
├── myapp/
│   ├── static/
│   │   ├── vue/
│   │   │   ├── components/
│   │   │   ├── views/
│   │   │   └── js/
│   │   ├── css/
│   │   └── vendor/
│   └── templates/
│       └── base.html
└── urls.py</code></pre>
                
                <h6>Flask :</h6>
                <pre class="bg-light p-3 rounded small"><code>myflaskapp/
├── static/
│   ├── vue/
│   │   ├── components/
│   │   ├── views/
│   │   └── js/
│   ├── css/
│   └── vendor/
├── templates/
│   └── base.html
└── app.py</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Hooks Vue -->
      <section class="mb-5">
        <h2><i class="bi bi-lifecycle"></i> Hooks du Cycle de Vie Vue</h2>
        
        <div class="table-responsive">
          <table class="table table-striped table-bordered">
            <thead class="table-dark">
              <tr>
                <th>Hook</th>
                <th>Description</th>
                <th>Cas d'usage</th>
                <th>Exemple</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>beforeCreate()</code></td>
                <td>Avant la création de l'instance</td>
                <td>Configuration initiale</td>
                <td><code>console.log('Instance créée')</code></td>
              </tr>
              <tr>
                <td><code>created()</code></td>
                <td>Après la création, avant le montage</td>
                <td>Appels API, initialisation</td>
                <td><code>this.fetchData()</code></td>
              </tr>
              <tr>
                <td><code>beforeMount()</code></td>
                <td>Avant le montage dans le DOM</td>
                <td>Dernières modifications</td>
                <td><code>this.prepareData()</code></td>
              </tr>
              <tr>
                <td><code>mounted()</code></td>
                <td>Après le montage dans le DOM</td>
                <td>Manipulation DOM, événements</td>
                <td><code>document.addEventListener(...)</code></td>
              </tr>
              <tr>
                <td><code>beforeUpdate()</code></td>
                <td>Avant la mise à jour du DOM</td>
                <td>Nettoyage avant mise à jour</td>
                <td><code>this.saveState()</code></td>
              </tr>
              <tr>
                <td><code>updated()</code></td>
                <td>Après la mise à jour du DOM</td>
                <td>Manipulation DOM post-mise à jour</td>
                <td><code>this.adjustLayout()</code></td>
              </tr>
              <tr>
                <td><code>beforeUnmount()</code></td>
                <td>Avant le démontage</td>
                <td>Nettoyage, sauvegarde</td>
                <td><code>this.cleanup()</code></td>
              </tr>
              <tr>
                <td><code>unmounted()</code></td>
                <td>Après le démontage</td>
                <td>Nettoyage final</td>
                <td><code>removeEventListener()</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Bindings Vue -->
      <section class="mb-5">
        <h2><i class="bi bi-link"></i> Bindings Vue Complet</h2>
        
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-text"></i> Bindings de Texte</h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>Binding</th>
                        <th>Description</th>
                        <th>Exemple</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>{{ }}</code></td>
                        <td>Interpolation de texte</td>
                        <td><code>{{ message }}</code></td>
                      </tr>
                      <tr>
                        <td><code>v-text</code></td>
                        <td>Texte brut</td>
                        <td><code>&lt;span v-text="message"&gt;&lt;/span&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>v-html</code></td>
                        <td>HTML brut</td>
                        <td><code>&lt;div v-html="html"&gt;&lt;/div&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>v-once</code></td>
                        <td>Render une seule fois</td>
                        <td><code>&lt;span v-once&gt;{{ message }}&lt;/span&gt;</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-input-cursor"></i> Bindings d'Attributs</h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>Binding</th>
                        <th>Description</th>
                        <th>Exemple</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>v-bind:</code></td>
                        <td>Lier un attribut</td>
                        <td><code>&lt;img v-bind:src="url"&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>:</code></td>
                        <td>Raccourci v-bind</td>
                        <td><code>&lt;img :src="url"&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>:class</code></td>
                        <td>Classes dynamiques</td>
                        <td><code>&lt;div :class="{ active: isActive }"&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>:style</code></td>
                        <td>Styles dynamiques</td>
                        <td><code>&lt;div :style="{ color: color }"&gt;</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-repeat"></i> Bindings de Contrôle</h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>Binding</th>
                        <th>Description</th>
                        <th>Exemple</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>v-if</code></td>
                        <td>Conditionnel (render)</td>
                        <td><code>&lt;div v-if="show"&gt;Contenu&lt;/div&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>v-else-if</code></td>
                        <td>Conditionnel alternatif</td>
                        <td><code>&lt;div v-else-if="other"&gt;&lt;/div&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>v-else</code></td>
                        <td>Défaut conditionnel</td>
                        <td><code>&lt;div v-else&gt;&lt;/div&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>v-show</code></td>
                        <td>Conditionnel (display)</td>
                        <td><code>&lt;div v-show="show"&gt;Contenu&lt;/div&gt;</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-list"></i> Bindings de Liste</h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>Binding</th>
                        <th>Description</th>
                        <th>Exemple</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>v-for</code></td>
                        <td>Boucle sur tableau</td>
                        <td><code>&lt;li v-for="item in items"&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>v-for</code></td>
                        <td>Boucle avec index</td>
                        <td><code>&lt;li v-for="(item, index) in items"&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>v-for</code></td>
                        <td>Boucle sur objet</td>
                        <td><code>&lt;div v-for="(value, key) in object"&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>:key</code></td>
                        <td>Clé unique pour v-for</td>
                        <td><code>&lt;li v-for="item in items" :key="item.id"&gt;</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-cursor"></i> Bindings d'Événements</h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>Binding</th>
                        <th>Description</th>
                        <th>Exemple</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>v-on:</code></td>
                        <td>Écouter un événement</td>
                        <td><code>&lt;button v-on:click="doSomething"&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>@</code></td>
                        <td>Raccourci v-on</td>
                        <td><code>&lt;button @click="doSomething"&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>@submit</code></td>
                        <td>Événement formulaire</td>
                        <td><code>&lt;form @submit.prevent="submit"&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>@keyup</code></td>
                        <td>Événement clavier</td>
                        <td><code>&lt;input @keyup.enter="submit"&gt;</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-box-arrow-in-down"></i> Bindings de Données</h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>Binding</th>
                        <th>Description</th>
                        <th>Exemple</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>v-model</code></td>
                        <td>Liaison bidirectionnelle</td>
                        <td><code>&lt;input v-model="message"&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>v-model.lazy</code></td>
                        <td>Mise à jour différée</td>
                        <td><code>&lt;input v-model.lazy="message"&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>v-model.number</code></td>
                        <td>Conversion en nombre</td>
                        <td><code>&lt;input v-model.number="age"&gt;</code></td>
                      </tr>
                      <tr>
                        <td><code>v-model.trim</code></td>
                        <td>Supprime espaces</td>
                        <td><code>&lt;input v-model.trim="message"&gt;</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Conclusion -->
      <section class="mb-5">
        <div class="alert alert-success">
          <h5><i class="bi bi-check-circle"></i> Conclusion</h5>
          <p>Vue 3 Global CDN offre une alternative puissante aux applications avec BuildTools :</p>
          <ul>
            <li><strong>Simplicité :</strong> Pas de configuration complexe, juste des fichiers HTML/CSS/JS</li>
            <li><strong>Intégration :</strong> Compatible avec tous les backends (Django, Flask, PHP, etc.)</li>
            <li><strong>Performance :</strong> Chargement rapide via CDN, pas de build step</li>
            <li><strong>Fonctionnalités :</strong> Accès à toutes les fonctionnalités Vue 3 (reactivité, composants, router)</li>
            <li><strong>Déploiement :</strong> Simple copie de fichiers sur un serveur web</li>
          </ul>
        </div>
      </section>
    </div>
  `,
  data() {
    return {
      title: 'Documentation Vue 3 Global CDN'
    };
  },
  mounted() {
    console.log('App4View mounted - Documentation complète');
  }
};
