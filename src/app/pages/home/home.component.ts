import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit,Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Course } from './course.model';
import { CourseService } from '../../service/course.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';


interface Slide {
  url: string;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule  ,RouterLink,CommonModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

 slides: Slide[] = [
    {
      url: 'assets/images/1.jpg',
      title: '        Best Challenge Center',
      description: ' LEADER DANS SON DOMAINE'
    },
    {
      url: 'assets/images/2.jpg',
      title: 'Centre de formation depuis 2019.',
      description: ' Centre de Formation des experts et des consultants à votre disposition pour vous orienter vers le bon chemin'
     
    },
    {
      url: 'assets/images/3.jpg',
      title: 'À propos de nous',
      description: 'Cabinet de formation professionnelle,de consulting, et de développement informatique ,Etudes / Conseil / Formation / Audit'
    }
  ];

  currentSlide = 0;
  intervalTime = 3000;
  private intervalId: any;

  courses: Course[] = [];
  showModal = false;
  videoUrl?: SafeResourceUrl;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private courseService: CourseService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('load', () => this.startAutoSlide());
    }
    this.courses = this.courseService.getCourses();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => this.nextSlide(), this.intervalTime);
  }

  stopAutoSlide() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  // 🎬 Ouvre la modale avec la vidéo
  openModal(url: string) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${url}?autoplay=1`);
    this.showModal = true;
  }

  // ❌ Ferme la modale et stoppe la vidéo
  closeModal() {
    this.showModal = false;
    this.videoUrl = undefined;
  }

   events = [
    {
      day: '15',
      month: 'Jan',
      year: '2022',
      title: 'Graphic Design',
      description:
        'Venez assister à notre journée portes ouvertes qui aura lieu le 15 Janvier 2022 à partir de 10H. C’est gratuit ! N’hésitez pas à nous rendre visite. Soyez les bienvenus !',
      time: '10:00 - 16:00',
      location: 'Sousse, Tunisie'
    },
    {
      day: '17',
      month: 'Jan',
      year: '2022',
      title: 'PFE',
      description:
        'Vous êtes étudiant et vous avez des difficultés à élaborer votre PFE ? Best Challenge Center propose des sujets d’encadrement et des ateliers pratiques pour vous guider.',
      time: '11:00 - 14:00 (21 janvier 2022)',
      location: 'Sousse, Tunisie'
    },
    {
      day: '20',
      month: 'Jan',
      year: '2022',
      title: 'Web Development',
      description:
        'Découvrez les fondamentaux du développement web moderne : HTML, CSS, JavaScript et frameworks récents.',
      time: '09:00 - 15:00',
      location: 'Sousse, Tunisie'
    },
    {
      day: '25',
      month: 'Jan',
      year: '2022',
      title: 'Atelier Data Science',
      description:
        'Initiez-vous à la Data Science avec Python et découvrez comment analyser et visualiser vos données.',
      time: '13:00 - 17:00',
      location: 'Sousse, Tunisie'
    }
  ];


  
}