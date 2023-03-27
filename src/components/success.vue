<template>
  <div>
    <div class="container mx-auto bg-[#ffff] w-[40%] min-h-[400px] mt-20 shadow-lg rounded-md px-4 pt-4 pb-14 mb-10">
      <form action="">
        <div class="w-full pt-5 pb-6">
          <div class="flex flex-col justify-center items-center w-full min-h-[200px] mx-auto mt-3">
            <img src="../assets/image/success.jpg" alt="" class="w-[60%]" />
            <h3 class="font-bold text-lg mt-3">Hi, registration success!</h3>
            <p class="text-sm">We already sent you email to verify your account. click the link on the email that we send to jhon@gmail.com</p>
          </div>
        </div>

        <div class="all-data">
          <table class="text-start w-full rounded-md border border-slate-600">
            <tr class="w-full rounded-md border border-slate-600">
              <td class="w-[35%] rounded-md py-2 px-2 border border-slate-600">First Name :</td>
              <td class="w-[50%] rounded-md px-2 py-2">{{ this.firstName }}</td>
            </tr>
            <tr class="w-full rounded-md border border-slate-600">
              <td class="w-[35%] rounded-md py-2 px-2 border border-slate-600">Last Name :</td>
              <td class="w-[50%] rounded-md px-2 py-2 border-slate-600">{{ this.lastName }}</td>
            </tr>
            <tr class="w-full rounded-md border-slate-600">
              <td class="w-[35%] rounded-md py-2 px-2 border border-slate-600">Email :</td>
              <td class="w-[50%] rounded-md px-2 py-2 border border-slate-600">{{ this.email }}</td>
            </tr>
            <tr class="w-full rounded-md">
              <td class="w-[35%] rounded-md py-2 px-2 border border-slate-600">Calling Code :</td>
              <td class="w-[50%] rounded-md px-2 py-2 border border-slate-600">{{ this.callingCode }}</td>
            </tr>
            <tr class="w-full rounded-md">
              <td class="w-[35%] rounded-md py-2 px-2 border border-slate-600">Phone Number :</td>
              <td class="w-[50%] rounded-md px-2 py-2 border border-slate-600">{{ this.lastPhoneNumber }}</td>
            </tr>
            <tr class="w-full rounded-md">
              <td class="w-[35%] rounded-md py-2 px-2 border border-slate-600">Date Of birth :</td>
              <td class="w-[50%] rounded-md px-2 py-2 border border-slate-600">{{ this.dateOfBirth }}</td>
            </tr>
            <tr class="w-full rounded-md">
              <td class="w-[35%] rounded-md py-2 px-2 border border-slate-600">Password :</td>
              <td class="w-[50%] rounded-md px-2 py-2 border border-slate-600">{{ this.password }}</td>
            </tr>
            <tr class="w-full rounded-md">
              <td class="w-[35%] rounded-md py-2 px-2 border border-slate-600">Confirm Password :</td>
              <td class="w-[50%] rounded-md px-2 py-2 border border-slate-600">{{ this.confirmPassword }}</td>
            </tr>
            <tr class="w-full rounded-md">
              <td class="w-[35%] rounded-md py-2 px-2 border border-slate-600">Country :</td>
              <td class="w-[50%] rounded-md px-2 py-2 border border-slate-600">{{ this.countryName }}</td>
            </tr>
            <tr class="w-full rounded-md">
              <td class="w-[35%] rounded-md py-2 px-2 border border-slate-600">Country Name :</td>
              <td class="w-[50%] rounded-md px-2 py-2 border border-slate-600">{{ this.stateName }}</td>
            </tr>
            <tr class="w-full rounded-md">
              <td class="w-[35%] rounded-md py-2 px-2 border border-slate-600">City :</td>
              <td class="w-[50%] rounded-md px-2 py-2 border border-slate-600">{{ this.cityName }}</td>
            </tr>
            <tr class="w-full rounded-md">
              <td class="w-[35%] rounded-md py-2 px-2 border border-slate-600">Address :</td>
              <td class="w-[50%] rounded-md px-2 py-2 border border-slate-600">{{ this.addressProps }}</td>
            </tr>
            <tr class="w-full rounded-md">
              <td class="w-[35%] rounded-md py-2 px-2 border border-slate-600">Postal code :</td>
              <td class="w-[50%] rounded-md px-2 py-2">{{ this.postalCodeProps }}</td>
            </tr>
            <tr class="w-full rounded-md">
              <td class="w-[35%] rounded-md py-2 px-2 border border-slate-600">Id Image :</td>
              <td class="w-[50%] rounded-md px-2 py-2 border border-slate-600"><img :src="this.idImage" alt="" /></td>
            </tr>
            <tr class="w-full rounded-md">
              <td class="w-[35%] rounded-md py-2 px-2 border border-slate-600">Selfie Image :</td>
              <td class="w-[50%] rounded-md px-2 py-2 border border-slate-600"><img :src="this.imageSelfie" alt="" /></td>
            </tr>
          </table>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "success-app",
  props: ["firstName", "lastName", "email", "callingCode", "lastPhoneNumber", "dateOfBirth", "password", "confirmPassword", "countryName", "stateName", "cityName", "addressProps", "postalCodeProps", "idImage", "imageSelfie"],
};
</script>
