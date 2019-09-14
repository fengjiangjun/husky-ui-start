module.exports = {
  plugins: [

    require('autoprefixer')({
      "browsers": [
        "defaults",
        "not ie < 11",
        //"last 2 versions",
        //"> 1%",
        ///"iOS 7",
        //"last 3 iOS versions"
      ]
    }),
    require('postcss-salad')(),
    require('postcss-bem-latest')({
      defaultNamespace: undefined, // default namespace to use, none by default
      style: 'suit', // suit or bem, suit by default,
      separators: {
        descendent: '__' // overwrite any default separator for chosen style
      },
      shortcuts: {
        utility: 'util' //override at-rule name
      }
    }),
  ]
}