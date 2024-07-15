export interface UserData {
  userId?: string;
  password?: string;
  userName?: string;
  profileImg?: string | null;
  gitUrl?: string | undefined;
  introduce?: string | undefined;
}
export interface NewUserData {
  newUserName?: string;
  NewProfileImg?: string | null;
  newGitUrl?: string | undefined;
  newIntroduce?: string | undefined;
}
