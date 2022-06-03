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
      <div class="bg-color123">
        <div class="test2 tree">
               1    
        </div>
       </div>
    </div>
    ${extractor.getScriptTags()}
 
    <script>
        let btnShow;
        let count;
        console.log("started script");
        
        window.onload = () => {
            console.log("onload");
            const div = document.querySelector(".test");
            setTimeout(()=>{
                 const div2 = document.querySelector(".test");
             
                 console.log("b: ",div === div2);
            }, 3000)
        }
        
        const show = (e) => {
            console.log(count.innerHTML);
        }
    </script>
  </body>
</html>`;
};
