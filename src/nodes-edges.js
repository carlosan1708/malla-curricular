const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

export const initialNodes = [
    {
        id: "II-115",
        type: "input",
        style: { backgroundColor: 'green' },
        data: { "label": "Introducción al Cálculo o Matemática Básica (Colegiado)" },
        position
    },
    {
        id: "SC-115",
        type: "input",
        style: { backgroundColor: 'green' },
        data: { "label": "Programación Básica (Introducción a la Programación)" },
        position
    },
    {
        id: "SC-103",
        type: "input",
        style: { backgroundColor: 'green' },
        data: { "label": "Introducción a la Informática" },
        position
    },
    {
        id: "SC-315",
        type: "input",
        style: { backgroundColor: 'green' },
        data: { "label": "Matemáticas Discretas (Colegiado)" },
        position
    },
    {
        id: "II-215N",
        style: { backgroundColor: 'green' },
        data: { "label": "Cálculo Diferencial e Integral I (Colegiado)" },
        position
    },
    {
        id: "SC-202",
        style: { backgroundColor: 'green' },
        data: { "label": "Introducción a la Programación (Laboratorio)" },
        position
    },
    {
        id: "SC-203",
        style: { backgroundColor: 'green' },
        data: { "label": "Fundamentos de Sistemas Operativos (Laboratorio)" },
        position
    },
    {
        id: "SC-204",
        style: { backgroundColor: 'green' },
        data: { "label": "Principios de Redes y Comunicaciones (Laboratorio)" },
        position
    },
    {
        id: "SC-205",
        style: { backgroundColor: 'green' },
        data: { "label": "Electrónica Digital y Microprocesadores" },
        position
    },
    {
        id: "EM-220",
        style: { backgroundColor: 'green' },
        data: { "label": "Álgebra Lineal (Colegiado)" },
        position
    },
    {
        id: "SC-302",
        style: { backgroundColor: 'green' },
        data: { "label": "Documentación de Software" },
        position
    },
    {
        id: "SC-303",
        style: { backgroundColor: 'green' },
        data: { "label": "Programación Cliente/Servidor Concurrente (Laboratorio)" },
        position
    },
    {
        id: "SC-304",
        style: { backgroundColor: 'green' },
        data: { "label": "Estructura de Datos (Laboratorio)" },
        position
    },
    {
        id: "SC-305",
        style: { backgroundColor: 'green' },
        data: { "label": "Diseño de Interfaz Gráfica de Usuario (Laboratorio)" },
        position
    },
    {
        id: "AN-100",
        type: "input",
        style: { backgroundColor: 'green' },
        data: { "label": "Metodologías de Desarrollo de Proyectos" },
        position
    },
    {
        id: "SC-402",
        data: { "label": "Fundamentos de Encrutamiento y Computación (Laboratorio)" },
        position
    },
    {
        id: "SC-403",
        data: { "label": "Desarrollo de Aplicaciones Web y Patrones (Laboratorio)" },
        position
    },
    {
        id: "SC-404",
        data: { "label": "Fundamentos de Diseño de Base de Datos Relacionales (Laboratorio)" },
        position
    },
    {
        id: "SC-405",
        data: { "label": "Calidad del Software" },
        position
    },
    {
        id: "II-204",
        data: { "label": "Probabilidad y Estadística Descriptiva" },
        position
    },
    {
        id: "SC-502",
        data: { "label": "Ambiente Web Cliente/Servidor (Laboratorio)" },
        position
    },
    {
        id: "SC-503",
        data: { "label": "Administración de Base de Datos (Laboratorio)" },
        position
    },
    {
        id: "SC-504",
        data: { "label": "Lenguaje de Base de Datos (Laboratorio)" },
        position
    },
    {
        id: "SC-505",
        data: { "label": "Administración de Proyecto" },
        position
    },
    {
        id: "SC-601",
        data: { "label": "Programación Avanzada (Laboratorio)" },
        position
    },
    {
        id: "SC-602",
        data: { "label": "Data Warehouse y Base de Datos Multidimensionales (Laboratorio)" },
        position
    },
    {
        id: "SC-603",
        data: { "label": "Análisis y Modelado de Requerimientos" },
        position
    },
    {
        id: "SC-604",
        data: { "label": "Gobernanza y Gestión de Tecnologías de Información y Comunicaciones" },
        position
    },
    {
        id: "E1",
        type: "input",
        data: { "label": "Electiva 1" },
        position
    },
    {
        id: "SC-701",
        data: { "label": "Programación Avanzada en Web (Laboratorio)" },
        position
    },
    {
        id: "SC-702",
        data: { "label": "Diseño y Desarrollo de Sistemas" },
        position
    },
    {
        id: "SC-703",
        data: { "label": "Programación para Dispositivos Móviles (Laboratorio)" },
        position
    },
    {
        id: "SC-704",
        data: { "label": "Auditoría de Sistemas" },
        position
    },
    {
        id: "E2",
        type: "input",
        data: { "label": "Electiva 2" },
        position
    },
    {
        id: "SC-250",
        data: { "label": "Paradigmas de Programación" },
        position
    },
    {
        id: "SC-270",
        data: { "label": "Computación y Sociedad" },
        position
    },
    {
        id: "SC-803",
        data: { "label": "Implantación de Sistemas" },
        position
    },
    {
        id: "E3",
        type: "input",
        data: { "label": "Electiva 3" },
        position
    }
];

export const initialEdges = [
    { id: '1', source: 'II-115', target: 'II-215', type: edgeType, animated: true },
    { id: '2', source: 'SC-115', target: 'SC-202', type: edgeType, animated: true },
    { id: '3', source: 'SC-103', target: 'SC-203', type: edgeType, animated: true },
    { id: '4', source: 'SC-103', target: 'SC-204', type: edgeType, animated: true },
    { id: '5', source: 'SC-315', target: 'SC-205', type: edgeType, animated: true },
    { id: '6', source: 'II-115', target: 'EM-220', type: edgeType, animated: true },
    { id: '7', source: 'SC-202', target: 'SC-302', type: edgeType, animated: true },
    { id: '8', source: 'SC-202', target: 'SC-303', type: edgeType, animated: true },
    { id: '9', source: 'SC-202', target: 'SC-304', type: edgeType, animated: true },
    { id: '10', source: 'SC-202', target: 'SC-305', type: edgeType, animated: true },
    { id: '11', source: 'SC-204', target: 'SC-402', type: edgeType, animated: true },
    { id: '12', source: 'SC-303', target: 'SC-403', type: edgeType, animated: true },
    { id: '13', source: 'SC-304', target: 'SC-404', type: edgeType, animated: true },
    { id: '14', source: 'SC-302', target: 'SC-405', type: edgeType, animated: true },
    { id: '15', source: 'II-115', target: 'II-204', type: edgeType, animated: true },
    { id: '16', source: 'SC-305', target: 'SC-502', type: edgeType, animated: true },
    { id: '17', source: 'SC-403', target: 'SC-502', type: edgeType, animated: true },
    { id: '18', source: 'SC-404', target: 'SC-503', type: edgeType, animated: true },
    { id: '19', source: 'SC-404', target: 'SC-504', type: edgeType, animated: true },
    { id: '20', source: 'AN-100', target: 'SC-505', type: edgeType, animated: true },
    { id: '21', source: 'SC-405', target: 'SC-505', type: edgeType, animated: true },
    { id: '22', source: 'SC-403', target: 'SC-601', type: edgeType, animated: true },
    { id: '23', source: 'SC-504', target: 'SC-601', type: edgeType, animated: true },
    { id: '24', source: 'SC-404', target: 'SC-602', type: edgeType, animated: true },
    { id: '25', source: 'SC-505', target: 'SC-603', type: edgeType, animated: true },
    { id: '26', source: 'SC-505', target: 'SC-604', type: edgeType, animated: true },
    { id: '27', source: 'SC-601', target: 'SC-701', type: edgeType, animated: true },
    { id: '28', source: 'SC-601', target: 'SC-702', type: edgeType, animated: true },
    { id: '29', source: 'SC-603', target: 'SC-702', type: edgeType, animated: true },
    { id: '30', source: 'SC-303', target: 'SC-703', type: edgeType, animated: true },
    { id: '31', source: 'SC-604', target: 'SC-704', type: edgeType, animated: true },
    { id: '32', source: 'SC-701', target: 'SC-250', type: edgeType, animated: true },
    { id: '33', source: 'SC-704', target: 'SC-270', type: edgeType, animated: true },
    { id: '34', source: 'SC-702', target: 'SC-803', type: edgeType, animated: true },
];
