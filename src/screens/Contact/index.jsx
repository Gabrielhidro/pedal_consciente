import { useState } from "react";
import { ButtonsContainer, Container, Form } from "./styled";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
} from "@mui/material";

const denunciaTypes = [
  "Crime ambiental",
  "Tráfico de drogas",
  "Violência contra a mulher",
  "Maus tratos",
  "Outros",
];
const estados = [
  "São Paulo",
  "Rio de Janeiro",
  "Minas Gerais",
  "Paraná",
  "Santa Catarina",
];
const cidades = {
  "São Paulo": ["São Paulo", "Campinas", "Santos"],
  "Rio de Janeiro": ["Rio de Janeiro", "Niterói", "Nova Iguaçu"],
  "Minas Gerais": ["Belo Horizonte", "Uberlândia", "Contagem"],
  Paraná: ["Curitiba", "Londrina", "Maringá"],
  "Santa Catarina": ["Florianópolis", "Joinville", "Blumenau"],
};

export default function Contact() {
  const [form, setForm] = useState({
    denunciaType: "",
    estado: "",
    cidade: "",
    endereco: "",
    bairro: "",
    numero: "",
    denuncia: "",
    data: "",
    mesmaData: false,
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.checked,
      data: event.target.checked ? new Date().toISOString().split("T")[0] : "",
    });
  };

  const handleSave = () => {
    console.log(form);
  };

  const handleCancel = () => {
    setForm({
      denunciaType: "",
      estado: "",
      cidade: "",
      endereco: "",
      bairro: "",
      numero: "",
      denuncia: "",
      data: "",
      mesmaData: false,
    });
  };

  return (
    <Container>
      <Form>
        <h1 className="title">Denúncia</h1>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="denunciaType-label">Tipo de denúncia</InputLabel>
          <Select
            labelId="denunciaType-label"
            id="denunciaType"
            name="denunciaType"
            value={form.denunciaType}
            onChange={handleChange}
            label="Tipo de denuncia"
          >
            {denunciaTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="estado-label">Estado</InputLabel>
          <Select
            labelId="estado-label"
            id="estado"
            name="estado"
            value={form.estado}
            onChange={handleChange}
            label="Estado"
          >
            {estados.map((estado) => (
              <MenuItem key={estado} value={estado}>
                {estado}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="cidade-label">Cidade</InputLabel>
          <Select
            labelId="cidade-label"
            id="cidade"
            name="cidade"
            value={form.cidade}
            onChange={handleChange}
            label="Cidade"
            disabled={!form.estado}
          >
            {form.estado &&
              cidades[form.estado].map((cidade) => (
                <MenuItem key={cidade} value={cidade}>
                  {cidade}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <TextField
          name="endereco"
          label="Endereço"
          variant="outlined"
          value={form.endereco}
          onChange={handleChange}
          fullWidth
        />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              name="bairro"
              label="Bairro"
              variant="outlined"
              value={form.bairro}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="numero"
              label="Número"
              variant="outlined"
              value={form.numero}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>

        <TextField
          name="denuncia"
          label="Denuncia"
          variant="outlined"
          value={form.denuncia}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
        />
        <TextField
          id="data"
          label="Data"
          type="date"
          name="data"
          value={form.data}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          disabled={form.mesmaData}
          variant="outlined"
          fullWidth
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={form.mesmaData}
              onChange={handleCheckboxChange}
              name="mesmaData"
              color="primary"
            />
          }
          label="Mesma data do anúncio"
        />

        <ButtonsContainer>
          <Button variant="outlined" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button
            disabled={
              !form.denunciaType ||
              !form.estado ||
              !form.cidade ||
              !form.endereco ||
              !form.bairro ||
              !form.denuncia ||
              !form.data
            }
            variant="contained"
            color="primary"
            onClick={handleSave}
          >
            Salvar
          </Button>
        </ButtonsContainer>
      </Form>
    </Container>
  );
}
