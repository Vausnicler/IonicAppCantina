import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public categorias = [
    { codigo: 1, nome: 'Pizzas'    },
    { codigo: 2, nome: 'Burguers'  },
  ]

  public slideOpts = {
    slidesPerView: 1
  }
  public produtos = [
    {
      imagens    :  ['hamburg-simples.jpg'],
      nome       :  'Hambúrguer Simples',
      descricao  :  'Hambúrguer de carne 100% bovina, 1 fatia deliciosa de queijo e o delicioso molho caseiro da casa',
      valor      :  12.99,
      codigo     :  1,
      categoria  :  2,
      visibled   :  false
  },
    {
      imagens    :  ['hamburg-frango.jpg'],
      nome       :  'Hambúrguer de Frango Empanado',
      descricao  :  'Hambúrguer de frango empanado, 1 fatia deliciosa de queijo, 3 fatias de bacon e o delicioso molho caseiro da casa',
      valor      :  20.99,
      codigo     :  2,
      categoria  :  2,
      visibled   :  false
    },
    {
      imagens    :  ['hamburg-double.jpg'],
      nome       :  'Hambúrguer Double',
      descricao  :  '2 Hambúrgueres de carne 100% bovina, delicioso queijo cheddar e o delicioso molho caseiro da casa',
      valor      :  30.00,
      codigo     :  3,
      categoria  :  2,
      visibled   :  false
    },
    {
      imagens    :  ['hamburg-vegetariano.jpg'],
      nome       :  'Hambúrguer Vegetariano',
      descricao  :  'Hambúrguer de tofu 100% vegano, 1 fatia deliciosa de queijo, tomate e cebola com o delicioso molho caseiro da casa',
      valor      :  19.99,
      codigo     :  4,
      categoria  :  2,
      visibled   :  false
  },
    {
      imagens    : ['pizza-calabresa.jpg'],
      nome       : 'Pizza Calabresa',
      descricao  : ' A opção aqui agrada a qualquer paladar. Experimente e se surpreenderá',
      valor      :  30.00,
      codigo     :  4,
      categoria  :  1,
      visibled   : false
    },
    {
      imagens    : ['pizza-napolitana.jpg'],
      nome       : 'Pizza Napolitana',
      descricao  : 'Tradicional da Itália é saborosa e tem tudo o que o italiano gosta em termos de recheios',
      valor      :  39.99,
      codigo     :  5,
      categoria  :  1,
      visibled   :  false
    },
    {
      imagens    : ['pizza-4queijos.jpg'],
      nome       : 'Pizza 4 Queijos',
      descricao  : 'A combinação de queijos com diferentes consistências e sabores é o segredo',
      valor      :  45.00,
      codigo     :  6,
      categoria  :  1,
      visibled   :  false
    },
    {
      imagens    : ['pizza-vegetariana.jpg'],
      nome       : 'Pizza Vegetariana',
      descricao  : 'A opção perfeita para os vegetarianos loucos por pizza.',
      valor      :  50.00,
      codigo     :  7,
      categoria  :  1,
      visibled   :  false
    }
  ]

  public pathImgs = '../../assets/img/';

  public selected = 0;

  constructor(private navCtrl: NavController) {
    this.setSelected(1);
  }

  public formataValor(valor) {
    let retorno = "";

    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public setSelected(codigoCategoria) {
    this.selected = codigoCategoria;

    this.produtos.map(el => el.visibled = false);

    this.produtos
    .filter(el => el.categoria == this.selected)
    .map(el => el.visibled = true);
  }

  public goProduto(produto) {
    this.navCtrl.navigateForward('produto', {
      queryParams: { produto: produto }
    });
  }

}
