window.addEventListener("DOMContentLoaded",(function(){!function(){if(console.log("scriptstarted"),"www.vitalisium.es".includes(window.location.hostname)){const e=new URLSearchParams(window.location.search),t=document.querySelector(void 0);t.addEventListener("submit",(function(o){o.preventDefault(),e.set("s",t.querySelector(void 0).value);const n=new URL(window.location.href);n.search=e.toString(),window.location.href=n})),e.delete("s");const o=document.querySelectorAll("a"),n="https://www.vitalisium.es,/politica-de-privacidad,/terminos-y-condiciones-generales,/sobre-nosotros,/contactenos".split(",");Array.from(o).filter((e=>{const t=e.getAttribute("href");return t&&n.some((e=>t.startsWith(e)))})).forEach((t=>{const o=new URL(t.href);e.forEach(((e,t)=>{o.searchParams.set(t,e)})),e.has("lpid")&&e.has("cpid")&&"SPP"===e.get("la")&&null==o.origin&&(o.pathname="/click"),t.href=o.href})),dataLayer.push({scriptExecuted:!0}),console.log("scriptloaded")}}()}));