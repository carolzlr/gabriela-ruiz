import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  menuOpen = false;
  selectedArea: any;

  // Dados das áreas de atuação
  areasAtuacao = [
    {
      title:'Cirurgia Cardiovascular',
      img:'images/ccv.jpg',
      desc:'Tratamento cirúrgico de doenças do coração e grandes vasos, abrangendo desde procedimentos convencionais até técnicas minimamente invasivas.'
    },
    {
      title: 'Plastia ou Troca Valvares',
      img: 'images/valvar.jpg',
      desc: 'Cirurgias para reparo (plastia) ou substituição de válvulas cardíacas acometidas por estenose ou insuficiência.'
    },
    {
      title: 'Revascularização do Miocárdio',
      img: 'images/revasc.jpg',
      desc: 'Procedimento indicado para restaurar o fluxo sanguíneo ao coração em pacientes com obstruções nas artérias coronárias.'
    },
    {
      title: 'Transplante Cardíaco',
      img: 'images/transplante.jpg',
      desc: 'Tratamento definitivo para insuficiência cardíaca avançada, realizado por equipe especializada e capacitada.'
    },
    {
      title: 'Aneurismas de Aorta',
      img: 'images/aneurisma.jpg',
      desc: 'Correção cirúrgica ou endovascular de dilatações na artéria aorta, visando prevenir rupturas e complicações graves.'
    },
    {
      title: 'Marcapassos',
      img: 'images/marcapasso.jpg',
      desc: 'Implante de dispositivos eletrônicos para correção de distúrbios do ritmo cardíaco (bradicardias).'
    },
    {
      title: 'ECMO',
      img: 'images/ecmo.jpg',
      desc: 'Suporte de vida extracorpóreo utilizado em casos graves de falência cardíaca ou respiratória como ponte para recuperação ou transplante.'
    },
    {
      title: 'Consultas Presenciais e Online',
      img: 'images/consulta.jpg',
      desc: 'Atendimento clínico humanizado para diagnóstico, segunda opinião médica e acompanhamento pós-operatório.'
    }
  ]

  ngAfterViewInit(): void {
    // força o Instagram a processar os embeds
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }

  // Lógica Menu Hamburger

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }

  // Lógica Modal

  openModal(area: any)
 {
  this.selectedArea = area;
  this.updateScroll();
 }

 closeModal() {
  this.selectedArea = null;
  this.updateScroll();
 }

 // Lógica para travar o scroll
 private updateScroll(){
  if(this.menuOpen || this.selectedArea) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
 }
}
