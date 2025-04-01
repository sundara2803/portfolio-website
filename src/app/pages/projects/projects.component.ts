import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'To-Do App',
      description: 'A task management app with add, edit, and delete functionalities using Angular and Local storage.',
      imgUrl: 'assets/to-do.png',
      liveUrl: 'https://sundara2803.github.io/todo/',
      githubUrl: 'https://github.com/sundara2803/todo'
    },
    {
      name: 'Weather App',
      description: 'A weather forecast application using OpenWeather API and Angular.',
      imgUrl: 'assets/weather.png',
      liveUrl: 'https://app-weatherly.netlify.app/',
      githubUrl: 'https://github.com/sundara2803/weather-app'
    },
    {
      name: 'Financial Portfolio',
      description: 'A Financial Portfolio  built with Angular, featuring interactive charts to track investments and visualize portfolio performance.',
      imgUrl: 'assets/finance.png',
      liveUrl: 'https://financial-portfolio.netlify.app/',
      githubUrl: 'https://github.com/sundara2803/financial-portfolio'
    },
    // {
    //   name: 'To-Do App',
    //   description: 'A task management app with add, edit, and delete functionalities using React.',
    //   imgUrl: 'assets/to-do.png',
    //   liveUrl: 'https://todo-mernstack-app.netlify.app/',
    //   githubUrl: 'https://github.com/sundara2803/todo-frontend'
    // },
    // {
    //   name: 'E-Commerce App',
    //   description: 'A fully functional e-commerce site built with Angular and Firebase.',
    //   imgUrl: 'assets/e-commerce.png',
    //   liveUrl: 'https://your-deployed-url.com',
    //   githubUrl: 'https://github.com/your-github-repo'
    // },
  ];
}
