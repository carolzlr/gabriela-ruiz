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
      desc:'Tratamento cirúrgico de doenças do coração e grandes vasos, abrangendo procedimentos convencionais e técnicas minimamente invasivas'
    },
    {
      title: 'Plastia ou Troca Valvares',
      img: 'images/valva3.png',
      desc: 'Cirurgias para reparo (plastia) ou substituição de válvulas cardíacas acometidas por estenose ou insuficiência'
    },
    {
      title: 'Revascularização do Miocárdio',
      img: 'images/revasc.jpg',
      desc: 'Procedimento indicado para restaurar o fluxo sanguíneo ao coração em pacientes com obstruções nas artérias coronárias'
    },
    {
      title: 'Transplante Cardíaco',
      img: 'images/transplante1.png',
      desc: 'Tratamento definitivo para insuficiência cardíaca avançada, realizado por equipe especializada e capacitada'
    },
    {
      title: 'Aneurismas de Aorta',
      img: 'images/aneurisma1.jpg',
      desc: 'Correção cirúrgica ou endovascular de dilatações na artéria aorta, visando prevenir rupturas e complicações graves'
    },
    {
      title: 'Marcapassos',
      img: 'images/marcapasso2.png',
      desc: 'Implante de dispositivos eletrônicos para correção de distúrbios do ritmo cardíaco (bradicardias)'
    },
    {
      title: 'ECMO',
      img: 'images/ecmo1.png',
      desc: 'Suporte de vida extracorpóreo utilizado em casos graves de falência cardíaca ou pulmonar como ponte para recuperação ou transplante'
    },
    {
      title: 'Consultas Presenciais e Online',
      img: 'images/consulta1.jpeg',
      desc: 'Atendimento clínico humanizado para diagnóstico, segunda opinião médica e acompanhamento pós-operatório'
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
          title: 'Medicina',
          subtitle: 'Faculdade de Medicina - UFMG',
          period: '2013 - 2018',
          desc: 'Formação médica com sólida base clínica e cirúrgica.',
          extras: [
            {
              type: 'Iniciação Científica',
              title: 'Programa de Rastreamento de Valvopatia Reumática (PROVAR)',
              desc: 'Sob orientação dos Professores  Dr. Bruno Ramos Nascimento e Dra. Maria do Carmo Nunes, participou do rastreamento ecocardiográfico de crianças em escolas públicas de Belo Horizonte/MG. Colaborou na redação e publicação de artigos científicos, e participações em Congressos nacionais e internacionais.'
            },
            {
              type: 'Monitoria',
              title: '',
              desc: 'Monitora da Disciplina de Anatomia na Faculdade de Medicina da UFMG, durante 5 anos. '
            },
            {
              type: 'Extensão Acadêmica',
              title: '',
              desc: 'Paticipou das Ligas Acadêmicas de Cardiologia, Clínica Médica, Feridas e Cirurgia.'
            },
            {
              type: 'Intercâmbio',
              title: '',
              desc: 'Estágio Internacional em Cirurgia Cardiovascular no Norrlands Universitetssjukhus - Umeå - Suécia.'
            }
          ]
        }
      ]
    },
    {
      id: 'residencia',
      label: 'Residência Médica',
      items: [
        {
          title: 'Residência Médica',
          subtitle: 'Cirurgia Cardiovascular - HC-UFMG',
          period: '2019 - 2024',
          desc: 'Treinamento intensivo no Serviço de Cirurgia Cardiovascular',
          extras: [
            {
              type: 'Estágio Optativo',
              title: 'Cirurgia Cardiovascular Pediátrica',
              desc: 'Hospital da Beneficiência Portuguesa - São Paulo/SP'
            },
            {
              type: 'Estágio Optativo',
              title: 'Cirurgia Cardiovascular Pediátrica',
              desc: 'Hospital da Criança - São José do Rio Preto/SP'
            },
            {
              type: 'Estágio Optativo',
              title: 'Transplante Cardíaco e Cirurgias Cardíacas Complexas',
              desc: 'Equipe Lev Cardiovascular - São Paulo/SP'
            },
            {
              type: 'Estágio Optativo',
              title: 'Cirurgia de Aorta e Endovascular',
              desc: 'Hospital de Clínicas - Porto Alegre/RS'
            },
            {
              type: 'Estágio Internacional',
              title: 'Transplante Cardíaco',
              desc: 'Hospital Universitário de Coimbra - Portugal'
            }
          ]
        }
      ]
    },

    {
      id: 'pos',
      label: 'Pós-Graduação',
      items: [
        {
          title: 'Mestrado',
          subtitle: 'Qualidade Assistencial em Transplante Cardíaco',
          period: 'Atual',
          desc: 'Mestrado em andamento no Programa de Pós-Graduação em Cirurgia e Oftalmologia da Faculdade de Medicina da UFMG'
        }
      ]
    },

    {
      id: 'profissional',
      label: 'Profissional',
      items: [
        {
          title: 'EBSERH',
          subtitle: 'Cirurgiã Cardiovascular no HC-UFMG',
          period: '2024 - Atual',
          desc: 'Membro da Equipe de Cirurgia Cardiovascular atuando em transplantes cardíacos, dispositivos de estimulação cardíaca, transplante pulmonar, cirurgias eletivas e de urgência',
          extras: [
            {
              type: 'Preceptoria',
              title: 'Residência Médica',
              desc: 'Atuação no ensino de Médicos Residentes'
            },
            {
              type: 'Pesquisa Científica',
              title: '',
              desc: 'Atua no grupo de Pesquisa em Cirurgia Cardiovascular, colaborando para o banco de dados do Serviço'
            }
          ]
        },
        /**
         * {
          title: 'Faculdade de Medicina - UFMG',
          subtitle: 'Professor Substituto - Departamento de Cirurgia',
          period: '2024 - Atual',
          desc: 'Professor substituto das disciplinas XXXX'
        },
         */
        {
          title: 'Centro de Telessaúde do Hospital das Clínicas - UFMG',
          subtitle: 'Plantonista da Linha de Cuidados em Infarto Agudo do Miocárdio',
          period: '2024 - Atual',
          desc: 'Prestação de serviços de teleconsultoria para Rede de Infarto do Ministério da Saúde'
        },
        {
          title: 'Bedside Medicine',
          subtitle: 'Redatora',
          period: '2024 - Atual',
          desc: 'Site de conteúdos educativos nas áreas de Cardiointensivismo e Cirurgia Cardiovascular'
        },
        {
          title: 'Instituto Orizonti',
          subtitle: 'Atendimentos Ambulatoriais em Cirurgia Cardiovascular',
          period: '2023 - Atual',
          desc: ''
        },
        {
          title: 'Instituto Orizonti',
          subtitle: 'Plantonista na Unidade Coronariana',
          period: '2023 - Atual',
          desc: ''
        },
        {
          title: 'Hospital Evangélico - Centro de Especialidades',
          subtitle: 'Atendimentos Ambulatoriais em Cirurgia Cardiovascular',
          period: '2024 - Atual',
          desc: ''
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
    text: 'Atuação no Ensino de Médicos Residentes no Hospital das Clínicas (UFMG) e Hospital Felício Rocho'
  },
  {
    icon: 'biotech',
    title: 'Pesquisa Científica',
    text: 'Publicações em Revistas Científicas de impacto, apresentações em Congressos Nacionais e Internacionais'
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
    icon: 'star_shine',
    title: 'Especialista',
    text: 'Título de Cirurgiã Cardiovascular certificado pela Sociedade Brasileira de Cirurgia Cardiovascular'
  },
  {
    icon: 'volunteer_activism',
    title: 'Trabalho Voluntário',
    text: 'Missões humanitárias em Cirurgia Cardiovascular'
  },
  {
    icon: 'cardiology',
    title: 'ACLS',
    text: 'Instrutora certificada em Suporte Avançado de Vida em Cardiologia pela American Heart Association'
  },
  {
    icon: 'school',
    title: 'Atividade Acadêmica',
    text: 'Professora Substituta do Departamento de Cirurgia da Faculdade de Medicina - UFMG'
  },
 ];






}
