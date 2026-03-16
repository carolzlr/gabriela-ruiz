import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home-en',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-en.component.html',
  styleUrl: './home-en.component.scss'
})
export class HomeEnComponent implements AfterViewInit {

  menuOpen = false;
  selectedArea: any;

  // Dados das áreas de atuação
  areasAtuacao = [
    {
      title:'Cardiovascular Surgery',
      img:'images/ccv.jpg',
      desc:'Surgical treatment of heart and great vessel diseases, covering conventional procedures and minimally invasive techniques.'
    },
    {
      title: 'Valve Repair or Replacement',
      img: 'images/valva3.png',
      desc: 'Surgeries to repair (plasty) or replace heart valves affected by stenosis or insufficiency.'
    },
    {
      title: 'Coronary Artery Bypass Grafting (CABG)',
      img: 'images/revasc.jpg',
      desc: 'Procedure indicated to restore blood flow to the heart in patients with coronary artery obstructions.'
    },
    {
      title: 'Heart Transplantation',
      img: 'images/transplante1.png',
      desc: 'Definitive treatment for advanced heart failure, performed by a specialized and highly trained team'
    },
    {
      title: 'Aortic Aneurysms',
      img: 'images/aneurisma1.jpg',
      desc: 'Surgical or endovascular correction of aortic artery dilations to prevent ruptures and severe complications.'
    },
    {
      title: 'Pacemakers',
      img: 'images/marcapasso2.png',
      desc: 'Implantation of electronic devices to correct heart rhythm disorders (bradycardia).'
    },
    {
      title: 'ECMO',
      img: 'images/ecmo1.png',
      desc: 'Extracorporeal membrane oxygenation life support used in severe cases of heart or lung failure as a bridge to recovery or transplant.'
    },
    {
      title: 'In-person and Online Consultations',
      img: 'images/consulta1.jpeg',
      desc: 'Compassionate clinical care for diagnosis, medical second opinions, and post-operative follow-up.'
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
      id: 'education',
      label: 'Education',
      items: [
        {
          title: 'MD, Medicine',
          subtitle: 'UFMG School of Medicine',
          period: '2013 - 2018',
          desc: 'Medical degree with a solid clinical and surgical foundation.',
          extras: [
            {
              type: 'Scientific Initiation',
              title: 'Rheumatic Heart Disease Screening Program (PROVAR)',
              desc: 'Under the supervision of Prof. Dr. Bruno Ramos Nascimento and Dr. Maria do Carmo Nunes, participated in echocardiographic screening of children in public schools in Belo Horizonte/MG. Collaborated on writing and publishing scientific articles and participating in national and international congresses.'
            },
            {
              type: 'Teaching Assistant',
              title: '',
              desc: 'Anatomy Teaching Assistant at the UFMG School of Medicine for 5 years.'
            },
            {
              type: 'Academic Extension',
              title: '',
              desc: 'Member of Academic Leagues in Cardiology, Internal Medicine, Wound Care, and Surgery.'
            },
            {
              type: 'International Exchange',
              title: '',
              desc: 'International Internship in Cardiovascular Surgery at Norrlands Universitetssjukhus - Umeå, Sweden.'
            }
          ]
        }
      ]
    },
    {
      id: 'residency',
      label: 'Medical Residency',
      items: [
        {
          title: 'Medical Residency',
          subtitle: 'Cardiovascular Surgery - HC-UFMG',
          period: '2019 - 2024',
          desc: 'Intensive training within the Cardiovascular Surgery Service.',
          extras: [
            {
              type: 'Elective Internship',
              title: 'Pediatric Cardiovascular Surgery',
              desc: 'Hospital da Beneficência Portuguesa - São Paulo/SP'
            },
            {
              type: 'Elective Internship',
              title: 'Pediatric Cardiovascular Surgery',
              desc: 'Hospital da Criança - São José do Rio Preto/SP'
            },
            {
              type: 'Elective Internship',
              title: 'Heart Transplant and Complex Cardiac Surgery',
              desc: 'Equipe Lev Cardiovascular - São Paulo/SP'
            },
            {
              type: 'Elective Internship',
              title: 'Aortic and Endovascular Surgery',
              desc: 'Hospital de Clínicas - Porto Alegre/RS'
            },
            {
              type: 'International Internship',
              title: 'Heart Transplant',
              desc: 'Coimbra University Hospital - Portugal'
            }
          ]
        }
      ]
    },

    {
      id: 'postgrad',
      label: 'Postgraduate Studies',
      items: [
        {
          title: "Master's Degree",
          subtitle: 'Healthcare Quality in Heart Transplantation',
          period: 'Ongoing',
          desc: "Ongoing Master's in the Surgery and Ophthalmology Postgraduate Program at the UFMG School of Medicine."
        }
      ]
    },

    {
      id: 'professional',
      label: 'Professional Experience',
      items: [
        {
          title: 'EBSERH',
          subtitle: 'Cardiovascular Surgeon at HC-UFMG',
          period: '2024 - Present',
          desc: 'Member of the Cardiovascular Surgery Team focusing on heart transplants, cardiac stimulation devices, lung transplants, and elective and emergency surgeries.',
          extras: [
            {
              type: 'Preceptorship',
              title: 'Medical Residency',
              desc: 'Engaged in teaching and supervision of Medical Residents.'
            },
            {
              type: 'Scientific Research',
              title: '',
              desc: 'Active member of the Cardiovascular Surgery Research Group, contributing to the institutional database.'
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
          title: 'Telehealth Center - HC-UFMG',
          subtitle: 'On-call Physician for Acute Myocardial Infarction Care',
          period: '2024 - Present',
          desc: 'Providing teleconsultation services for the Ministry of Health’s Myocardial Infarction Network.'
        },
        {
          title: 'Bedside Medicine',
          subtitle: 'Editor / Medical Writer',
          period: '2024 - Present',
          desc: 'Educational content platform specializing in Cardiac Intensive Care and Cardiovascular Surgery.'
        },
        {
          title: 'Instituto Orizonti',
          subtitle: 'Outpatient Cardiovascular Surgery Consultations',
          period: '2023 - Presentl',
          desc: ''
        },
        {
          title: 'Instituto Orizonti',
          subtitle: 'Coronary Care Unit (CCU) On-call Physician',
          period: '2023 - Present',
          desc: ''
        },
        {
          title: 'Evangélico Hospital - Specialty Center',
          subtitle: 'Outpatient Cardiovascular Surgery Consultations',
          period: '2024 - Present',
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
    title: 'Preceptorship',
    text: 'Clinical teaching for Medical Residents at Hospital das Clínicas (UFMG) and Hospital Felício Rocho.'
  },
  {
    icon: 'biotech',
    title: 'Scientific Research',
    text: 'Publications in high-impact scientific journals and presentations at National and International Congresses.'
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
    title: 'Specialist',
    text: 'Board-certified Cardiovascular Surgeon by the Brazilian Society of Cardiovascular Surgery (SBCCV).'
  },
  {
    icon: 'volunteer_activism',
    title: 'Volunteer Work',
    text: 'Humanitarian missions focused on Cardiovascular Surgery.'
  },
  {
    icon: 'cardiology',
    title: 'ACLS Instructor',
    text: 'Certified Advanced Cardiovascular Life Support Instructor by the American Heart Association.'
  },
  {
    icon: 'school',
    title: 'Academic Activity',
    text: 'Substitute Professor in the Department of Surgery at the UFMG School of Medicine.'
  },
 ];
}
