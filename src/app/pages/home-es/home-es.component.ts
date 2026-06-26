import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-es',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-es.component.html',
  styleUrl: './home-es.component.scss'
})
export class HomeEsComponent implements AfterViewInit {

  menuOpen = false;
  selectedArea: any;

  // Datos de las áreas de especialidad
  areasAtuacao = [
    {
      title: 'Cirugía Cardiovascular',
      img: 'images/ccv.jpg',
      desc: 'Tratamiento quirúrgico de enfermedades del corazón y grandes vasos, abarcando procedimientos convencionales y técnicas mínimamente invasivas.'
    },
    {
      title: 'Plastia o Reemplazo Valvular',
      img: 'images/valva3.png',
      desc: 'Cirugías para la reparación (plastia) o sustitución de válvulas cardíacas afectadas por estenosis o insuficiencia.'
    },
    {
      title: 'Revascularización Miocárdica',
      img: 'images/revasc.jpg',
      desc: 'Procedimiento indicado para restaurar el flujo sanguíneo al corazón en pacientes con obstrucciones en las arterias coronarias (bypass).'
    },
    {
      title: 'Trasplante Cardíaco',
      img: 'images/transplante1.png',
      desc: 'Tratamiento definitivo para la insuficiencia cardíaca avanzada, realizado por un equipo especializado y capacitado.'
    },
    {
      title: 'Aneurismas de Aorta',
      img: 'images/aneurisma1.jpg',
      desc: 'Corrección quirúrgica o endovascular de dilataciones en la arteria aorta, con el fin de prevenir rupturas y complicaciones graves.'
    },
    {
      title: 'Marcapasos',
      img: 'images/marcapasso2.png',
      desc: 'Implante de dispositivos electrónicos para la corrección de trastornos del ritmo cardíaco (bradicardias).'
    },
    {
      title: 'ECMO',
      img: 'images/ecmo1.png',
      desc: 'Soporte de vida extracorpóreo utilizado en casos graves de falla cardíaca o pulmonar como puente para la recuperación o el trasplante.'
    },
    {
      title: 'Consultas Presenciales y Online',
      img: 'images/consulta1.jpeg',
      desc: 'Atención clínica humanizada para diagnóstico, segunda opinión médica y seguimiento posoperatorio.'
    }
  ]

  ngAfterViewInit(): void {
    // Fuerza a Instagram a procesar los embeds
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }

  // Lógica del Menú Hamburguesa

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }

  // Lógica del Modal

  openModal(area: any) {
    this.selectedArea = area;
    this.updateScroll();
  }

  closeModal() {
    this.selectedArea = null;
    this.updateScroll();
  }

  // Lógica para bloquear el scroll
  private updateScroll() {
    if (this.menuOpen || this.selectedArea) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  timeline: any[] = [
    {
      id: 'graduacao',
      label: 'Graduación',
      items: [
        {
          title: 'Medicina',
          subtitle: 'Facultad de Medicina - UFMG',
          period: '2013 - 2018',
          desc: 'Formación médica con una sólida base clínica y quirúrgica.',
          extras: [
            {
              type: 'Iniciación Científica',
              title: 'Programa de Tamizaje de Valvulopatía Reumática (PROVAR)',
              desc: 'Bajo la orientación de los Profesores Dr. Bruno Ramos Nascimento y Dra. Maria do Carmo Nunes, participó en el tamizaje ecocardiográfico de niños en escuelas públicas de Belo Horizonte/MG. Colaboró en la redacción y publicación de artículos científicos, y participó en congresos nacionales e internacionales.'
            },
            {
              type: 'Ayudantía / Monitoría',
              title: '',
              desc: 'Monitora de la cátedra de Anatomía en la Facultad de Medicina de la UFMG, durante 5 años.'
            },
            {
              type: 'Extensión Académica',
              title: '',
              desc: 'Participó en las Sociedades/Ligas Académicas de Cardiología, Clínica Médica, Heridas y Cirugía.'
            },
            {
              type: 'Intercambio',
              title: '',
              desc: 'Práctica internacional en Cirugía Cardiovascular en el Norrlands Universitetssjukhus - Umeå - Suecia.'
            }
          ]
        }
      ]
    },
    {
      id: 'residencia',
      label: 'Residencia Médica',
      items: [
        {
          title: 'Residencia Médica',
          subtitle: 'Cirugía Cardiovascular - HC-UFMG',
          period: '2019 - 2024',
          desc: 'Entrenamiento intensivo en el Servicio de Cirugía Cardiovascular.',
          extras: [
            {
              type: 'Rotación Electiva',
              title: 'Cirugía Cardiovascular Pediátrica',
              desc: 'Hospital da Beneficência Portuguesa - São Paulo/SP'
            },
            {
              type: 'Rotación Electiva',
              title: 'Cirugía Cardiovascular Pediátrica',
              desc: 'Hospital da Criança - São José do Rio Preto/SP'
            },
            {
              type: 'Rotación Electiva',
              title: 'Trasplante Cardíaco y Cirugías Cardíacas Complejas',
              desc: 'Equipo Lev Cardiovascular - São Paulo/SP'
            },
            {
              type: 'Rotación Electiva',
              title: 'Cirugía de Aorta y Endovascular',
              desc: 'Hospital de Clínicas - Porto Alegre/RS'
            },
            {
              type: 'Rotación Internacional',
              title: 'Trasplante Cardíaco',
              desc: 'Hospital Universitário de Coimbra - Portugal'
            }
          ]
        }
      ]
    },
    {
      id: 'pos',
      label: 'Posgrado',
      items: [
        {
          title: 'Maestría',
          subtitle: 'Análisis de Mortalidad según la Fase de Cuidado en Trasplante Cardíaco',
          period: 'Concluido',
          desc: 'Título de Magíster en Cirugía y Oftalmología por la Facultad de Medicina de la UFMG, obtenido en mayo de 2026.'
        },
        {
          title: 'Doctorado',
          subtitle: 'Calidad Asistencial en Trasplante Cardíaco',
          period: 'Actual',
          desc: 'Doctorado en curso en el Programa de Posgrado en Cirugía y Oftalmología de la Facultad de Medicina de la UFMG.'
        }
      ]
    },
    {
      id: 'profissional',
      label: 'Experiencia Profesional',
      items: [
        {
          title: 'EBSERH',
          subtitle: 'Cirujana Cardiovascular en el HC-UFMG',
          period: '2024 - Actual',
          desc: 'Miembro del Equipo de Cirugía Cardiovascular desempeñando funciones en trasplantes cardíacos, dispositivos de estimulación cardíaca, trasplante pulmonar, cirugías programadas y de urgencia.',
          extras: [
            {
              type: 'Preceptoría',
              title: 'Residencia Médica',
              desc: 'Actuación en la docencia de Médicos Residentes.'
            },
            {
              type: 'Investigación Científica',
              title: '',
              desc: 'Participa en el grupo de Investigación en Cirugía Cardiovascular, colaborando con la base de datos del Servicio.'
            }
          ]
        },
        /**
         * {
          title: 'Facultad de Medicina - UFMG',
          subtitle: 'Profesor Sustituto - Departamento de Cirugía',
          period: '2024 - Actual',
          desc: 'Profesor sustituto de las asignaturas XXXX'
        },
         */
        {
          title: 'Centro de Telemedicina del Hospital das Clínicas - UFMG',
          subtitle: 'Médico de Guardia en la Línea de Cuidado del Infarto Agudo de Miocardio',
          period: '2024 - Actual',
          desc: 'Prestación de servicios de teleconsultoría para la Red de Infarto del Ministerio de Salud.'
        },
        {
          title: 'Bedside Medicine',
          subtitle: 'Redactora',
          period: '2024 - Actual',
          desc: 'Sitio web de contenidos educativos en las áreas de Cuidados Intensivos Cardiológicos y Cirugía Cardiovascular.'
        },
        {
          title: 'Instituto Orizonti',
          subtitle: 'Consultas Ambulatorias en Cirugía Cardiovascular',
          period: '2023 - Actual',
          desc: ''
        },
        {
          title: 'Instituto Orizonti',
          subtitle: 'Médico de Guardia en la Unidad Coronaria',
          period: '2023 - Actual',
          desc: ''
        },
        {
          title: 'Hospital Evangélico - Centro de Especialidades',
          subtitle: 'Consultas Ambulatoria en Cirugía Cardiovascular',
          period: '2024 - Actual',
          desc: ''
        }
      ]
    }
  ];

  selectedTimeline: any = null;
  selectTimeline(group: any) {
    if (this.selectedTimeline === group) {
      this.selectedTimeline = null; // Cierra si hace clic en el que ya está abierto
    } else {
      this.selectedTimeline = group; // Abre el nuevo
    }
  }

  highlights = [
    {
      icon: 'school',
      title: 'Preceptoría',
      text: 'Docencia en la formación de Médicos Residentes en el Hospital das Clínicas (UFMG) y Hospital Felício Rocho.'
    },
    {
      icon: 'biotech',
      title: 'Investigación Científica',
      text: 'Publicaciones en revistas científicas de alto impacto, presentaciones en congresos nacionales e internacionales.'
    },
    // se pueden añadir más elementos
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
      text: 'Título de Especialista en Cirugía Cardiovascular certificado por la Sociedad Brasileña de Cirugía Cardiovascular.'
    },
    {
      icon: 'volunteer_activism',
      title: 'Trabajo Voluntario',
      text: 'Misiones humanitarias en Cirugía Cardiovascular.'
    },
    {
      icon: 'cardiology',
      title: 'ACLS',
      text: 'Instructora certificada en Soporte Vital Cardiovascular Avanzado por la American Heart Association.'
    },
    {
      icon: 'school',
      title: 'Actividad Académica',
      text: 'Profesora Sustituta del Departamento de Cirugía de la Facultad de Medicina - UFMG.'
    },
  ];
}
