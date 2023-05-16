<template>
    <a :href='link' target="_blank" :style="style" >{{ text }}</a>
</template>

<script setup>
defineProps(["text", "style", "link"])
</script>

<style lang="scss" scoped>
a {
    background: #8D64DC;
    border-radius: 9.48718px;
    display: inline-block;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 600;
    font-size: 17.0769px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    text-align: center;
}
</style>