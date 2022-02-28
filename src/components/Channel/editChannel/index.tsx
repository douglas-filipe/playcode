import { IconButton, Input } from "@mui/material";
import { AiFillCamera } from "react-icons/ai";
import { IoMdPlay } from "react-icons/io";
import { useChannel } from "../../../contexts/channel";
import { Container, InputBox, InputField } from "./style";

export const EditChannel = ({
  handleFile,
  onFileChange,
  setUpdate,
  inputEl,
}: any) => {
  const { channelData } = useChannel();
  return (
    <Container>
      <div className="maincontent">
        <span>Edite seu Canal</span>
        <div
          className="profile-picture"
          style={{ backgroundImage: `url(${channelData?.avatarUrl})` }}
        ></div>
        <form name="editChannel" onSubmit={handleFile}>
          <label htmlFor="contained-button-file">
            <Input
              onChange={onFileChange}
              id="contained-button-file"
              type="file"
              style={{ display: "none" }}
            />
            <IconButton
              className="camera"
              style={{ color: "var(--contrast)" }}
              component="span"
            >
              <AiFillCamera />
            </IconButton>
          </label>
          <InputBox>
            <div className="field">
              <IoMdPlay />
              <InputField
                type="text"
                autoComplete="off"
                name="name"
                ref={inputEl}
                onChange={(e) => setUpdate(e.target.value)}
                placeholder={channelData?.name}
              />
            </div>
            {<button type="submit">Editar canal</button>}
          </InputBox>
        </form>
      </div>
    </Container>
  );
};
