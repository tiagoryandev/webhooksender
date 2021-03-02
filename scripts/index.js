function sendWebhook() {
    let url = document.getElementById("valueURL").value || "";
    let regex = /discord.com\/api\/webhooks\/([^\/]+)\/([^\/]+)/;

    if (url == "") {
        document.getElementById("valueURL").value = "";
        return window.alert("Forneça um URL de um Webhook!");
    } else {
        if (!regex.exec(url)) {
            document.getElementById("valueURL").value = "";
            return window.alert("O URL fornecido não é válido!");
        };
    }; 

    let avatar = document.getElementById("valueAvatar").value;

    if (avatar == "") {
        avatar = "https://avatars.githubusercontent.com/u/62999761?s=460&u=1a2c2557c68aeef26e6eb8fab98ff1ca32a7d259&v=4";
    } else {
        if (!/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(avatar)){ 
            document.getElementById("valueAvatar").value = "";
            return window.alert("O URL do Avatar fornecido não é uma Imagem!");
        };
    };
    
    let username = document.getElementById("valueUsername").value || "TiaGoiNsaNy - Webhook";
    let message = document.getElementById("valueMsg").value || "Mensagem enviada pelo sistema de Webhook do TiaGoiNsaNy";

    fetch(url + "?wait=true",
        {
            "method": "POST",
            "headers": { 
                "content-type": "application/json" 
            },
            "body": JSON.stringify({
                username: username,
                avatar_url: avatar,
                content: message
            })
        }).then(() => {
            document.getElementById("sucess").style.display = "block";
            document.getElementById("error").style.display = "none";
        }).catch((error) => {
            document.getElementById("sucess").style.display = "none";
            document.getElementById("error").style.display = "block";
        });
};