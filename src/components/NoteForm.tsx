import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CreatedNote, Note, UpdatedNote } from "../interfaces";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface NoteFormProps {
  data: Note | CreatedNote;
  handleDelete?: () => void;
  handleClose?: boolean;
  handleSave: (note: UpdatedNote) => void;
}

interface IFormInput {
  title: string;
  description: string;
  color: string;
}

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required().max(600),
    color: yup.string().required(),
  })
  .required();

function NoteForm({
  data: { title, description, color },
  handleDelete,
  handleSave,
  handleClose,
}: NoteFormProps) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const newColor = watch("color");
  const { push } = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    handleSave(data);
  };
  return (
    <Card sx={{ width: "100%", backgroundColor: `${newColor || color}.main` }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            paddingX: 2,
            backgroundColor: `${newColor || color}.dark`,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {handleDelete && (
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="delete note"
              onClick={handleDelete}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          )}
          {handleClose && (
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="delete note"
              onClick={() => push("/")}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          )}
          <IconButton
            size="medium"
            edge="end"
            color="inherit"
            aria-label="edit note"
            type="submit"
          >
            <SendIcon fontSize="small" />
          </IconButton>
        </Box>
        <CardContent>
          <Controller
            name="title"
            control={control}
            defaultValue={title}
            render={({ field }) => (
              <TextField
                {...field}
                label={errors.title?.message ? errors.title.message : "Title"}
                error={errors.title?.message ? true : false}
                variant="filled"
                fullWidth={true}
                sx={{ marginBottom: "1rem" }}
                color="info"
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            defaultValue={description}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.description?.message ? true : false}
                label={
                  errors.description?.message
                    ? errors.description.message
                    : "Description"
                }
                multiline={true}
                variant="filled"
                fullWidth={true}
                minRows={4}
                maxRows={8}
                sx={{ marginBottom: "1rem" }}
                color="info"
              />
            )}
          />
          <Controller
            name="color"
            control={control}
            defaultValue={color}
            render={({ field }) => (
              <ToggleButtonGroup
                {...field}
                exclusive
                aria-label="text alignment"
              >
                <ToggleButton
                  value="one"
                  aria-label="first note color"
                  sx={{
                    backgroundColor: `one.main`,
                    "&:hover": { backgroundColor: "one.main" },
                    "&.Mui-selected": {
                      backgroundColor: "one.main",
                    },
                    "&.Mui-selected:hover": { backgroundColor: "one.main" },
                  }}
                ></ToggleButton>
                <ToggleButton
                  value="two"
                  aria-label="second note color"
                  sx={{
                    backgroundColor: `two.main`,
                    "&:hover": { backgroundColor: "two.main" },
                    "&.Mui-selected": {
                      backgroundColor: "two.main",
                    },
                    "&.Mui-selected:hover": { backgroundColor: "two.main" },
                  }}
                ></ToggleButton>
                <ToggleButton
                  value="three"
                  aria-label="third note color"
                  sx={{
                    backgroundColor: `three.main`,
                    "&:hover": { backgroundColor: "three.main" },
                    "&.Mui-selected": {
                      backgroundColor: "three.main",
                    },
                    "&.Mui-selected:hover": { backgroundColor: "three.main" },
                  }}
                ></ToggleButton>
                <ToggleButton
                  value="four"
                  aria-label="four note color"
                  sx={{
                    backgroundColor: `four.main`,
                    "&:hover": { backgroundColor: "four.main" },
                    "&.Mui-selected": {
                      backgroundColor: "four.main",
                    },
                    "&.Mui-selected:hover": { backgroundColor: "four.main" },
                  }}
                ></ToggleButton>
                <ToggleButton
                  value="five"
                  aria-label="five note color"
                  sx={{
                    backgroundColor: `five.main`,
                    "&:hover": { backgroundColor: "five.main" },
                    "&.Mui-selected": {
                      backgroundColor: "five.main",
                    },
                    "&.Mui-selected:hover": { backgroundColor: "five.main" },
                  }}
                ></ToggleButton>
              </ToggleButtonGroup>
            )}
          />
        </CardContent>
      </form>
    </Card>
  );
}

export default NoteForm;
