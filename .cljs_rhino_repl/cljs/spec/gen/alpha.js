// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__49232__auto__,writer__49233__auto__,opt__49234__auto__){
return cljs.core._write.call(null,writer__49233__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54087 = arguments.length;
var i__49777__auto___54088 = (0);
while(true){
if((i__49777__auto___54088 < len__49776__auto___54087)){
args__49783__auto__.push((arguments[i__49777__auto___54088]));

var G__54089 = (i__49777__auto___54088 + (1));
i__49777__auto___54088 = G__54089;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq54086){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54086));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54091 = arguments.length;
var i__49777__auto___54092 = (0);
while(true){
if((i__49777__auto___54092 < len__49776__auto___54091)){
args__49783__auto__.push((arguments[i__49777__auto___54092]));

var G__54093 = (i__49777__auto___54092 + (1));
i__49777__auto___54092 = G__54093;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq54090){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54090));
});

var g_QMARK__54094 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_54095 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__54094){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__54094))
,null));
var mkg_54096 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__54094,g_54095){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__54094,g_54095))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__54094,g_54095,mkg_54096){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__54094).call(null,x);
});})(g_QMARK__54094,g_54095,mkg_54096))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__54094,g_54095,mkg_54096){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_54096).call(null,gfn);
});})(g_QMARK__54094,g_54095,mkg_54096))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__54094,g_54095,mkg_54096){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_54095).call(null,generator);
});})(g_QMARK__54094,g_54095,mkg_54096))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__52653__auto___54116 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__52653__auto___54116){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54117 = arguments.length;
var i__49777__auto___54118 = (0);
while(true){
if((i__49777__auto___54118 < len__49776__auto___54117)){
args__49783__auto__.push((arguments[i__49777__auto___54118]));

var G__54119 = (i__49777__auto___54118 + (1));
i__49777__auto___54118 = G__54119;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54116))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54116){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54116),args);
});})(g__52653__auto___54116))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__52653__auto___54116){
return (function (seq54097){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54097));
});})(g__52653__auto___54116))
;


var g__52653__auto___54120 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__52653__auto___54120){
return (function cljs$spec$gen$alpha$list(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54121 = arguments.length;
var i__49777__auto___54122 = (0);
while(true){
if((i__49777__auto___54122 < len__49776__auto___54121)){
args__49783__auto__.push((arguments[i__49777__auto___54122]));

var G__54123 = (i__49777__auto___54122 + (1));
i__49777__auto___54122 = G__54123;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54120))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54120){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54120),args);
});})(g__52653__auto___54120))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__52653__auto___54120){
return (function (seq54098){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54098));
});})(g__52653__auto___54120))
;


var g__52653__auto___54124 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__52653__auto___54124){
return (function cljs$spec$gen$alpha$map(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54125 = arguments.length;
var i__49777__auto___54126 = (0);
while(true){
if((i__49777__auto___54126 < len__49776__auto___54125)){
args__49783__auto__.push((arguments[i__49777__auto___54126]));

var G__54127 = (i__49777__auto___54126 + (1));
i__49777__auto___54126 = G__54127;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54124))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54124){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54124),args);
});})(g__52653__auto___54124))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__52653__auto___54124){
return (function (seq54099){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54099));
});})(g__52653__auto___54124))
;


var g__52653__auto___54128 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__52653__auto___54128){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54129 = arguments.length;
var i__49777__auto___54130 = (0);
while(true){
if((i__49777__auto___54130 < len__49776__auto___54129)){
args__49783__auto__.push((arguments[i__49777__auto___54130]));

var G__54131 = (i__49777__auto___54130 + (1));
i__49777__auto___54130 = G__54131;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54128))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54128){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54128),args);
});})(g__52653__auto___54128))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__52653__auto___54128){
return (function (seq54100){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54100));
});})(g__52653__auto___54128))
;


var g__52653__auto___54132 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__52653__auto___54132){
return (function cljs$spec$gen$alpha$set(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54133 = arguments.length;
var i__49777__auto___54134 = (0);
while(true){
if((i__49777__auto___54134 < len__49776__auto___54133)){
args__49783__auto__.push((arguments[i__49777__auto___54134]));

var G__54135 = (i__49777__auto___54134 + (1));
i__49777__auto___54134 = G__54135;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54132))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54132){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54132),args);
});})(g__52653__auto___54132))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__52653__auto___54132){
return (function (seq54101){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54101));
});})(g__52653__auto___54132))
;


var g__52653__auto___54136 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__52653__auto___54136){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54137 = arguments.length;
var i__49777__auto___54138 = (0);
while(true){
if((i__49777__auto___54138 < len__49776__auto___54137)){
args__49783__auto__.push((arguments[i__49777__auto___54138]));

var G__54139 = (i__49777__auto___54138 + (1));
i__49777__auto___54138 = G__54139;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54136))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54136){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54136),args);
});})(g__52653__auto___54136))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__52653__auto___54136){
return (function (seq54102){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54102));
});})(g__52653__auto___54136))
;


var g__52653__auto___54140 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__52653__auto___54140){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54141 = arguments.length;
var i__49777__auto___54142 = (0);
while(true){
if((i__49777__auto___54142 < len__49776__auto___54141)){
args__49783__auto__.push((arguments[i__49777__auto___54142]));

var G__54143 = (i__49777__auto___54142 + (1));
i__49777__auto___54142 = G__54143;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54140))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54140){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54140),args);
});})(g__52653__auto___54140))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__52653__auto___54140){
return (function (seq54103){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54103));
});})(g__52653__auto___54140))
;


var g__52653__auto___54144 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__52653__auto___54144){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54145 = arguments.length;
var i__49777__auto___54146 = (0);
while(true){
if((i__49777__auto___54146 < len__49776__auto___54145)){
args__49783__auto__.push((arguments[i__49777__auto___54146]));

var G__54147 = (i__49777__auto___54146 + (1));
i__49777__auto___54146 = G__54147;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54144))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54144){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54144),args);
});})(g__52653__auto___54144))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__52653__auto___54144){
return (function (seq54104){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54104));
});})(g__52653__auto___54144))
;


var g__52653__auto___54148 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__52653__auto___54148){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54149 = arguments.length;
var i__49777__auto___54150 = (0);
while(true){
if((i__49777__auto___54150 < len__49776__auto___54149)){
args__49783__auto__.push((arguments[i__49777__auto___54150]));

var G__54151 = (i__49777__auto___54150 + (1));
i__49777__auto___54150 = G__54151;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54148))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54148){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54148),args);
});})(g__52653__auto___54148))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__52653__auto___54148){
return (function (seq54105){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54105));
});})(g__52653__auto___54148))
;


var g__52653__auto___54152 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__52653__auto___54152){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54153 = arguments.length;
var i__49777__auto___54154 = (0);
while(true){
if((i__49777__auto___54154 < len__49776__auto___54153)){
args__49783__auto__.push((arguments[i__49777__auto___54154]));

var G__54155 = (i__49777__auto___54154 + (1));
i__49777__auto___54154 = G__54155;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54152))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54152){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54152),args);
});})(g__52653__auto___54152))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__52653__auto___54152){
return (function (seq54106){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54106));
});})(g__52653__auto___54152))
;


var g__52653__auto___54156 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__52653__auto___54156){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54157 = arguments.length;
var i__49777__auto___54158 = (0);
while(true){
if((i__49777__auto___54158 < len__49776__auto___54157)){
args__49783__auto__.push((arguments[i__49777__auto___54158]));

var G__54159 = (i__49777__auto___54158 + (1));
i__49777__auto___54158 = G__54159;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54156))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54156){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54156),args);
});})(g__52653__auto___54156))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__52653__auto___54156){
return (function (seq54107){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54107));
});})(g__52653__auto___54156))
;


var g__52653__auto___54160 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__52653__auto___54160){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54161 = arguments.length;
var i__49777__auto___54162 = (0);
while(true){
if((i__49777__auto___54162 < len__49776__auto___54161)){
args__49783__auto__.push((arguments[i__49777__auto___54162]));

var G__54163 = (i__49777__auto___54162 + (1));
i__49777__auto___54162 = G__54163;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54160))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54160){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54160),args);
});})(g__52653__auto___54160))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__52653__auto___54160){
return (function (seq54108){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54108));
});})(g__52653__auto___54160))
;


var g__52653__auto___54164 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__52653__auto___54164){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54165 = arguments.length;
var i__49777__auto___54166 = (0);
while(true){
if((i__49777__auto___54166 < len__49776__auto___54165)){
args__49783__auto__.push((arguments[i__49777__auto___54166]));

var G__54167 = (i__49777__auto___54166 + (1));
i__49777__auto___54166 = G__54167;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54164))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54164){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54164),args);
});})(g__52653__auto___54164))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__52653__auto___54164){
return (function (seq54109){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54109));
});})(g__52653__auto___54164))
;


var g__52653__auto___54168 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__52653__auto___54168){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54169 = arguments.length;
var i__49777__auto___54170 = (0);
while(true){
if((i__49777__auto___54170 < len__49776__auto___54169)){
args__49783__auto__.push((arguments[i__49777__auto___54170]));

var G__54171 = (i__49777__auto___54170 + (1));
i__49777__auto___54170 = G__54171;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54168))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54168){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54168),args);
});})(g__52653__auto___54168))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__52653__auto___54168){
return (function (seq54110){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54110));
});})(g__52653__auto___54168))
;


var g__52653__auto___54172 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__52653__auto___54172){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54173 = arguments.length;
var i__49777__auto___54174 = (0);
while(true){
if((i__49777__auto___54174 < len__49776__auto___54173)){
args__49783__auto__.push((arguments[i__49777__auto___54174]));

var G__54175 = (i__49777__auto___54174 + (1));
i__49777__auto___54174 = G__54175;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54172))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54172){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54172),args);
});})(g__52653__auto___54172))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__52653__auto___54172){
return (function (seq54111){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54111));
});})(g__52653__auto___54172))
;


var g__52653__auto___54176 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__52653__auto___54176){
return (function cljs$spec$gen$alpha$return(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54177 = arguments.length;
var i__49777__auto___54178 = (0);
while(true){
if((i__49777__auto___54178 < len__49776__auto___54177)){
args__49783__auto__.push((arguments[i__49777__auto___54178]));

var G__54179 = (i__49777__auto___54178 + (1));
i__49777__auto___54178 = G__54179;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54176))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54176){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54176),args);
});})(g__52653__auto___54176))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__52653__auto___54176){
return (function (seq54112){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54112));
});})(g__52653__auto___54176))
;


var g__52653__auto___54180 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__52653__auto___54180){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54181 = arguments.length;
var i__49777__auto___54182 = (0);
while(true){
if((i__49777__auto___54182 < len__49776__auto___54181)){
args__49783__auto__.push((arguments[i__49777__auto___54182]));

var G__54183 = (i__49777__auto___54182 + (1));
i__49777__auto___54182 = G__54183;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54180))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54180){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54180),args);
});})(g__52653__auto___54180))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__52653__auto___54180){
return (function (seq54113){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54113));
});})(g__52653__auto___54180))
;


var g__52653__auto___54184 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__52653__auto___54184){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54185 = arguments.length;
var i__49777__auto___54186 = (0);
while(true){
if((i__49777__auto___54186 < len__49776__auto___54185)){
args__49783__auto__.push((arguments[i__49777__auto___54186]));

var G__54187 = (i__49777__auto___54186 + (1));
i__49777__auto___54186 = G__54187;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54184))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54184){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54184),args);
});})(g__52653__auto___54184))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__52653__auto___54184){
return (function (seq54114){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54114));
});})(g__52653__auto___54184))
;


var g__52653__auto___54188 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__52653__auto___54188){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54189 = arguments.length;
var i__49777__auto___54190 = (0);
while(true){
if((i__49777__auto___54190 < len__49776__auto___54189)){
args__49783__auto__.push((arguments[i__49777__auto___54190]));

var G__54191 = (i__49777__auto___54190 + (1));
i__49777__auto___54190 = G__54191;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52653__auto___54188))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52653__auto___54188){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__52653__auto___54188),args);
});})(g__52653__auto___54188))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__52653__auto___54188){
return (function (seq54115){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54115));
});})(g__52653__auto___54188))
;

var g__52666__auto___54213 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__52666__auto___54213){
return (function cljs$spec$gen$alpha$any(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54214 = arguments.length;
var i__49777__auto___54215 = (0);
while(true){
if((i__49777__auto___54215 < len__49776__auto___54214)){
args__49783__auto__.push((arguments[i__49777__auto___54215]));

var G__54216 = (i__49777__auto___54215 + (1));
i__49777__auto___54215 = G__54216;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54213))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54213){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54213);
});})(g__52666__auto___54213))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__52666__auto___54213){
return (function (seq54192){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54192));
});})(g__52666__auto___54213))
;


var g__52666__auto___54217 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__52666__auto___54217){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54218 = arguments.length;
var i__49777__auto___54219 = (0);
while(true){
if((i__49777__auto___54219 < len__49776__auto___54218)){
args__49783__auto__.push((arguments[i__49777__auto___54219]));

var G__54220 = (i__49777__auto___54219 + (1));
i__49777__auto___54219 = G__54220;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54217))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54217){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54217);
});})(g__52666__auto___54217))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__52666__auto___54217){
return (function (seq54193){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54193));
});})(g__52666__auto___54217))
;


var g__52666__auto___54221 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__52666__auto___54221){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54222 = arguments.length;
var i__49777__auto___54223 = (0);
while(true){
if((i__49777__auto___54223 < len__49776__auto___54222)){
args__49783__auto__.push((arguments[i__49777__auto___54223]));

var G__54224 = (i__49777__auto___54223 + (1));
i__49777__auto___54223 = G__54224;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54221))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54221){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54221);
});})(g__52666__auto___54221))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__52666__auto___54221){
return (function (seq54194){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54194));
});})(g__52666__auto___54221))
;


var g__52666__auto___54225 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__52666__auto___54225){
return (function cljs$spec$gen$alpha$char(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54226 = arguments.length;
var i__49777__auto___54227 = (0);
while(true){
if((i__49777__auto___54227 < len__49776__auto___54226)){
args__49783__auto__.push((arguments[i__49777__auto___54227]));

var G__54228 = (i__49777__auto___54227 + (1));
i__49777__auto___54227 = G__54228;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54225))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54225){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54225);
});})(g__52666__auto___54225))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__52666__auto___54225){
return (function (seq54195){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54195));
});})(g__52666__auto___54225))
;


var g__52666__auto___54229 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__52666__auto___54229){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54230 = arguments.length;
var i__49777__auto___54231 = (0);
while(true){
if((i__49777__auto___54231 < len__49776__auto___54230)){
args__49783__auto__.push((arguments[i__49777__auto___54231]));

var G__54232 = (i__49777__auto___54231 + (1));
i__49777__auto___54231 = G__54232;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54229))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54229){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54229);
});})(g__52666__auto___54229))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__52666__auto___54229){
return (function (seq54196){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54196));
});})(g__52666__auto___54229))
;


var g__52666__auto___54233 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__52666__auto___54233){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54234 = arguments.length;
var i__49777__auto___54235 = (0);
while(true){
if((i__49777__auto___54235 < len__49776__auto___54234)){
args__49783__auto__.push((arguments[i__49777__auto___54235]));

var G__54236 = (i__49777__auto___54235 + (1));
i__49777__auto___54235 = G__54236;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54233))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54233){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54233);
});})(g__52666__auto___54233))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__52666__auto___54233){
return (function (seq54197){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54197));
});})(g__52666__auto___54233))
;


var g__52666__auto___54237 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__52666__auto___54237){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54238 = arguments.length;
var i__49777__auto___54239 = (0);
while(true){
if((i__49777__auto___54239 < len__49776__auto___54238)){
args__49783__auto__.push((arguments[i__49777__auto___54239]));

var G__54240 = (i__49777__auto___54239 + (1));
i__49777__auto___54239 = G__54240;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54237))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54237){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54237);
});})(g__52666__auto___54237))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__52666__auto___54237){
return (function (seq54198){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54198));
});})(g__52666__auto___54237))
;


var g__52666__auto___54241 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__52666__auto___54241){
return (function cljs$spec$gen$alpha$double(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54242 = arguments.length;
var i__49777__auto___54243 = (0);
while(true){
if((i__49777__auto___54243 < len__49776__auto___54242)){
args__49783__auto__.push((arguments[i__49777__auto___54243]));

var G__54244 = (i__49777__auto___54243 + (1));
i__49777__auto___54243 = G__54244;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54241))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54241){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54241);
});})(g__52666__auto___54241))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__52666__auto___54241){
return (function (seq54199){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54199));
});})(g__52666__auto___54241))
;


var g__52666__auto___54245 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__52666__auto___54245){
return (function cljs$spec$gen$alpha$int(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54246 = arguments.length;
var i__49777__auto___54247 = (0);
while(true){
if((i__49777__auto___54247 < len__49776__auto___54246)){
args__49783__auto__.push((arguments[i__49777__auto___54247]));

var G__54248 = (i__49777__auto___54247 + (1));
i__49777__auto___54247 = G__54248;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54245))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54245){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54245);
});})(g__52666__auto___54245))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__52666__auto___54245){
return (function (seq54200){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54200));
});})(g__52666__auto___54245))
;


var g__52666__auto___54249 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__52666__auto___54249){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54250 = arguments.length;
var i__49777__auto___54251 = (0);
while(true){
if((i__49777__auto___54251 < len__49776__auto___54250)){
args__49783__auto__.push((arguments[i__49777__auto___54251]));

var G__54252 = (i__49777__auto___54251 + (1));
i__49777__auto___54251 = G__54252;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54249))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54249){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54249);
});})(g__52666__auto___54249))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__52666__auto___54249){
return (function (seq54201){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54201));
});})(g__52666__auto___54249))
;


var g__52666__auto___54253 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__52666__auto___54253){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54254 = arguments.length;
var i__49777__auto___54255 = (0);
while(true){
if((i__49777__auto___54255 < len__49776__auto___54254)){
args__49783__auto__.push((arguments[i__49777__auto___54255]));

var G__54256 = (i__49777__auto___54255 + (1));
i__49777__auto___54255 = G__54256;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54253))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54253){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54253);
});})(g__52666__auto___54253))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__52666__auto___54253){
return (function (seq54202){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54202));
});})(g__52666__auto___54253))
;


var g__52666__auto___54257 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__52666__auto___54257){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54258 = arguments.length;
var i__49777__auto___54259 = (0);
while(true){
if((i__49777__auto___54259 < len__49776__auto___54258)){
args__49783__auto__.push((arguments[i__49777__auto___54259]));

var G__54260 = (i__49777__auto___54259 + (1));
i__49777__auto___54259 = G__54260;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54257))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54257){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54257);
});})(g__52666__auto___54257))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__52666__auto___54257){
return (function (seq54203){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54203));
});})(g__52666__auto___54257))
;


var g__52666__auto___54261 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__52666__auto___54261){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54262 = arguments.length;
var i__49777__auto___54263 = (0);
while(true){
if((i__49777__auto___54263 < len__49776__auto___54262)){
args__49783__auto__.push((arguments[i__49777__auto___54263]));

var G__54264 = (i__49777__auto___54263 + (1));
i__49777__auto___54263 = G__54264;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54261))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54261){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54261);
});})(g__52666__auto___54261))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__52666__auto___54261){
return (function (seq54204){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54204));
});})(g__52666__auto___54261))
;


var g__52666__auto___54265 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__52666__auto___54265){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54266 = arguments.length;
var i__49777__auto___54267 = (0);
while(true){
if((i__49777__auto___54267 < len__49776__auto___54266)){
args__49783__auto__.push((arguments[i__49777__auto___54267]));

var G__54268 = (i__49777__auto___54267 + (1));
i__49777__auto___54267 = G__54268;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54265))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54265){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54265);
});})(g__52666__auto___54265))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__52666__auto___54265){
return (function (seq54205){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54205));
});})(g__52666__auto___54265))
;


var g__52666__auto___54269 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__52666__auto___54269){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54270 = arguments.length;
var i__49777__auto___54271 = (0);
while(true){
if((i__49777__auto___54271 < len__49776__auto___54270)){
args__49783__auto__.push((arguments[i__49777__auto___54271]));

var G__54272 = (i__49777__auto___54271 + (1));
i__49777__auto___54271 = G__54272;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54269))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54269){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54269);
});})(g__52666__auto___54269))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__52666__auto___54269){
return (function (seq54206){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54206));
});})(g__52666__auto___54269))
;


var g__52666__auto___54273 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__52666__auto___54273){
return (function cljs$spec$gen$alpha$string(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54274 = arguments.length;
var i__49777__auto___54275 = (0);
while(true){
if((i__49777__auto___54275 < len__49776__auto___54274)){
args__49783__auto__.push((arguments[i__49777__auto___54275]));

var G__54276 = (i__49777__auto___54275 + (1));
i__49777__auto___54275 = G__54276;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54273))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54273){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54273);
});})(g__52666__auto___54273))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__52666__auto___54273){
return (function (seq54207){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54207));
});})(g__52666__auto___54273))
;


var g__52666__auto___54277 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__52666__auto___54277){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54278 = arguments.length;
var i__49777__auto___54279 = (0);
while(true){
if((i__49777__auto___54279 < len__49776__auto___54278)){
args__49783__auto__.push((arguments[i__49777__auto___54279]));

var G__54280 = (i__49777__auto___54279 + (1));
i__49777__auto___54279 = G__54280;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54277))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54277){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54277);
});})(g__52666__auto___54277))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__52666__auto___54277){
return (function (seq54208){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54208));
});})(g__52666__auto___54277))
;


var g__52666__auto___54281 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__52666__auto___54281){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54282 = arguments.length;
var i__49777__auto___54283 = (0);
while(true){
if((i__49777__auto___54283 < len__49776__auto___54282)){
args__49783__auto__.push((arguments[i__49777__auto___54283]));

var G__54284 = (i__49777__auto___54283 + (1));
i__49777__auto___54283 = G__54284;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54281))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54281){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54281);
});})(g__52666__auto___54281))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__52666__auto___54281){
return (function (seq54209){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54209));
});})(g__52666__auto___54281))
;


var g__52666__auto___54285 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__52666__auto___54285){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54286 = arguments.length;
var i__49777__auto___54287 = (0);
while(true){
if((i__49777__auto___54287 < len__49776__auto___54286)){
args__49783__auto__.push((arguments[i__49777__auto___54287]));

var G__54288 = (i__49777__auto___54287 + (1));
i__49777__auto___54287 = G__54288;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54285))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54285){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54285);
});})(g__52666__auto___54285))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__52666__auto___54285){
return (function (seq54210){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54210));
});})(g__52666__auto___54285))
;


var g__52666__auto___54289 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__52666__auto___54289){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54290 = arguments.length;
var i__49777__auto___54291 = (0);
while(true){
if((i__49777__auto___54291 < len__49776__auto___54290)){
args__49783__auto__.push((arguments[i__49777__auto___54291]));

var G__54292 = (i__49777__auto___54291 + (1));
i__49777__auto___54291 = G__54292;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54289))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54289){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54289);
});})(g__52666__auto___54289))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__52666__auto___54289){
return (function (seq54211){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54211));
});})(g__52666__auto___54289))
;


var g__52666__auto___54293 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__52666__auto___54293){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54294 = arguments.length;
var i__49777__auto___54295 = (0);
while(true){
if((i__49777__auto___54295 < len__49776__auto___54294)){
args__49783__auto__.push((arguments[i__49777__auto___54295]));

var G__54296 = (i__49777__auto___54295 + (1));
i__49777__auto___54295 = G__54296;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});})(g__52666__auto___54293))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__52666__auto___54293){
return (function (args){
return cljs.core.deref.call(null,g__52666__auto___54293);
});})(g__52666__auto___54293))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__52666__auto___54293){
return (function (seq54212){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54212));
});})(g__52666__auto___54293))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__49783__auto__ = [];
var len__49776__auto___54299 = arguments.length;
var i__49777__auto___54300 = (0);
while(true){
if((i__49777__auto___54300 < len__49776__auto___54299)){
args__49783__auto__.push((arguments[i__49777__auto___54300]));

var G__54301 = (i__49777__auto___54300 + (1));
i__49777__auto___54300 = G__54301;
continue;
} else {
}
break;
}

var argseq__49784__auto__ = ((((0) < args__49783__auto__.length))?(new cljs.core.IndexedSeq(args__49783__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__49784__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__54297_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__54297_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq54298){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54298));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__54302_SHARP_){
return (new Date(p1__54302_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
