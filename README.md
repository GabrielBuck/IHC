# BookLog Mobile UX Prototype

**React Native · TypeScript · Expo · Human-Computer Interaction · accessibility**

Mobile product prototype for a reading ecosystem where users can organize books, track reading progress, publish reviews, discover recommendations and interact with reading groups.

This repository focuses on **product experience and interface design**. It was developed as an academic HCI project, using local mocked data to validate navigation, information architecture, accessibility decisions and end-to-end user flows without introducing backend complexity into the evaluation.

## Product scope

The prototype includes:

- onboarding, login and registration flows;
- home/feed experience;
- book discovery and search;
- book-detail views;
- personal library with reading states;
- reading-progress tracking;
- ratings and review flows;
- reader profiles and activity summaries;
- reading groups;
- settings and accessibility-oriented controls.

## Product and UX focus

The project demonstrates decisions around:

- information architecture;
- mobile navigation and task flows;
- reusable UI components;
- visual hierarchy and design consistency;
- accessible labels and roles;
- touch-target usability;
- communicating state through text in addition to color;
- personas, scenarios, requirements and usability documentation.

## Stack

- React Native
- Expo
- TypeScript
- reusable components
- local mocked data
- accessibility APIs

## Repository structure

```text
src/
├── components/      # Reusable interface components
├── data/            # Mocked product data
├── navigation/      # Navigation flow
├── screens/         # Main product screens
├── styles/          # Typography, spacing and visual system
├── types/           # TypeScript domain types
└── utils/           # Accessibility and shared utilities

docs/                # Requirements, personas, architecture and testing
assets/              # Visual assets
```

## Running

```bash
npm install
npm run start
```

The Expo development server can be used with a device, emulator or web browser.

## Documentation

- [Final report](docs/RELATORIO.md)
- [Requirements](docs/REQUISITOS.md)
- [Personas](docs/PERSONAS.md)
- [Scenarios and tasks](docs/CENARIOS_E_TAREFAS.md)
- [Architecture](docs/ARQUITETURA.md)
- [Accessibility](docs/ACESSIBILIDADE.md)
- [Tests](docs/TESTES.md)

## Academic context

Developed at **Universidade Presbiteriana Mackenzie** as a Human-Computer Interaction project. The repository represents the **mobile UX/prototyping layer** of the broader BookLog concept and is intentionally scoped to front-end interaction rather than production backend integration.

The value of the project is in demonstrating the ability to translate user needs and product requirements into a structured, navigable and accessibility-aware mobile experience.
