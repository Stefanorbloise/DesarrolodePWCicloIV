import { gql } from '@apollo/client';

const GET_PROYECTOS = gql`
query Proyectos {
  proyectos {
    _id
    nombre
    objetivog
    objetivose
    presupuesto
    fechainicio
    fechafinal
    nombrelider
    estado
    fase
  }
}
`;

const GET_PROYECTO = gql`
query Proyectos($_id: ID!) {
  buscarProyecto(_id: $_id) {
    _id
    nombre
    objetivog
    objetivose
    presupuesto
    fechainicio
    fechafinal
    nombrelider
    estado
    fase
  }
}
`;

export {GET_PROYECTOS, GET_PROYECTO};
