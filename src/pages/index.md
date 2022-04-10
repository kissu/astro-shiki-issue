# Hello shiki bug

```html
<template>
  <div class="inputs">
    <label class="inputs__label" :for="name">Имя</label>
    <input
      v-click-outside="moveR"
      class="inputs__input"
      :name="name"
      type="text"
      @click="moveL($event.target)"
    />
  </div>
</template>
```
