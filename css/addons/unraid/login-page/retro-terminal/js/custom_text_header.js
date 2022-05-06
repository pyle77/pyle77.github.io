
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
    __               _________    _   __                     
   / /   ____  _____/ ____/   |  / | / /     ___________   __
  / /   / __ \\/ ___/ / __/ /| | /  |/ /_____/ ___/ ___/ | / /
 / /___/ /_/ (__  ) /_/ / ___ |/ /|  /_____(__  ) /   | |/ / 
/_____/\\____/____/\\____/_/  |_/_/ |_/     /____/_/    |___/  
                                                             
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
