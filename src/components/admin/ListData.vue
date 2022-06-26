<template>
<div>
  <v-card color="#f7f6e7">
    <v-card-title primary class="title">{{data.name}}</v-card-title>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 sm3 md2>
          <v-avatar size="70px" color="grey lighten-4">
            <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex xs12 sm6 md8>
          <table>
            <tr>
              <td>{{data.description}}</td>
            </tr>
          </table>
        </v-flex>
        <v-flex md2>
            <v-btn color="primary" class="white--text" to="/admin/product/1/edit">
              <v-icon center dark>edit</v-icon>
            </v-btn>
            <v-btn color="error" class="white--text">
              <v-icon center dark>delete</v-icon>
            </v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
    <!-- <v-card-actions>
      <v-btn color="primary" class="white--text">
        <v-icon center dark>edit</v-icon>
      </v-btn>
      <v-btn color="error" class="white--text">
        <v-icon center dark>delete</v-icon>
      </v-btn>
    </v-card-actions> -->
  </v-card>
  <br>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['data']
}
</script>

<style>

</style>
