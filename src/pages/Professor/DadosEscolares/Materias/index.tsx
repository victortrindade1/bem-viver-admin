import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import type { MRT_ColumnDef } from "material-react-table";
import { FaTrashAlt } from "react-icons/fa";

import { useAppDispatch, useAppSelector } from "hooks";
import {
  storeMateria,
  selectDadosEscolares,
} from "store/slices/dadosEscolares";
import {
  updateProfessor,
  selectProfessor,
  deleteProfessorMateria,
} from "store/slices/professor";

import TextForm from "components/TextForm";
import MinimalTable from "components/MinimalTable";

import { Container, ComboboxContainer, MateriasTableContainer } from "./styles";

interface IDataTable {
  id: number;
  materia: string;
}

const Materias: React.FC = () => {
  const dispatch = useAppDispatch();

  const dadosEscolaresState = useAppSelector(selectDadosEscolares);
  const materiasState = dadosEscolaresState?.dados?.materias;
  const materias = materiasState.map((item: any) => item.materia);

  const professorState = useAppSelector(selectProfessor);
  const professor = professorState.professorDados;

  const validationSchema = Yup.object().shape({
    materia: Yup.string(),
  });

  const defaultValues: any = useMemo(() => ({ materia: "" }), []);

  const columns = useMemo<MRT_ColumnDef<IDataTable>[]>(
    () => [
      {
        accessorKey: "materia",
        header: "Matéria",
        minSize: 400,
      },
    ],
    []
  );

  const {
    control,
    formState: { errors },
    register,
    setValue,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmitMateria = useCallback(
    async (e: any) => {
      e.preventDefault();

      // Não atualiza se não mudar valor
      if (e.target.value === "") return;

      // Se matéria não existe, salva no banco "materias" nova matéria
      let materia;
      if (!materias.includes(e.target.value)) {
        // Matéria é nova matéria
        const response: any = await dispatch(
          storeMateria({
            materia: e.target.value,
          })
        );
        materia = response.payload.data;
      } else {
        // Matéria já existe. Acha seus dados
        materia = materiasState?.find(
          (item: any) => item.materia === e.target.value
        );
      }

      setValue("materia", "");

      // Salva relação professores_materias
      const dataSubmit: any = {
        id: professor?.id,
        materias: [materia.id],
      };
      await dispatch(updateProfessor(dataSubmit));
    },
    [dispatch, materias, materiasState, professor, setValue]
  );

  const handleDeleteMateria = async (prop: any) => {
    await dispatch(
      deleteProfessorMateria({
        professorMateriaId: prop.professores_materias.id,
        professorId: professor?.id,
      })
    );
  };
  return (
    <Container>
      <ComboboxContainer>
        <TextForm
          register={register}
          name="materia"
          label="Adicionar Matéria"
          onEnter={(e: any) => {
            e.target.blur();
          }}
          onBlur={onSubmitMateria}
          control={control}
          errors={errors}
          options={materias}
          width="100%"
          maxWidth="470px"
        />
      </ComboboxContainer>

      <MateriasTableContainer>
        <MinimalTable
          onClick={handleDeleteMateria}
          columns={columns}
          data={professor?.materias_professor}
          ActionIcon={<FaTrashAlt size={15} />}
          actionIconColor="#00000050"
          tooltipLabel="Excluir"
        />
      </MateriasTableContainer>
    </Container>
  );
};

export default Materias;
