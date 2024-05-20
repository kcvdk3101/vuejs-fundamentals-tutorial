# Text Interpolation

```html
<template>
  <h1 class="text-4xl font-bold mb-4 text-orange-500">{{ title }}</h1>
  <h1 class="text-4xl font-bold mb-4 text-orange-500" v-text="title"></h1>
</template>
```

```js
export default {
  data() {
    return {
      title: 'Random Meals'
    }
  }
}
```

# Raw HTML

```html
<template>
  <h1 class="text-4xl font-bold mb-4 text-orange-500" v-html="title"></h1>
</template>
```

```js
export default {
  data() {
    return {
      title: '<strong>Random Meals</strong>'
    }
  }
}
```

# Binding Properties

```html
<template>
  <img class="inline-flex items-center h-full" v-bind:src="logo" alt="logo" />
  <h1 class="text-4xl font-bold mb-4 text-orange-500" v-bind:id="headingId">{{ title }}</h1>
</template>
```

```js
import logo from '@/assets/images/logo.svg'

export default {
  data() {
    return {,
      logo,
      title: 'Random Meals',
      headingId: 'title-heading'
    }
  }
}
```

# Binding Classes

```html
<template>
  <img class="inline-flex items-center h-full" v-bind:src="logo" alt="logo" />
  <h1 :class="isDark ? 'dark-title' :'light-tittle'" v-bind:id="headingId">{{ title }}</h1>
</template>
```

```js
import logo from '@/assets/images/logo.svg'

export default {
  data() {
    return {,
      logo,
      title: 'Random Meals',
      headingId: 'title-heading',
      isDark: false
    }
  }
}
```

```css
<style scoped>​
.dark-title {​
  color: #272c2a
}​
.light-title {
  color: #fb8b23
}
</style>
```
