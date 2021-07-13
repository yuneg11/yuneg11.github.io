<script>
    export let profile;
</script>

<style lang="scss">
    @import "styles/util";

    /* Custom styles */

    $image-widths: (
        "xs": min(100vw - 220px, 200px),
        "sm": min(100%, 200px),
    );

    // $image-heights: (
    //     "xs": 100px,
    //     "sm": min(100%, 200px),
    // );


    aside {
        grid-area: profile;

        display: grid;
        grid-template-rows: [image-start content-start] 1fr [image-end content-end];
        grid-template-columns: [image-start] max-content [image-end content-start] 220px [content-end];
        gap: $blank;

        img {
            grid-area: image;

            justify-self: center;

            object-fit: scale-down;
            height: auto;
            width: 100%;

            // max-height: map-get($image-heights, "xs");
            max-width: map-get($image-widths, "xs");
        }

        section {
            grid-area: content;
            align-self: center;

            @include padding-x($blank);

            h3 {
                @include margin-bottom($blank * .5);
            }

            p {
                @include margin-bottom($blank * 1.5);
            }

            ul {
                @include margin-bottom(0);
                @include padding(0);

                list-style: none;

                li {
                    @include padding-bottom($blank * .5);
                }
            }
        }
    }

    a {
        color: $dark;
        text-decoration: none;
    }

    /* media-breakpoint-up */

    // @include media-breakpoint-up(xs) {
    //     aside {
    //         grid-template-rows: [image-start content-start] 1fr [image-end content-end];
    //         grid-template-columns: [image-start] auto [image-end content-start] 1fr [content-end];

    //         img {
    //             max-height: map-get($image-heights, "xs");
    //             max-width: map-get($image-widths, "xs");
    //         }

    //         section {
    //             align-self: center;
    //         }
    //     }
    // }

    @include media-breakpoint-up(md) {
        aside {
            grid-template-rows: [image-start] auto [image-end content-start] 1fr [content-end];
            grid-template-columns: [image-start content-start] 200px [image-end content-end];

            img {
                // max-height: map-get($image-heights, "sm");
                max-width: map-get($image-widths, "sm");
            }

            section {
                align-self: start;
            }
        }
    }

    :global(body.dark-mode) {
        a {
            color: $light;
        }
    }
</style>

<aside class="slate">
    <img
        class="rounded"
        alt="Profile"
        src={profile.image_url}
    >
    <section>
        <h3>EungGu Yun</h3>
        <p>M.S. student @ KAIST</p>
        <ul>
            <li>
                <i class="bi bi-building"></i>
                <a href="http://gsai.kaist.ac.kr">KAIST AI</a>
            </li>
            <li>
                <i class="bi bi-geo-alt"></i>
                <a href="https://goo.gl/maps/Ggc2BCAiiosaGqrS8">Daejeon, South Korea</a>
            </li>
            <li>
                <i class="bi bi-envelope"></i>
                <a href="mailto:yuneg11@gmail.com">yuneg11@gmail.com</a>
            </li>
            <li>
                <i class="bi bi-github"></i>
                <a href="https://github.com/yuneg11">yuneg11</a>
            </li>
        </ul>
    </section>
</aside>
