<template>
    <form id="signup-form" v-on:submit.prevent="submit">
        <div class="row">
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Full Name <span class="text-danger">*</span></label>
                <input type="text" v-model.trim="$v.fullname.$model" :class="{'is-invalid': validationStatus($v.fullname)}"
                    class="form-control form-control-lg">
                <div v-if="!$v.fullname.required" class="invalid-feedback">The full name field is required.</div>
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Email <span class="text-danger">*</span></label>
                <input type="email" v-model.trim="$v.email.$model" :class="{'is-invalid': validationStatus($v.email)}"
                    class="form-control form-control-lg">
                <div v-if="!$v.email.required" class="invalid-feedback">The email field is required.</div>
                <div v-if="!$v.email.email" class="invalid-feedback">The email is not valid.</div>
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Country <span class="text-danger">*</span></label>
                <input v-model.trim="$v.country.$model" :class="{'is-invalid': validationStatus($v.country)}"
                    class="form-control form-control-lg">
                 
                <div v-if="!$v.country.required" class="invalid-feedback">The country field is required.</div>
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Age <span class="text-danger">*</span></label>
                <input type="text" v-model.trim="$v.password.$model"
                    :class="{'is-invalid': validationStatus($v.password)}" class="form-control form-control-lg">
                <div v-if="!$v.password.required" class="invalid-feedback">The age field is required.</div>
                <div v-if="!$v.password.minLength" class="invalid-feedback">You must have at least {{
                $v.password.$params.minLength.min }} letters.</div>
                <div v-if="!$v.password.maxLength" class="invalid-feedback">You must not have greater then {{
                $v.password.$params.maxLength.min }} letters.</div>
            </div>
            <div class="col-12 form-group text-center">
                <button class="btn btn-vue btn-lg col-4">Subscribe</button>
            </div>
        </div>
    </form>
</template>
<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
    name: 'SubScribe',
    data: function () {
        return {
            fullname: '',
            email: '',
            country: '',
            password: '',
            countryList: []
        }
    },
    validations: {
        fullname: { required },
        email: { required, email },
        country: { required },
        password: { required, minLength: minLength(2), maxLength: maxLength(2) }
},
    mounted: function () {
    },
    methods: {
        resetData: function () {
            this.fullname = '';
            this.email = '';
            this.country = '';
            this.password = '';
        },
        validationStatus: function (validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },
        submit: function () {

            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;

            alert('Successfully subscribed');
            this.$v.$reset();
            this.resetData();
        }
    }
}
</script>
<style>
.btn-vue {
    background: #53B985;
    color: #31485D;
    font-weight: bold;
}
.bg-vue{
    padding-top: 100px;
}
</style>
