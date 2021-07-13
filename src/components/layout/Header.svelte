<script>
    import Switch from './Switch.svelte';

    // export let segment;
</script>

<style lang="scss">
    @import "styles/util";

    header {
        background-color: $dark;

        grid-row: header;
        grid-column: content;

        @include padding-x($blank * 2);
        @include padding-y($blank * 1.25);

        display: grid;

        grid-template-rows: [brand-start tool-start] auto [brand-end tool-end nav-start] auto [nav-end];
        grid-template-columns: [brand-start nav-start] 1fr [brand-end tool-start] max-content [nav-end tool-end];
        gap: $blank;

        > * {
            @include margin(0);
            @include padding(0);
        }

        .brand {
            grid-area: brand;

            // font-size: larger;
            font-size: x-large;
            align-self: baseline;

            color: $light;
        }

        .nav {
            grid-area: nav;

            font-size: medium;
            align-self: baseline;

            display: grid;
            gap: $blank * 2;
            grid-auto-flow: row;

            a {
                color: $gray-500;
            }

            a:hover {
                color: $gray-400;
            }

            a.current {
                color: $light;
            }
        }

        .tool {
            grid-area: tool;

            font-size: larger;
            align-self: baseline;
        }
    }

    a {
        text-decoration: none;
    }

    @include media-breakpoint-up(md) {
        header {
            @include padding-x($blank * 3);
            @include padding-y($blank * 1.5);

            grid-template-rows: [brand-start nav-start tool-start] 1fr [brand-end nav-end tool-end];
            grid-template-columns: [brand-start] auto [brand-end] #{$blank} [nav-start] auto [nav-end] 1fr [tool-start] max-content [tool-end];

            .brand {
                font-size: x-large;
            }

            .nav {
                font-size: large;
                grid-auto-flow: column;
            }
        }
    }

    :global(body.dark-mode) {
        header {
            background-color: $dark-gray !important;
        }
    }
</style>

<header class="rounded-bottom shadow-sm">
    <a class="brand" href="/about">EungGu Yun</a>
    <div class="nav">
        <!-- <a href="/about" class="{segment === 'about' ? 'current' : undefined}">About</a> -->
        <!-- <a href="/repository" class="{segment === 'repository' ? 'current' : undefined}">Repository</a> -->
        <!-- <a href="/markdown" class="{segment === 'markdown' ? 'current' : undefined}">Markdown</a> -->
        <!-- <a href="/notebook" class="{segment === 'notebook' ? 'current' : undefined}">Notebook</a> -->
    </div>
    <div class="tool">
        <Switch />
    </div>
</header>
