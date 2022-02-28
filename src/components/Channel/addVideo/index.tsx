import { Container, FormInput } from "./style";
import { IconButton, Input } from "@mui/material";
import { MdOutlineVideoCall, MdAddPhotoAlternate } from "react-icons/md";

export const VideoUpload = ({
  handleSubmit,
  onFileChange,
  setUpdate,
  update,
  inputTitle,
  inputDescription,
  inputDuration,
}: any) => {
  return (
    <Container>
      <div className="main-vid-content">
        <h1>Envie seu vídeo</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <label className="thumbnail" htmlFor="icon-button-file">
            <Input
              onChange={onFileChange}
              style={{ display: "none" }}
              id="icon-button-file"
              type="file"
            />
            <IconButton aria-label="upload picture" component="span">
              <MdAddPhotoAlternate />
            </IconButton>
          </label>
          <div className="text-inputs">
            <p>Título</p>
            <FormInput
              ref={inputTitle}
              onChange={(e) => setUpdate({ ...update, name: e.target.value })}
            />
            <p>Descrição</p>

            <FormInput
              multiline
              minRows={4}
              ref={inputDescription}
              onChange={(e) =>
                setUpdate({ ...update, description: e.target.value })
              }
            />
            <p>Duração (em minutos)</p>

            <FormInput
              ref={inputDuration}
              onChange={(e) =>
                setUpdate({ ...update, duration: e.target.value })
              }
            />
          </div>

          <label className="video" htmlFor="icon-button-file">
            <Input
              onChange={onFileChange}
              style={{ display: "none" }}
              id="icon-button-file"
              type="file"
            />
            <IconButton aria-label="upload picture" component="span">
              <MdOutlineVideoCall />
            </IconButton>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </Container>
  );
};
