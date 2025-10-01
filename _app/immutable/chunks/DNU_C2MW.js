var ke=Object.defineProperty;var oe=t=>{throw TypeError(t)};var ge=(t,e,r)=>e in t?ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var S=(t,e,r)=>ge(t,typeof e!="symbol"?e+"":e,r),ce=(t,e,r)=>e.has(t)||oe("Cannot "+r);var u=(t,e,r)=>(ce(t,e,"read from private field"),r?r.call(t):e.get(t)),v=(t,e,r)=>e.has(t)?oe("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r);var Z=(t,e,r)=>(ce(t,e,"access private method"),r);import"./Bzak7iHL.js";import{ac as be,bh as ve,bi as ye,l as k,i as f,k as x,p as D,e as R,g as C,a as g,b as N,f as T,aK as _e,s as we,c as ue,h as se,r as de}from"./d1nUEqUP.js";import{i as A}from"./DGIKQ0Uj.js";import{c as xe}from"./Bpp8RQHS.js";import{p,r as j,s as W}from"./BoGLRf8T.js";import{c as Ce}from"./C5wEKks9.js";import{s as U}from"./BTq2v8-X.js";import{a as $}from"./DsZizbNA.js";import{C as he,a as qe,w as ee,E as Pe,S as Re,f as De,h as Ne,i as Se,d as Ae,m as le,s as Me,c as Ee,b as _}from"./BpXMwfp_.js";import"./CDC-V8pw.js";import{i as Ie}from"./BfBzHWrq.js";import{c as Oe}from"./BDf64DY3.js";import{I as fe}from"./g6SG27Vf.js";const ze=[];function Be(t,e=!1,r=!1){return Q(t,new Map,"",ze,null,r)}function Q(t,e,r,i,s=null,o=!1){if(typeof t=="object"&&t!==null){var n=e.get(t);if(n!==void 0)return n;if(t instanceof Map)return new Map(t);if(t instanceof Set)return new Set(t);if(be(t)){var a=Array(t.length);e.set(t,a),s!==null&&e.set(s,a);for(var d=0;d<t.length;d+=1){var m=t[d];d in t&&(a[d]=Q(m,e,r,i,null,o))}return a}if(ve(t)===ye){a={},e.set(t,a),s!==null&&e.set(s,a);for(var h in t)a[h]=Q(t[h],e,r,i,null,o);return a}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function"&&!o)return Q(t.toJSON(),e,r,i,t)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}const Ge=Ae({component:"checkbox",parts:["root","group","group-label","input"]}),He=new he("Checkbox.Group"),pe=new he("Checkbox.Root");var M,E,I,O,re,z,B;const ne=class ne{constructor(e,r){v(this,O);S(this,"opts");S(this,"group");v(this,M,k(()=>this.group&&this.group.opts.name.current?this.group.opts.name.current:this.opts.name.current));v(this,E,k(()=>this.group&&this.group.opts.required.current?!0:this.opts.required.current));v(this,I,k(()=>this.group&&this.group.opts.disabled.current?!0:this.opts.disabled.current));S(this,"attachment");v(this,z,k(()=>({checked:this.opts.checked.current,indeterminate:this.opts.indeterminate.current})));v(this,B,k(()=>({id:this.opts.id.current,role:"checkbox",type:this.opts.type.current,disabled:this.trueDisabled,"aria-checked":Se(this.opts.checked.current,this.opts.indeterminate.current),"aria-required":Ne(this.trueRequired),"data-disabled":De(this.trueDisabled),"data-state":Je(this.opts.checked.current,this.opts.indeterminate.current),[Ge.root]:"",onclick:this.onclick,onkeydown:this.onkeydown,...this.attachment})));this.opts=e,this.group=r,this.attachment=qe(this.opts.ref),this.onkeydown=this.onkeydown.bind(this),this.onclick=this.onclick.bind(this),ee.pre([()=>{var i;return Be((i=this.group)==null?void 0:i.opts.value.current)},()=>this.opts.value.current],([i,s])=>{!i||!s||(this.opts.checked.current=i.includes(s))}),ee.pre(()=>this.opts.checked.current,i=>{var s,o;this.group&&(i?(s=this.group)==null||s.addValue(this.opts.value.current):(o=this.group)==null||o.removeValue(this.opts.value.current))})}static create(e,r=null){return pe.set(new ne(e,r))}get trueName(){return f(u(this,M))}set trueName(e){x(u(this,M),e)}get trueRequired(){return f(u(this,E))}set trueRequired(e){x(u(this,E),e)}get trueDisabled(){return f(u(this,I))}set trueDisabled(e){x(u(this,I),e)}onkeydown(e){this.opts.disabled.current||(e.key===Pe&&e.preventDefault(),e.key===Re&&(e.preventDefault(),Z(this,O,re).call(this)))}onclick(e){this.opts.disabled.current||Z(this,O,re).call(this)}get snippetProps(){return f(u(this,z))}set snippetProps(e){x(u(this,z),e)}get props(){return f(u(this,B))}set props(e){x(u(this,B),e)}};M=new WeakMap,E=new WeakMap,I=new WeakMap,O=new WeakSet,re=function(){this.opts.indeterminate.current?(this.opts.indeterminate.current=!1,this.opts.checked.current=!0):this.opts.checked.current=!this.opts.checked.current},z=new WeakMap,B=new WeakMap;let te=ne;var G,H,J;const ae=class ae{constructor(e){S(this,"root");v(this,G,k(()=>this.root.group?!!(this.root.opts.value.current!==void 0&&this.root.group.opts.value.current.includes(this.root.opts.value.current)):this.root.opts.checked.current));v(this,H,k(()=>!!this.root.trueName));v(this,J,k(()=>({type:"checkbox",checked:this.root.opts.checked.current===!0,disabled:this.root.trueDisabled,required:this.root.trueRequired,name:this.root.trueName,value:this.root.opts.value.current})));this.root=e}static create(){return new ae(pe.get())}get trueChecked(){return f(u(this,G))}set trueChecked(e){x(u(this,G),e)}get shouldRender(){return f(u(this,H))}set shouldRender(e){x(u(this,H),e)}get props(){return f(u(this,J))}set props(e){x(u(this,J),e)}};G=new WeakMap,H=new WeakMap,J=new WeakMap;let ie=ae;function Je(t,e){return e?"indeterminate":t?"checked":"unchecked"}var Te=T("<input/>"),je=T("<input/>");function Ke(t,e){D(e,!0);let r=p(e,"value",15),i=j(e,["$$slots","$$events","$$legacy","value"]);const s=k(()=>le(i,{"aria-hidden":"true",tabindex:-1,style:Me}));var o=R(),n=C(o);{var a=m=>{var h=Te();$(h,()=>({...f(s),value:r()}),void 0,void 0,void 0,!0),g(m,h)},d=m=>{var h=je();$(h,()=>({...f(s)}),void 0,void 0,void 0,!0),Oe(h,r),g(m,h)};A(n,m=>{f(s).type==="checkbox"?m(a):m(d,!1)})}g(t,o),N()}function Ve(t,e){D(e,!1);const r=ie.create();Ie();var i=R(),s=C(i);{var o=n=>{Ke(n,W(()=>r.props))};A(s,n=>{r.shouldRender&&n(o)})}g(t,i),N()}var Fe=T("<button><!></button>"),Le=T("<!> <!>",1);function Qe(t,e){const r=_e();D(e,!0);let i=p(e,"checked",15,!1),s=p(e,"ref",15,null),o=p(e,"disabled",3,!1),n=p(e,"required",3,!1),a=p(e,"name",3,void 0),d=p(e,"value",3,"on"),m=p(e,"id",19,()=>Ee(r)),h=p(e,"indeterminate",15,!1),b=p(e,"type",3,"button"),y=j(e,["$$slots","$$events","$$legacy","checked","ref","onCheckedChange","children","disabled","required","name","value","id","indeterminate","onIndeterminateChange","child","type"]);const q=He.getOr(null);q&&d()&&(q.opts.value.current.includes(d())?i(!0):i(!1)),ee.pre(()=>d(),()=>{q&&d()&&(q.opts.value.current.includes(d())?i(!0):i(!1))});const P=te.create({checked:_.with(()=>i(),l=>{var c;i(l),(c=e.onCheckedChange)==null||c.call(e,l)}),disabled:_.with(()=>o()??!1),required:_.with(()=>n()),name:_.with(()=>a()),value:_.with(()=>d()),id:_.with(()=>m()),ref:_.with(()=>s(),l=>s(l)),indeterminate:_.with(()=>h(),l=>{var c;h(l),(c=e.onIndeterminateChange)==null||c.call(e,l)}),type:_.with(()=>b())},q),K=k(()=>le({...y},P.props));var V=Le(),F=C(V);{var w=l=>{var c=R(),Y=C(c);{let me=k(()=>({props:f(K),...P.snippetProps}));U(Y,()=>e.child,()=>f(me))}g(l,c)},L=l=>{var c=Fe();$(c,()=>({...f(K)}));var Y=ue(c);U(Y,()=>e.children??se,()=>P.snippetProps),de(c),g(l,c)};A(F,l=>{e.child?l(w):l(L,!1)})}var X=we(F,2);Ve(X,{}),g(t,V),N()}function Ue(t,e){D(e,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=j(e,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M20 6 9 17l-5-5"}]];fe(t,W({name:"check"},()=>r,{get iconNode(){return i},children:(s,o)=>{var n=R(),a=C(n);U(a,()=>e.children??se),g(s,n)},$$slots:{default:!0}})),N()}function We(t,e){D(e,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=j(e,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M5 12h14"}]];fe(t,W({name:"minus"},()=>r,{get iconNode(){return i},children:(s,o)=>{var n=R(),a=C(n);U(a,()=>e.children??se),g(s,n)},$$slots:{default:!0}})),N()}var Xe=T('<div data-slot="checkbox-indicator" class="text-current transition-none"><!></div>');function ht(t,e){D(e,!0);let r=p(e,"ref",15,null),i=p(e,"checked",15,!1),s=p(e,"indeterminate",15,!1),o=j(e,["$$slots","$$events","$$legacy","ref","checked","indeterminate","class"]);var n=R(),a=C(n);{const d=(h,b)=>{let y=()=>b==null?void 0:b().checked,q=()=>b==null?void 0:b().indeterminate;var P=Xe(),K=ue(P);{var V=w=>{Ue(w,{class:"size-3.5"})},F=w=>{var L=R(),X=C(L);{var l=c=>{We(c,{class:"size-3.5"})};A(X,c=>{q()&&c(l)},!0)}g(w,L)};A(K,w=>{y()?w(V):w(F,!1)})}de(P),g(h,P)};let m=k(()=>Ce("border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive peer flex size-4 shrink-0 items-center justify-center rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e.class));xe(a,()=>Qe,(h,b)=>{b(h,W({"data-slot":"checkbox",get class(){return f(m)}},()=>o,{get ref(){return r()},set ref(y){r(y)},get checked(){return i()},set checked(y){i(y)},get indeterminate(){return s()},set indeterminate(y){s(y)},children:d,$$slots:{default:!0}}))})}g(t,n),N()}export{ht as C,Ke as H,Ue as a,Be as s};
