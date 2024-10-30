const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('bnt-avancar');
const setaVoltar = document.getElementById('bnt-voltar');
let imagemAtual = 0;

function esconderImagens () {
  imagensPainel.forEach(imagem => {
    imagem.classList.remove('mostrar')
  })
}

function mostrarImagem () {
  imagensPainel[imagemAtual].classList.add('mostrar')
}

setaAvancar.addEventListener('click',function() {

  const TotalDeImagens = imagensPainel.length - 1

  if(imagemAtual === imagensPainel.length - 1)
    { return }
  
    imagemAtual++;
   
    esconderImagens()
    
    mostrarImagem()
})
   
setaVoltar.addEventListener('click', function(){
  if(imagemAtual === 0){
  return
  }

  imagemAtual--

  esconderImagens()
  
  mostrarImagem()

})