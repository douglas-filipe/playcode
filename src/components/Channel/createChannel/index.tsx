import { IconButton, Input } from "@mui/material";
import { AiFillCamera } from "react-icons/ai";
import ProfileImg from "../../../assets/img/user.png";
import { IoMdPlay } from "react-icons/io";
import { Container, InputBox, InputField } from "./style";

export const CreateChannel = ({
  channelData,
  handleFile,
  onFileChange,
  setUpdate,
  inputEl,
}: any) => {
  return (
    <Container>
      <div className="maincontent">
        <span>{!channelData ? "Criar" : "Dados do"} seu Canal</span>
        <div
          className="profile-picture"
          style={{
            backgroundImage: !channelData
              ? `url(${ProfileImg})`
              : `url(${channelData.avatarUrl})`,
          }}
        ></div>
        <form onSubmit={handleFile}>
          <label
            style={{ display: !channelData ? "initial" : "none" }}
            htmlFor="contained-button-file"
          >
            <Input
              onChange={onFileChange}
              id="contained-button-file"
              required
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
                ref={inputEl}
                name="name"
                onChange={(e) => setUpdate(e.target.value)}
                placeholder={!channelData ? "Nome do canal" : channelData.name}
              />
            </div>
            <button
              type="submit"
              style={{ display: !channelData ? "initial" : "none" }}
            >
              Criar canal
            </button>
          </InputBox>
        </form>
      </div>
    </Container>
  );
};
