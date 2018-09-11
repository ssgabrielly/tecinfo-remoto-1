var banners = 
	["Os melhores do Brasil!","Qualidade e prço baixo"];
var bannerAtual = 0;

function trocaBanner(){
	bannerAtual = (bannerAtual + ) % 2;
	document.querySeletor('h2#mensagem').textContent =
		banners[bannerAtual];
}
setIterval(trocaBanner, 2000);