import { Injectable } from '@angular/core';
import { Course } from '../pages/home/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
 constructor() { }

  getCourses(): Course[] {
    return [
      {
        title: 'Fibre Optique',
        description: 'سجل الآن في وحدة من أكثر الإختصاصات المطلوبة في الخارج',
        image: 'assets/images/fibre-optique.jpg',
        price: 600,
        students: 0,
        reviews: 0
      },
      {
        title: 'MS Project',
        description: 'Savoir les fondamentaux de gestion de projet.',
        image: 'assets/images/ms-project.jpg',
        price: 250,
        students: 0,
        reviews: 0
      },
      {
        title: 'Product Owner',
        description: 'Best challenge center vous offre l’opportunité de réussir votre projet.',
        image: 'assets/images/product-owner.jpg',
        price: 1000,
        students: 0,
        reviews: 0
      },
      {
        title: 'Marketing Digital',
        description: 'Développez vos compétences et saisissez les opportunités.',
        image: 'assets/images/marketing-digital.jpg',
        price: 400,
        students: 0,
        reviews: 0
      }
    ];
  }
}