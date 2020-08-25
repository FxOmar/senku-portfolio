export default {
    link: [ 
        {
            href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,700i',
            rel: 'stylesheet'
        },
        {
            href:"https://fonts.googleapis.com/css?family=Crimson+Text:400,700,700i|Josefin+Sans:700", 
            rel:"stylesheet"
        },
        {
            href:"https://fonts.googleapis.com/css?family=Crimson+Text:400,700,700i|Josefin+Sans:700", 
            rel:"stylesheet"
        }
    ],
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    script: [
        { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js', async: true, defer: true }
    ],
}