(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2261a6"],{e6dc:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-button",{attrs:{variant:"primary"},on:{click:function(e){t.isVisible=!0}}},[t._v("Adicionar produto")]),i("table",{staticClass:"table"},[t._m(0),i("tbody",t._l(t.$store.state.products,function(e){return i("tr",{key:e.id},[i("td",[t._v(t._s(e.name))]),i("td",[t._v(t._s(e.price))]),i("td",[i("b-button",{on:{click:function(i){return t.editProduct(e)}}},[t._v("Editar")]),i("b-button",{attrs:{variant:"danger"},on:{click:function(i){return t.deleteProduct(e)}}},[t._v("Apagar")])],1)])}),0)]),i("b-modal",{attrs:{visible:t.isVisible,title:"Adicionar produto"},on:{ok:t.sendProduct,hidden:t.clearModal}},[i("b-form-group",{attrs:{label:"Nome","label-for":"product-name"}},[i("b-form-input",{attrs:{id:"product-name"},model:{value:t.editingProduct.name,callback:function(e){t.$set(t.editingProduct,"name",e)},expression:"editingProduct.name"}})],1),i("b-form-group",{attrs:{label:"Preço","label-for":"product-price"}},[i("b-form-input",{attrs:{type:"number",id:"product-price"},model:{value:t.editingProduct.price,callback:function(e){t.$set(t.editingProduct,"price",e)},expression:"editingProduct.price"}})],1)],1)],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("Nome")]),i("th",[t._v("Preço")]),i("th",[t._v("Ações")])])])}],o=i("cebc"),d={data:function(){return{isVisible:!1,editingProduct:{name:"",price:0}}},methods:{sendProduct:function(){this.editingProduct.id?this.$store.dispatch("editProduct",this.editingProduct):this.$store.dispatch("addProduct",this.editingProduct),this.clearModal()},editProduct:function(t){this.isVisible=!0,this.editingProduct=Object(o["a"])({},t)},deleteProduct:function(t){confirm("Deseja realmente apagar esse item?")&&this.$store.dispatch("deleteProduct",t)},clearModal:function(){this.editingProduct={name:"",price:0},this.isVisible=!1}}},c=d,a=i("2877"),s=Object(a["a"])(c,r,n,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d2261a6.ba8730a9.js.map