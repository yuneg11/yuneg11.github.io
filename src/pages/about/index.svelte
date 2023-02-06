<script>
    import Profile from './components/Profile.svelte';
    import Content from './components/Content.svelte';

    export let about;
</script>

<style lang="scss">
    @import "styles/util";

    main {
        display: grid;

        grid-template-rows: [profile-start] auto [profile-end content-start] 1fr [content-end];
        grid-template-columns: [profile-start content-end] 1fr [profile-end content-end];

        gap: $blank;
    }

    @include media-breakpoint-up(md) {
        main {
            grid-template-rows: [profile-start content-start] 1fr [profile-end content-end];
            grid-template-columns: [profile-start] auto [profile-end content-start] 1fr [content-end];
        }
    }
</style>

<svelte:head>
    <title>{about.meta.title}</title>
</svelte:head>

<main>
    <Profile profile={about.profile} />
    <Content
        education={about.education}
        experience={about.experience}
        awardsAndHonors={about.awards_and_honors}
        publications={about.publications}
        projects={about.projects}
    />
</main>
