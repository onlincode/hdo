function doTest(){let e=document.querySelectorAll("p");e.forEach(e=>{if(/^\d+\./.test(e.innerText)){let n=e.innerText.match(/\d+/)[0],t=e.nextElementSibling,r=/…+/;if(/^\d+(\s)*(?=.*\bA\.(\s)*)(?=.*\bB\.(\s)*)(?=.*\bC\.(\s)*)(?=.*\bD\.(\s)*).*$/.test(e.innerText)){let l=e.innerText.trim().replace("A.","}~").replace("B.","}~").replace("C.","}~").replace("D.","}~").split(/(\s)*}~(\s)*/).filter(e=>e&&e?.length&&!!/\S/.test(e));for(i=0,e.innerHTML=n+".<br>";i<4;i++){let a=String.fromCharCode(i+65);e.innerHTML+=`
        <input type="radio" name ="${n}" value="${a}" id="${n+a}">
        <label for="${n+a}">${a+". "+l[i+1]}</label><br>
        `}}else if(/^(?=.*\bA\.(\s)*)(?=.*\bB\.(\s)*)(?=.*\bC\.(\s)*)(?=.*\bD\.(\s)*).*$/.test(t.innerText.replaceAll("\n"," "))){let o=t.innerHTML.replaceAll("&nbsp;"," ").trim().replace("A.","}~").replace("B.","}~").replace("C.","}~").replace("D.","}~").split(/(\s)*}~(\s)*/).filter(e=>e&&e?.length&&!!/\S/.test(e));for(i=0,t.innerHTML="";i<4;i++){let s=String.fromCharCode(i+65);t.innerHTML+=`
        <input type="radio" name ="${n}" value="${s}" id="${n+s}">
        <label for="${n+s}">${s+". "+o[i]}</label><br>
        `}}else r.test(e.innerText)?e.innerHTML=e.innerHTML.replace(/…+\.?\.?/,`<input type = "text" id="A${n}" style="border:0;outline:0; border-bottom: 1px dotted;background: #f4f4f4;" oninput="this.size = Math.max(this.value.length,20)" autocomplete="off"/>`):r.test(t.innerText)?t.innerHTML=t.innerHTML.replace(/…+\.?\.?/,`<input type = "text" id="A${n}" style="border:0;outline:0; border-bottom: 1px dotted;background: #f4f4f4;" oninput="this.size = Math.max(this.value.length,20)" autocomplete="off"/>`):/^\d+(\s)*(?=.*\bA\)(\s)*)(?=.*\bB\)(\s)*)(?=.*\bC\)(\s)*)(?=.*\bD\)(\s)*).*$/.test(e.innerText)&&(e.innerHTML=e.innerHTML.replace("(A)",`<input type="radio" name ="${n}" value="A" id="${n+"A"}">
        <label for="${n+"A"}">(A)`),e.innerHTML=e.innerHTML.replace("(B)",`<input type="radio" name ="${n}" value="B" id="${n+"B"}">
        <label for="${n+"B"}">(B)`),e.innerHTML=e.innerHTML.replace("(C)",`<input type="radio" name ="${n}" value="C" id="${n+"C"}">
        <label for="${n+"C"}">(C)`),e.innerHTML=e.innerHTML.replace("(D)",`<input type="radio" name ="${n}" value="D" id="${n+"D"}">
        <label for="${n+"D"}">(D)`),e.innerHTML=e.innerHTML.replaceAll("</span>","</span></label>"))}})}

if (location.href.includes("huongdan.online")) document.getElementById("doTest").addEventListener("click",doTest);
