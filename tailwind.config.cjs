/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // 3. Append the Skeleton plugin to the end of this list
    require('@tailwindcss/typography')
  ]
}
