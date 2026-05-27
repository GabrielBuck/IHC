import type { Group } from "../types/Group";

export const groups: Group[] = [
  {
    id: "group-1",
    name: "Clube de Distopias",
    currentBook: "O Conto da Aia",
    participants: 128,
    description: "Discussões semanais sobre distopias clássicas e modernas."
  },
  {
    id: "group-2",
    name: "Leituras de Fantasia",
    currentBook: "O Hobbit",
    participants: 96,
    description: "Grupo para acompanhar sagas, universos fantásticos e leituras conjuntas."
  },
  {
    id: "group-3",
    name: "Clássicos Brasileiros",
    currentBook: "Dom Casmurro",
    participants: 74,
    description: "Leitura guiada de obras brasileiras com comentários por capítulo."
  },
  {
    id: "group-4",
    name: "Mulheres na Literatura",
    currentBook: "Frankenstein",
    participants: 112,
    description: "Obras escritas por mulheres e debates sobre autoria, contexto e recepção."
  }
];
