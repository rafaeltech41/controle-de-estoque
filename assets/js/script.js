class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = [];
  }
  salvar() {
    let produto = this.lerDados();
    
        if(this.validarCampo(produto)){
            alert('salvar')
        }
  }

  lerDados() {
    
    let produto = {};
    produto.id = this.id;
    produto.nomeProduto = document.getElementById('produto').value;
    produto.preco = document.getElementById('preco').value;

    return produto;
  }
  validarCampo(produto){
    let msg = ''
    if(produto.nomeProduto == ""){
        msg+= ' -informe o nome do produto';
    }
    if(produto.preco== ""){
        msg+= ' - informe o preço do produto';
    }
    if(msg !=''){
        alert(msg);
        return false;
    }
    return true;
  }
  cancelar() {
    
  }
}
var produto = new Produto();
