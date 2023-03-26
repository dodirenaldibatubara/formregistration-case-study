<template>
  <div id="app">
    <!-- cek gambar -->
    <!-- <div>
      <img :src="idImage" alt="" />
    </div>
    <div>
      <img :src="imageSelfie" alt="" />
    </div> -->

    <active-component v-if="this.successApp == false" :userData="userData" :addressData="addressData" :documentApp="documentApp"></active-component>

    <!-- USER DATA -->
    <user-data
      :firstName="firstName"
      :lastName="lastName"
      :email="email"
      :callingCode="callingCode"
      :lastPhoneNumber="lastPhoneNumber"
      :dateOfBirth="dateOfBirth"
      :password="this.password"
      :confirmPassword="confirmPassword"
      v-if="this.userData == true"
      ref="userDataComponent"
      v-on:nextToDataAddress="nextToDataAddress"
      :country="country"
    ></user-data>

    <!-- ADDRESS DATA -->
    <address-data
      ref="addressDataComponent"
      :selectedCountryProps="selectedCountry"
      :selectedStateProps="selectedState"
      :selectedCityProps="selectedCity"
      :countryName="countryName"
      :stateName="stateName"
      :cityName="cityName"
      :cityIdProps="cityId"
      :addressProps="address"
      :postalCodeProps="postalCode"
      :country="country"
      v-on:nextToDocument="nextToDocument"
      v-on:backToUserData="backToUserData"
      v-if="this.addressData == true"
      class="mb-40"
    ></address-data>

    <!-- Document -->
    <document-app ref="documentComponent" :idImage="idImage" :imageSelfie="imageSelfie" v-if="this.documentApp == true" v-on:backToAddressData="backToAddressData" v-on:finish="finish"></document-app>

    <!-- Success -->
    <success-app v-if="successApp == true"></success-app>
  </div>
</template>

<script>
import UserData from "./components/userData.vue";
import AddressData from "./components/addressData.vue";
import Document from "./components/document.vue";
import Success from "./components/success.vue";
import ActiveComponent from "./components/activeComponent.vue";

export default {
  name: "app",
  components: {
    "user-data": UserData,
    "address-data": AddressData,
    "document-app": Document,
    "success-app": Success,
    "active-component": ActiveComponent,
  },
  data() {
    return {
      // Data User Component
      firstName: "",
      lastName: "",
      email: "",
      callingCode: null,
      lastPhoneNumber: null,
      dateOfBirth: null,
      password: null,
      confirmPassword: null,
      // Data User Component

      // Data Address Component
      selectedCountry: null,
      selectedState: null,
      selectedCity: null,
      countryName: null,
      stateName: null,
      cityName: null,
      address: null,
      cityId: null,
      postalCode: null,
      // Data Address Component

      // Data Document Component
      idImage: null,
      imageSelfie: null,
      // Data document Component

      country: null,
      successApp: false,
      documentApp: false,
      userData: true,
      addressData: false,
      // showPassword: false,
    };
  },
  methods: {
    finish() {
      this.idImage = URL.createObjectURL(this.$refs.documentComponent.form.id_image);
      this.imageSelfie = URL.createObjectURL(this.$refs.documentComponent.form.selfie_image);

      this.successApp = true;
      this.documentApp = false;
    },
    backToAddressData() {
      // if(){

      // }
      this.documentApp = false;
      this.addressData = true;
    },

    backToUserData() {
      this.userData = true;
      this.addressData = false;
      // console.log("cek");
    },
    nextToDataAddress() {
      // console.log(this.$refs.userDataComponent);
      this.firstName = this.$refs.userDataComponent.form.first_name;
      this.lastName = this.$refs.userDataComponent.form.last_name;
      this.email = this.$refs.userDataComponent.form.email;
      this.callingCode = this.$refs.userDataComponent.form.calling_code;
      this.lastPhoneNumber = this.$refs.userDataComponent.form.last_phone_number;
      this.dateOfBirth = this.$refs.userDataComponent.form.date_of_birth;
      this.password = this.$refs.userDataComponent.form.password;
      this.confirmPassword = this.$refs.userDataComponent.form.confirm_password;

      // Show and hide component
      this.addressData = true;
      this.userData = false;
    },
    nextToDocument() {
      console.log(this.$refs.addressDataComponent);
      this.selectedCountry = this.$refs.addressDataComponent.form.selected_country;
      this.selectedState = this.$refs.addressDataComponent.form.selected_state;
      this.selectedCity = this.$refs.addressDataComponent.form.selected_city;
      this.countryName = this.$refs.addressDataComponent.country_name;
      this.stateName = this.$refs.addressDataComponent.state_name;
      this.cityName = this.$refs.addressDataComponent.city_name;
      this.address = this.$refs.addressDataComponent.address;
      this.postalCode = this.$refs.addressDataComponent.postal_code;
      this.cityId = this.$refs.addressDataComponent.cityId;

      // show and hide component
      this.documentApp = true;
      this.addressData = false;
    },

    async getDataCountry() {
      const data = {
        method: "GET",
      };
      const response = await fetch("https://country-state-cities.spdigitalhosting.com/api/v1/country", data);

      let result = await response.json();
      this.country = result;
      console.log(this.country);
    },
  },
  computed: {
    // getPhoneNumber() {
    //   let result = this.callingCode + this.lastPhoneNumber;
    //   return (this.phoneNumber = result);
    // },
  },
  mounted() {
    this.getDataCountry();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
