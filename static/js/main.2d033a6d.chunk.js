(this.webpackJsonpcocktail=this.webpackJsonpcocktail||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(1),a=n.n(i),s=n(20),r=n.n(s),l=(n(27),n(2)),o=n(3),h=n(5),u=n(4),j=(n(28),n(14)),d=n(6),b=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("header",{children:[Object(c.jsx)("div",{className:"title-container",children:Object(c.jsx)("h1",{children:"Cocktail Junkie"})}),Object(c.jsx)("div",{className:"navigation-container",children:Object(c.jsx)("nav",{className:"navigation",children:Object(c.jsxs)("ul",{className:"nav-items",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(j.b,{to:"/cocktails",activeClassName:"active-nav-item",children:"Cocktails"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(j.b,{to:"/ingredients",activeClassName:"active-nav-item",children:"Ingredients"})})]})})})]})}}]),n}(i.Component),p=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsx)("footer",{children:Object(c.jsx)("p",{className:"copyright",children:"It's a React project to familiarize with the library."})})}}]),n}(i.Component),m=n(8),f="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",O=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(l.a)(this,n),(c=e.call(this,t)).state={lastSearchName:"",drinks:[]},c.searchByName=c.searchByName.bind(Object(m.a)(c)),c.searchByLetter=c.searchByLetter.bind(Object(m.a)(c)),c.getRandomCocktail=c.getRandomCocktail.bind(Object(m.a)(c)),c.handleChange=c.handleChange.bind(Object(m.a)(c)),c}return Object(o.a)(n,[{key:"handleChange",value:function(t){this.setState({lastSearchName:t.target.value})}},{key:"fetchCocktails",value:function(t){var e=this;fetch(t).then((function(t){return t.json()})).then((function(t){var n=[];null!=t.drinks&&(n=t.drinks.slice(0,10).map((function(t){return{name:t.strDrink,category:t.strCategory,alcoholic:t.strAlcoholic,instructions:t.strInstructions,image:t.strDrinkThumb+"/preview"}}))),e.setState({drinks:n}),e.props.callBack(n)}))}},{key:"searchByName",value:function(t){t.preventDefault(),this.state.lastSearchName.length>0&&this.fetchCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+this.state.lastSearchName)}},{key:"searchByLetter",value:function(t){this.fetchCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f="+t.target.value)}},{key:"getRandomCocktail",value:function(){this.fetchCocktails("https://www.thecocktaildb.com/api/json/v1/1/random.php")}},{key:"render",value:function(){var t=this,e="abcdefghijklmnopqrstuvwxyz".split("").map((function(e){return Object(c.jsx)("button",{className:"cocktail-letter",value:e,onClick:t.searchByLetter,children:e.toUpperCase()},e)}));return Object(c.jsxs)("div",{className:"search-cocktail-container",children:[Object(c.jsxs)("div",{className:"search-inner-container",children:[Object(c.jsxs)("form",{className:"search-cocktail-form",onSubmit:this.searchByName,children:[Object(c.jsx)("input",{type:"text",className:"cocktail-name-input",placeholder:"Enter cocktail name...",onChange:this.handleChange}),Object(c.jsx)("button",{className:"cocktail-name-search-button",onClick:this.searchByName,children:"Search"})]}),Object(c.jsx)("div",{className:"random-cocktail-container",children:Object(c.jsx)("button",{className:"random-cocktail",onClick:this.getRandomCocktail,children:"Pick a random cocktail"})})]}),Object(c.jsxs)("div",{className:"cocktail-alphabet",children:[Object(c.jsx)("div",{className:"cocktail-alphabet-title-container",children:Object(c.jsx)("p",{className:"cocktail-alphabet-title",children:"Get cocktails by letter:"})}),Object(c.jsx)("div",{className:"cocktail-letter-container",children:Object(c.jsx)("div",{className:"cocktail-letter-inner-container",children:e})})]})]})}}]),n}(i.Component),k=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).getCocktails=t.getCocktails.bind(Object(m.a)(t)),t}return Object(o.a)(n,[{key:"getCocktails",value:function(t){var e=this,n=t.target.value;""!==n&&fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a="+n).then((function(t){return t.json()})).then((function(t){var n=t.drinks.slice(0,10).map((function(t){return t.idDrink}));Promise.all(n.map((function(t){return fetch(f+t)}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){t=t.map((function(t){return t.drinks[0]})).map((function(t){return{name:t.strDrink,category:t.strCategory,alcoholic:t.strAlcoholic,instructions:t.strInstructions,image:t.strDrinkThumb+"/preview"}})),e.props.callBack(t)}))}))}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"filter-type-container",children:Object(c.jsxs)("select",{onChange:this.getCocktails,children:[Object(c.jsx)("option",{value:"",children:"- Select Type -"}),Object(c.jsx)("option",{value:"Alcoholic",children:"Alcoholic"}),Object(c.jsx)("option",{value:"Non_Alcoholic",children:"Non alcoholic"})]})})}}]),n}(i.Component),v=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(l.a)(this,n),(c=e.call(this,t)).state={categories:[]},c.getCocktails=c.getCocktails.bind(Object(m.a)(c)),c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list").then((function(t){return t.json()})).then((function(e){var n=e.drinks;(n=n.filter((function(t){return""!==t.strCategory})).map((function(t){return{value:t.strCategory,label:t.strCategory}}))).unshift({value:"",label:"- Select Category -"}),t.setState({categories:n})}))}},{key:"getCocktails",value:function(t){var e=this,n=t.target.value;""!==n&&fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c="+n).then((function(t){return t.json()})).then((function(t){var n=t.drinks.slice(0,10).map((function(t){return t.idDrink}));Promise.all(n.map((function(t){return fetch(f+t)}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){t=t.map((function(t){return t.drinks[0]})).map((function(t){return{name:t.strDrink,category:t.strCategory,alcoholic:t.strAlcoholic,instructions:t.strInstructions,image:t.strDrinkThumb+"/preview"}})),e.props.callBack(t)}))}))}},{key:"renderDropdown",value:function(){return Object(c.jsx)("select",{onChange:this.getCocktails,children:this.state.categories.map((function(t){return Object(c.jsx)("option",{value:t.value,children:t.label},t.value)}))})}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"filter-category-container",children:this.renderDropdown()})}}]),n}(i.Component),x=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(l.a)(this,n),(c=e.call(this,t)).state={glasses:[]},c.getCocktails=c.getCocktails.bind(Object(m.a)(c)),c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list").then((function(t){return t.json()})).then((function(e){var n=e.drinks;(n=n.filter((function(t){return""!==t.strGlass})).map((function(t){return{value:t.strGlass,label:t.strGlass}}))).unshift({value:"",label:"- Select Glass -"}),t.setState({glasses:n})}))}},{key:"getCocktails",value:function(t){var e=this,n=t.target.value;""!==n&&fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g="+n).then((function(t){return t.json()})).then((function(t){var n=t.drinks.slice(0,10).map((function(t){return t.idDrink}));Promise.all(n.map((function(t){return fetch(f+t)}))).then((function(t){return Promise.all(t.map((function(t){return t.json()})))})).then((function(t){t=t.map((function(t){return t.drinks[0]})).map((function(t){return{name:t.strDrink,category:t.strCategory,alcoholic:t.strAlcoholic,instructions:t.strInstructions,image:t.strDrinkThumb+"/preview"}})),e.props.callBack(t)}))}))}},{key:"renderDropdown",value:function(){return Object(c.jsx)("select",{onChange:this.getCocktails,children:this.state.glasses.map((function(t){return Object(c.jsx)("option",{value:t.value,children:t.label},t.value)}))})}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"filter-glass-container",children:this.renderDropdown()})}}]),n}(i.Component),g=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"setCocktails",value:function(t){this.props.callBack(t)}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"filter-cocktail-container",children:[Object(c.jsx)("div",{className:"filter-cocktail-title-container",children:Object(c.jsx)("h2",{children:"Filter cocktail"})}),Object(c.jsxs)("div",{className:"filter-cocktail-container-inner",children:[Object(c.jsx)(k,{callBack:this.setCocktails.bind(this)}),Object(c.jsx)(v,{callBack:this.setCocktails.bind(this)}),Object(c.jsx)(x,{callBack:this.setCocktails.bind(this)})]})]})}}]),n}(i.Component),y=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("li",{className:"cocktail-item",children:[Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:this.props.info.image,alt:this.props.info.name})}),Object(c.jsxs)("div",{className:"info",children:[Object(c.jsxs)("h2",{className:"title",children:[Object(c.jsx)("strong",{children:"Title:"})," ",this.props.info.name]}),Object(c.jsxs)("p",{className:"category",children:[Object(c.jsx)("strong",{children:"Category:"})," ",this.props.info.category]}),Object(c.jsxs)("p",{className:"type",children:[Object(c.jsx)("strong",{children:"Type:"})," ",this.props.info.alcoholic]}),Object(c.jsxs)("p",{className:"instructions",children:[Object(c.jsx)("strong",{children:"Instructions:"})," ",this.props.info.instructions]})]})]})}}]),n}(i.Component),N=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return this.props.cocktails.length>0?Object(c.jsx)("div",{className:"cocktail-items-container",children:Object(c.jsx)("ul",{className:"cocktail-items",children:this.props.cocktails.map((function(t,e){return Object(c.jsx)(y,{info:t},e)}))})}):Object(c.jsx)("div",{className:"cocktail-items-container",children:Object(c.jsx)("p",{className:"no-items",children:"There are no items to show."})})}}]),n}(i.Component),C=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(l.a)(this,n),(c=e.call(this,t)).state={cocktails:[]},c}return Object(o.a)(n,[{key:"setCocktails",value:function(t){this.setState({cocktails:t})}},{key:"render",value:function(){return Object(c.jsxs)("main",{children:[Object(c.jsx)("h1",{className:"page-title",children:"Cocktails"}),Object(c.jsx)(O,{callBack:this.setCocktails.bind(this)}),Object(c.jsx)(g,{callBack:this.setCocktails.bind(this)}),Object(c.jsx)(N,{cocktails:this.state.cocktails})]})}}]),n}(i.Component),w=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(l.a)(this,n),(c=e.call(this,t)).INGREDIENT_URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?i=",c.state={title:t.title,id:"",type:"",alcohol:""},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t,e,n,c=this;fetch(this.INGREDIENT_URL+this.state.title).then((function(t){return t.json()})).then((function(i){i=i.ingredients[0],t=i.idIngredient?i.idIngredient:"-",e=i.strType?i.strType:"-",n=i.strAlcohol?i.strAlcohol:"-",c.setState({id:t,type:e,alcohol:n})}))}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"ingredient-item",children:Object(c.jsxs)("div",{className:"ingredient-item-inner",children:[Object(c.jsx)("div",{className:"main-title",children:Object(c.jsx)("p",{className:"item title",children:this.state.title})}),Object(c.jsx)("div",{className:"main-info",children:Object(c.jsxs)("div",{className:"main-info-inner",children:[Object(c.jsxs)("p",{className:"item type",children:[Object(c.jsx)("span",{children:"Alcohol type: "}),this.state.type]}),Object(c.jsxs)("p",{className:"item alcohol",children:[Object(c.jsx)("span",{children:"Is alcohol: "}),this.state.alcohol]}),Object(c.jsxs)("p",{className:"item id",children:[Object(c.jsx)("span",{children:"Ingredient ID: "}),this.state.id]})]})})]})})}}]),n}(i.Component),D=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).INGREDIENTS_LIST_URL="https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",t.state={ingredients:[]},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch(this.INGREDIENTS_LIST_URL).then((function(t){return t.json()})).then((function(e){var n=e.drinks.slice(0,16);t.setState({ingredients:n})}))}},{key:"render",value:function(){return Object(c.jsxs)("main",{children:[Object(c.jsx)("h1",{className:"page-title",children:"Ingredients"}),Object(c.jsx)("div",{className:"ingredient-list",children:this.state.ingredients.map((function(t,e){return Object(c.jsx)(w,{title:t.strIngredient1},e)}))})]})}}]),n}(i.Component),I=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(j.a,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(d.b,{exact:!0,path:"/",children:Object(c.jsx)(d.a,{to:"/cocktails"})}),Object(c.jsx)(d.b,{path:"/cocktails",children:Object(c.jsx)(C,{})}),Object(c.jsx)(d.b,{path:"/ingredients",children:Object(c.jsx)(D,{})}),Object(c.jsx)(p,{})]})}}]),n}(i.Component),S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),a(t),s(t)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),S()}},[[34,1,2]]]);
//# sourceMappingURL=main.2d033a6d.chunk.js.map