import { UserDTO } from "./user.types";

export interface AuthState {
    userData?: UserDTO | null;
    headers: {} | null;
    isLoading: Boolean;
    isSuccess: Boolean;
    isError: Boolean;
}

