<template>
  <div>
    <div class="container mx-auto bg-[#ffff] w-[30%] min-h-[400px] mt-3 shadow-lg rounded-md px-4 py-4">
      <form action="" @submit.prevent="nextToDocument">
        <div class="w-full mt-5">
          <h3 class="font-bold text-start">Country</h3>

          <select v-model="form.selected_country" v-on:change="saveSelectedCountry($event)" name="" id="" class="border rounded-md h-10 w-full px-2">
            <option value="">Select Country</option>
            <!-- ingat!! :Value di sini untuk mendapatkan data dari item yang di looping yaitu data dari country -->
            <option v-for="(item, index) in this.country" :key="index" :value="item">{{ item.name }}</option>
          </select>
          <span v-if="!$v.form.selected_country.required && $v.form.selected_country.$dirty" class="text-red-500">Selected country is required!</span>
          <!-- {{ selected.id }} -->
        </div>
        <!-- <span>Selected: {{ selectedCountry }}</span> -->

        <div class="w-full mt-5">
          <h3 class="font-bold text-start">State</h3>

          <select v-model="form.selected_state" v-on:change="saveSelectedState" name="" id="" class="border rounded-md h-10 w-full px-2">
            <option value="">Select State</option>

            <!-- ingat!! :Value di sini untuk mendapatkan data dri item yang di looping yaitu data dari state yang di pilih -->
            <option v-for="(item, index) in this.state" :key="index" :value="item">{{ item.name }}</option>
          </select>

          <span v-if="!$v.form.selected_state.required && $v.form.selected_state.$dirty" class="text-red-500">Selected country is required!</span>
        </div>

        <div class="w-full mt-5">
          <h3 class="font-bold text-start">City</h3>

          <select v-model="form.selected_city" v-on:change="saveSelectedCity" name="" id="" class="border rounded-md h-10 w-full px-2">
            <option value="">Select City</option>
            <option v-for="(item, index) in this.city" :key="index" :value="item">{{ item.name }}</option>
          </select>

          <span v-if="!$v.form.selected_city.required && $v.form.selected_city.$dirty" class="text-red-500">Selected country is required!</span>
        </div>

        <div class="w-full mt-5">
          <h3 class="font-bold text-start">Address</h3>
          <input v-model="address" type="text" class="border rounded-md h-8 px-4 w-full" placeholder="address" />
          <span v-if="!$v.address.required && $v.address.$dirty" class="text-red-500">Selected country is required!</span>
        </div>

        <div class="w-full mt-5">
          <h3 class="font-bold text-start">Postal code</h3>
          <input v-model="postal_code" type="text" class="border rounded-md h-8 px-4 w-full" placeholder="Postal code" />
          <span v-if="!$v.postal_code.required && $v.postal_code.$dirty" class="text-red-500">Selected country is required!</span>
        </div>

        <div class="flex justify-between mt-5">
          <button @click.prevent="$emit('backToUserData')" class="md:w-[25%] bg-orange-400 rounded-md px-4 py-2 text-white">Back</button>
          <button type="submit" class="md:w-[25%] bg-blue-600 rounded-md px-4 py-2 text-white">Next</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "addressData",
  props: ["country", "inputCountry"],
  data() {
    return {
      country_name: null,
      state_name: null,
      city_name: null,
      address: null,
      postal_code: null,

      state: null,
      city: null,
      stateId: null,
      cityId: null,
      form: {
        selected_country: null,
        selected_state: null,
        selected_city: null,
      },
    };
  },

  validations: {
    form: {
      selected_country: {
        required,
      },
      selected_state: {
        required,
      },
      selected_city: {
        required,
      },
    },
    address: {
      required,
    },
    postal_code: {
      required,
    },
  },

  methods: {
    nextToDocument() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        console.log(`Selected Country :  ${this.form.selected_country} `);

        this.$emit("nextToDocument");
      }
    },
    saveSelectedCountry() {
      // di bawah ini di buat null agar saat user mengganti country maka statenya akan mulai kosong lagi
      this.state = null;
      this.city = null;
      console.log(this.form.selected_country.name);
      console.log(this.form.selected_country.id);
      this.countryId = this.form.selected_country.id;
      this.country_name = this.form.selected_country.name;
      this.getDataState();
    },
    async getDataState() {
      const data = {
        method: "GET",
      };
      const response = await fetch("https://country-state-cities.spdigitalhosting.com/api/v1/state" + "?country_id=" + this.countryId, data);

      let result = await response.json();
      this.state = result;
      console.log(this.state);
    },
    saveSelectedState() {
      // di bawah ini di buat null agar saat user mengganti state maka citynya akan mulai kosong lagi
      this.city = null;
      // console.log(this.form.selected_state);
      console.log(this.state_name);
      console.log(this.stateId);
      this.stateId = this.form.selected_state.id;
      this.state_name = this.form.selected_state.name;
      this.getDataCity();
    },
    async getDataCity() {
      let dataCity = {
        method: "GET",
      };
      const response = await fetch("https://country-state-cities.spdigitalhosting.com/api/v1/cities" + "?state_id=" + this.stateId, dataCity);
      let result = await response.json();
      this.city = result;
      console.log(this.city);
    },
    saveSelectedCity() {
      console.log(this.city_name);
      console.log(this.cityId);
      this.cityId = this.form.selected_city.id;
      this.city_name = this.form.selected_city.name;
    },
  },
};
</script>
