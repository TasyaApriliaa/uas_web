(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd282d7e"],{e7d8:function(t,a,e){"use strict";var n=e("ea3f"),i=e.n(n);i.a},ea3f:function(t,a,e){},f6f5:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-btn",{attrs:{color:"primary",to:"/admin/daftarpembeli/add"}},[e("v-icon",[t._v("add")]),t._v("\n        Tambah Pembeli\n    ")],1),e("br"),e("br"),e("div",[e("data-table",{attrs:{headers:t.headers,items:t.datas,search:t.cari},on:{"update:search":function(a){t.cari=a}},scopedSlots:t._u([{key:"field",fn:function(a){return[e("td",{staticClass:"text-md-left"},[t._v(t._s(a.props.item.nama_pembeli))]),e("td",{staticClass:"text-md-left"},[t._v(t._s(a.props.item.alamat))]),e("td",{staticClass:"text-md-left"},[t._v(t._s(a.props.item.no_hp))]),e("td",{staticClass:"text-md-left"},[t._v(t._s(a.props.item.jenis_kelamin))]),e("td",{staticClass:"text-md-left"},[t._v(t._s(a.props.item.tanggal_lahir))]),e("td",[e("v-tooltip",{attrs:{left:""}},[e("v-btn",{attrs:{slot:"activator",fab:"",dark:"",small:"",color:"cyan",to:"/admin/daftarpembeli/"+a.props.item.id+"/edit"},slot:"activator"},[e("v-icon",{attrs:{small:"",dark:""}},[t._v("edit")])],1),e("span",[t._v("Edit")])],1),e("v-tooltip",{attrs:{right:""}},[e("v-btn",{attrs:{slot:"activator",fab:"",dark:"",small:"",color:"red"},on:{click:function(e){return t.del(a.props.item)}},slot:"activator"},[e("v-icon",{attrs:{small:"",dark:""}},[t._v("delete")])],1),e("span",[t._v("Delete")])],1)],1)]}}])})],1)],1)},i=[],l=e("6c45"),o=e("858e"),s={data:function(){return{cari:"",headers:[{text:"Nama Pembeli",value:"Nama Pembeli"},{text:"Alamat",value:"Alamat"},{text:"No HP",value:"No HP"},{text:"Jenis Kelamin",value:"Jenis Kelamin"},{text:"Tanggal Lahir",value:"Tanggal Lahir"},{text:"Aksi",value:"Aksi"}],items:[],datas:[],breadItems:[{text:"Dashboard",disabled:!1,href:"/admin/dashboard"},{text:"DaftarPembeli",disabled:!0,href:"/admin/daftarpembeli"}]}},created:function(){var t=this;l["a"].getApi("/pembeli/read.php").then((function(a){t.datas=a.data.data,console.log(a)})).catch((function(t){console.log(t)}))},components:{DataTable:function(){return Promise.all([e.e("chunk-29c679ff"),e.e("chunk-7990fa28"),e.e("chunk-751444cd")]).then(e.bind(null,"7d57"))},pdf:o["a"]},methods:{del:function(t){console.log("hapus"),l["a"].deleteApi("/content",t.id).then(this.getAll()).catch((function(t){return console.log(t)}))},getAll:function(){var t=this;l["a"].getApi("/pembeli/read.php").then((function(a){t.datas=a.data.data,console.log(a)})).catch((function(t){console.log(t)}))},getPdf:function(t){console.log(t),l["a"].getApi("/getPdf?img="+t).then((function(t){var a=t.config.url;console.log(a),window.open(a)}))}}},d=s,r=(e("e7d8"),e("2877")),c=e("6544"),f=e.n(c),m=e("8336"),p=e("132d"),u=e("3a2f"),v=Object(r["a"])(d,n,i,!1,null,null,null);a["default"]=v.exports;f()(v,{VBtn:m["a"],VIcon:p["a"],VTooltip:u["a"]})}}]);
//# sourceMappingURL=chunk-bd282d7e.9c89a392.js.map