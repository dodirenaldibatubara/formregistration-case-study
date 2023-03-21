<template>
  <div>
    <div class="container mx-auto bg-[#ffff] w-[30%] min-h-[400px] mt-5 shadow-lg rounded-md px-4 py-4">
      <form action="" @submit.prevent="documentValidation">
        <div iv class="w-full mt-5">
          <h3 class="font-bold text-start">Upload your ID</h3>

          <div class="flex flex-col justify-center items-center w-[95%] min-h-[200px] mx-auto mt-3 border-[4px] border-blue-300 border-dashed rounded-lg overflow-hidden">
            <label for="dropId" class="cursor-pointer">
              <!-- preview img after upload image -->
              <img :src="previewImg" alt="" />
              <!-- <button class="w-full bg-red-300 flex justify-center items-center"> -->
              <!-- ref imageInput di sini berguna untuk nanti saat user memasukkan file yang sama lebih dari satu kali maka kita akan mengosongkan inputnya kembali supaya on change nya terbaca -->
              <input id="dropId" name="inputId" type="file" ref="imageInput" class="hidden" v-on:change="uploadFileId($event)" />
              <img v-if="this.previewImg == null" src="../assets/image/upload-image.svg" alt="" class="w-[20%] mx-auto" />
              <!-- </button> -->
              <h5 v-if="this.previewImg == null" class="text-sm">Max Image size (2mb) and format to upload is (jpg,jpeg,png)</h5>
            </label>
          </div>
          <span v-if="!$v.form.id_image.required && $v.form.id_image.$dirty" class="text-red-500">fill Id Image before you finish!</span>
          <!-- Preview Image -->
          <!-- <img :src="previewImg" alt="" /> -->
        </div>

        <div iv class="w-full mt-5">
          <h3 class="font-bold text-start">Upload your selfie image</h3>

          <div class="flex flex-col justify-center items-center w-[95%] min-h-[200px] mx-auto mt-3 border-[4px] border-blue-300 border-dashed rounded-lg overflow-hidden">
            <label for="dropSelfie" class="cursor-pointer">
              <!-- preview img after upload image -->
              <img :src="previewSelfie" alt="" />

              <!-- <button class="w-full bg-red-300 flex justify-center items-center"> -->
              <input id="dropSelfie" type="file" ref="selfieInput" class="hidden" v-on:change="uploadSelfieFile($event)" />
              <img v-if="this.previewSelfie == null" src="../assets/image/upload-image.svg" alt="" class="w-[20%] mx-auto" />
              <!-- </button> -->
              <h5 v-if="this.previewSelfie == null" class="text-sm">Max Image size (2mb) and format to upload is (jpg,jpeg,png)</h5>
            </label>
          </div>
          <span v-if="!$v.form.selfie_image.required && $v.form.selfie_image.$dirty" class="text-red-500">fill Selfie Image before you finish!</span>
          <!-- Preview Image -->
          <!-- <img :src="previewImg" alt="" /> -->
        </div>

        <div class="flex justify-between mt-5">
          <button @click.prevent="$emit('backToAddressData')" class="md:w-[25%] bg-orange-400 rounded-md px-4 py-2 text-white">Back</button>
          <button type="submit" class="md:w-[25%] bg-blue-600 rounded-md px-4 py-2 text-white">Finish</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "document-app",
  props: [],
  data() {
    return {
      previewImg: null,
      previewSelfie: null,
      form: {
        id_image: null,
        selfie_image: null,
      },
    };
  },
  validations: {
    form: {
      id_image: {
        required,
      },
      selfie_image: {
        required,
      },
    },
  },
  methods: {
    documentValidation() {
      // vuelidate
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$emit("finish");
      }
      // vuelidate

      // // this.$emit("finish");
      // if (this.form.id_image != null && this.form.selfie_image != null) {
      //   // this.previewImg = URL.createObjectURL(this.form.id_image);
      //   // this.imageSelfie = URL.createObjectURL(this.$refs.documentComponent.form.selfie_image);
      //   this.$emit("finish");
      // } else {
      //   alert("fill Id Image and Selfie image before you finish!");
      // }
    },
    uploadFileId(event) {
      console.log(event);
      let image = event.target.files[0];
      let imageType = event.target.files[0].type;
      let imgSize = event.target.files[0].size;
      // let text = event.target.files[0].name;
      // console.log(imageType);
      // console.log(imgSize);
      // console.log(text);
      // console.log(image);
      // this.form.id_image = image;
      // this.form.id_image = URL.createObjectURL(event.target.files[0]);
      // console.log(this.form.id_image);

      // validation;
      // this.previewImg = event.target.files[0].name;
      let allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      // jika ukuran file > 50000 maka tolak dan berhentikan funtion
      if (imgSize > 1000000) {
        this.$refs.imageInput.value = "";
        alert("File too big! (> 1MB) or image type not match!");
        return;
        // jika ukuran file < 50000 cek typenya sesuai atau tidak dengan persyaratan. jika tdak maka kluarkan pesan gagal juga
      } else if (!allowedTypes.includes(imageType)) {
        alert("File too big! (> 1MB) or image type not match!");
      } else {
        // jika file < 50000 dan persyaratan extension file benar maka uppoad succes
        this.form.id_image = image;
        console.log(this.form.id_image);
        this.previewImg = URL.createObjectURL(event.target.files[0]);
        alert("upload Success!");
      }

      // In berfungsi untuk memasukkan data ke dalam variabel yang akan di rubah menjadi object url
      this.previewImg = URL.createObjectURL(this.form.id_image);
    },
    uploadSelfieFile(event) {
      console.log(event);
      let image = event.target.files[0];
      let imageType = event.target.files[0].type;
      let imgSize = event.target.files[0].size;
      let text = event.target.files[0].name;
      console.log(imageType);
      console.log(imgSize);
      console.log(text);
      // console.log(image);
      // this.form.selfie_image = image;
      // this.form.id_image = URL.createObjectURL(event.target.files[0]);
      console.log(this.form.selfie_image);

      // validation;
      // this.previewImg = event.target.files[0].name;
      let allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      // jika ukuran file > 50000 maka tolak dan berhentikan funtion
      if (imgSize > 1000000) {
        // event.preventDefault();
        this.$refs.selfieInput.value = "";
        alert("File too big! (> 1MB) or image type not match!");
        return;
        // jika ukuran file < 50000 cek typenya sesuai atau tidak dengan persyaratan. jika tdak maka kluarkan pesan gagal juga
      } else if (!allowedTypes.includes(imageType)) {
        alert("File too big! (> 1MB) or image type not match!");
      } else {
        // jika file < 50000 dan persyaratan extension file benar maka uppoad succes
        // berguna untuk memasukkan data input user ke dalam data. dan di buat di bawah ini, bukan di atas sebelum validasi agar. data nya di masukkan jika sudah lewat dari validasi
        this.form.selfie_image = image;
        this.previewSelfie = URL.createObjectURL(event.target.files[0]);
        alert("upload Success!");
      }

      // In berfungsi untuk memasukkan data ke dalam variabel yang akan di rubah menjadi object url
      this.previewSelfie = URL.createObjectURL(this.form.selfie_image);
    },
  },
};
</script>
