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
      description: 'A task management app with add, edit, and delete functionalities using Angular.',
      imgUrl: 'assets/to-do.png',
      liveUrl: 'https://your-deployed-todo-url.com',
      githubUrl: 'https://github.com/your-todo-github-repo'
    },
    {
      name: 'E-Commerce App',
      description: 'A fully functional e-commerce site built with Angular and Firebase.',
      imgUrl: 'assets/e-commerce.png',
      liveUrl: 'https://your-deployed-url.com',
      githubUrl: 'https://github.com/your-github-repo'
    },
    {
      name: 'Weather App',
      description: 'A weather forecast application using OpenWeather API and Angular.',
      imgUrl: 'assets/weather.png',
      liveUrl: 'https://your-deployed-url.com',
      githubUrl: 'https://github.com/your-github-repo'
    },
    {
      name: 'To-Do App',
      description: 'A task management app with add, edit, and delete functionalities using React.',
      imgUrl: 'assets/to-do.png',
      liveUrl: 'https://todo-mernstack-app.netlify.app/',
      githubUrl: 'https://github.com/sundara2803/todo-frontend'
    },
  ];
}
