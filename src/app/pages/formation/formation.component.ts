import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']  // corrigé ici
})
export class FormationComponent {
  formations = [
    { title: 'Marketing Digital', image: 'assets/images/marketing-digital.jpg', price: '400.00 DT', desc: 'Développez vos compétences et saisissez les opportunités du digital.', liked: false },
    { title: 'Communication Visuelle', image: 'assets/images/comm_vis.jpg', price: '700.00 DT', desc: 'Apprenez à maîtriser le design et la communication visuelle.', liked: false },
    { title: 'Fibre Optique', image: 'assets/images/fibre-optique.jpg', price: '600.00 DT', desc: 'Formation pratique sur les technologies de la fibre optique.', liked: false },
    { title: 'MS Project', image: 'assets/images/ms-project.jpg', price: '250.00 DT', desc: 'Maîtrisez la gestion de projet avec Microsoft Project.', liked: false },
    { title: 'Full Stack', image: 'assets/images/fullstack.jpg', price: '1050.00 DT', desc: 'Devenez développeur web complet avec notre formation full stack.', liked: false },
    { title: 'Solidworks', image: 'assets/images/solidworks.jpg', price: '300.00 DT', desc: 'Maîtrisez la conception 3D avec SolidWorks.', liked: false },
    { title: 'Power BI', image: 'assets/images/BI.jpg', price: '500.00 DT', desc: 'Maîtrisez l’analyse et la visualisation des données avec Power BI.', liked: false },
    { title: 'Product Owner', image: 'assets/images/product-owner.jpg', price: '500.00 DT', desc: 'Apprenez à gérer les priorités et maximiser la valeur produit en tant que Product Owner.', liked: false },
    { title: 'ISTQB', image: 'assets/images/ISTQB.png', price: '1500.00 DT', desc: 'Préparez-vous à la certification ISTQB et maîtrisez les fondamentaux du testing logiciel.', liked: false },
    { title: 'Scrum', image: 'assets/images/scrum.png', price: '1000.00 DT', desc: 'Comprenez et appliquez la méthodologie Scrum pour la gestion agile de projets.', liked: false },
    { title: 'SPRINGBOOT', image: 'assets/images/SPRINGBOOT.jpg', price: '800.00 DT', desc: 'Développez des applications web robustes avec le framework Spring Boot.', liked: false },
    { title: 'Wordpress', image: 'assets/images/Wordpress.png', price: '900.00 DT', desc: 'Créez et gérez des sites web facilement avec WordPress.', liked: false }
  ];

  toggleLike(f: any) {
    f.liked = !f.liked;
  }
}
