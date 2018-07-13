# Exemplo de uso da lib owlcarousel2 com o React.

## Como incluir o jQuery no projeto?
Basta ir no arquivo `/public/index.html` e incluir o `import`do jQuery no mesmo, exemplo:
```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <title>Exemple</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  </body>
</html>
```

## Execução do owlcarousel2 em um componente

```jsx
import React, { Component } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const $ = window.$;
class App extends Component {
  
  componentDidMount(){
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel();
    });
  }
  render(){
    return (
      <div className="App">
        <div class="owl-carousel owl-theme">
          <div> Your Content </div>
          <div> Your Content </div>
          <div> Your Content </div>
          <div> Your Content </div>
          <div> Your Content </div>
          <div> Your Content </div>
          <div> Your Content </div>
        </div>
      </div>
    )
  }
}
export default App;
```
