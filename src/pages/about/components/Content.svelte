<script>
    import Item from './Item.svelte';

    export let education;
    export let experience;
    export let awardsAndHonors;
    export let publications;
    export let projects;
</script>

<style lang="scss">
    @import "styles/util";

    section {
        grid-area: content;

        display: grid;
        grid-auto-rows: min-content;
        grid-template-columns: [article-start] 1fr [article-end];
        row-gap: $blank * 2;

        @include padding-x($blank * 2);
        @include padding-y($blank * 2);

        .category {
            grid-column: article;

            .category-title {
                border-bottom: 1px solid;
                @include margin-bottom($blank);
            }

            .item-list {
                @include padding-x($blank * 0);
                @include padding-y($blank * 1);

                display: grid;

                grid-auto-rows: min-content;
                grid-template-columns: [item-start] 1fr [item-end];
                row-gap: $blank * 2.5;
            }
        }
    }

    @include media-breakpoint-up(sm) {
        section .category .item-list {
            @include padding-x($blank * 2);
        }
    }

    @include media-breakpoint-up(md) {
        section {
            @include padding-x($blank * 4);
            @include padding-y($blank * 3);

            .category .item-list {
                @include padding-x($blank * 1);
            }
        }
    }

    @include media-breakpoint-up(lg) {
        section .category .item-list {
            @include padding-x($blank * 1);
        }
    }
</style>

<section class="slate">

    <article class="category">
        <h3 class="category-title">{education.title}</h3>
        <div class="item-list">
            {#each education.list as i}
                <Item category="education" {...i} />
            {/each}
        </div>
    </article>

    <article class="category">
        <h3 class="category-title">{experience.title}</h3>
        <div class="item-list">
        {#each experience.list as i}
            <Item category="experience" {...i} />
        {/each}
        </div>
    </article>

    <article class="category">
        <h3 class="category-title">{awardsAndHonors.title}</h3>
        <div class="item-list">
            {#each awardsAndHonors.list as i}
                <Item category="award" {...i} />
            {/each}
        </div>
    </article>

    <article class="category">
        <h3 class="category-title">{publications.title}</h3>
        {#each publications.subsection as sub}
            <h5 class="subcategory-title">{sub.title}</h5>
            <div class="item-list">
                {#each sub.list as i}
                    <Item category="publication" {...i} />
                {/each}
            </div>
        {/each}
    </article>

    <article class="category">
        <h3 class="category-title">{projects.title}</h3>
        <div class="item-list">
            {#each projects.list as i}
                <Item category="project" {...i} />
            {/each}
        </div>
    </article>

</section>
