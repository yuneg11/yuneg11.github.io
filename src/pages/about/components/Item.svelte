<script>
    export let category;
    export let title;
    export let subtitle;
    export let date;
    export let location = null;
    export let detail = [];

    const attributeMap = {
        bold: 'fw-bold',
        italic: 'fst-italic',
    };

    const detailClass = attribute => attribute.map(x => attributeMap[x]).join(' ');

    $: dateFrom = date.from.split(' ').join('\u00A0');
    $: dateTo = date.to.split(' ').join('\u00A0');
</script>

<style lang="scss">
    @import "styles/util";
    
    article {
        grid-column: item;

        display: grid;
        row-gap: $blank * .25;

        h5, p, ul {
            @include margin-bottom(0);
        }

        .title {
            grid-area: title;
        }

        .subtitle {
            grid-area: subtitle;
        }

        .date {
            grid-area: date;
        }

        .location {
            grid-area: location;
        }

        .detail {
            grid-area: detail;
            @include padding-left(1.4rem);

            li {
                list-style: square;
            }

        }

        &.education, &.work {
            grid-template-areas:
                "title"
                "subtitle"
                "."
                "date"
                "location"
                "."
                "detail";
        }
    
        &.award {
            grid-template-areas:
                "title"
                "subtitle"
                "."
                "date"
                "."
                "detail";
        }
    }

    @include media-breakpoint-up(md) {
        .education, .work {
            grid-auto-columns: 1fr 1fr;
            grid-template-areas:
                "title title"
                "subtitle subtitle"
                ". ."
                "date location"
                ". ."
                "detail detail";
        }
    }

    @include media-breakpoint-up(lg) {
        article {
            .location, .date {
                justify-self: end;
                text-align: right;
            }

            .detail {
                @include padding-left(2rem);
            }

            &.education, &.work {
                grid-template-columns: 1fr max-content;
                grid-template-areas:
                    "title location"
                    "subtitle date"
                    ". ."
                    "detail detail";
                column-gap: $blank;
            }

            &.award {
                grid-template-columns: max-content 1fr;
                grid-template-areas:
                    "title date"
                    "subtitle date"
                    ". ."
                    "detail detail";
                column-gap: $blank;
            }
        }
    }

    /* media-breakpoint-only */

    @include media-breakpoint-only(xs) {
        article .title {
            font-size: 1.1rem;
        }
    }

    @include media-breakpoint-only(sm) {
        article .title {
            font-size: 1.2rem;
        }
    }

    @include media-breakpoint-only(md) {
        article .title {
            font-size: 1.1rem;
        }
    }
</style>

<article class={category}>
    <h5 class="title">{title.name}</h5>
    <p class="subtitle">{subtitle.name}</p>
    <p class="date">
        <i class="bi bi-calendar-range"></i>
        <span>{dateFrom} -&nbsp;{dateTo}</span>
    </p>
    {#if location}
        <p class="location">
            <i class="bi bi-geo-alt"></i>
            <span>{location.name}</span>
        </p>
    {/if}
    <ul class="detail">
        {#each detail as d}
            <li>
                {#if d.attribute}
                    <span class="{detailClass(d.attribute)}">{d.content}</span>
                {:else}
                    <span>{d.content}</span>
                {/if}
            </li>
        {/each}
    </ul>
</article>
