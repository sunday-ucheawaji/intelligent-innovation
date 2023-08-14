import { useMutation, useQuery } from "@tanstack/react-query";
import * as ProfileServices from "../services/profileService";

const useProfile = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["profile"],
    queryFn: ProfileServices.ProfileClient.get,
  });

  const mutation = useMutation({
    mutationFn: ProfileServices.UploadClient.post,
  });



  const handleUploadDocument = (data: ProfileServices.IUploadInput) => {
    mutation
      .mutateAsync(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { data, handleUploadDocument, mutation };
};

export default useProfile;
