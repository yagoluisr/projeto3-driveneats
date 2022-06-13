    let selecionarPratos;
    let selecionarBebidas;
    let selecionarSobremesas;

    let precoPrato = 0;
    let precoBebida = 0;
    let precoSobremesa = 0;
    
    const botao = document.querySelector(".botao");
    botao.disabled = true;

    function selecionarPrato(todaDiv, valor){
        precoPrato = valor;
        selecionarPratos = todaDiv.innerHTML;
        
        const borda = document.querySelector(".prato .selecionado");
        
        if(borda !== null){
            borda.classList.remove("selecionado");
        }
            todaDiv.classList.add("selecionado");
        liberarBotao();
    }

    function selecionarBebida(todaDiv, valor){
        precoBebida = valor;
        selecionarBebidas = todaDiv.innerHTML;

        const borda = document.querySelector(".bebida .selecionado");
        
        if(borda !== null){
            borda.classList.remove("selecionado");
        }
            todaDiv.classList.add("selecionado");
        liberarBotao();
    }

    function selecionarSobremesa(todaDiv, valor){
        precoSobremesa = valor;

        selecionarSobremesas = todaDiv.innerHTML;

        const borda = document.querySelector(".sobremesa .selecionado");
        
        if(borda !== null){
            borda.classList.remove("selecionado");
        }
            todaDiv.classList.add("selecionado");
        liberarBotao();
    }

    function liberarBotao(){
                
        if (selecionarPratos && selecionarBebidas && selecionarSobremesas){
            botao.classList.add("botao-pedido");
            botao.innerHTML = "Fechar Pedido";  
            botao.disabled = false;
       } 
    }

    function fecharPedido(){
        const total = precoPrato + precoBebida + precoSobremesa;
        let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${precoPrato}\n- Bebida: ${precoBebida}\n- Sobremesa: ${precoSobremesa}\nTotal: R$ ${total.toFixed(2)}`;

        let url = "https://wa.me/5521969141340?text=" + encodeURIComponent(mensagem);
        window.open(url);        
    }