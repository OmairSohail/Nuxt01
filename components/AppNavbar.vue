<template>
<div>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                 <b-field>
                        <b-input placeholder="Search..."
                            type="search"
                            icon="magnify">
                        </b-input>
                        <p class="control">
                            <button class="button is-primary">Search</button>
                        </p>
                    </b-field>
            </b-navbar-item>
        </template>
    </b-navbar>
</div>
</template>

<script>

export default {
   name: 'Appnavbar'   
}
</script>

