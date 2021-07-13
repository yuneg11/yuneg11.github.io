<script>
    import Header from 'components/layout/Header.svelte';
    import Footer from 'components/layout/Footer.svelte';

    export let segment;

    /* Inner link hack */
    import { onMount } from 'svelte'

    onMount(() => {
        const pathname = window.location.pathname.replace(/\/$/, '');
        document.querySelectorAll('a').forEach(a => {
            if (a.hash && a.href.split('/').slice(-1)[0][0] === '#') {
                a.href = pathname + a.hash;
            }
        });
    })
</script>

<style lang="scss" global>
    @import "node_modules/modern-css-reset/dist/reset";
    @import "node_modules/bootstrap/scss/bootstrap";
    @import "styles/util";

    body {
        display: grid;
        grid-template-rows: [header-start] max-content [header-end] #{$blank} [main-start] 1fr [main-end] #{$blank} [footer-start] max-content [footer-end];
        grid-template-columns: 1fr [content-start] min(100%, #{$max-content-width}) [content-end] 1fr;

        @extend .bg-light;
    }

    main {
        grid-row: main;
        grid-column: content;

        overflow-x: hidden;
    }

    .slate {
        @include padding($blank);

        @extend .rounded;
        @extend .bg-white;
        @extend .border;
        @extend .shadow-sm;
    }

    @include media-breakpoint-up(md) {
        main {
            @include margin-x($blank);
        }
    }


    body.dark-mode {
        background-color: $gray-800 !important;

        .border {
            border-color: $dark !important;
        }

        .bg-dark {
            background-color: #121314 !important;
        }

        .text-dark {
            color: $light !important;
        }

        .bg-white {
            background-color: $dark !important;
            border-color: $dark !important;
            color: $light !important;
        }
    }
</style>

<template>
    <Header {segment}/>
    <slot></slot>
    <Footer />
</template>
