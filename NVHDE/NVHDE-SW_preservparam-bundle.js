!function(){if(console.log("scriptstarted"),"www.vitalisium.com".includes(window.location.hostname)){const e=new URLSearchParams(window.location.search),t=document.querySelector(void 0);t.addEventListener("submit",(function(o){o.preventDefault(),e.set("s",t.querySelector("input[type=search]").value);const n=new URL(window.location.href);n.search=e.toString(),window.location.href=n})),e.delete("s");const o=document.querySelectorAll("a"),n="https://www.vitalisium.com,/datenschutzerklaerung,/impressum,/allgemeine-geschaftsbedingungen,/ueber-uns,/kontakt".split(",");Array.from(o).filter((e=>{const t=e.getAttribute("href");return t&&n.some((e=>t.startsWith(e)))})).forEach((t=>{const o=new URL(t.href);e.forEach(((e,t)=>{o.searchParams.set(t,e)})),e.has("lpid")&&e.has("cpid")&&"TPP"===e.get("la")&&"vl.vitalisium.com"==o.origin&&(o.pathname="/click"),t.href=o.href})),dataLayer.push({scriptExecuted:!0}),console.log("scriptloaded")}}();