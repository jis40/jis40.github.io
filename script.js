const email = "jis@cin.ufpe.br";
const emailImage = document.getElementById("email-icon");
const copyText = document.getElementById("copyText");

emailImage.addEventListener("click", async() =>{
    
    try{
        await navigator.clipboard.writeText(email);
        copyText.style.display = "block";
        setTimeout(() => {
            copyText.style.display = "none";
        }, 1000);

    }catch(err){
        console.error("Failed to copy email: ", err);
    }
});