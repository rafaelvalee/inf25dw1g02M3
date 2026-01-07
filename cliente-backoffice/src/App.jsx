import { Admin, Resource, List, Datagrid, TextField, EmailField, NumberField, DateField, ReferenceField } from "react-admin";
import lb4ProviderModule from "ra-data-lb4";

const lb4Provider = lb4ProviderModule.default || lb4ProviderModule;
const dataProvider = lb4Provider("http://127.0.0.1:3000");


const AutorList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="nacionalidade" />
        </Datagrid>
    </List>
);

const LivroList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="titulo" />
            <NumberField source="ano" />
            <NumberField source="autorId" label="ID do Autor" /> 
        </Datagrid>
    </List>
);

const UtilizadorList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);

const EmprestimoList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField source="dataLevantamento" />
            <NumberField source="livroId" />
            <NumberField source="utilizadorId" />
        </Datagrid>
    </List>
);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="autors" list={AutorList} />
    <Resource name="livros" list={LivroList} />
    <Resource name="utilizadors" list={UtilizadorList} />
    <Resource name="emprestimos" list={EmprestimoList} />
  </Admin>
);

export default App;