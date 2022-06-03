export default ({styles, children, extractor}: any) => {
    return `<html lang="en" class="h-100">
  <head>
  <base href="/" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React BoilerPlate</title>
    ${styles}
    ${extractor.getStyleTags()}
  </head>
  <body class="h-100">
    <button onclick="show()">show</button>
    <div id="root">
   
    <div class="styles__AppStyled-sc-1e1oq92-0 wcHoN">Welcome to the React Final Boiler Plate<button>10</button></div>
    ${children}</div>
    ${extractor.getScriptTags()}
    123
    <script>
        let btnShow;
        let count;
        console.log("started script");
        
        window.onload = () => {
            console.log("onload");
            
            btnShow = document.querySelector("#btnShow");
            count = document.querySelector("#count");
            
            console.log(btnShow)
            btnShow.addEventListener("click", show);
            btnShow.click();
        }
        
        const show = (e) => {
            console.log(count.innerHTML);
        }
    </script>
  </body>
</html>`;
};
