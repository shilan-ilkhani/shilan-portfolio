<script setup>

import {skills}
from "../data/portfolio"


</script>


<template>


<section
id="skills"
class="max-w-5xl mx-auto py-20">


<h2 class="text-3xl font-bold">
Skills
</h2>


<div
class="grid md:grid-cols-3 gap-5 mt-10">


<div
v-for="skill in skills"
class="bg-slate-900 p-5 rounded-xl">


{{skill}}


</div>


</div>


</section>


</template>