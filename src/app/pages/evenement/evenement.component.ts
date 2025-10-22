import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Event {
  title: string;
  description: string;
  time: string;
  location: string;
  date: { day: string, month: string, year: string }; // New date structure
}

@Component({
  selector: 'app-evenement',
  standalone: true,
  imports: [FormsModule  ,RouterLink,CommonModule],
  templateUrl: './evenement.component.html',
  styleUrl: './evenement.component.css'
})
export class EvenementComponent {
events: Event[] = [
    // Top-Left Event (Graphic Design - 15 Jan)
    {
      title: 'Graphic Design',
      description: 'Venez assister à notre journée portes ouvertes qui aura lieu le 15 Janvier 2022 à partir de 10H. C\'est gratuit ! N\'hésitez pas à nous rendre visite. Soyez les bienvenus !',
      time: '10:00 - 16:00',
      location: 'Sousse, Tunisie',
      date: { day: '15', month: 'Jan', year: '2022' }
    },
    // Top-Right Event (PFE - 17 Jan)
    {
      title: 'PFE',
      description: 'Vous êtes étudiant et vous avez des difficultés à élaborer votre PFE ? Perdu et vous ne savez pas quelle méthodologie de recherche et de rédaction appliquer ? Best Challenge Center propose des sujets d\'encadrement...',
      time: '11:00 - 14:00 (21 janvier 2022)',
      location: 'Sousse, Tunisie',
      date: { day: '17', month: 'Jan', year: '2022' }
    },
    // Bottom-Left Event (Graphic Design - 20 Jan)
    {
      title: 'Workshop Scrum',
      description: 'Ce workshop vous permettra de :  Comprendre les responsabilités du Scrum Master  Connaître les activités du Scrum Master Être en mesure de planifier son action dans un projet agile en tant que Scrum Master  Comprendre',
      time: '14:00 - 18:30 (20 octobre 2022)',
      location: 'Sousse, Tunisie',
      date: { day: '20', month: 'Jan', year: '2022' }
    },
    // Bottom-Right Event (Marketing Digital - 25 Jan)
    {
      title: 'Marketing Digital',
      description: 'Développez vos compétences et saisissez les opportunités portées par le digital grâce aux ateliers qui vont avoir lieu pendant la journée porte ouverte Marketing Digital. Découvrir les différents critères pour mener votre projet au bon...',
      time: '09:00 - 14:00',
      location: 'Sousse, Tunisie',
      date: { day: '25', month: 'Jan', year: '2022' }
    }
  ];
}