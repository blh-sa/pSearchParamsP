!function(){if(console.log("scriptstarted"),"www.cilumine.com".includes(window.location.hostname)){const e=new URLSearchParams(window.location.search),t=document.querySelector(".pc-searchform");t.addEventListener("submit",(function(c){c.preventDefault(),e.set("s",t.querySelector("input[type=search]").value);const o=new URL(window.location.href);o.search=e.toString(),window.location.href=o})),e.delete("s");const c=document.querySelectorAll("a"),o="https://www.cilumine.com,https://vl.cilumine.com,https://paiement-securise.cilumine.com".split(",");Array.from(c).filter((e=>{const t=e.getAttribute("href");return t&&o.some((e=>t.startsWith(e)))})).forEach((t=>{const c=new URL(t.href);e.forEach(((e,t)=>{c.searchParams.set(t,e)})),e.has("lpid")&&e.has("cpid")&&"TPP"===e.get("la")&&"vl.cilumine.com"==c.origin&&(c.pathname="/click"),t.href=c.href})),dataLayer.push({scriptExecuted:!0}),console.log("scriptloaded")}}();