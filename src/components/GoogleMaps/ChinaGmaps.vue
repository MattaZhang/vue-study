<template>
  <div>
    <div id="Gmaps"></div>
    <remote-js
      jsUrl="https://maps.google.cn/maps/api/js?v=3&key=AIzaSyBPMDpoB5OQJ0vCXir5O304WqGizkieuRw&callback=initialize"
      :js-load-call-back="loadRongJs"
    ></remote-js>
  </div>
</template>
<script>
import RemoteJs from "./remote";
export default {
  components: {
    RemoteJs
  },
  methods: {
    loadRongJs() {
      var options = {
        zoom: 2,
        center: { lat: 39.9612, lng: -82.9988 }
      };

      var map = new google.maps.Map(document.getElementById("Gmaps"), options);
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
#Gmaps {
  width: 100%;
  height: 28rem;

  border-radius: 5px;
}
</style>


