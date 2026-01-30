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

 timeline: any[] = [
  {
      id: 'graduacao',
      label: 'Graduação',
      items: [
        {
          title: 'Graduação em Medicina',
          subtitle: 'Faculdade de Medicina da UFMG',
          period: '2013 - 2018',
          desc: 'Formação médica com sólida base clínica e cirúrgica.',
          extras: [
            {
              type: 'Iniciação Científica',
              title: 'Projeto de Pesquisa',
              desc: 'Participação em projeto de iniciação científica.'
            }
          ]
        }
      ]
    },

    {
      id: 'residencia',
      label: 'Residência',
      items: [
        {
          title: 'Residência Médica',
          subtitle: 'Cirurgia Cardiovascular no HC-UFMG',
          period: '2019 - 2024',
          desc: 'Treinamento intensivo em cirurgia cardiovascular.'
        }
      ]
    },

    {
      id: 'pos',
      label: 'Pós-Graduação',
      items: [
        {
          title: 'Mestrado',
          subtitle: 'Novas tecnologias cardiovasculares',
          period: 'Atual',
          desc: 'Foco em inovação e pesquisa.'
        }
      ]
    },

    {
      id: 'carreira',
      label: 'Carreira',
      items: [
        {
          title: 'EBSERH',
          subtitle: 'Cirurgia Cardiovascular no HC-UFMG',
          period: '2024 - Atual',
          desc: 'Atuação hospitalar universitária.'
        },
        {
          title: 'CTS',
          subtitle: 'Plantonista IAM',
          period: '2024 - Atual',
          desc: 'Atuação como plantonista remoto.'
        },
        {
          title: 'Bedside',
          subtitle: 'Redatora',
          period: '2024 - Atual',
          desc: 'Produção de conteúdo médico.'
        }
      ]
    }
  ];


 selectedTimeline: any = null;
 selectTimeline(group: any) {
  if (this.selectedTimeline === group) {
    this.selectedTimeline = null; // Fecha se clicar no que já está aberto
  } else {
    this.selectedTimeline = group; // Abre o novo
  }
}


 highlights = [
  {
    icon:'school',
    title: 'Preceptoria',
    text: 'Atuação no ensino de residentes no Hospital das Clínicas - UFMG.'
  },
  {
    icon: 'biotech',
    title: 'Pesquisa Científica',
    text: 'Publicações em congressos nacionais e internacionais.'
  },
  // pode adicionar outros mais
  /**
   {
   icon: '',
   title: '',
    text: ''
  },
   */
  {
    icon: 'trophy',
    title: 'Certificações',
    text: 'Cursos e certificações nacionais e internacionais.'
  },
  {
    icon: 'volunteer_activism',
    title: 'Voluntariado',
    text: 'Missões de trabalho voluntário em Cirurgia Cardiovascular'
  },
 ];






}
