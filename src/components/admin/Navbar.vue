<template>
  <div>
    <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer">
      <v-list dense>
        <template v-for="item in items">
          <v-layout row v-if="item.heading" align-center :key="item.heading">
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
            <!-- <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>-->
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i" :to="child.to">
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ child.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" :to="item.to">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="blue darken-3" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Administrator</span>
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
      <v-btn flat color="#FFFFFF" @click="logout">Logout</v-btn>
      </v-toolbar-items>
          </v-toolbar>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  /*eslint-disable*/
  data() {
    return {
      drawer: null,
      items: [
        {
          icon: "home",
          text: "Home",
          to: "/admin/dashboard"
        },
        {
          icon: "keyboard_arrow_up",
          "icon-alt": "keyboard_arrow_down",
          text: "Menu",
          model: true,
          children: [
            {
              icon: "assignment",
              text: "Stok Obat",
              to: "/admin/content"
            },
              {
              icon: "assignment",
              text: "Daftar Pembeli",
              to: "/admin/daftarpembeli"
            },
               {
              icon: "assignment",
              text: "Daftar Supplier",
              to: "/admin/content"
            },
               {
              icon: "assignment",
              text: "Barang Keluar",
              to: "/admin/content"
            },
               {
              icon: "assignment",
              text: "Barang Masuk",
              to: "/admin/content"
            },
          ]
        },
        
      ]
    };
  },
  methods: {
    logout() {
      this.$auth.destroyToken();
      location.reload(true);
    }
  }
};
</script>

<style>
</style>
