// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53415){
var map__53416 = p__53415;
var map__53416__$1 = ((((!((map__53416 == null)))?((((map__53416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53416):map__53416);
var m = map__53416__$1;
var n = cljs.core.get.call(null,map__53416__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__53416__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53418_53440 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53419_53441 = null;
var count__53420_53442 = (0);
var i__53421_53443 = (0);
while(true){
if((i__53421_53443 < count__53420_53442)){
var f_53444 = cljs.core._nth.call(null,chunk__53419_53441,i__53421_53443);
cljs.core.println.call(null,"  ",f_53444);

var G__53445 = seq__53418_53440;
var G__53446 = chunk__53419_53441;
var G__53447 = count__53420_53442;
var G__53448 = (i__53421_53443 + (1));
seq__53418_53440 = G__53445;
chunk__53419_53441 = G__53446;
count__53420_53442 = G__53447;
i__53421_53443 = G__53448;
continue;
} else {
var temp__4657__auto___53449 = cljs.core.seq.call(null,seq__53418_53440);
if(temp__4657__auto___53449){
var seq__53418_53450__$1 = temp__4657__auto___53449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53418_53450__$1)){
var c__49446__auto___53451 = cljs.core.chunk_first.call(null,seq__53418_53450__$1);
var G__53452 = cljs.core.chunk_rest.call(null,seq__53418_53450__$1);
var G__53453 = c__49446__auto___53451;
var G__53454 = cljs.core.count.call(null,c__49446__auto___53451);
var G__53455 = (0);
seq__53418_53440 = G__53452;
chunk__53419_53441 = G__53453;
count__53420_53442 = G__53454;
i__53421_53443 = G__53455;
continue;
} else {
var f_53456 = cljs.core.first.call(null,seq__53418_53450__$1);
cljs.core.println.call(null,"  ",f_53456);

var G__53457 = cljs.core.next.call(null,seq__53418_53450__$1);
var G__53458 = null;
var G__53459 = (0);
var G__53460 = (0);
seq__53418_53440 = G__53457;
chunk__53419_53441 = G__53458;
count__53420_53442 = G__53459;
i__53421_53443 = G__53460;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53461 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__48607__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__48607__auto__)){
return or__48607__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_53461);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_53461)))?cljs.core.second.call(null,arglists_53461):arglists_53461));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53422_53462 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53423_53463 = null;
var count__53424_53464 = (0);
var i__53425_53465 = (0);
while(true){
if((i__53425_53465 < count__53424_53464)){
var vec__53426_53466 = cljs.core._nth.call(null,chunk__53423_53463,i__53425_53465);
var name_53467 = cljs.core.nth.call(null,vec__53426_53466,(0),null);
var map__53429_53468 = cljs.core.nth.call(null,vec__53426_53466,(1),null);
var map__53429_53469__$1 = ((((!((map__53429_53468 == null)))?((((map__53429_53468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53429_53468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53429_53468):map__53429_53468);
var doc_53470 = cljs.core.get.call(null,map__53429_53469__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53471 = cljs.core.get.call(null,map__53429_53469__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53467);

cljs.core.println.call(null," ",arglists_53471);

if(cljs.core.truth_(doc_53470)){
cljs.core.println.call(null," ",doc_53470);
} else {
}

var G__53472 = seq__53422_53462;
var G__53473 = chunk__53423_53463;
var G__53474 = count__53424_53464;
var G__53475 = (i__53425_53465 + (1));
seq__53422_53462 = G__53472;
chunk__53423_53463 = G__53473;
count__53424_53464 = G__53474;
i__53425_53465 = G__53475;
continue;
} else {
var temp__4657__auto___53476 = cljs.core.seq.call(null,seq__53422_53462);
if(temp__4657__auto___53476){
var seq__53422_53477__$1 = temp__4657__auto___53476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53422_53477__$1)){
var c__49446__auto___53478 = cljs.core.chunk_first.call(null,seq__53422_53477__$1);
var G__53479 = cljs.core.chunk_rest.call(null,seq__53422_53477__$1);
var G__53480 = c__49446__auto___53478;
var G__53481 = cljs.core.count.call(null,c__49446__auto___53478);
var G__53482 = (0);
seq__53422_53462 = G__53479;
chunk__53423_53463 = G__53480;
count__53424_53464 = G__53481;
i__53425_53465 = G__53482;
continue;
} else {
var vec__53431_53483 = cljs.core.first.call(null,seq__53422_53477__$1);
var name_53484 = cljs.core.nth.call(null,vec__53431_53483,(0),null);
var map__53434_53485 = cljs.core.nth.call(null,vec__53431_53483,(1),null);
var map__53434_53486__$1 = ((((!((map__53434_53485 == null)))?((((map__53434_53485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53434_53485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53434_53485):map__53434_53485);
var doc_53487 = cljs.core.get.call(null,map__53434_53486__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53488 = cljs.core.get.call(null,map__53434_53486__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53484);

cljs.core.println.call(null," ",arglists_53488);

if(cljs.core.truth_(doc_53487)){
cljs.core.println.call(null," ",doc_53487);
} else {
}

var G__53489 = cljs.core.next.call(null,seq__53422_53477__$1);
var G__53490 = null;
var G__53491 = (0);
var G__53492 = (0);
seq__53422_53462 = G__53489;
chunk__53423_53463 = G__53490;
count__53424_53464 = G__53491;
i__53425_53465 = G__53492;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__53436 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53437 = null;
var count__53438 = (0);
var i__53439 = (0);
while(true){
if((i__53439 < count__53438)){
var role = cljs.core._nth.call(null,chunk__53437,i__53439);
var temp__4657__auto___53493__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53493__$1)){
var spec_53494 = temp__4657__auto___53493__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_53494));
} else {
}

var G__53495 = seq__53436;
var G__53496 = chunk__53437;
var G__53497 = count__53438;
var G__53498 = (i__53439 + (1));
seq__53436 = G__53495;
chunk__53437 = G__53496;
count__53438 = G__53497;
i__53439 = G__53498;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__53436);
if(temp__4657__auto____$1){
var seq__53436__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53436__$1)){
var c__49446__auto__ = cljs.core.chunk_first.call(null,seq__53436__$1);
var G__53499 = cljs.core.chunk_rest.call(null,seq__53436__$1);
var G__53500 = c__49446__auto__;
var G__53501 = cljs.core.count.call(null,c__49446__auto__);
var G__53502 = (0);
seq__53436 = G__53499;
chunk__53437 = G__53500;
count__53438 = G__53501;
i__53439 = G__53502;
continue;
} else {
var role = cljs.core.first.call(null,seq__53436__$1);
var temp__4657__auto___53503__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53503__$2)){
var spec_53504 = temp__4657__auto___53503__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_53504));
} else {
}

var G__53505 = cljs.core.next.call(null,seq__53436__$1);
var G__53506 = null;
var G__53507 = (0);
var G__53508 = (0);
seq__53436 = G__53505;
chunk__53437 = G__53506;
count__53438 = G__53507;
i__53439 = G__53508;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
