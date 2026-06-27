<script setup>

import {projects}
from "../data/portfolio"

</script>


<template>


<section
id="projects"
class="max-w-5xl mx-auto py-20">


<h2 class="text-3xl font-bold">
Projects
</h2>



<div class="grid md:grid-cols-2 gap-6 mt-10">


<div
v-for="project in projects"
class="bg-slate-900 p-6 rounded-xl">


<h3 class="text-xl font-bold">

{{project.title}}

</h3>


<p class="mt-3 text-gray-300">

{{project.description}}

</p>


<div class="mt-5">

<span
v-for="item in project.tech"
class="bg-blue-600 px-3 py-1 rounded mr-2">

{{item}}

</span>


</div>


</div>


</div>


</section>


</template>