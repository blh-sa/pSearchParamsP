!function(){if(console.log("scriptstarted"),"www.nutrazenith.com".includes(window.location.hostname)){const e=new URLSearchParams(window.location.search),t=document.querySelector(".pc-searchform");t.addEventListener("submit",(function(r){r.preventDefault(),e.set("s",t.querySelector("input[type=search]").value);const n=new URL(window.location.href);n.search=e.toString(),window.location.href=n})),e.delete("s");const r=document.querySelectorAll("a"),n="https://www.nutrazenith.com,https://paiement-securise.nutrazenith.com".split(",");Array.from(r).filter((e=>{const t=e.getAttribute("href");return t&&n.some((e=>t.startsWith(e)))})).forEach((t=>{const r=new URL(t.href);e.forEach(((e,t)=>{r.searchParams.set(t,e)})),e.has("lpid")&&e.has("cpid")&&"TPP"===e.get("la")&&null==r.origin&&(r.pathname="/click"),t.href=r.href})),dataLayer.push({scriptExecuted:!0}),console.log("scriptloaded")}}();