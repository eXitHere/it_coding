import{j as y,r as i,R as S,a as D}from"./vendor.34ca65b3.js";const O=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))n(u);new MutationObserver(u=>{for(const o of u)if(o.type==="childList")for(const E of o.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&n(E)}).observe(document,{childList:!0,subtree:!0});function s(u){const o={};return u.integrity&&(o.integrity=u.integrity),u.referrerpolicy&&(o.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?o.credentials="include":u.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(u){if(u.ep)return;u.ep=!0;const o=s(u);fetch(u.href,o)}};O();const j=(r,e,s)=>r<=0||e<=0||s<=0?"\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u0E01\u0E23\u0E2D\u0E01\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E17\u0E31\u0E49\u0E07\u0E2A\u0E32\u0E21\u0E14\u0E49\u0E32\u0E19\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07":r<e+s?"":"\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E23\u0E39\u0E1B\u0E23\u0E48\u0E32\u0E07\u0E2A\u0E32\u0E21\u0E40\u0E2B\u0E25\u0E35\u0E48\u0E22\u0E21 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E21\u0E48",F=(r,e,s)=>{let n="";return r===e&&e===s&&r===e?(n="Equilateral triangle",n):s**2===r**2+e**1?(n="Right triangle",n):r===e||e===s||r===s?(n="Isosceles triangle",n):(n="Scalene triangle",n)},t=y.exports.jsx,d=y.exports.jsxs,R=({isOpen:r=!1,errorMessage:e="",onClose:s})=>r?t("div",{className:"absolute top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center",style:{backgroundColor:"rgba(255,255,255,0.55)",backdropFilter:"blur(1px)"},onClick:s,children:d("div",{onClick:n=>n.stopPropagation(),className:"flex flex-col justify-center w-2/3 p-2 space-y-4 bg-white border-2 border-gray-600 rounded-xl",children:[t("p",{className:"text-sm text-center",children:e}),t("button",{className:"self-center px-4 bg-white border-2 border-gray-600 rounded-md",onClick:s,children:"OK"})]})}):null,h=({side:r="",value:e="",onChange:s})=>d("div",{className:"flex py-1",children:[d("p",{className:"block",style:{minWidth:"80px"},children:["Side ",r]}),t("input",{value:e,onChange:s,className:"flex-1 text-center border border-black",style:{backgroundColor:"rgba(202,192,64,1)"}})]}),I=({result:r="",onEnter:e})=>d("div",{className:"flex py-1",children:[t("div",{style:{minWidth:"80px"},children:t("button",{onClick:e,className:"px-2 border border-black",style:{backgroundColor:"rgba(202,192,64,1)"},children:"Enter"})}),t("p",{className:"flex-1 text-center border border-black",style:{backgroundColor:"rgba(202,192,64,1)"},children:r})]}),L=()=>{const[r,e]=i.exports.useState(""),[s,n]=i.exports.useState(""),[u,o]=i.exports.useState(""),[E,N]=i.exports.useState(""),[v,b]=i.exports.useState(!1),[k,C]=i.exports.useState(!1),m=(l,p)=>{const a=l.target.value;if(a===""){p(a);return}const c=parseFloat(a),f=parseFloat(c.toFixed(3))===c,g=c.toString().replace(".","")===a.replace(".","");!isNaN(a)&&!isNaN(c)&&f&&g&&p(a)};return t("div",{className:"flex items-center justify-center w-screen min-h-screen",children:d("div",{className:"relative p-2 border border-black",style:{backgroundColor:"rgba(216, 216, 235, 1)"},children:[t("h2",{className:"text-2xl",children:"Enter the length of sides"}),t(h,{side:"1",value:r,onChange:l=>m(l,e)}),t(h,{side:"2",value:s,onChange:l=>m(l,n)}),t(h,{side:"3",value:u,onChange:l=>m(l,o)}),t("div",{className:"flex pl-20",children:t("p",{className:"flex-1 text-center",children:"Result"})}),t(I,{result:E,onEnter:()=>{const l=parseFloat(r),p=parseFloat(s),a=parseFloat(u),c=[l,p,a].sort((g,x)=>x-g),f=j(...c);f?(C(f),b(!0)):N(F(...c))}}),t(R,{isOpen:v,onClose:()=>b(!1),errorMessage:k})]})})},M=()=>t(L,{});S.render(t(D.StrictMode,{children:t(M,{})}),document.getElementById("root"));