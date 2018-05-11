<template>
  <div id="agora"> 
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">Dashboard</b-navbar-brand>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script lang='ts'>
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class App extends Vue { }
</script>
