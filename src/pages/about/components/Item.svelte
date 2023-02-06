<script>
    export let category;
    export let title;
    export let subtitle;
    export let position;
    export let date;
    export let author;
    export let venue;
    export let location = null;
    export let detail = [];

    function safeApply(value, func) {
        if (value) {
            return func(value);
        } else {
            return null;
        }
    }

    $: dateFrom = safeApply(date.from, v => v.split(' ').join('\u00A0'));
    $: dateTo = safeApply(date.to, v => v.split(' ').join('\u00A0'));

    function classMap(attr) {
        if ((category == "publication" || category == "project") && attr == "title") {
            return "title-small";
        } else if ((category == "education" || category == "experience") && attr == "position") {
            return "fst-italic fw-bold";
        } else if ((category == "award" || category == "project") && attr == "subtitle") {
            return "fw-bold";
        } else {
            return "";
        }
    }
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

        .position {
            grid-area: position;
        }

        .date {
            grid-area: date;
        }

        .location {
            grid-area: location;
        }

        .author {
            grid-area: author;
        }

        .venue {
            grid-area: venue;
        }

        .detail {
            grid-area: detail;
            @include padding-left(1.4rem);

            li {
                list-style: square;
            }
        }

        &.education, &.experience {
            grid-template-areas:
                "title"
                "subtitle"
                "position"
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

        &.publication {
            grid-template-areas:
                "title"
                "author"
                "detail"
                "."
                "venue"
                "date";
        }

        &.project {
            grid-template-areas:
                "title"
                "subtitle"
                "."
                "date"
                "."
                "detail";
        }

        .title-small {
            font-size: 1.15rem;
        }
    }

    @include media-breakpoint-up(md) {
        .education, .experience {
            grid-auto-columns: 1fr 1fr;
            grid-template-areas:
                "title title"
                "subtitle subtitle"
                "position position"
                ". ."
                "date location"
                ". ."
                "detail detail";
        }

        .publication {
            grid-auto-columns: 1fr 1fr;
            grid-template-areas:
                "title title"
                "author author"
                "venue date"
                "detail detail";
        }

        .project {
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
            .location, .date, .venue {
                justify-self: end;
                text-align: right;
            }

            .detail {
                @include padding-left(2rem);
            }

            &.education, &.experience {
                grid-template-columns: 1fr max-content;
                grid-template-areas:
                    "title location"
                    "subtitle date"
                    "position position"
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

            &.publication {
                grid-template-columns: max-content 1fr;
                grid-template-areas:
                    "title venue"
                    "author date"
                    "detail detail";
                column-gap: $blank;
            }

            &.project {
                grid-template-columns: 1fr max-content;
                grid-template-areas:
                    "title title"
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

        article .title-small {
            font-size: 1rem;
        }
    }

    @include media-breakpoint-only(sm) {
        article .title {
            font-size: 1.2rem;
        }

        article .title-small {
            font-size: 1.1rem;
        }
    }

    @include media-breakpoint-only(md) {
        article .title {
            font-size: 1.1rem;
        }

        article .title-small {
            font-size: 1.0rem;
        }
    }
</style>

<article class={category}>
    <h5 class="title {classMap('title')}">{@html title.name}</h5>
    {#if subtitle}
        <p class="subtitle {classMap('subtitle')}">{@html subtitle.name}</p>
    {/if}
    {#if position}
        <p class="position {classMap('position')}">{@html position.name}</p>
    {/if}
    {#if date}
        <p class="date">
            {#if date.year}
                {date.year}
            {:else}
                {dateFrom} -&nbsp;{dateTo}
            {/if}
        </p>
    {/if}
    {#if author}
        <p class="author">{@html author.name}</p>
    {/if}
    {#if venue}
        <p class="venue">{@html venue.name}</p>
    {/if}
    {#if location}
        <p class="location">{@html location.name}</p>
    {/if}
    {#if detail}
        <ul class="detail">
            {#each detail as d}
                <li>
                    <span>{@html d}</span>
                </li>
            {/each}
        </ul>
    {/if}
</article>
