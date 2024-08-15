const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

export const initialNodes = [
        {
          id: "1",
          type: "input",
          data: { "label": "Introducción al Cálculo o Matemática Básica (Colegiado)" },
          position
        },
        {
          id: "2",
          type: "input",
          data: { "label": "Programación Básica (Introducción a la Programación)" },
          position
        },
        {
          id: "3",
          type: "input",
          data: { "label": "Introducción a la Informática" },
          position
        },
        {
          id: "4",
          type: "input",
          data: { "label": "Matemáticas Discretas (Colegiado)" },
          position
        },
        {
          id: "5",
          type: "input",
          data: { "label": "Cálculo Diferencial e Integral I (Colegiado)" },
          position
        },
        {
          id: "6",
          type: "input",
          data: { "label": "Introducción a la Programación (Laboratorio)" },
          position
        },
        {
          id: "7",
          type: "input",
          data: { "label": "Fundamentos de Sistemas Operativos (Laboratorio)" },
          position
        },
        {
          id: "8",
          type: "input",
          data: { "label": "Principios de Redes y Comunicaciones (Laboratorio)" },
          position
        },
        {
          id: "9",
          type: "input",
          data: { "label": "Electrónica Digital y Microprocesadores" },
          position
        },
        {
          id: "10",
          type: "input",
          data: { "label": "Álgebra Lineal (Colegiado)" },
          position
        },
        {
          id: "11",
          type: "input",
          data: { "label": "Documentación de Software" },
          position
        },
        {
          id: "12",
          type: "input",
          data: { "label": "Programación Cliente/Servidor Concurrente (Laboratorio)" },
          position
        },
        {
          id: "13",
          type: "input",
          data: { "label": "Estructura de Datos (Laboratorio)" },
          position
        },
        {
          id: "14",
          type: "input",
          data: { "label": "Diseño de Interfaz Gráfica de Usuario (Laboratorio)" },
          position
        },
        {
          id: "15",
          type: "input",
          data: { "label": "Metodologías de Desarrollo de Proyectos" },
          position
        },
        {
          id: "16",
          type: "input",
          data: { "label": "Fundamentos de Encrutamiento y Computación (Laboratorio)" },
          position
        },
        {
          id: "17",
          type: "input",
          data: { "label": "Desarrollo de Aplicaciones Web y Patrones (Laboratorio)" },
          position
        },
        {
          id: "18",
          type: "input",
          data: { "label": "Fundamentos de Diseño de Base de Datos Relacionales (Laboratorio)" },
          position
        },
        {
          id: "19",
          type: "input",
          data: { "label": "Calidad del Software" },
          position
        },
        {
          id: "20",
          type: "input",
          data: { "label": "Probabilidad y Estadística Descriptiva" },
          position
        },
        {
          id: "21",
          type: "input",
          data: { "label": "Ambiente Web Cliente/Servidor (Laboratorio)" },
          position
        },
        {
          id: "22",
          type: "input",
          data: { "label": "Administración de Base de Datos (Laboratorio)" },
          position
        },
        {
          id: "23",
          type: "input",
          data: { "label": "Lenguaje de Base de Datos (Laboratorio)" },
          position
        },
        {
          id: "24",
          type: "input",
          data: { "label": "Administración de Proyecto" },
          position
        },
        {
          id: "25",
          type: "input",
          data: { "label": "Programación Avanzada (Laboratorio)" },
          position
        },
        {
          id: "26",
          type: "input",
          data: { "label": "Data Warehouse y Base de Datos Multidimensionales (Laboratorio)" },
          position
        },
        {
          id: "27",
          type: "input",
          data: { "label": "Análisis y Modelado de Requerimientos" },
          position
        },
        {
          id: "28",
          type: "input",
          data: { "label": "Gobernanza y Gestión de Tecnologías de Información y Comunicaciones" },
          position
        },
        {
          id: "29",
          type: "input",
          data: { "label": "Electiva 1" },
          position
        },
        {
          id: "30",
          type: "input",
          data: { "label": "Programación Avanzada en Web (Laboratorio)" },
          position
        },
        {
          id: "31",
          type: "input",
          data: { "label": "Diseño y Desarrollo de Sistemas" },
          position
        },
        {
          id: "32",
          type: "input",
          data: { "label": "Programación para Dispositivos Móviles (Laboratorio)" },
          position
        },
        {
          id: "33",
          type: "input",
          data: { "label": "Auditoría de Sistemas" },
          position
        },
        {
          id: "34",
          type: "input",
          data: { "label": "Electiva 2" },
          position
        },
        {
          id: "35",
          type: "input",
          data: { "label": "Paradigmas de Programación" },
          position
        },
        {
          id: "36",
          type: "input",
          data: { "label": "Computación y Sociedad" },
          position
        },
        {
          id: "37",
          type: "input",
          data: { "label": "Implantación de Sistemas" },
          position
        },
        {
          id: "38",
          type: "input",
          data: { "label": "Electiva 3" },
          position
        }
];

export const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: edgeType, animated: true },
  { id: 'e1-3', source: '1', target: '3', type: edgeType, animated: true },
];
