<template>
<div>
    <ClientOnly>
        <!-- Abhi ye Only Client Component BAnn gaya -->
        <!-- use javascript swicher extention in browser for check -->
        <Logo />

        <!-- in template #fallback things will display for mean time -->
        <template #fallback>
            <h3>Loading Logo...</h3>
        </template>
    </ClientOnly>
    <hr>
    <h1>Home Page</h1>
</div>
</template>
