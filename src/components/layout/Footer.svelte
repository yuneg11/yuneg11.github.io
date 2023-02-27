<style lang="scss">
    @import "styles/util";

    footer {
        background-color: $dark;

        grid-row: footer;
        grid-column: content;

        @include padding($blank * 2);

        display: grid;

        grid-template-rows: 1fr;
        grid-auto-columns: 1fr;
        grid-auto-flow: column;
        gap: $blank;

        > * {
            align-self: baseline;
            
            @include margin(0);
        }

        .justify-left {
            justify-self: left;
            text-align: left;
        }

        .justify-right {
            justify-self: right;
            text-align: right;
        }


        a {
            text-decoration: none;
            color: $light;

            &:hover {
                @extend .text-secondary;
            }
        }   
    }

    @include media-breakpoint-down(sm) {
        footer {
            grid-auto-flow: row;

            .justify-right {
                justify-self: left;
                text-align: left;
            }
        }
    }

    :global(body.dark-mode) {
        footer {
            background-color: $dark-gray !important;
        }
    }
</style>

<footer class="rounded-top shadow-sm">
    <p class="justify-left">
        <span class="text-muted">© EungGu Yun 2023</span>
    </p>
    <p class="justify-right">
        <a href="https://github.com/yuneg11">
            <i class="bi bi-github"></i>
            <span>yuneg11</span>
        </a>
    </p>
</footer>
