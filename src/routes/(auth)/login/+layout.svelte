<script lang="ts">
    import { page } from '$app/stores'
</script>

<nav>
    {#if !$page.data.user}
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    {/if}

    {#if $page.data.user}
        <a href="/admin">Admin</a>

        <form class="logout" action="/logout" method="POST">
            <button type="submit">Log out</button>
        </form>
    {/if}
</nav>

<main>
    <slot/>
</main>