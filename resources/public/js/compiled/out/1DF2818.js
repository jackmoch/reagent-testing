goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('testing_reagent.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__33714__delegate = function (x){
if(cljs.core.truth_(testing_reagent.core.reload)){
return cljs.core.apply.call(null,testing_reagent.core.reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'testing-reagent.core/reload' is missing");
}
};
var G__33714 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__33715__i = 0, G__33715__a = new Array(arguments.length -  0);
while (G__33715__i < G__33715__a.length) {G__33715__a[G__33715__i] = arguments[G__33715__i + 0]; ++G__33715__i;}
  x = new cljs.core.IndexedSeq(G__33715__a,0);
} 
return G__33714__delegate.call(this,x);};
G__33714.cljs$lang$maxFixedArity = 0;
G__33714.cljs$lang$applyTo = (function (arglist__33716){
var x = cljs.core.seq(arglist__33716);
return G__33714__delegate(x);
});
G__33714.cljs$core$IFn$_invoke$arity$variadic = G__33714__delegate;
return G__33714;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
