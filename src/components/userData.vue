<template>
  <div>
    <div class="container mx-auto bg-[#ffff] w-[30%] min-h-[400px] mt-2 shadow-lg rounded-md px-4 py-4">
      <form action="" @submit.prevent="passwordValidation">
        <div class="grid md:grid-cols-2 gap-3 w-full">
          <div class="w-full">
            <h3 class="font-bold text-start">First name</h3>
            <input type="text" class="border rounded-md h-8 px-4 w-full" v-model="form.first_name" placeholder="First name" />
            <span v-if="!$v.form.first_name.required && $v.form.first_name.$dirty" class="text-red-500">Name is required!</span>
          </div>
          <div class="w-full">
            <h3 class="font-bold text-start">Last name</h3>
            <input type="text" class="border rounded-md h-8 px-4 w-full" v-model="form.last_name" placeholder="Last name" />
            <span v-if="!$v.form.last_name.required && $v.form.last_name.$dirty" class="text-red-500">last Name is required!</span>
          </div>
        </div>

        <!-- <vc-calendar /> -->

        <!-- <vc-date-picker /> -->

        <div class="w-full mt-5">
          <h3 class="font-bold text-start">Email</h3>
          <input v-model="form.email" type="email" class="border rounded-md h-8 px-4 w-full" placeholder="Input email" />
          <span v-if="(!$v.form.email.required || !$v.form.email.email) && $v.form.email.$dirty" class="text-red-500">Valid email is required!</span>
        </div>

        <div class="mt-5">
          <h3 class="font-bold text-start">Phone number</h3>
          <div class="flex gap-3 w-full">
            <div class="w-[25%]">
              <select placeholder="+62" v-model="form.calling_code" name="" id="" class="border rounded-md h-8 w-full px-2">
                <option v-for="(item, index) in this.country" :key="index" :value="item.phone_code">{{ item.phone_code }}</option>
              </select>
              <span v-if="!$v.form.calling_code.required && $v.form.calling_code.$dirty" class="text-red-500">calling code is required!</span>
            </div>

            <div class="w-[100%]">
              <input v-model="form.last_phone_number" type="number" class="border rounded-md h-8 px-4 w-full" placeholder="..." />
              <!-- <span v-if="!$v.form.last_phone_number.required && $v.form.last_phone_number.$dirty" class="text-red-500">Phone number is required!</span> -->
              <span v-if="(!$v.form.last_phone_number.required || !$v.form.last_phone_number.minLength) && $v.form.last_phone_number.$dirty" class="text-red-500">Phone number minimal 8 character</span>
            </div>
          </div>
        </div>

        <!-- date Picker -->
        <!-- <div class="relative">
          <input type="text" :value="form.date_of_birth" class="border rounded-md h-8 px-4 w-full" placeholder="DD/MM/YYYY" />

          <button @click.prevent="toggleDate">
            <img src="../assets/image/date.svg" alt="" class="w-[5%] mr-2 absolute top-[15%] right-0" />
          </button>
        </div> -->

        <!-- <div class=""> -->
        <!-- vc-calender tidak bisa digunakan  untuk binding data. gunakan datePicker -->
        <!-- vc-date-picker di gunakan wabib binding data . -->
        <!-- <vc-date-picker :model-config="modelConfig" v-if="this.showDate == true" v-model="form.date_of_birth"> </vc-date-picker> -->
        <!-- </div> -->
        <!-- date Picker -->

        <div class="w-full mt-5">
          <h3 class="font-bold text-start">Date of Birth</h3>
          <!-- new date picker -->
          <vc-date-picker v-model="form.date_of_birth">
            <template v-slot="{ inputValue, inputEvents }">
              <div class="relative">
                <input class="border rounded-md h-8 px-4 w-full" placeholder="DD/MM/YYYY" :value="inputValue" v-on="inputEvents" />
                <img src="../assets/image/date.svg" alt="" class="w-[5%] mr-2 absolute top-[15%] right-0" />
              </div>
            </template>
          </vc-date-picker>
          <!-- new date picker -->

          <span v-if="!$v.form.date_of_birth.required && $v.form.date_of_birth.$dirty" class="text-red-500">Date of birth is require</span>
        </div>

        <div class="w-full mt-5">
          <h3 class="font-bold text-start">Password</h3>
          <div class="relative">
            <input v-model="form.password" :type="inputTypePassword" class="border rounded-md h-8 px-4 w-full" placeholder="Password" />

            <span v-if="(!$v.form.password.required || !$v.form.password.minLength) && $v.form.password.$dirty" class="text-red-500">Password is required! (min 8 character)</span>

            <button @click.prevent="toggleInput">
              <img v-if="this.inputTypePassword == 'password'" src="../assets/image/visible-icon.svg" alt="" class="w-[5%] mr-2 absolute top-[15%] right-0" />
              <img src="../assets/image/show-icon.svg" alt="" class="w-[5%] mr-2 absolute top-[15%] right-0" />
            </button>
          </div>
        </div>

        <div class="w-full mt-5">
          <h3 class="font-bold text-start">Confirm Password</h3>
          <div class="relative">
            <input v-model="form.confirm_password" :type="inputTypeConfirmPassword" class="border rounded-md h-8 px-4 w-full" placeholder="Confirm Password " />

            <span v-if="!$v.form.confirm_password.required && $v.form.confirm_password.$dirty" class="text-red-500">Confirm Password is required!</span>
            <span v-if="form.confirm_password && !$v.form.confirm_password.sameAsPassword" class="text-red-500">Password and Confirm Password should match</span>

            <button @click.prevent="toggleInputConfirm">
              <img v-if="this.inputTypeConfirmPassword == 'password'" src="../assets/image/visible-icon.svg" alt="" class="w-[5%] mr-2 absolute top-[15%] right-0" />
              <img src="../assets/image/show-icon.svg" alt="" class="w-[5%] mr-2 absolute top-[15%] right-0" />
            </button>
          </div>
        </div>

        <div class="mt-5 text-end">
          <button type="submit" class="md:w-[25%] bg-blue-600 rounded-md px-4 py-2 text-white">Next</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
export default {
  name: "userData",
  props: ["password", "country"],
  data() {
    return {
      showDate: false,
      showPassword: false,
      inputTypePassword: "password",
      inputTypeConfirmPassword: "password",
      form: {
        first_name: null,
        last_name: null,
        email: null,
        calling_code: undefined,
        last_phone_number: null,
        date_of_birth: null,
        password: null,
        confirm_password: null,
      },
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
      date: null,
    };
  },
  // validasi akan di lakukan di sini berdasarkan dari data apa yang akan di masukkan user
  validations: {
    form: {
      first_name: {
        required,
        minLength: minLength(4),
      },
      last_name: {
        required,
        minLength: minLength(4),
      },
      email: {
        required,
        email,
      },
      calling_code: {
        required,
      },
      last_phone_number: {
        required,
        minLength: minLength(8),
      },
      date_of_birth: {
        required,
      },
      password: {
        required,
        minLength: minLength(8),
      },
      confirm_password: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  methods: {
    // validation
    passwordValidation() {
      // if (this.form.password === this.form.confirm_password && this.form.password != null && this.form.confirm_password != null) {
      // emit dilakukan jika kondisi terpenuhi.

      // } else {
      //   alert("Password null or password not same!");
      // }
      // Validation with Vuelidate
      this.$v.$touch();

      if (!this.$v.$invalid) {
        console.log(`Name :  ${this.form.first_name}, Email : ${this.form.email}, Password : ${this.form.password} `);

        this.$emit("nextToDataAddress");
      }
    },
    toggleDate() {
      // console.log("ccekkk");
      this.showDate = !this.showDate;
      console.log(this.showDate);
    },

    // Show password
    toggleInput() {
      console.log("tes");
      this.inputTypePassword = this.inputTypePassword === "password" ? "text" : "password";
    },
    // Show confirm password
    toggleInputConfirm() {
      console.log("coba");
      this.inputTypeConfirmPassword = this.inputTypeConfirmPassword === "password" ? "text" : "password";
    },
  },
  computed: {},
};
</script>
