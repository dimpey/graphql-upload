import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "../utils/mutations";

export const Uploader = () => {
  const [upload, { data }] = useMutation(UPLOAD_FILE);

  const onChange = ({ target: { validity, files: [file] } }) => {
    if (!validity.valid) {
      alert("Invalid file");
      return;
    }
    upload({ variables: { file } });
  }

  return (
    <>
      <input type="file" required onChange={onChange} />
      {data && <img style={{maxWidth: "100%"}} src={data.upload.filename} alt="" />}
    </>
  );
};
