createApp({
    data() { 
      return{
        errors: [],
        name: null,
        email: null,
        submitted: false,
        textarea: ""
    }
},
    computed: {
        hasErrors: function(){
            return !!this.errors.length;
        },
    },
    methods: {
        checkForm: function(e) {
            this.errors = [];
            this.submitted = true;

            if (this.name && this.email && this.expression.test(this.email)){
                 return true;                
            }
            
            if (!this.name) this.errors.push('Name required');
            if (!this.email) this.errors.push('Email required');
            if (!this.expression.test(this.email)) this.errors.push('Format of incorrect email')
        },
    }  
}).mount('#app')