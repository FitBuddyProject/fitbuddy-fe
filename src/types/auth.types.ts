import { UserDTO } from "./user.types";

export interface AuthState {
    userData?: UserDTO | null;
    isLoading: Boolean;
    isSuccess: Boolean;
    isError: Boolean;
}

