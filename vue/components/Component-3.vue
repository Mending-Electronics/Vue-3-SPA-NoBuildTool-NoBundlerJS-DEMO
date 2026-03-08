// Définition du Composant 3 - Démonstration des bindings Vue

const Component3 = {
  template: `
    <div class="card">
      <div class="card-header">
        <h5><i class="bi bi-lightning"></i> Composant 3 - Bindings Vue & Bootstrap</h5>
      </div>
      <div class="card-body">
        <!-- Démonstration :class dynamique -->
        <div class="mb-4">
          <h6>Démonstration :class dynamique</h6>
          <div :class="alertClass" class="alert" role="alert">
            <i :class="iconClass" class="me-2"></i>
            {{ alertMessage }}
          </div>
          <div class="mt-3">
            <button @click="changeAlertType('success')" class="btn btn-success me-2">
              <i class="bi bi-check-circle"></i> Succès
            </button>
            <button @click="changeAlertType('warning')" class="btn btn-warning me-2">
              <i class="bi bi-exclamation-triangle"></i> Avertissement
            </button>
            <button @click="changeAlertType('danger')" class="btn btn-danger me-2">
              <i class="bi bi-x-circle"></i> Erreur
            </button>
            <button @click="changeAlertType('info')" class="btn btn-info">
              <i class="bi bi-info-circle"></i> Info
            </button>
          </div>
        </div>

        <!-- Démonstration v-if / v-else pour feedback formulaire -->
        <div class="mb-4">
          <h6>Démonstration v-if / v-else</h6>
          <div class="mb-3">
            <label class="form-label">Nom d'utilisateur:</label>
            <input 
              v-model="username" 
              @input="validateUsername"
              @focus="showFeedback = true"
              @blur="showFeedback = false"
              :class="inputClass"
              class="form-control" 
              placeholder="Entrez un nom d'utilisateur"
            >
            
            <!-- Feedback avec v-if / v-else -->
            <div v-if="showFeedback && username.length > 0" class="mt-2">
              <div v-if="username.length < 3" class="text-danger">
                <i class="bi bi-x-circle"></i> Le nom doit contenir au moins 3 caractères
              </div>
              <div v-else-if="username.length >= 3 && username.length < 6" class="text-warning">
                <i class="bi bi-exclamation-triangle"></i> Nom acceptable mais pourrait être meilleur
              </div>
              <div v-else class="text-success">
                <i class="bi bi-check-circle"></i> Excellent nom d'utilisateur !
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Email:</label>
            <input 
              v-model="email" 
              @input="validateEmail"
              @focus="emailFocused = true"
              @blur="emailFocused = false"
              :class="emailInputClass"
              class="form-control" 
              type="email"
              placeholder="Entrez votre email"
            >
            
            <!-- Feedback email avec v-if / v-else -->
            <div v-if="emailFocused && email.length > 0" class="mt-2">
              <div v-if="!isValidEmail" class="text-danger">
                <i class="bi bi-x-circle"></i> Format d'email invalide
              </div>
              <div v-else class="text-success">
                <i class="bi bi-check-circle"></i> Format d'email valide
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Mot de passe:</label>
            <input 
              v-model="password" 
              @input="validatePassword"
              :type="showPassword ? 'text' : 'password'"
              class="form-control" 
              placeholder="Entrez votre mot de passe"
            >
            <div class="form-check mt-2">
              <input v-model="showPassword" type="checkbox" class="form-check-input" id="showPasswordCheck">
              <label class="form-check-label" for="showPasswordCheck">
                Afficher le mot de passe
              </label>
            </div>
            
            <!-- Feedback mot de passe -->
            <div v-if="password.length > 0" class="mt-2">
              <div v-if="passwordStrength === 'weak'" class="text-danger">
                <i class="bi bi-shield-exclamation"></i> Mot de passe faible
              </div>
              <div v-else-if="passwordStrength === 'medium'" class="text-warning">
                <i class="bi bi-shield"></i> Mot de passe moyen
              </div>
              <div v-else class="text-success">
                <i class="bi bi-shield-check"></i> Mot de passe fort
              </div>
            </div>
          </div>

          <button @click="submitForm" :disabled="!isFormValid" class="btn btn-primary">
            <i class="bi bi-send"></i> Soumettre le formulaire
          </button>
        </div>

        <!-- Résumé des bindings -->
        <div class="mt-4">
          <h6>État des bindings:</h6>
          <div class="row">
            <div class="col-md-6">
              <small class="text-muted">Alerte actuelle: {{ currentAlertType }}</small><br>
              <small class="text-muted">Nom: {{ username }} ({{ username.length }} chars)</small><br>
              <small class="text-muted">Email: {{ email }} ({{ isValidEmail ? 'valide' : 'invalide' }})</small><br>
              <small class="text-muted">Mot de passe: {{ passwordStrength }}</small>
            </div>
            <div class="col-md-6">
              <small class="text-muted">Show feedback: {{ showFeedback }}</small><br>
              <small class="text-muted">Email focused: {{ emailFocused }}</small><br>
              <small class="text-muted">Show password: {{ showPassword }}</small><br>
              <small class="text-muted">Form valid: {{ isFormValid }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      // Pour la démonstration :class
      currentAlertType: 'info',
      alertMessage: 'Ceci est une alerte d\'information',
      
      // Pour la démonstration v-if / v-else
      username: '',
      email: '',
      password: '',
      showFeedback: false,
      emailFocused: false,
      showPassword: false,
      
      // États de validation
      isValidEmail: false,
      passwordStrength: ''
    };
  },
  computed: {
    alertClass() {
      return `alert-${this.currentAlertType}`;
    },
    iconClass() {
      const icons = {
        success: 'bi-check-circle-fill',
        warning: 'bi-exclamation-triangle-fill',
        danger: 'bi-x-circle-fill',
        info: 'bi-info-circle-fill'
      };
      return icons[this.currentAlertType] || 'bi-info-circle-fill';
    },
    inputClass() {
      return {
        'is-invalid': this.username.length > 0 && this.username.length < 3,
        'is-valid': this.username.length >= 6
      };
    },
    emailInputClass() {
      return {
        'is-invalid': this.email.length > 0 && !this.isValidEmail,
        'is-valid': this.email.length > 0 && this.isValidEmail
      };
    },
    isFormValid() {
      return this.username.length >= 3 && 
             this.isValidEmail && 
             this.password.length >= 6;
    }
  },
  methods: {
    changeAlertType(type) {
      const messages = {
        success: 'Opération réussie avec succès !',
        warning: 'Attention : vérifiez ces informations',
        danger: 'Erreur : une action est requise',
        info: 'Information importante à consulter'
      };
      
      this.currentAlertType = type;
      this.alertMessage = messages[type];
    },
    
    validateUsername() {
      // La validation se fait automatiquement via les computed properties
      console.log('Username validation:', this.username.length);
    },
    
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.isValidEmail = emailRegex.test(this.email);
    },
    
    validatePassword() {
      if (this.password.length < 6) {
        this.passwordStrength = 'weak';
      } else if (this.password.length < 10 || !/[A-Z]/.test(this.password) || !/[0-9]/.test(this.password)) {
        this.passwordStrength = 'medium';
      } else {
        this.passwordStrength = 'strong';
      }
    },
    
    submitForm() {
      if (this.isFormValid) {
        alert(`Formulaire soumis!\nNom: ${this.username}\nEmail: ${this.email}\nMot de passe: ${this.passwordStrength}`);
      }
    }
  },
  mounted() {
    console.log('Component3 mounted - Démonstration des bindings Vue');
  }
};