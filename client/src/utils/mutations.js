import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation upload($file: Upload!) {
    upload(file: $file) {
      filename
    }
  }
`;
