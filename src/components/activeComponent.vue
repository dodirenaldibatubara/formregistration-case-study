<template>
  <div>
    <div class="container mx-auto bg-[#ffff] w-[30%] grid grid-cols-3 gap-2 text-[12px] mt-10">
      <div>
        <h3 class="font-bold">01-User Data</h3>
        <!-- di bawah ini ialah binding class, jadi di dalam kurung kurawal  parameter pertama akan berisi nama kelas yang akan di pasangkan lalu parameter kedua setelah tanda : ialah kondisi dimana kelas tersebut akan di jalan kan (true/ false.) untuk yang pertama ialah kondisi true dan yang kedua ialah kondisi false -->
        <div :class="{ 'bg-blue-700 w-[full] p-1 h-[2px]  rounded-md': this.userData, 'w-[full] p-1 h-[2px] bg-blue-100 rounded-md': !this.userData }"></div>
      </div>
      <div>
        <h3 class="font-bold text">02-Address Data</h3>
        <div :class="{ 'bg-blue-700 w-[full] p-1 h-[2px]  rounded-md': this.addressData, ' w-[full] p-1 h-[2px] bg-blue-100 rounded-md': !this.addressData }"></div>
      </div>
      <div>
        <h3 class="font-bold text">03-Document Data</h3>
        <div :class="{ 'bg-blue-700 w-[full] p-1 h-[2px]  rounded-md': this.documentApp, 'w-[full] p-1 h-[2px] bg-blue-100 rounded-md': !this.documentApp }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "active-component",
  props: ["userData", "addressData", "documentApp"],
};
</script>

<style scoped>
.bg-nav {
  background-color: rgb(22, 22, 251);
}

.bg-address-data {
  background-color: rgb(22, 22, 251);
}

.bg-document-data {
  background-color: rgb(22, 22, 251);
}
</style>
