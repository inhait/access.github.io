// javascript
// 
//
//
// 

var intervalID = window.setInterval(updateScreen, 200);
var console = document.getElementById("console");
const msg = document.querySelector(".msg");

var txt = [
  "NAME: 0c001null........ ENCYPT://000.222.2345",
  "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
  "RETRY: REINDEER FLOTILLA",
  "Z:> /OPEN/FES/......./ EXECUTE -PLAYERS 0",
  "================================================",
  "Priority 1 // local / scanning...",
  "scanning ports...",
  "BACKDOOR FOUND (23.45.23.12.00000000)",
  "BACKDOOR FOUND (13.66.23.12.00110000)",
  "BACKDOOR FOUND (13.66.23.12.00110044)",
  "...",
  "...",
  "BRUTE.EXE -r -z",
  "...locating vulnerabilities...",
  "...vulnerabilities found...",
  "MCP/> DEPLOY CLU",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
  "SCAN: __ 0001.0000.0554.0550",
  "SCAN: __ 0012.0000.0553.0030",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
  
  "section .text",
  "; Export the entry point to the ELF linker or loader.  The conventional",
  "; entry point is to override the default.",
  " global _start",

  "section .data.............",
  "msg db  'Hello, world!',0xa ;our dear string",
  "len equ $ - msg         ;length of our dear string",

  "section .text",

  "; linker puts the entry point here:",
  "_start:",

  "; Write the string to stdout:",

  "mov edx,len ;message length",
  "mov ecx,msg ;message to write",
  "mov ebx,1   ;file descriptor (stdout)",
  "mov eax,4   ;system call number (sys_write)",
  "int 0x80    ;call kernel",

  "; Exit via the kernel:",

  "mov ebx,0   ;process' exit code",
  "mov eax,1   ;system call number (sys_exit)",
  "int 0x80    ;call kernel - this interrupt won't return",
  "         .global go  ",
  " .data               ",
  "msg:     .ascii  .hELLO w0RLd\n ",
  "handle:  .int    0 ",
  "written: .int    0 ",
  "                   ",
  "         .text     ",
  "go:                ",
  "/*                 */",
  " push           $-11 ",
  "call _Gethandle@3    ",
  


]

var docfrag = document.createDocumentFragment();

function updateScreen() {
  //Shuffle the "txt" array
  txt.push(txt.shift());
  //Rebuild document fragment
  txt.forEach(function(e) {
    var p = document.createElement("p");
    p.textContent = e;
    docfrag.appendChild(p);
  });
  //Clear DOM body
  while (console.firstChild) {
    console.removeChild(console.firstChild);
  }
  console.appendChild(docfrag);
}

setTimeout(() => { msg.style.background = "limegreen";
msg.innerHTML = "ACCESS GRANTED";
msg.style.boxShadow = "0 0 30px limegreen";
console.style.display = "none";}, 5000);